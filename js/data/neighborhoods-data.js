const NEIGHBORHOODS_DATA = [
  {
    name: "Hamilton Field",
    slug: "hamilton",
    town: "Novato",
    zip: "94949",
    builtEra: "1999–2012",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Novato", typical: "8–12 min", peak: "12–18 min" },
      { destination: "San Rafael", typical: "15–20 min", peak: "20–30 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "35–40 min", peak: "50–70+ min" }
    ],
    description: "Hamilton is a rare combination in real estate: genuinely modern construction wrapped in real, protected history. Built out across nine distinct neighborhoods — Bayside, Hamilton Meadows, Hamilton Park, Southgate, Traditions, Inspirations, Sunny Cove, Newport, and The Landing — homebuilding here ran from 1999 through 2012 on the site of the former Hamilton Air Force Base, which served as a West Coast defense hub for decades before closing in 1974. Rather than bulldozing that history, the redevelopment preserved it: Spanish Colonial Revival hangars, historic officer quarters, and the old base theater from the 1930s stand alongside the new homes, and the district is protected on the National Register of Historic Places. For buyers, that means a neighborhood with real architectural soul and story — not another anonymous subdivision — paired with the practical upside of newer-build systems, layouts, and finishes. Add in direct Bay Trail access for walking, running, and cycling along the water, a well-regarded community pool, and easy proximity to Hamilton Field's shops and restaurants, and Hamilton pitches itself: a walkable, historic, resort-adjacent community that still feels distinctly Marin.",
    images: []
  },
  {
    name: "Pointe Marin",
    slug: "pointe-marin",
    town: "Novato",
    zip: "94949",
    builtEra: "2002–2005 (early 2000s master-planned)",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Novato", typical: "8–10 min", peak: "12–15 min" },
      { destination: "San Rafael", typical: "12–15 min", peak: "20–25 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "30–35 min", peak: "45–65 min" }
    ],
    description: "Pointe Marin is one of the few places in Marin where you can buy genuinely newer construction without giving up the tree-lined, walkable feel of an established neighborhood. Built out by Shea Homes and Centex between 2002 and 2005 across two sub-areas — The Breakers and The Hideaway — the community was designed from day one with underground utilities, wide sidewalks, consistent Mediterranean and Traditional architecture, and streets engineered for light through-traffic, which makes it an easy sell to families who want their kids to be able to bike to a friend's house without a second thought. The neighborhood sits west of US-101 at the Ignacio Blvd exit and enjoys a wind-sheltered microclimate that's noticeably calmer than more exposed pockets of South Novato, plus direct access to the Indian Valley Preserve for hiking and trail running right out the back gate. It's a five-minute walk to Pacheco Plaza for coffee, groceries, and dinner, and the resale numbers back up the lifestyle pitch — homes here move quickly and consistently, a sign of durable buyer demand. The one honest caveat worth surfacing early: homes carry a Mello-Roos (CFD) assessment on top of standard property tax and HOA dues, so it's worth walking buyers through true all-in monthly cost rather than letting them anchor on list price alone. Framed the right way, that's a minor asterisk on an otherwise compelling package — polished, low-maintenance, and move-in ready in a way older Marin housing stock rarely is.",
    images: []
  },
  {
    name: "Loma Verde",
    slug: "loma-verde",
    town: "Novato",
    zip: "94949",
    builtEra: "1950s–early 1960s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Novato", typical: "8–12 min", peak: "14–18 min" },
      { destination: "San Rafael", typical: "12–15 min", peak: "20–25 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "30–35 min", peak: "45–65 min" }
    ],
    description: "Loma Verde is the kind of neighborhood real estate agents describe as \"undervalued\" and mean it. Tucked into Ignacio Valley just west of Highway 101, it's one of Novato's older residential pockets, built out in the 1950s and early '60s with classic ranch-style homes on generous quarter-acre lots — real yard space, mature trees, and the kind of architectural character that comes from decades of settled ownership rather than a builder's template. It's home to Loma Verde Elementary, and families here get all the convenience of the Ignacio Valley corridor — Pacheco Plaza shopping and dining, easy 101 access, San Jose Middle School nearby — without paying the premium attached to newer neighbors like Pointe Marin or the Marin Country Club. One quirk worth knowing: despite being fully surrounded by the City of Novato, Loma Verde is technically unincorporated Marin County, which can affect permitting and service questions, so it's worth walking buyers through that distinction early. For buyers priced out of Marin's flashier new construction but unwilling to leave the county, Loma Verde offers a genuine way in — bigger lots, real character, and a quieter, more established feel, all within a few minutes of everyday conveniences.",
    images: []
  },
  {
    name: "Bel Marin Keys",
    slug: "bel-marin-keys",
    town: "Novato",
    zip: "94949",
    builtEra: "1960s–1970s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Novato", typical: "10–14 min", peak: "16–20 min" },
      { destination: "San Rafael", typical: "15–20 min", peak: "25–30 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "35–40 min", peak: "50–70 min" }
    ],
    description: "There's nothing else quite like Bel Marin Keys anywhere in Marin County. Developed primarily through the 1960s and '70s around three interconnected lagoons, this waterfront community lets most homeowners walk out their back door straight onto a private boat dock — kayaking, paddleboarding, and waterskiing aren't a weekend drive away, they're daily life. Two locks give boaters access out to San Pablo Bay at higher tide, and the lagoon setting creates a resort-like calm that's hard to find this close to a major freeway corridor. It's a lifestyle sell as much as a real estate sell: for buyers who dream of owning a boat, or who just want the water views and the sound of it lapping against the dock every evening, Bel Marin Keys delivers something genuinely rare. It sits outside Novato's official city limits and is instead governed by its own Community Service District, which is worth explaining clearly to buyers asking about services and local governance. And in the interest of giving buyers the full, honest picture rather than just the highlight reel: mean sea level here runs around 12 feet, so sea-level-rise resilience is a real and increasingly common question — one best addressed head-on with current flood-zone and insurance information rather than glossed over, since buyers who feel fully informed are the ones who move forward with confidence.",
    images: []
  },
  {
    name: "San Marin",
    slug: "san-marin",
    town: "Novato",
    zip: "94945 / 94947",
    builtEra: "mid-1960s–1970s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Novato", typical: "10–12 min", peak: "15–20 min" },
      { destination: "San Rafael", typical: "18–22 min", peak: "28–35 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "40–45 min", peak: "55–75 min" }
    ],
    description: "San Marin is where families move when top-tier schools are the top priority and they're willing to trade a slightly longer freeway run to get there. Sitting at the literal foot of Mount Burdell in Northwest Novato, it's home to San Ramon Elementary and San Marin High School — one of the strongest-performing high schools in the district — and that reputation alone drives steady, motivated buyer demand year after year. Most homes date from the mid-1960s through the 1970s: solid, two-story, four-bedroom construction on roughly a fifth of an acre, offering real space to grow into without the price tag of new construction. The mountain backdrop isn't just scenery — Mount Burdell's open space preserve is essentially San Marin's backyard, with miles of hiking and mountain biking trails accessible on foot from many streets in the neighborhood. The northeast section near Wood Hollow Drive includes the 1990s Partridge Knolls development of homes and townhouses, a distinct product type worth calling out separately for buyers who hear \"San Marin\" and expect one uniform housing stock. What San Marin ultimately offers is a settled, established, deeply residential feel — the kind of place where families stay for decades, school pride runs genuinely deep, and the payoff for choosing it is measured in report cards and Saturday morning trailheads rather than commute minutes.",
    images: []
  },
  {
    name: "Ignacio",
    slug: "ignacio",
    town: "Novato",
    zip: "94949",
    builtEra: "Predominantly post–WWII, with the wider Ignacio Valley spanning 1950s–2000s development",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Novato", typical: "8–10 min", peak: "12–16 min" },
      { destination: "San Rafael", typical: "8–10 min", peak: "15–20 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "28–32 min", peak: "45–65 min" }
    ],
    description: "Few Novato neighborhoods offer the convenience-to-charm ratio that Ignacio does. It's genuinely one of the oldest destinations in the area — originally Rancho San Jose, granted to Ygnacio Pacheco, and its own separate railroad-stop settlement long before Novato even incorporated as a city — and that deep history gives it a sense of place that newer subdivisions simply can't manufacture. Today, that same historic footprint has grown into South Novato's commercial and social hub: Pacheco Plaza, a movie theater, a strong lineup of restaurants, and everyday services all sit within easy walking or biking distance of the surrounding homes, so residents genuinely use their neighborhood rather than just sleeping in it. Highway 101 runs directly through the area, which is a double win for buyers — unmatched freeway access paired with the kind of amenity density usually reserved for denser, less residential parts of the county. Housing here reflects that long history too, with development ranging from post-WWII single-family homes to more recent construction, giving buyers real range in price point and home style within the same walkable footprint. One thing worth clarifying with buyers: \"Ignacio Valley\" is sometimes used more broadly to describe the wider area including Loma Verde, Pointe Marin, and Marin Country Club, so it's worth pinning down exactly which pocket a buyer has in mind — but the core Ignacio neighborhood itself is a compelling pitch on its own: walkable, historic, and about as centrally located as South Novato gets.",
    images: []
  },
  {
    name: "Black Point / Green Point",
    slug: "black-point",
    town: "Novato",
    zip: "94945",
    builtEra: "Black Point — early 1900s through present (mixed); Green Point — primarily 1970s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Novato", typical: "15–18 min", peak: "22–28 min" },
      { destination: "San Rafael", typical: "20–25 min", peak: "30–40 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "40–50 min", peak: "60–80 min" }
    ],
    description: "Black Point and Green Point are Novato's best-kept secret for buyers who want space, privacy, and genuine character over cookie-cutter suburbia. Tucked into the far Northeast corner of town, the area was one of the original three rail-era settlements — alongside Ignacio and Novato itself — that predate the city's incorporation, and that frontier-era independence still shows up in the neighborhood's personality today: larger lots, a more rustic and artistic feel, and a community of longtime residents who genuinely chose the area rather than defaulted into it. Locally, people generally mean the area north of Highway 37 when they say Green Point (mostly 1970s homes) and south of Highway 37 for Black Point (a wider mix spanning the early 1900s to today) — either way, buyers get sweeping views of the Petaluma River and San Pablo Bay wetlands that simply aren't available closer to the freeway corridor. Being unincorporated Marin County rather than inside Novato's city limits appeals to a certain kind of buyer who values fewer restrictions and a stronger sense of rural independence — worth framing as a genuine lifestyle positive for the right client rather than a technicality. Just nearby, though functionally its own animal, is StoneTree — a gated early-2000s development wrapped around the StoneTree Golf Club, offering hilly, view-forward lots and larger homes for buyers who want golf-community amenities alongside that same northeastern Novato seclusion. Together, this corner of town is where a buyer goes when they've decided elbow room and character matter more than walkability.",
    images: []
  },
  {
    name: "Central Novato / Downtown (Old Town)",
    slug: "central-novato",
    town: "Novato",
    zip: "94945",
    builtEra: "1940s–1950s core, expanding to newer construction moving outward",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "San Rafael", typical: "12–15 min", peak: "20–25 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "35–40 min", peak: "50–70 min" }
    ],
    description: "For buyers who want to walk to dinner instead of drive to it, Central Novato — the historic Downtown/Old Town core along Grant Avenue — is the clearest answer in the entire city. This is Novato's original commercial heart, dating back to the arrival of the Northwestern Pacific Railroad depot in the late 1800s, and that history is still visible everywhere: the 1896 Presbyterian church building that now houses city offices, the Novato History Museum, and a genuinely charming, small-town main street lined with restaurants and locally owned shops rather than chain storefronts. The residential blocks immediately surrounding Grant Ave are mostly smaller single-family homes and low-rise multi-unit buildings from the 1940s and '50s — cozy, walkable, and priced accordingly, which makes Downtown a smart entry point for buyers who want authentic Marin character without a Marin-sized budget. Move outward from Grant Ave in any direction and homes get progressively larger and newer, with pockets like Atherton Ranch offering bigger, more contemporary construction just a short distance from that same walkable core — the best of both worlds for a buyer who wants proximity without sacrificing square footage. What Downtown ultimately sells isn't a house, it's a lifestyle: morning coffee on foot, farmers markets, community events, and the kind of everyday convenience that's genuinely rare in a county built largely around car commutes.",
    images: []
  },
  {
    name: "Marin Country Club Estates",
    slug: "marin-country-club",
    town: "Novato",
    zip: "94949",
    builtEra: "1960s–1970s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Novato", typical: "10–12 min", peak: "15–20 min" },
      { destination: "San Rafael", typical: "10–12 min", peak: "18–22 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "~35 min", peak: "50–70 min" }
    ],
    description: "For buyers who want a golf-course lifestyle without leaving Novato, Marin Country Club Estates is the answer, and it's been delivering on that promise since the club itself opened in the 1950s. The surrounding neighborhood filled in through the 1960s and '70s with substantial, established homes on generous lots, many backing directly onto fairways or framed by the hills that wrap this Southwest Novato valley — a genuinely picturesque setting that's hard to replicate elsewhere in the county. The private club at the center of it all offers a full 18-hole golf course, tennis courts, multiple pools, a fitness center, and a clubhouse for dining and events, so residents aren't just buying a house, they're buying access to a resort-caliber amenity package a few minutes from their own front door — golf carts are even a legitimate way to get around locally. It's a drive-quick rather than walk-to-everything neighborhood, but South Novato's shopping and dining corridor, plus direct access to Marin's open space trails for hiking and biking, are all close by. Families benefit from Novato Unified schools — Loma Verde Elementary, San Jose Middle, and Novato High serve most of the area, though school assignment is always worth verifying by exact address. The overall pitch is straightforward: quiet, established, green-space-forward living for buyers who value privacy, space, and a country-club pace of life over density and walkability.",
    images: []
  },
  {
    name: "Terra Linda",
    slug: "san-rafael-terra-linda",
    town: "San Rafael",
    zip: "",
    builtEra: "1955–1965 (Eichler-era development, mostly complete by 1970)",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "10–12 min", peak: "15–20 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "30–35 min", peak: "45–65 min" }
    ],
    description: "Terra Linda is where mid-century design meets everyday family life. This North San Rafael neighborhood is known for its Eichler homes — those iconic glass-walled, indoor-outdoor houses that turned California modernism into something you could actually live in — alongside a broader mix of classic ranch-style homes on wide, tree-lined streets built for kids to bike and neighbors to know each other. Families gravitate here for the schools (Vallecito Elementary, Miller Creek Middle, and Terra Linda High all serve the area) and for direct access to the Terra Linda/Sleepy Hollow Preserve, where hiking and mountain biking trails start right at the edge of the neighborhood. Add in Northgate Mall for everyday shopping and easy 101 access, and Terra Linda offers a rare combination: genuine architectural character, real community feel, and the kind of practical convenience that makes daily life simple.",
    images: []
  },
  {
    name: "Lucas Valley",
    slug: "san-rafael-lucas-valley",
    town: "San Rafael",
    zip: "",
    builtEra: "1962–1966 (core Eichler tract), with broader Lucas Valley development extending into the 1970s–80s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "12–15 min", peak: "18–24 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "32–38 min", peak: "48–68 min" }
    ],
    description: "Lucas Valley is one of Marin's most distinctive addresses — a quiet, tucked-away enclave built around a striking collection of Eichler homes, prized for their clean mid-century lines, floor-to-ceiling glass, and seamless connection between indoor living and the natural landscape outside. Surrounded by protected open space and hillside terrain, the neighborhood has a genuinely peaceful, removed feel despite being minutes from everyday conveniences, and it's famously home to Skywalker Ranch, giving the area a quiet cachet. Further west, Lucas Valley Estates offers a different flavor — larger, more traditional homes on bigger lots for buyers who want the same setting without the Eichler-specific commitment. Locals grab coffee or a sandwich at Big Rock Deli, hit the trailheads right from their street, and send their kids to some of Marin's highly rated schools. It's a neighborhood built for buyers who want privacy, architectural distinction, and nature at their doorstep, all without leaving San Rafael.",
    images: []
  },
  {
    name: "Marinwood",
    slug: "san-rafael-marinwood",
    town: "San Rafael",
    zip: "",
    builtEra: "1956–1961 (core Eichler tract), part of broader 1950s–1970s Marinwood development",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "12–15 min", peak: "18–24 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "32–38 min", peak: "48–68 min" }
    ],
    description: "Marinwood offers a genuinely appealing mix — mid-century modern homes alongside more exclusive, larger estates — all wrapped around one of North San Rafael's best community assets: the Marinwood Community Center, with its pool, parks, and year-round events that give the neighborhood a real sense of togetherness. It's a place where buyers can find real range, from classic ranch homes to more substantial properties, without sacrificing the tight-knit, family-first feel that defines the area. Marinwood Creek Park adds green space right in the neighborhood's core, and highly rated schools make it an easy sell for buyers prioritizing education. For families who want community infrastructure — not just a house, but a place with built-in gathering spots and activities — Marinwood delivers in a way that's hard to match elsewhere in North San Rafael.",
    images: []
  },
  {
    name: "Gerstle Park",
    slug: "san-rafael-gerstle-park",
    town: "San Rafael",
    zip: "",
    builtEra: "1880s–1910s (with some 1950s–60s apartment/duplex infill)",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "5–8 min", peak: "8–12 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Gerstle Park is often called the crown jewel of San Rafael's in-town neighborhoods, and it earns that reputation. Centered on the historic namesake park — mature oaks, a running creek, a playground, and trails climbing into the hills — the neighborhood pairs early 20th-century charm with genuine modern convenience. Tree-lined streets create a natural canopy over well-kept sidewalks, and the strong, established sense of community here means neighbors actually know each other, not just wave in passing. It's a short walk to downtown's restaurants and shops, which makes it a favorite for buyers who want historic character and walkability without giving up a real neighborhood feel. Homes here range from classic bungalows to larger updated properties, appealing to a wide mix of buyers — young families, professionals, and downsizers alike — who all want the same thing: charm that doesn't feel manufactured.",
    images: []
  },
  {
    name: "Dominican",
    slug: "san-rafael-dominican",
    town: "San Rafael",
    zip: "",
    builtEra: "Late 1800s–early 1900s core (Victorian era), with mid-century infill",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "5–8 min", peak: "8–12 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Dominican is San Rafael living at its most elegant — a neighborhood built around Dominican University of California, where grand Victorian homes sit beneath mature tree canopy just minutes from a vibrant downtown. The university presence gives the area a genuine intellectual, cultured energy, while forested preserves and scenic trails right nearby offer an easy escape into nature without leaving the neighborhood. It's a rare pairing: historic architectural grandeur alongside quick, practical access to downtown's restaurants, shops, and the Smith Rafael Film Center. Buyers drawn to Dominican tend to want a home with real presence and history — not a cookie-cutter subdivision — while still being close enough to everything that daily errands stay easy. It's one of the more prestigious, established pockets of San Rafael, and it shows in both the architecture and the atmosphere.",
    images: []
  },
  {
    name: "Country Club",
    slug: "san-rafael-country-club",
    town: "San Rafael",
    zip: "",
    builtEra: "Predominantly 1940s–1960s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "8–10 min", peak: "12–16 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "28–33 min", peak: "42–62 min" }
    ],
    description: "Country Club is San Rafael's upscale bayfront address, overlooking San Rafael Bay with custom homes that reflect the neighborhood's understated prestige. The Marin Yacht Club anchors the area's waterfront lifestyle, and residents gather at Bayside Park or Andy's Market — a genuinely local grocery-bar-cafe hybrid that gives the neighborhood its social hub. This is a place for buyers who want water views and a boating or sailing lifestyle without leaving the practicality of in-town living behind. Homes here tend to be custom-built and individually distinctive rather than tract construction, appealing to buyers who want a property with real character and a setting that feels genuinely special every time they pull into the driveway. It's quieter and more residential than downtown, but never far from it.",
    images: []
  },
  {
    name: "Peacock Gap",
    slug: "san-rafael-peacock-gap",
    town: "San Rafael",
    zip: "",
    builtEra: "1960s–1980s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "10–12 min", peak: "15–20 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "30–35 min", peak: "45–65 min" }
    ],
    description: "Peacock Gap is San Rafael's premier bayside golf community, and it delivers a genuinely resort-like daily life. Homes here — many from the 1970s ranch era, well-maintained and often updated — sit close to China Camp State Park, McNears Beach Park, and the Peacock Gap Golf Club, giving residents a rare trifecta of golf, waterfront recreation, and protected open space all within a few minutes of home. Scenic bay views are the norm rather than the exception, and the neighborhood's flat, sunny terrain makes it easy to enjoy the outdoors year-round — walking, biking, paddling, or just an evening round of golf. Highly rated schools round out the appeal for families. Peacock Gap sells itself to buyers who want an active, outdoor-oriented lifestyle in a genuinely beautiful setting, without sacrificing the convenience of being part of San Rafael proper.",
    images: []
  },
  {
    name: "Sun Valley",
    slug: "san-rafael-sun-valley",
    town: "San Rafael",
    zip: "",
    builtEra: "1950s post-WWII boom, with later hillside infill",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "5–8 min", peak: "8–14 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Sun Valley is the neighborhood buyers choose when space, privacy, and a view are non-negotiable. Perched on the hilltop above central San Rafael, it offers panoramic bay views and noticeably larger lots than most in-town neighborhoods, with custom homes, gated properties, and a genuinely suburban, estate-like feel despite being just minutes from downtown. It's a hillside enclave in the truest sense — winding streets that climb toward sweeping vistas, with a sense of seclusion that's hard to find this close to the city center. For buyers coming from denser markets who want elbow room, a real driveway, and a view worth waking up to, Sun Valley is one of San Rafael's clearest answers. It pairs that privacy with genuine practicality — downtown, shopping, and the freeway are all a short drive away, so the seclusion never comes at the cost of convenience.",
    images: []
  },
  {
    name: "Downtown/West End",
    slug: "san-rafael-downtown-west-end",
    town: "San Rafael",
    zip: "",
    builtEra: "1880s–1910s core, with mid-century and later infill",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Downtown San Rafael is the beating heart of Marin County, and living here means being in the middle of it — genuinely, not just nearby. San Rafael City Plaza hosts weekend events, a lively Thursday farmers market, and outdoor summer concerts, while the Smith Rafael Film Center anchors a downtown arts and dining scene that spans sushi, Indian, Thai, Italian, Mexican, and Puerto Rican food, often all within a few blocks of each other on 4th Street. The West End, just adjacent, has built its own reputation as one of San Rafael's premier family neighborhoods — walkable, well-established, and close enough to downtown's energy without sitting directly in it. The SMART train connects the area north and south, adding a genuine transit option beyond the car. For buyers who want to walk to dinner, catch a film, or grab a coffee before hopping a train — while still having a real neighborhood to come home to — Downtown/West End is San Rafael's most vibrant, connected answer.",
    images: []
  },
  {
    name: "Canal District",
    slug: "san-rafael-canal-district",
    town: "San Rafael",
    zip: "",
    builtEra: "1920s–1960s core, with newer apartment development amid ongoing revitalization",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Rafael", typical: "5 min", peak: "8–10 min" },
      { destination: "San Francisco (via 101 + Golden Gate Bridge)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "The Canal District is San Rafael's most dynamic neighborhood in transition — a mixed-use, waterfront-adjacent community along the Marin Canal that's actively revitalizing while holding onto its genuinely diverse, welcoming character. It offers a real mix of affordable housing options and newer apartment developments, all with easy access to shops, restaurants, and public transit, making it one of the more accessible entry points into San Rafael living. The energy here is different from the rest of the city — dense, walkable, and culturally rich, with a strong sense of community identity that residents take real pride in. For buyers priced out of San Rafael's pricier hillside neighborhoods but who still want to be close to downtown and the water, the Canal District offers a genuine, evolving opportunity — a neighborhood on the way up, with the accessibility to match.",
    images: []
  },
  {
    name: "Downtown",
    slug: "petaluma-downtown",
    town: "Petaluma",
    zip: "94952",
    builtEra: "1850s–1910s (historic core, National Register-listed)",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "San Francisco (via 101)", typical: "45–50 min", peak: "65–90 min" }
    ],
    description: "Downtown Petaluma is the kind of place people move to Sonoma County specifically to live near. Chartered in 1858 and built up as a Gold Rush-era agricultural and shipping hub along the Petaluma River, the historic core survived the 1906 earthquake largely intact and is now listed on the National Register of Historic Places — along with dozens of other sites around town. Today that history translates into a genuinely lively daily life: breweries and biergartens, a busy restaurant scene, the art-deco Phoenix Theater for live music, and a SMART train stop right in the center of it all for an easy trip to Santa Rosa or south toward Marin. Petaluma's hometown pride shows up in real ways too, like the beloved Butter & Egg Days Parade that draws thousands every year. For buyers who want walkable, historic charm with genuine small-town character — not a manufactured version of it — Downtown Petaluma is hard to beat.",
    images: []
  },
  {
    name: "West Petaluma (Westside)",
    slug: "petaluma-west-petaluma",
    town: "Petaluma",
    zip: "94952",
    builtEra: "Late 1800s–early 1900s core, with newer development (e.g., Victoria, early 2000s) further from downtown",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Petaluma", typical: "5–8 min", peak: "8–12 min" },
      { destination: "San Francisco (via 101)", typical: "45–50 min", peak: "65–90 min" }
    ],
    description: "The Westside is Petaluma's postcard neighborhood — tree-lined streets lined with Victorians, Craftsman bungalows, and Spanish Revival homes, many dating from the 1860s through the 1940s, overlooking the historic downtown and the Sonoma Valley beyond. It's the kind of neighborhood where you can walk your dog at Oak Hill Park in the morning, stroll into downtown for dinner, and still come home to genuine architectural character rather than a subdivision. Further out, the Westside opens up into newer development and generous open space, including direct access to Helen Putnam Regional Park's 216 acres of hiking and biking trails just a couple miles from downtown — it's not unusual to spot deer, quail, or wild turkeys along the way. For buyers who want historic charm within walking distance of everything, paired with genuine nature access minutes away, West Petaluma delivers both without compromise.",
    images: []
  },
  {
    name: "East Petaluma (Eastside)",
    slug: "petaluma-east-petaluma",
    town: "Petaluma",
    zip: "94954",
    builtEra: "Predominantly 1970s–2000s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Petaluma", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "43–48 min", peak: "63–88 min" }
    ],
    description: "East Petaluma offers something the historic west side can't: newer, more spacious homes with easy freeway access, all while staying just minutes from downtown's restaurants and river walks. This side of town tends toward more contemporary construction and family-oriented subdivisions, appealing to buyers who want modern layouts, updated systems, and a bit more breathing room without giving up proximity to everyday conveniences. Highway 101 runs directly along the eastern edge, making it a genuinely practical choice for commuters, while local parks and the Petaluma River corridor still offer plenty of outdoor access close to home. It's the neighborhood buyers choose when they want Petaluma's small-town character with a more modern, low-maintenance package.",
    images: []
  },
  {
    name: "Oak Hill-Brewster",
    slug: "petaluma-oak-hill-brewster",
    town: "Petaluma",
    zip: "94952",
    builtEra: "1850s–mid-1900s (designated historic district)",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Petaluma", typical: "5–8 min", peak: "8–12 min" },
      { destination: "San Francisco (via 101)", typical: "45–50 min", peak: "65–90 min" }
    ],
    description: "Oak Hill-Brewster is a family-first neighborhood that pairs historic homes with genuine everyday convenience, all within easy reach of downtown. It's anchored by highly rated McKinley Elementary and Oakhill Park, giving families a real neighborhood core — playgrounds, sports facilities, and walking paths that turn errands and after-school time into something more social than transactional. The housing stock here blends historic character with practical family layouts, appealing to buyers who want charm without sacrificing function. Its walkable proximity to downtown's dining and shopping scene means residents get small-town neighborhood life without losing access to Petaluma's best amenities just a short walk or bike ride away.",
    images: []
  },
  {
    name: "Adobe",
    slug: "petaluma-adobe",
    town: "Petaluma",
    zip: "94954",
    builtEra: "Predominantly 1970s–1990s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Petaluma", typical: "8–10 min", peak: "12–18 min" },
      { destination: "San Francisco (via 101)", typical: "45–52 min", peak: "65–92 min" }
    ],
    description: "Petaluma's Adobe neighborhood offers a genuinely appealing trade: suburban comfort paired with real countryside views, all while staying connected to strong local schools. Kenilworth Junior High and Casa Grande High School — both highly rated — serve the area, making it a natural draw for families prioritizing education without sacrificing space or setting. The neighborhood's rural-edge feel means larger lots and a quieter pace than the denser in-town neighborhoods, while still being close enough to Petaluma's shopping, dining, and downtown scene for easy day-to-day living. For buyers who want a genuine sense of openness and countryside character without leaving city services and good schools behind, Adobe hits that balance well.",
    images: []
  },
  {
    name: "McNear's Landing",
    slug: "petaluma-mcnears-landing",
    town: "Petaluma",
    zip: "94952",
    builtEra: "1997–2000 (built in three phases)",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Petaluma", typical: "5–8 min", peak: "8–12 min" },
      { destination: "San Francisco (via 101)", typical: "45–50 min", peak: "65–90 min" }
    ],
    description: "McNear's Landing offers something genuinely rare in Sonoma County: real riverfront living just minutes from a vibrant downtown. Sitting along the Petaluma River, the neighborhood gives residents direct access to the water — walking paths, river views, and a sense of scenic openness that's hard to find this close to a town center. It's named for the historic McNear family, whose 19th-century brickworks and wharf helped build much of Petaluma's downtown, so there's genuine history layered into the setting as well as the scenery. For buyers drawn to water views and a slower, more scenic pace of daily life — without giving up quick access to downtown's restaurants and shops — McNear's Landing is one of Petaluma's most distinctive addresses.",
    images: []
  },
  {
    name: "West Hills",
    slug: "petaluma-west-hills",
    town: "Petaluma",
    zip: "94952",
    builtEra: "Predominantly early 2000s (e.g., Victoria), with some older custom hillside estates",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Petaluma", typical: "8–10 min", peak: "12–18 min" },
      { destination: "San Francisco (via 101)", typical: "47–52 min", peak: "67–92 min" }
    ],
    description: "West Hills is Petaluma's hillside retreat — a neighborhood of larger, view-forward homes tucked into the rolling terrain west of downtown, bordering Helen Putnam Regional Park's sweeping panoramas of the city and the Sonoma-Marin countryside beyond. Newer subdivisions here, like Victoria, offer open floor plans and high ceilings on well-planned lots, some with direct park access right from the neighborhood, while custom hillside estates further out offer larger lots, real privacy, and views worth the climb. It's a quieter, more spacious alternative to in-town living, but still just a short drive from Petaluma Boulevard South's shops, cafes, and restaurants. For buyers who want elbow room, a view, and genuine peace and quiet — without leaving Petaluma's conveniences too far behind — West Hills is the clearest answer in town.",
    images: []
  },
  {
    name: "Baltimore Canyon",
    slug: "larkspur-baltimore-canyon",
    town: "Larkspur",
    zip: "94939",
    builtEra: "Early-to-mid 1900s, with later hillside infill",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "27–32 min", peak: "42–62 min" }
    ],
    description: "Baltimore Canyon is Larkspur's redwood retreat — a canyon neighborhood climbing toward Mount Tamalpais, adjacent to Dolliver Park and the popular Dawn Falls trailhead. Homes here sit tucked among towering redwood groves, offering genuine privacy and a forest-immersion feel that's rare this close to a walkable downtown. It's a favorite for buyers who want daily access to hiking trails right from their street, paired with the kind of tree-canopy seclusion that makes the neighborhood feel far more remote than its actual proximity to Larkspur's shops and restaurants suggests. The tradeoff for that redwood setting is worth knowing upfront — canyon-adjacent buyers should always confirm wildfire zoning and insurance details during their diligence period — but for the right buyer, that natural beauty is exactly the draw.",
    images: []
  },
  {
    name: "Baltimore Park",
    slug: "larkspur-baltimore-park",
    town: "Larkspur",
    zip: "94939",
    builtEra: "Formerly agricultural land, developed early-to-mid 1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "3–5 min", peak: "6–10 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Baltimore Park is a small, flat, gridded pocket just off Magnolia Avenue between Old Town and the canyon neighborhoods — genuinely rare in Larkspur for its level lots and open layout, since so much of town climbs hillside terrain. Formerly agricultural land, it offers larger, flatter parcels than most of central Marin, and inventory here is chronically scarce, which tells its own story about how much residents love staying put once they've moved in. It's a quiet, walkable pocket that puts buyers close to downtown's restaurants and the Lark Theater without the steep driveways and hillside engineering that define so much of the rest of town. For buyers who want Larkspur's walkability and charm on a flat, easy-to-live-on lot, Baltimore Park is one of the town's best-kept secrets.",
    images: []
  },
  {
    name: "Downtown Larkspur / Central Larkspur",
    slug: "larkspur-downtown-central-larkspur",
    town: "Larkspur",
    zip: "94939",
    builtEra: "Early 1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Downtown Larkspur is Marin's classic small-town main street done right — Magnolia Avenue's Victorian-style storefronts, early 20th-century Craftsman cottages, and the art-deco Lark Theater all combine to give the town a genuinely lived-in, historic charm rather than a manufactured one. It's a place where locals actually walk to dinner at Left Bank or Perry's, grab coffee before catching a matinee, and run into neighbors doing the same. The town's listing on the National Register of Historic Places isn't just a plaque — it's visible in nearly every storefront and cottage along the main drag. For buyers who want genuine walkability, historic character, and small-town charm within easy reach of San Francisco, Downtown Larkspur is one of Marin's most complete packages.",
    images: []
  },
  {
    name: "College Park",
    slug: "larkspur-college-park",
    town: "Larkspur",
    zip: "94939",
    builtEra: "Predominantly mid-1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "College Park is one of Larkspur's quieter, more residential in-town neighborhoods — a genuinely walkable pocket that puts buyers within easy reach of downtown's shops and the Lark Theater without paying for canyon views or waterfront frontage. It offers a practical, established feel with mid-century housing stock that's been steadily updated over the decades, appealing to buyers who want Larkspur's small-town charm and top-rated schools in a more understated, everyday package. It's the kind of neighborhood where the appeal isn't a single standout feature but the whole package — good schools, an easy walk to town, and genuine neighborhood stability.",
    images: []
  },
  {
    name: "Heather Gardens",
    slug: "larkspur-heather-gardens",
    town: "Larkspur",
    zip: "94939",
    builtEra: "Predominantly mid-1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "3–5 min", peak: "6–10 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Heather Gardens is a highly desirable, established Larkspur neighborhood just blocks from historic downtown — close enough to walk to shops, restaurants, the movie theater, and the library, while still offering the kind of private yards and mature landscaping that make a house feel like a genuine home rather than a starter property. Homes here tend to sit on flat, sunny lots with real character — mature fruit trees, hardwood floors, and versatile layouts that work for growing families or multi-generational living. A community park anchors the neighborhood's social life. For buyers who want walkability without sacrificing a real yard and a settled, established feel, Heather Gardens is one of Larkspur's most sought-after addresses.",
    images: []
  },
  {
    name: "Larkspur Landing / Greenbrae",
    slug: "larkspur-larkspur-landing",
    town: "Larkspur",
    zip: "94939",
    builtEra: "1940s (planned community)",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "22–27 min", peak: "38–55 min" }
    ],
    description: "Larkspur Landing offers a genuinely different Larkspur experience — rolling, ridgeline streets designed in the 1940s by planner Niels Shultz specifically to preserve the area's mature tree canopy (the name Greenbrae literally means \"green hillside\" in Gaelic). Homes here climb the hillside toward panoramic views of Mount Tamalpais, and the neighborhood's daily rhythm is genuinely oriented around its excellent schools, making it a natural draw for families. It's also home to Marin's main ferry terminal, giving residents an easy, scenic commute option into San Francisco's Financial District without touching bridge traffic. For buyers who want hillside views, strong schools, and a genuinely painless SF commute all in one address, Larkspur Landing delivers a package that's hard to find elsewhere in Marin.",
    images: []
  },
  {
    name: "Larkspur Marina",
    slug: "larkspur-larkspur-marina",
    town: "Larkspur",
    zip: "94939",
    builtEra: "Mid-to-late 1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "23–28 min", peak: "38–58 min" }
    ],
    description: "Larkspur Marina puts waterfront living within easy reach of a walkable downtown — a neighborhood where the natural splendor of the bay takes center stage, with homes offering direct or near-direct water access and views that change with the tide. It's a genuinely unique Marin setting: boating and waterfront recreation are part of daily life here, not just a weekend activity, while downtown Larkspur's restaurants and shops remain just minutes away. For buyers who want a marina lifestyle without sacrificing proximity to town, Larkspur Marina offers a compelling, distinctive answer.",
    images: []
  },
  {
    name: "Meadowwood",
    slug: "larkspur-meadowwood",
    town: "Larkspur",
    zip: "94939",
    builtEra: "1960s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Meadowwood is Larkspur living at its most quietly luxurious — a neighborhood of 1960s-built homes that have been steadily updated with modern finishes and features, giving buyers the best of both eras: established, mature landscaping and a settled neighborhood feel, paired with the kind of contemporary comfort today's buyers expect. It's the kind of place where curb appeal is consistently strong across the entire neighborhood, not just a standout property here and there, making it a genuinely reliable choice for buyers who want Larkspur's lifestyle without any surprises. For buyers seeking understated luxury and a well-established, cohesive neighborhood, Meadowwood delivers exactly that.",
    images: []
  },
  {
    name: "Murray Park",
    slug: "larkspur-murray-park",
    town: "Larkspur",
    zip: "94939",
    builtEra: "Predominantly mid-1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "3–5 min", peak: "6–10 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Murray Park is one of Larkspur's classic in-town residential pockets — a genuinely walkable neighborhood offering easy access to downtown's restaurants, the Lark Theater, and top-rated schools, all within a settled, established setting. It's a practical, well-loved neighborhood where the draw isn't one flashy feature but the complete package: proximity, schools, and Larkspur's small-town charm, all wrapped into an accessible, everyday-livable address.",
    images: []
  },
  {
    name: "Palm Hill",
    slug: "larkspur-palm-hill",
    town: "Larkspur",
    zip: "94939",
    builtEra: "Early 1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Larkspur", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Palm Hill is one of Larkspur's most distinctive enclaves — a neighborhood reached via the Alexander Avenue bridge over the Corte Madera-Larkspur bike path, named for the Mexican fan palms planted here in the early 1900s, with streets named after trees that give the whole area a genuinely storybook feel. The housing stock leans Craftsman, Spanish, and California bungalow, and homes here have historically sold among the fastest in the city — a clear signal of how much buyers love the setting once they discover it. For buyers who want historic character, a distinctive sense of place, and easy access to the bike path connecting Larkspur to Corte Madera, Palm Hill offers something genuinely different from the rest of town.",
    images: []
  },
  {
    name: "Chapman Park",
    slug: "corte-madera-chapman-park",
    town: "Corte Madera",
    zip: "94925",
    builtEra: "1950s–1960s, with some earlier cottage-era homes",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Corte Madera", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "27–32 min", peak: "42–62 min" }
    ],
    description: "Chapman Park sits on the west side of town, where older ranch-style homes line lagoons fed from Mt. Tamalpais alongside a mix of California cottages and hillside homes with bay views. It's a genuinely varied neighborhood architecturally, giving buyers real range — from classic mid-century ranch layouts to more storied cottage-style homes — all within the same walkable pocket of town. Water access and views are a real draw here, with lagoon-adjacent properties offering a rare blend of suburban practicality and genuine natural beauty. For buyers who want variety, water proximity, and an established Corte Madera address, Chapman Park delivers a distinctive mix that's hard to find in one neighborhood elsewhere in Marin.",
    images: []
  },
  {
    name: "Christmas Tree Hill",
    slug: "corte-madera-christmas-tree-hill",
    town: "Corte Madera",
    zip: "94925",
    builtEra: "Early 1900s, with ongoing hillside infill",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Corte Madera", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "27–32 min", peak: "42–62 min" }
    ],
    description: "Christmas Tree Hill is Corte Madera's most picturesque hillside neighborhood — narrow, winding streets first laid out by early 20th-century developers to draw train-arriving buyers up the hill to available vacation lots, a history that's still visible in the neighborhood's historic stair system and diverse mix of homes. Bay views are the norm here, and at the top of the hill, trails lead directly out to the open expanse of Mt. Tamalpais and connect to Mill Valley, Larkspur, and Kentfield — genuine hiking access right from the neighborhood. It's a peaceful, tree-filled setting beloved for its dog-friendly trails and abundant nature. For buyers who want dramatic views, direct trail access, and a historic hillside setting, Christmas Tree Hill is one of Corte Madera's most rewarding addresses.",
    images: []
  },
  {
    name: "Old Town",
    slug: "corte-madera-old-town",
    town: "Corte Madera",
    zip: "94925",
    builtEra: "Late 1800s–1930s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Old Town is the historic heart of Corte Madera — tree-lined streets and quaint homes that trace back to the town's days as a stop on the Northwestern Pacific Railroad, when the timber industry and the arrival of the railroad first put Corte Madera on the map. It's often called the heart of town for good reason: a genuine blend of historic charm and everyday convenience, bordered by Corte Madera Town Park and within easy reach of both San Francisco and the rest of Southern Marin. For buyers who want a home with real history and a walkable, established feel, Old Town delivers Corte Madera's most authentic, storied address.",
    images: []
  },
  {
    name: "Marin Estates / Mariner",
    slug: "corte-madera-marin-estates-mariner",
    town: "Corte Madera",
    zip: "94925",
    builtEra: "1950s–1990s, with a concentrated planned-community phase in the late 1980s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Corte Madera", typical: "8–10 min", peak: "12–18 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Marin Estates and the surrounding Mariner neighborhoods are Corte Madera's bayside enclave — interconnected communities with curving streets that climb the hillside, offering sweeping bay panoramas, East Bay skyline views, and Mount Tamalpais as a backdrop. Most homes date from the 1950s through the 1980s, many significantly upgraded or fully rebuilt over the years, while a concentrated planned-community phase in the late 1980s added roughly 300 turnkey homes, townhomes, and condos with well-maintained common areas. The neighborhoods border the protected Ring Mountain Nature Preserve and Corte Madera Ecological Reserve, giving residents rare, direct access to tidal marshland open space and wildlife habitat. For buyers who value water views, sunshine, and low-maintenance living close to protected open space, Marin Estates and Mariner are among Corte Madera's most desirable addresses.",
    images: []
  },
  {
    name: "Meadowsweet",
    slug: "corte-madera-meadowsweet",
    town: "Corte Madera",
    zip: "94925",
    builtEra: "Predominantly 1950s–1970s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Corte Madera", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Meadowsweet offers a quieter, more residential side of Corte Madera — an established neighborhood with mid-century roots that's evolved into a settled, family-friendly pocket of town, all while staying close to Corte Madera's excellent shopping centers, including the Village and Town Center, both anchored by major retailers and a well-loved weekly farmers market. It's a practical, well-located address for buyers who want easy access to shopping, dining, and top-rated schools without paying a premium for water views or hillside drama. For buyers who prioritize convenience and everyday livability, Meadowsweet delivers a genuinely comfortable, central Corte Madera lifestyle.",
    images: []
  },
  {
    name: "The Shores",
    slug: "corte-madera-the-shores",
    town: "Corte Madera",
    zip: "94925",
    builtEra: "Predominantly 1960s–1980s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Corte Madera", typical: "8–10 min", peak: "12–18 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "The Shores offers Corte Madera's most direct connection to the bay — a waterfront-adjacent neighborhood where the town's tidal marshlands and protected open space are practically part of the backyard. It's a setting that appeals to buyers who want genuine proximity to water and wildlife habitat while still being minutes from Corte Madera's shopping centers and easy freeway access to San Francisco. For buyers drawn to Marin's natural beauty and water-adjacent living, without sacrificing convenience, The Shores is a compelling, distinctive choice.",
    images: []
  },
  {
    name: "Downtown Mill Valley",
    slug: "mill-valley-downtown",
    town: "Mill Valley",
    zip: "94941",
    builtEra: "1900–1925",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Downtown Mill Valley is one of Marin's most storied addresses — a walkable, redwood-shaded town center that grew up around the old North Pacific Coast Railroad depot and never lost its village charm. Lytton Square anchors the scene with independent bookstores, cafes, and restaurants that feel more like community living rooms than businesses, and the surrounding blocks are lined with early 1900s craftsman and Victorian homes that give the town its unmistakable character. Buyers drawn here want to walk to dinner, catch a film at the historic Sequoia Theatre, and live somewhere that feels genuinely lived-in rather than curated for tourists — even though tourists come anyway. It's the kind of neighborhood where mature redwoods shade the streets and a slower, more intentional pace of life feels built into the address itself.",
    images: []
  },
  {
    name: "Tamalpais Valley (Tam Valley) / Almonte",
    slug: "mill-valley-tamalpais-valley-almonte",
    town: "Mill Valley",
    zip: "94941",
    builtEra: "1950s–1970s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Mill Valley", typical: "8–10 min", peak: "12–16 min" },
      { destination: "San Francisco (via 101)", typical: "22–27 min", peak: "38–55 min" }
    ],
    description: "Tamalpais Valley and neighboring Almonte offer a more relaxed, laid-back version of Mill Valley living — flatter terrain, easy access to Highway 101, and a genuine sense of being tucked into a quiet valley at the base of Mt. Tamalpais without the premium of the hillside estates closer to downtown. Mid-century development here means practical, well-built ranch and split-level homes that have aged into genuine value, appealing to buyers who want space and easy living over architectural drama. The valley's proximity to Muir Beach and the Golden Gate National Recreation Area gives outdoor-minded buyers direct access to some of Marin's best hiking and coastal trails, while still being close enough to Mill Valley's downtown and Highway 101 for an easy commute. It's Mill Valley's most accessible entry point — genuine mountain-town character without the steepest price tag.",
    images: []
  },
  {
    name: "Homestead Valley",
    slug: "mill-valley-homestead-valley",
    town: "Mill Valley",
    zip: "94941",
    builtEra: "1920s–1950s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Mill Valley", typical: "8–10 min", peak: "12–16 min" },
      { destination: "San Francisco (via 101)", typical: "27–32 min", peak: "42–62 min" }
    ],
    description: "Homestead Valley is Mill Valley at its most bohemian and tucked-away — a hillside neighborhood of cozy 1920s-through-1950s cottages nestled among redwoods and bay laurel, connected by a network of pedestrian paths and staircases that give the whole area a genuinely storybook feel. It's a place where the outdoors isn't a backdrop but a daily reality: trails lead directly from many streets into Mt. Tamalpais's watershed lands, and the community itself has a close-knit, artistic energy that residents fiercely love. Homes here tend to be smaller and more idiosyncratic than newer Marin subdivisions, appealing to buyers who want genuine character, privacy, and a real sense of place over square footage. For buyers who dream of a cabin-in-the-woods feeling without leaving Marin's excellent schools and short commute to San Francisco, Homestead Valley delivers something few other neighborhoods can match.",
    images: []
  },
  {
    name: "Cascade Canyon",
    slug: "mill-valley-cascade-canyon",
    town: "Mill Valley",
    zip: "94941",
    builtEra: "1920s–1950s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Mill Valley", typical: "5–8 min", peak: "8–12 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Cascade Canyon is Mill Valley's most quintessentially redwood-shaded address — a narrow, winding canyon neighborhood where homes from the 1920s through the 1950s sit tucked among towering redwoods along Cascade Creek, just steps from Old Mill Park and the Cascade Falls trailhead. It's genuinely one of the most picturesque settings in Marin, with a history tied to early landscape painters and creative residents drawn to the canyon's natural beauty. Living here means daily walks beneath the redwood canopy, the sound of the creek running past your property line, and a level of privacy and seclusion that's remarkable given the proximity to downtown Mill Valley's restaurants and shops just a short walk away. For buyers who want to live inside the forest rather than just visit it, Cascade Canyon is one of Marin's most special addresses.",
    images: []
  },
  {
    name: "Strawberry",
    slug: "mill-valley-strawberry",
    town: "Mill Valley",
    zip: "94941",
    builtEra: "1950s–1970s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Mill Valley", typical: "8–10 min", peak: "12–16 min" },
      { destination: "San Francisco (via 101)", typical: "20–25 min", peak: "35–55 min" }
    ],
    description: "Strawberry is Mill Valley's most practical, family-friendly answer — a peninsula neighborhood jutting into Richardson Bay with direct freeway access, excellent schools, and a genuinely strong sense of community built up during its 1950s-through-70s development boom. The Strawberry Village shopping center anchors everyday life with groceries, restaurants, and services, while waterfront parks and the Bay Trail give residents direct access to water views and outdoor recreation without leaving the neighborhood. It's a place where families can find more home for their money than in Mill Valley's pricier hillside enclaves, while still carrying the Mill Valley name and school district. For buyers who want genuine convenience — freeway access, shopping, schools, and water views — all in one practical, well-established package, Strawberry delivers.",
    images: []
  },
  {
    name: "Blithedale Canyon",
    slug: "mill-valley-blithedale-canyon",
    town: "Mill Valley",
    zip: "94941",
    builtEra: "1900–1925",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown Mill Valley", typical: "5–8 min", peak: "8–12 min" },
      { destination: "San Francisco (via 101)", typical: "25–30 min", peak: "40–60 min" }
    ],
    description: "Blithedale Canyon carries some of Mill Valley's deepest history — the neighborhood takes its name from the old Blithedale Hotel, a Victorian-era resort that once drew San Francisco visitors up the canyon by horse-drawn carriage to escape the city's fog. That resort-town heritage is still visible in the neighborhood's early 1900s craftsman and Victorian homes, tucked into a lushly wooded canyon just west of downtown. It's a genuinely storied, established neighborhood — walkable to Lytton Square, but with a quieter, more residential feel once you're up in the canyon itself. For buyers drawn to Mill Valley's historic character and redwood-canyon setting, but who want a bit more separation from downtown's daily bustle, Blithedale Canyon offers the best of both — history, nature, and proximity, all in one address.",
    images: []
  },
  {
    name: "Downtown / The Hub",
    slug: "san-anselmo-downtown-the-hub",
    town: "San Anselmo",
    zip: "94960",
    builtEra: "Early 1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "San Francisco (via 101)", typical: "30–35 min", peak: "50–75 min" }
    ],
    description: "Downtown San Anselmo grew up around \"the Hub\" — the old rail junction where Sir Francis Drake Boulevard, Red Hill Avenue, and Center Boulevard still meet, a crossroads that's been connecting the Ross Valley to West Marin since the town incorporated in 1907. Today, San Anselmo Avenue is lined with independent restaurants, wine bars, coffee shops, and boutiques that have been there long enough to feel like genuine institutions rather than trendy pop-ups. San Anselmo Creek runs behind the main drag, hills rise on every side, and the town sits in one of Marin's warmest, sunniest microclimates. It's a place where dogs are welcome everywhere and the community actually means it. For buyers who want authentic small-town character, walkability, and a genuine sense of place, Downtown San Anselmo is one of Marin's most beloved addresses.",
    images: []
  },
  {
    name: "Sleepy Hollow",
    slug: "san-anselmo-sleepy-hollow",
    town: "San Anselmo",
    zip: "94960",
    builtEra: "1939 onward, with continued development through the 1940s–60s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Anselmo", typical: "8–10 min", peak: "12–18 min" },
      { destination: "San Francisco (via 101)", typical: "33–38 min", peak: "55–80 min" }
    ],
    description: "Sleepy Hollow is San Anselmo's semi-rural retreat — a unique community tucked into its own valley along Butterfield Road, dating back to 1939 and known for generous lot sizes, diverse architecture (including a small pocket of Eichler mid-century modern homes), and whimsical street names straight out of Washington Irving. The neighborhood has an active homes association with a community pool, clubhouse, tennis courts, and a genuinely strong sense of community — swim teams, scouting troops, and women's clubs all call Sleepy Hollow home. Surrounded by grassy, tree-studded hills with direct hiking and horseback trail access, it offers buyers a rare sense of space and privacy within the San Anselmo school district. For buyers who want room to breathe — bigger lots, a country-home character, and genuine natural beauty — Sleepy Hollow is the clearest answer in the San Anselmo area.",
    images: []
  },
  {
    name: "The Seminary / Sunnyside",
    slug: "san-anselmo-the-seminary-sunnyside",
    town: "San Anselmo",
    zip: "94960",
    builtEra: "Early 1900s",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Anselmo", typical: "3–5 min", peak: "6–10 min" },
      { destination: "San Francisco (via 101)", typical: "30–35 min", peak: "50–75 min" }
    ],
    description: "The Seminary and Sunnyside neighborhood, nestled on the Ross/San Anselmo border, is arguably the area's most coveted pocket — centered around the historic San Francisco Theological Seminary, with the neighborhood's true character found along Sunnyside Avenue itself. As one of San Anselmo's oldest residential tracts, it's famous for genuine walk-to-town convenience, flat, sunny lots, and a stately mix of grand historic estates, eco-modern contemporaries, and classic Craftsman homes. High-ranking Wade Thomas Elementary serves the area, making it a natural draw for families who want both prestige and practicality. For buyers who want San Anselmo's most historic, walkable, and quietly majestic address, the Seminary and Sunnyside deliver.",
    images: []
  },
  {
    name: "Yolanda District / Winship Park",
    slug: "san-anselmo-yolanda-district",
    town: "San Anselmo",
    zip: "94960",
    builtEra: "Pre-1940",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "",
    commuteTimes: [
      { destination: "Downtown San Anselmo", typical: "5–8 min", peak: "10–15 min" },
      { destination: "San Francisco (via 101)", typical: "30–35 min", peak: "50–75 min" }
    ],
    description: "The Yolanda District and Winship Park offer a genuinely unusual depth of history for Marin — pre-1940 bungalow blocks that give San Anselmo's housing stock a character rarely found elsewhere in the county. Original-detail homes sit alongside more recently updated properties, giving buyers real range in how much vintage charm versus modern renovation they want in a single walkable neighborhood. It's a slower, more residential pocket of town, still close enough to San Anselmo's downtown restaurants and shops for easy day-to-day living. For buyers who appreciate genuine pre-war character and original architectural detail, the Yolanda District and Winship Park offer some of San Anselmo's most historically rich housing stock.",
    images: []
  }
];
