"""Apply the redesign to every page.

Reads each page as it exists on the live `main` branch, swaps in the new
stylesheet, header and footer, replaces page content where a file exists in
redesign/pages/<page>.main.html, and rewrites intros and copy elsewhere while
keeping every form, ID and script the page's tools rely on.

Run from the repo root:  python3 redesign/apply.py
"""
import os, re, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES_DIR = os.path.join(ROOT, 'redesign', 'pages')
MAP = open(os.path.join(PAGES_DIR, '_map.svg')).read()

PAGES = ['index', 'about', 'buy', 'sell', 'property-search', 'market-updates',
         'market-pulse', 'local-data', 'contact', 'privacy-policy', 'terms-of-use']

HEAD_STYLES = '''<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=Instrument+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="css/site.css">'''

HEADER = '''<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="brand"><span class="brand-name">Nathan Irving</span><span class="brand-tag">Novato real estate</span></a>
    <button class="nav-toggle" data-nav-toggle aria-label="Menu"><span></span><span></span><span></span></button>
    <nav class="main-nav" data-main-nav aria-label="Main">
      <a href="buy.html">Buy</a>
      <a href="sell.html">Sell</a>
      <a href="local-data.html">Neighborhoods</a>
      <a href="market-pulse.html">Market</a>
      <a href="market-updates.html">Notes</a>
      <a href="about.html">About</a>
      <a href="tel:+14152094864" class="nav-call">(415) 209-4864</a>
    </nav>
  </div>
</header>'''

FOOTER = '''<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="brand-name">Nathan Irving</span>
        <p>REALTOR® with Coldwell Banker Realty, Greenbrae office. Helping buyers and sellers in Novato and across Marin.</p>
        <div class="cb-badge"><img src="images/cb-logo.png" alt="Coldwell Banker Realty"></div>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <a href="buy.html">Buy a home</a>
        <a href="sell.html">Sell your home</a>
        <a href="property-search.html">Property search</a>
        <a href="local-data.html">Neighborhood guides</a>
        <a href="market-pulse.html">Market Pulse</a>
        <a href="market-updates.html">Market notes</a>
        <a href="about.html">About me</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="tel:+14152094864">(415) 209-4864</a>
        <a href="mailto:nathan.irving@cbrealty.com">nathan.irving@cbrealty.com</a>
        <a href="contact.html">Send a message</a>
        <a href="https://www.linkedin.com/in/nathan-irving-realestate" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://www.instagram.com/nathan.irvingrealestate" target="_blank" rel="noopener">Instagram</a>
        <a href="https://nextdoor.com/page/nathan-irving-realtor-novato-ca" target="_blank" rel="noopener">Nextdoor</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-disclaimer">Coldwell Banker Realty fully supports the principles of the Fair Housing Act and the Equal Opportunity Act. Each Coldwell Banker&reg; franchise office is independently owned and operated. Information deemed reliable but not guaranteed and should be independently verified. Not intended as a solicitation if your property is currently listed with another broker.</p>
      <div class="footer-bottom-row">
        <span>&copy; <span data-current-year>2026</span> Nathan Irving, REALTOR® &nbsp; Coldwell Banker Realty, 350 Bon Air Center, Suite 100, Greenbrae, CA 94904 &nbsp; Equal Housing Opportunity</span>
        <span><a href="privacy-policy.html">Privacy Policy</a> &nbsp; <a href="terms-of-use.html">Terms of Use</a> &nbsp; CA DRE# 02414117</span>
      </div>
    </div>
  </div>
</footer>'''

TITLES = {
    'index': ('Nathan Irving | Novato Real Estate, Coldwell Banker',
              'Nathan Irving is a Novato real estate agent with Coldwell Banker Realty. Local sales data, neighborhood guides, and direct, personal help buying or selling.'),
    'about': ('About Nathan Irving | Novato REALTOR®',
              'Marin native Nathan Irving helps buyers and sellers in Novato with Coldwell Banker Realty, Greenbrae.'),
    'contact': ('Contact Nathan Irving | Novato REALTOR®',
                'Call, text, or message Nathan Irving about buying or selling a home in Novato or Marin County.'),
}

