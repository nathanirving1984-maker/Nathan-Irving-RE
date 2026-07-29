// Nathan Irving, REALTOR® — Market Updates data
// Add new posts to the TOP of this array. Each post needs a unique "id".
// Set isSample: true for placeholder posts so visitors know it's example content.
//
// Optional ZIP-code snapshot fields (all optional, backward compatible):
//   zip:       string, e.g. "94949"
//   zipLabel:  string, e.g. "Novato — Hamilton & Pointe Marin"
//   images:    array of { src, caption } — photo grid rendered below the post
//   excerpt:   long-form paragraph used instead of summary/body when present
//   stats:     array of { label, value, trend: "up"|"down"|"flat", trendLabel }
//              — rendered as a row of stat cards above the post text. "up"
//              renders in the gold/positive tone, "down" in muted gray.
// When "zip" is set, a small "ZIP {zip}" pill renders next to the date, and
// if js/data/zip-boundaries/{zip}.json exists, a Leaflet boundary map
// renders below the post text. See market-updates.html.

const MARKET_POSTS_DATA = [
  {
    id: "novato-94949-hamilton-pointe-marin-july-2026",
    isSample: false,
    date: "2026-07-26",
    title: "Novato 94949 (South Novato): Homes Selling Twice as Fast",
    zip: "94949",
    zipLabel: "Novato — Hamilton, Pointe Marin, Bel Marin Keys & Marin Country Club",
    stats: [
      { label: "Days on market", value: "27", trend: "down", trendLabel: "45% vs last year" },
      { label: "Sold / list price", value: "101%", trend: "up", trendLabel: "up from 95%" },
      { label: "Homes sold YTD", value: "62", trend: "up", trendLabel: "13% vs last year" },
    ],
    excerpt:
      "The 94949 ZIP code — covering South Novato's Hamilton Field, Pointe Marin, Bel Marin Keys, Marin Country Club Estates, and Loma Verde — is showing one of the clearest speed-ups in the Novato market this year. Year-over-year, the shift is dramatic: homes sold in June spent a median of just 27 days on market, down from 49 days in June 2025, a 45% drop. Buyers are also paying up for the right home, with the average sale closing at 101% of original list price in June, up from 95% a year ago. Price per square foot held comparatively steady at $627, essentially flat versus last June's $645 — this isn't runaway appreciation, it's speed and competition. Year-to-date, the trend is holding: 62 homes have closed in 94949 so far in 2026, up nearly 13% from the same window last year, days on market YTD sits at 28 versus 31 a year ago, a small difference, but consistent with common trends, and the sold-to-list price ratio is holding at 98%, matching last year's pace. That consistency across seven months suggests a real market shift, not a one-month blip. For sellers across South Novato — whether it's a waterfront lot in Bel Marin Keys, a newer build in Hamilton or Pointe Marin, or an estate near the Marin Country Club — that combination of fast sales, over-asking prices, and steady per-square-foot values points to a strong window to list.",
    images: [
      { src: "images/94949-bel-marin-keys-aerial.jpeg", caption: "Bel Marin Keys waterfront homes" },
      { src: "images/94949-hamilton-pointe-marin-aerial.webp", caption: "Hamilton & Pointe Marin neighborhood" },
    ],
  },
  {
    id: "marin-market-snapshot-july-2026",
    title: "Marin County Market Snapshot — July 2026",
    date: "2026-07-15",
    isSample: true,
    summary: "A quick look at where inventory, pricing, and buyer demand stand across Marin County heading into late summer.",
    body: [
      "Inventory across Marin County remains tighter than the historical average for this time of year, keeping well-priced homes moving quickly — especially in the $900K–$1.5M range.",
      "Buyers are still competitive on turnkey properties in top school districts, while homes needing work are sitting slightly longer and seeing more room for negotiation.",
      "Mortgage rates have held relatively steady over the past quarter, which has kept monthly payment expectations more predictable for buyers planning their budgets.",
      "This is placeholder content — real market data and local insights will replace this as posts are published."
    ]
  },
  {
    id: "getting-ready-to-sell-checklist",
    title: "5 Things to Handle Before Listing Your Marin Home",
    date: "2026-07-01",
    isSample: true,
    summary: "A few practical, low-cost steps that make the biggest difference before your home hits the market.",
    body: [
      "First impressions start online, not at the front door — professional photography is one of the highest-return investments you can make before listing.",
      "Small deferred maintenance items (a sticking door, a leaky faucet) are exactly what buyers flag during inspection — handling them early avoids renegotiation later.",
      "A pre-listing conversation about pricing strategy, based on current comparable sales, sets realistic expectations from day one.",
      "This is placeholder content — real seller guidance and local examples will replace this as posts are published."
    ]
  }
];
