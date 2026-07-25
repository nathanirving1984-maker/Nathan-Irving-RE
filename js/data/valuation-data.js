// Nathan Irving, REALTOR® — Home Valuation Estimator data
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
  ],
  // Adjusts the town's $/sqft baseline for property type. Single-family is the
  // baseline (1.00); other types trade at a discount/premium per BAREIS norms.
  // Land has no per-sqft-of-building basis, so it's handled separately in the UI.
  propertyTypeMultipliers: {
    "Single-family": 1.00,
    "Condo": 0.82,
    "Townhouse": 0.88,
    "Multi-family": 0.93
  },
  // Adjusts for reported condition/upgrade level relative to "average."
  conditionMultipliers: {
    dated: 0.88,
    average: 1.00,
    updated: 1.10,
    luxury: 1.22
  }
};