BUY_INTRO = '''<section class="page-intro">
    <div class="container">
      <span class="eyebrow">Buying a home</span>
      <h1>Let's find the right home for you, without the guesswork.</h1>
      <p class="lede">I work with you directly from your first search through closing day. Tell me what you're looking for and I'll follow up personally within one business day.</p>
      <div class="jump"><a href="#buying">Buyer form</a><a href="#calculator">Mortgage calculator</a><a href="property-search.html">Browse listings</a></div>
    </div>
  </section>'''

SELL_INTRO = '''<section class="page-intro">
    <div class="container">
      <span class="eyebrow">Selling your home</span>
      <h1>A pricing and marketing plan built around your home.</h1>
      <p class="lede">You'll get a price backed by recent sales near you, a clear plan for getting it in front of buyers, and Coldwell Banker's reach behind it.</p>
      <div class="jump"><a href="#valuation">Instant home value</a><a href="#valuation-form">Request a market analysis</a><a href="#selling">Seller form</a></div>
    </div>
  </section>'''

REPLACE_ALL = [
    ('Anything else Nathan should know?', 'Anything else I should know?'),
    ('>Submit Buyer Info<', '>Send my buyer info<'),
    ('>Submit Seller Info<', '>Send my seller info<'),
    ('>Get My Free Valuation<', '>Get my free valuation<'),
    ('Contact Nathan for a land valuation', 'Contact me for a land valuation'),
    ('class="btn btn--gold">Contact Nathan<', 'class="btn btn--gold">Contact me<'),
    ('Live market data &middot; Updated automatically every day', 'Live market data, updated every day'),
]

PAGE_REPLACE = {
    'buy': [
        ('<span class="badge">For Buyers</span>\n        <h2 class="mt-lg">Finding the right home, without the guesswork</h2>\n        <p>Nathan works directly with you from your first search through closing day — no hand-offs, no autopilot. Share a few details below and he\'ll follow up personally within one business day.</p>',
         '<span class="eyebrow">Buyer form</span>\n        <h2>Tell me what you\'re looking for</h2>\n        <p>A few details help me send homes that actually fit. I\'ll reply personally within one business day.</p>'),
        ('placeholder="e.g. Mill Valley, San Rafael"', 'placeholder="e.g. Hamilton, San Marin"'),
    ],
    'buy-extra': [],
    'sell': [
        ('<span class="badge">For Sellers</span>\n        <h2 class="mt-lg">A pricing and marketing plan built around your home</h2>\n        <p>Tell Nathan about your property and goals, and he\'ll follow up with next steps — including a market analysis specific to your home.</p>',
         '<span class="eyebrow">Seller form</span>\n        <h2>Tell me about your home and your goals</h2>\n        <p>I\'ll follow up with next steps, including a market analysis built for your specific home.</p>'),
        ('<span class="badge">Free Home Valuation</span>\n        <h2 class="mt-lg">Curious what your home is worth right now?</h2>\n        <p>Get an instant ballpark estimate below, then request a real comparative market analysis from Nathan based on your home\'s actual condition, upgrades, and recent Marin sales — usually ready within a day or two.</p>',
         '<span class="eyebrow">Free home valuation</span>\n        <h2>Curious what your home is worth right now?</h2>\n        <p>Start with an instant ballpark below. Then ask me for a real market analysis based on your home\'s condition, upgrades, and recent sales nearby. It\'s usually ready within a day or two.</p>'),
        ('<h3 style="margin-bottom:0.3rem;">Instant Estimate</h3>', '<h3 style="margin-bottom:0.3rem;">Instant estimate</h3>'),
        ('>Get a Real, Personalized Valuation<', '>Get a real, personalized valuation<'),
        ('<h3 style="margin-bottom:var(--space-sm);">Request a Real Comparative Market Analysis</h3>', '<h3 style="margin-bottom:var(--space-sm);">Request a market analysis from me</h3>'),
        ('<div class="label">Estimated Range</div>', '<div class="label">Estimated range</div>'),
        ("updatedLabel.textContent = VALUATION_DATA.lastUpdated;",
         "updatedLabel.textContent = VALUATION_DATA.lastUpdated;\n    Array.prototype.forEach.call(townSelect.options, function (o) { if (o.dataset.name === 'Novato') o.selected = true; });"),
    ],
    'local-data': [
        ('<span class="eyebrow">Neighborhood Guide</span>', '<span class="eyebrow">Neighborhood guides</span>'),
        ('<h1>A closer look at Marin</h1>', '<h1>A closer look at Novato and Marin neighborhoods</h1>'),
    ],
    'market-updates': [
        ('<span class="eyebrow">Market Updates</span>', '<span class="eyebrow">Market notes</span>'),
        ('<h1>What\'s happening in the Marin market</h1>', '<h1>What\'s selling in Novato and Marin, and for how much</h1>'),
        ('Occasional, honest updates on pricing, inventory, and what it means if you\'re buying or selling.', 'My regular write-ups on pricing and inventory, and what they mean if you\'re buying or selling.'),
    ],
}


