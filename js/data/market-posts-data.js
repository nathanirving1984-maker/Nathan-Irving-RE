// Nathan Irving, REALTOR® — Market Updates data
// Add new posts to the TOP of this array. Each post needs a unique "id".
// Set isSample: true for placeholder posts so visitors know it's example content.
//
// Optional ZIP-code snapshot fields (all optional, backward compatible):
//   zip:       string, e.g. "94949"
//   zipLabel:  string, e.g. "Novato — Hamilton & Pointe Marin"
//   images:    array of { src, caption } — photo grid rendered below the post
//   excerpt:   long-form paragraph used instead of summary/body when present
// When "zip" is set and js/data/zip-boundaries/{zip}.json exists, a Leaflet
// boundary map renders below the post text. See market-updates.html.

const MARKET_POSTS_DATA = [
  {
    id: "novato-94949-hamilton-pointe-marin-july-2026",
    isSample: false,
    date: "July 2026",
    title: "Novato 94949 (South Novato): Homes Selling Twice as Fast",
    zip: "94949",
    zipLabel: "Novato — Hamilton, Pointe Marin, Bel Marin Keys & Marin Country Club",
    excerpt:
      "The 94949 ZIP code — covering South Novato's Hamilton Field, Pointe Marin, Bel Marin Keys, Marin Country Club Estates, and Loma Verde — is showing one of the clearest speed-ups in the Novato market this year. Homes sold in June spent a median of just 27 days on market, down from 49 days a year ago, a 45% drop. That trend has continued into July, with homes moving in 23 days so far this month compared to 46 days last July. Buyers are also paying up for the right home: the average sale closed at 101% of original list price in June, up from 95% a year ago. Price per square foot has stayed comparatively steady around $627, so this isn't a story of runaway appreciation — it's a story of speed and competition. 16 homes sold in June alone, and 62 have closed year-to-date, up nearly 13% from the same period in 2025. For sellers across South Novato — whether it's a waterfront lot in Bel Marin Keys, a newer build in Hamilton or Pointe Marin, or an estate in Marin Country Club — that combination points to a strong window to list.",
    images: [],
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
