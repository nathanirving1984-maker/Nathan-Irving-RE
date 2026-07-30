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
    description: "Hamilton is a master-planned community built across nine neighborhoods — Bayside, Hamilton Meadows, Hamilton Park, Southgate, Traditions, Inspirations, Sunny Cove, Newport, and The Landing — on the former Hamilton Air Force Base, which closed in 1974 after decades as a West Coast defense hub. Homebuilding ran from 1999 through 2012, so it reads as newer construction, but it's layered onto genuine 1930s history: preserved Spanish Colonial Revival hangars, officer quarters, and the old base theater sit alongside the modern homes, and the district is on the National Register of Historic Places. That mix — new construction with real architectural character — is Hamilton's core selling point, along with Bay Trail access and proximity to Hamilton Field's shops and services.",
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
    description: "Pointe Marin is a master-planned enclave of roughly 340 single-family homes in South Novato's Ignacio Valley, built out by Shea Homes and Centex between 2002 and 2005. Locally, the community splits into two sub-areas — The Breakers (mostly Shea) and The Hideaway (Centex) — with early-2000s Mediterranean and Traditional architectural styles, underground utilities, wide sidewalks, and notably light through-traffic. It sits west of US-101 at the Ignacio Blvd exit, is wind-sheltered relative to other South Novato neighborhoods, and backs up to the Indian Valley Preserve for hiking access. Homes here carry a Mello-Roos (CFD) assessment on top of standard property tax and HOA dues — a detail worth flagging early with buyers, since it affects true monthly carrying cost even though the neighborhood itself shows strong, consistent resale velocity.",
    images: []
  },
  {
    name: "Loma Verde",
    slug: "loma-verde",
    town: "Novato",
    zip: "94947",
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
    description: "Loma Verde is one of Novato's older neighborhoods, tucked into Ignacio Valley just west of Highway 101 and home to Loma Verde Elementary. Despite being fully surrounded by the City, it's technically unincorporated Marin County — a quirk worth knowing when questions come up about permits, services, or governance. Homes are largely modest ranch-style construction from the 1950s and early '60s on quarter-acre lots, which makes it a relative value point of entry into the Ignacio Valley school-and-shopping corridor compared to newer, pricier neighbors like Pointe Marin and Marin Country Club.",
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
    description: "Bel Marin Keys is Novato's signature waterfront community, developed primarily through the 1960s and '70s around three interconnected lagoons in Southeast Novato. Most homes sit on a lagoon lot with private boat dock access, and two locks allow boats out to San Pablo Bay at higher tide. It's genuinely unlike anywhere else in Marin — waterskiing, paddleboarding, and boating right off the back patio. It's not within Novato city limits; it's governed by its own Community Service District, which matters for buyers asking about services, levees, and local governance. Mean sea level here runs around 12 feet, so sea-level-rise resilience is a legitimate and increasingly common buyer question worth being ready to address candidly rather than downplaying.",
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
    description: "San Marin sits in Northwest Novato at the foot of Mount Burdell, roughly two miles west of the 101/Atherton–San Marin Dr exit, and is home to San Ramon Elementary and San Marin High School — one of the district's top-performing high schools. Most homes date from the mid-1960s through the 1970s, typically two-story, four-bedroom houses on roughly a fifth of an acre. The neighborhood's northeast section near Wood Hollow Drive includes the 1990s Partridge Knolls development of homes and townhouses, sometimes locally conflated with the broader San Marin area but distinct in build era and product type. San Marin trades on strong schools, mountain-backdrop setting, and a settled, established feel compared to newer subdivisions closer to the freeway.",
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
    description: "Ignacio has one of Novato's deepest histories — the area was originally Rancho San Jose, granted to Ygnacio Pacheco, and it operated as its own separate railroad-stop settlement before Novato incorporated as a city. Formerly known as Pacheco, the community didn't develop into today's suburban form until after WWII, when military housing tied to Hamilton Air Force Base gave way to traditional single-family construction. Highway 101 now runs directly through the area, and it's the commercial heart of South Novato — Pacheco Plaza, restaurants, a movie theater, and everyday services are all here, making it a genuinely walkable, amenity-rich pocket. \"Ignacio Valley\" is also used more broadly to describe the wider area encompassing Loma Verde, Pointe Marin, and the Marin Country Club neighborhood, each with a distinct build era and price point, so it's worth clarifying with buyers which specific pocket they mean.",
    images: []
  },
  {
    name: "Black Point / Green Point",
    slug: "black-point",
    town: "Novato",
    zip: "94947",
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
    description: "Far Northeast Novato, Black Point was one of the original three rail-era settlements (alongside Ignacio and Novato itself) before the city existed. Locally, \"Black Point\" and \"Green Point\" get used somewhat loosely — old-timers will tell you Green Point isn't a real distinct place — but in practice, people generally mean the area north of Highway 37 when they say Green Point (mostly 1970s homes) and south of Highway 37 for Black Point (a wider mix from the early 1900s to today, with a more rustic, artistic character). It's unincorporated Marin County, not within Novato city limits. Nearby but distinct is StoneTree, a gated early-2000s development wrapped around the StoneTree Golf Club — hilly terrain, view lots, and larger homes, and unlike Black Point/Green Point, StoneTree is within city limits.",
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
    description: "Downtown, or \"Old Town,\" centers on the historic Grant Avenue shopping district — Novato's original commercial heart since the arrival of the Northwestern Pacific Railroad depot in the late 1800s, which is what pulled the town's center from its original Novato Creek location to where Grant Ave sits today. The residential blocks immediately surrounding downtown are a mix of small single-family homes and low-rise multi-unit buildings, mostly from the 1940s and '50s, on the smaller and more walkable end of Novato's housing stock. As you move outward from Grant Ave in any direction, home size, lot size, and build year generally increase — new pockets like Atherton Ranch (larger, newer homes on smaller lots) sit at that outer edge and offer a value trade for walkability. Downtown's appeal is less about square footage and more about lifestyle: restaurants, the Novato History Museum, city offices in the old 1896 Presbyterian church building, and genuine walkability that's rare elsewhere in Novato.",
    images: []
  },
  {
    name: "Marin Country Club Estates",
    slug: "marin-country-club",
    town: "Novato",
    zip: "94949",
    builtEra: "PLACEHOLDER",
    avgSqft: null,
    avgPrice: null,
    amenities: [],
    commuteAccess: "PLACEHOLDER",
    commuteTimes: [], // PLACEHOLDER — e.g. { destination: "Downtown Novato", typical: "8–12 min", peak: "12–18 min" }
    description: "PLACEHOLDER",
    images: []
  }
];
