// data/countries/azerbaijan/baku.ts
module.exports = {
  id: 'BAK',
  name: 'Baku',
  type: 'capital',
  costMultiplier: 1.4,
  avoidIf: [
    'Hates strong winds ("City of Winds")',
    'High-decibel construction noise sensitivity'
  ],
  safetyPattern: {
    day: 4,
    night: 4,
    notes: 'Extremely safe in central/fountain zones; avoid unlit Soviet-block suburbs'
  },
  foodAffordability: {
    grocery: 6,
    streetFood: 9,
    diningOut: 10
  },
foodStrategy: {
  breakfast: { bestValue: "Bakery: Fresh Tandir + Honey", cheapest: "Grocery: Ayran + Bun" },
  lunch: { bestValue: "Business Lunch: 3-Course Set", cheapest: "Street: Doner Kebab" },
  dinner: { bestValue: "Shared: Saj Ichi (Split 2 ways)", cheapest: "Street: Pirozhki" },
  dessert: { bestValue: "Tradition: Pakhlava + Tea", cheapest: "Grocery: Halva" },
  healthyCheap: "Local fruit stalls (Bazar) offer the best nutrition-to-cost ratio in the Caucasus."
},
  wifiScore: 4,
  coworkingDensity: 4,
  englishLevel: 3,
  vibe: ['Cosmopolitan', 'Historical', 'Modern'],
  seasonalMultipliers: {
    winter: 0.8,
    summer: 2.5,
    shoulder: 1.1
  },
  stayOptions: [
    {
      id: 'sahil-hostel',
      name: 'Sahil Hostel & Hotel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['24-hour business center', 'soundproofed rooms', 'kitchen'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 8,
    lateNightDining: 7,
    musicScene: 6,
    danceScene: 8,
    barDensity: 9,
    drinkingCulture: 4.0, // Baku has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 9,
    socialMeetups: 6,
    waterActivities: 8,
    snowActivities: 7,
    natureAccess: 6,
    festivalCulture: 7,
    socialProximity: 7,
    soloFriendly: 7,
    expatCommunityStrength: 6
  }
};