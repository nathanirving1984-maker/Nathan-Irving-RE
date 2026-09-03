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
    id: "novato-94947-san-marin-ytd-2026",
    isSample: false,
    date: "2026-09-03",
    title: "94947 Market Update: Steady Growth Across the Board, Year to Date",
    zip: "94947",
    zipLabel: "Novato \u2014 San Marin, Ignacio & West Novato",
    stats: [
      { label: "Homes sold YTD", value: "138", trend: "up", trendLabel: "2.2% vs last year" },
      { label: "Pending sales YTD", value: "154", trend: "up", trendLabel: "6.2% vs last year" },
      { label: "Avg. $/sq. ft.", value: "$609", trend: "up", trendLabel: "2.5% vs last year" },
    ],
    excerpt:
      "The 94947 market \u2014 San Marin, Ignacio, and west Novato \u2014 has shown consistent, if modest, growth through the first eight months of 2026. Sales, pending activity, and both listing and sold prices are all up versus the same period last year, with inventory holding roughly steady \u2014 a picture of a market gaining momentum without overheating. Year to date through September 2, 138 homes have closed versus 135 in the same window last year, up 2.2%, while pending sales rose to 154 from 145, up 6.2%. Active listings stand at 44 versus 42, up 4.8%, and months of inventory sits at 2.6 versus 2.5, up 3.9% \u2014 essentially flat, and well short of the kind of tightening that produces a squeeze. On price, the average sold home reached $1,193,000, up 4.0% from $1,147,000, and average price per square foot on sold homes rose to $609 from $594, up 2.5% \u2014 meaning the gain reflects real per-foot appreciation, not just a shift toward larger homes. Two measures moved the other way: homes averaged 41 days on market versus 39 a year ago, up 5.1%, and the sold-to-list price ratio eased to 98% from 99%. Neither is a favorable move for sellers, and together they suggest buyers have a touch more room to negotiate than last year, even as overall demand holds strong. Taken as a whole, 94947 has been a market of steady, broad-based gains this year \u2014 more homes selling, more going pending, and prices ticking up across every real measure, without inventory tightening to the point of a squeeze. Source: TrendVision / BAREIS MLS, published August 2026, ZIP 94947, based on data through 9/2/26 (preliminary for the current period).",
    images: [],
  },
  {
    id: "novato-94945-black-point-central-novato-july-2026",
    isSample: false,
    date: "2026-08-19",
    title: "94945 Market Update: Inventory Tightens as Sales Activity Surges",
    zip: "94945",
    zipLabel: "Novato — Black Point & Central Novato",
    stats: [
      { label: "Homes sold", value: "23", trend: "up", trendLabel: "187.5% vs last year" },
      { label: "Months of inventory", value: "1.0", trend: "down", trendLabel: "~74% vs last year" },
      { label: "Active listings", value: "23", trend: "down", trendLabel: "25.8% vs last year" },
    ],
    excerpt:
      "The 94945 market — Black Point and Central Novato — shifted noticeably over the past year. Closed sales nearly tripled, active inventory pulled back by a quarter, and prices continued their steady climb — a combination that points to a market moving firmly in sellers’ favor, even with homes taking a bit longer to find buyers. Twenty-three homes closed in July 2026 versus 8 in July 2025, while active listings fell from 31 to 23 and months of inventory compressed from 3.9 to 1.0. Pending sales rose from 9 to 16. The average sold price reached $1,177,000, up 5.8% from $1,113,000; the median came in at $1,065,000, up 3.8% from $1,026,000; and average price per square foot on sold homes rose to $571 from $522, up 9.4%. Days on market averaged 41, up 32.3% from 31 a year ago. Year to date the same pattern holds: 106 homes sold versus 80 a year ago, up 32.5%; 112 pending sales versus 83, up 34.9%; and year-to-date months of inventory at 2.1 versus 2.8, down 25.2%. With active inventory down and sales volume climbing, 94945 buyers are facing more competition for fewer available homes than a year ago — even though days on market ticked up slightly, likely reflecting a handful of longer-sitting listings rather than a cooling trend. Sellers pricing correctly are still seeing strong sold-to-list ratios. Source: TrendVision / BAREIS MLS, published August 2026, based on data through the end of July 2026.",
    images: [],
  },
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
