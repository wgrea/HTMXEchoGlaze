module.exports = {
  id: 'AMM',
  name: 'Amman',
  type: 'capital',
  costMultiplier: 1.3,
  avoidIf: [
    'Severe mobility or knee issues (extreme hill grades and missing sidewalk layers)',
    'Requires massive, high-volume nightlife districts to feel socially connected'
  ],
  safetyPattern: {
    day: 5,
    night: 4.5,
    notes: 'Extremely secure city. Downtown (Balad) and Rainbow Street are highly active, welcoming, and safe well past midnight.'
  },
  foodStrategy: {
    breakfast: { bestValue: "Hashem Restaurant: Hummus, Falafel & Fuul set", cheapest: "Street: Ka'ak sesame bread with baked egg and cheese" },
    lunch: { bestValue: "Local diner: Half chicken with spiced Mandi rice", cheapest: "Street: Classic Falafel sandwich on the go" },
    dinner: { bestValue: "Al Quds or Jabri: Traditional Mansaf (Lamb cooked in fermented jameed yogurt)", cheapest: "Street: Shawarma Arabi platter" },
    dessert: { bestValue: "Habibah Sweets: Warm, gooey Knafeh off the tray", cheapest: "Grocery: Mint tea with local dates" },
    healthyCheap: "Local vegetable souks downtown offer incredibly cheap fresh figs, tomatoes, and cucumbers."
  },
  wifiScore: 3, // Stable, functional DSL/Fiber, but handles 30-35 Mbps rather than European gigabit pipes
  coworkingDensity: 3,
  englishLevel: 8, // Very high fluency in westernized and tourist districts (Weibdeh, Rainbow St)
  vibe: ['Ancient', 'Hilly', 'Hospitable'],
  stayOptions: [
    {
      id: 'carob-hostel',
      name: 'Carob Hostel',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Dedicated laptop terrace', 'Organic breakfast included', 'Shared community kitchen', 'Curated local transit loops'],
      priceTier: 2
    },
    {
      id: 'battuta-hostel',
      name: 'Battuta Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Outdoor social garden', 'Laptop-friendly workspace', 'Group dinner events'],
      priceTier: 2
    },
    {
      id: 'nomads-hostel-amman',
      name: 'Nomads Hotel & Hostel',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'mixed',
      amenities: ['Rooftop terrace overlooking downtown', 'Games area', 'Shared kitchen infrastructure', 'Air conditioning'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 6,
    lateNightDining: 9,
    musicScene: 5,
    danceScene: 4,
    barDensity: 6,
    drinkingCulture: 5.0,
    safetyAtNight: 9,
    socialMeetups: 8,
    natureAccess: 7,
    festivalCulture: 4,
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 7,
    snowActivities: 0,
    waterActivities: 2
  },
  countryId: 'JOR'
};