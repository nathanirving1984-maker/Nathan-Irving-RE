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
  }
];
