// Nathan Irving Real Estate — Home Valuation Estimator data
// pricePerSqft values are rough town-wide AVERAGES, not precise figures.
// Source: Redfin median sale price/sqft data, pulled July 2026.
// IMPORTANT: These are starting points only. Update periodically using your
// own BAREIS sold-comp data to keep this accurate and defensible. Even a
// once-a-quarter refresh keeps this meaningfully useful.
// lastUpdated is shown to visitors for transparency - update it whenever you change numbers.

const VALUATION_DATA = {
  lastUpdated: "July 2026",
  towns: [
    { name: "Mill Valley", pricePerSqft: 991 },
    { name: "Tiburon", pricePerSqft: 1340 },
    { name: "Sausalito", pricePerSqft: 1200 },
    { name: "Larkspur", pricePerSqft: 998 },
    { name: "Corte Madera", pricePerSqft: 898 },
    { name: "Kentfield", pricePerSqft: 928 },
    { name: "San Rafael", pricePerSqft: 631 },
    { name: "Novato", pricePerSqft: 574 },
    { name: "Marin City", pricePerSqft: 506 },
    { name: "Other Marin County (average)", pricePerSqft: 854 }
  ]
};