def original(page):
    return subprocess.check_output(['git', 'show', 'origin/main:%s.html' % page], cwd=ROOT).decode('utf-8')


def generic_intro(main):
    # Old centered intro -> new left-aligned page intro
    main = main.replace('<section class="section" style="padding-bottom:0;">\n    <div class="container text-center">',
                        '<section class="page-intro">\n    <div class="container">', 1)
    main = re.sub(r'<p style="max-width:\d+px;margin:0 auto;">', '<p class="lede">', main, count=1)
    # section heads: drop the inline overrides
    main = main.replace('<div class="section-head" style="text-align:left;max-width:100%;margin-bottom:var(--space-md);">',
                        '<div class="section-head">')
    return main


def build(page):
    s = original(page)
    s = s.replace('<link rel="stylesheet" href="css/styles.css">', HEAD_STYLES)
    s = re.sub(r'<header class="site-header">.*?</header>', HEADER, s, count=1, flags=re.S)
    s = re.sub(r'<footer class="site-footer">.*?</footer>', FOOTER, s, count=1, flags=re.S)
    if page in TITLES:
        t, d = TITLES[page]
        s = re.sub(r'<title>.*?</title>', '<title>%s</title>' % t, s, count=1)
        s = re.sub(r'<meta name="description" content="[^"]*">', '<meta name="description" content="%s">' % d, s, count=1)

    a, b = s.index('<main'), s.index('</main>') + len('</main>')
    custom = os.path.join(PAGES_DIR, page + '.main.html')
    if os.path.exists(custom):
        main = open(custom).read().strip().replace('{{MAP}}', MAP)
    else:
        main = s[a:b]
        if page == 'buy':
            main = re.sub(r'<section class="section" style="padding-bottom:0;">.*?</section>', BUY_INTRO, main, count=1, flags=re.S)
        elif page == 'sell':
            main = re.sub(r'<section class="section" style="padding-bottom:0;">.*?</section>', SELL_INTRO, main, count=1, flags=re.S)
        else:
            main = generic_intro(main)
        main = main.replace('<div class="section-head" style="text-align:left;max-width:100%;margin-bottom:var(--space-md);">',
                            '<div class="section-head">')
        for old, new in PAGE_REPLACE.get(page, []):
            if old not in main:
                raise SystemExit('%s: expected text not found: %s' % (page, old[:60]))
            main = main.replace(old, new)
    s = s[:a] + main + s[b:]
    for old, new in REPLACE_ALL:
        s = s.replace(old, new)

    if 'data-live' in s and 'js/live.js' not in s:
        s = s.replace('<script src="js/nav.js"></script>', '<script src="js/live.js"></script>\n<script src="js/nav.js"></script>', 1)
    open(os.path.join(ROOT, page + '.html'), 'w').write(s)
    return len(s)


if __name__ == '__main__':
    for p in PAGES:
        print('built %-16s %6d bytes' % (p, build(p)))
