module.exports = {
  id: 'DOH',
  name: 'Doha',
  type: 'capital',
  costMultiplier: 1.8,
  avoidIf: [
    'Walking as a primary transport (Non-central areas)',
    'Low tolerance for 45°C+ summer peaks',
    'Current March 2026 regional security tensions'
  ],
  safetyPattern: {
    day: 5,
    night: 5,
    notes: 'Statistically one of the safest cities globally; follow local laws strictly.'
  },
  foodAffordability: {
    grocery: 5,
    streetFood: 7, // Souq Waqif offers good value
    diningOut: 4
  },
  foodStrategy: {
    breakfast: { bestValue: "Karak Tea + Chapati (Katara)", cheapest: "Grocery: Labneh + Pita" },
    lunch: { bestValue: "Mandi/Machboos (Shared Plate)", cheapest: "Street: Turkish Cafeteria Shawarma" },
    dinner: { bestValue: "Souq Waqif: Persian/Iraqi Grills", cheapest: "Food Court: Local chains" },
    dessert: { bestValue: "Tradition: Umm Ali", cheapest: "Grocery: Dates" },
    healthyCheap: "Local 'hypermarkets' (Lulu/Carrefour) have extensive prepared salad bars."
  },
  wifiScore: 10,
  coworkingDensity: 9,
  englishLevel: 10,
  vibe: ['Ultramodern', 'Pristine', 'Diplomatic'],
  seasonalMultipliers: {
    winter: 1.5,
    summer: 0.6, // Significant hotel discounts in summer
    shoulder: 1.0
  },
  stayOptions: [
    {
      id: 'work-stay-doha',
      name: 'Bin Al-Sheikh Coliving',
      type: 'coliving',
      verifiedWifi: true,
      socialTone: 'professional',
      amenities: ['Ergonomic Desks', 'Meeting Rooms', 'Gym', 'High-speed Fiber'],
      priceTier: 3
    },
    {
      id: 'selina-nomad-doha',
      name: 'Proposed Nomad-Hub (West Bay)',
      type: 'coliving',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Community Events', 'Pool', 'Shared Kitchen'],
      priceTier: 3
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 5,
    lateNightDining: 9,
    musicScene: 4,
    danceScene: 2,
    barDensity: 4,
    drinkingCulture: 1.5, // Doha has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 10,
    socialMeetups: 6,
    waterActivities: 9,
    snowActivities: 1,
    natureAccess: 4,
    festivalCulture: 7,
    socialProximity: 6,
    soloFriendly: 8,
    expatCommunityStrength: 9
  }
};