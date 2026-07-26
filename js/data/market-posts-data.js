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
    title: "Novato 94949 (Hamilton & Pointe Marin) Sales Heat Up",
    zip: "94949",
    zipLabel: "Novato — Hamilton & Pointe Marin",
    excerpt: "The 94949 ZIP code — covering Hamilton and Pointe Marin — is seeing a clear pickup in activity. 16 homes sold in June alone, and 62 homes have closed so far this year, up nearly 13% from the same period in 2025. Pending sales are also outpacing last year, up over 6% year-to-date. Meanwhile active inventory has stayed roughly flat. With sales accelerating faster than new listings are appearing, buyers are moving quickly in this pocket of South Novato — good news for sellers in Hamilton and Pointe Marin considering a listing this summer.",
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
