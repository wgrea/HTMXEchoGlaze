module.exports = {
  id: 'BIR',
  name: 'Bir-Billing',
  type: 'mountain-village',
  costMultiplier: 0.9,
  avoidIf: [
    'Requires a "Big City" nightlife scene',
    'Cannot handle frequent (but usually short) power fluctuations',
    'Aversion to paragliders landing near your workspace'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Extremely safe, communal mountain vibe. Walking at night is common and safe.'
  },
  foodAffordability: {
    grocery: 9,
    streetFood: 10,
    diningOut: 8
  },
  foodStrategy: {
    breakfast: { bestValue: "Tibetan: Siddu + Ghee", cheapest: "Local: Aloo Paratha" },
    lunch: { bestValue: "Cafe: Himalayan Thali", cheapest: "Street: Maggi (The classic dev fuel)" },
    dinner: { bestValue: "Garden Cafe: Mutton Momos", cheapest: "Roadside: Dal Rice" },
    dessert: { bestValue: "Bakery: Apple Pie", cheapest: "Grocery: Yak Cheese" },
    healthyCheap: "The local Tibetan colony shops provide fermented greens and high-protein barley options at very low prices."
  },
  wifiScore: 4, // Fiber exists, but needs a 5G backup for high-stakes calls
  coworkingDensity: 8,
  englishLevel: 8,
  vibe: ['Zen', 'Adventurous', 'Developer-friendly'],
  seasonalMultipliers: {
    winter: 0.7,
    summer: 1.5, // Paragliding season peak
    shoulder: 1.0
  },
  stayOptions: [
    {
      id: 'zostel-plus-bir',
      name: 'Zostel Plus Bir',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Ergonomic work pods', 'Library', 'Power backup', 'Community kitchen'],
      priceTier: 1
    },
    {
      id: 'the-hosteller-bir',
      name: 'The Hosteller Bir',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Desk setups', 'Cafe', 'Bonfire area'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 3,
    lateNightDining: 2,
    musicScene: 4,
    danceScene: 2,
    barDensity: 3,
    drinkingCulture: 3.0, // Bir has a small but vibrant drinking culture centered around socializing, with a few local bars and cafes that serve alcohol.
    safetyAtNight: 9,
    socialMeetups: 8,
    waterActivities: 2,
    snowActivities: 5,
    natureAccess: 10,
    festivalCulture: 6,
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 7
  }
};