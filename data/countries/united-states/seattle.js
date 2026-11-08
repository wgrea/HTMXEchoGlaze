module.exports = {
  id: 'SEA',
  name: 'Seattle',
  type: 'hub',
  costMultiplier: 2.1,
  avoidIf: [
    'Hates drizzly weather',
    'Sensitive to "Seattle Freeze" social vibes',
    'No car for nature access'
  ],
  safetyPattern: {
    day: 3,
    night: 2,
    notes: 'Urban-Pockets Pattern — safe in tech hubs (SLU); unpredictable in transit corridors'
  },
  foodAffordability: {
    grocery: 6,
    streetFood: 7,
    diningOut: 4
  },
  foodStrategy: {
  breakfast: { bestValue: "Grocery: Pike Place Piroshky", cheapest: "Convenience: Starbucks (Rewards/Basic)" },
  lunch: { bestValue: "Healthy: Teriyaki (Seattle staple, filling/protein)", cheapest: "Street: Seattle Dog (Cream cheese hot dog)" },
  dinner: { bestValue: "Shared: Dim Sum (International District)", cheapest: "Grocery: PCC Community Markets hot bar" },
  dessert: { bestValue: "Tradition: Molly Moon's Ice Cream", cheapest: "Grocery: Theo Chocolate bar" },
  healthyCheap: "Uwajimaya (International District) has high-quality fish and produce for significantly less than tech-hub markets."
},
  wifiScore: 5,
  coworkingDensity: 5,
  englishLevel: 5,
  vibe: ['Tech hub', 'Outdoor access', 'Coffee culture'],
  seasonalMultipliers: {
    winter: 0.9,
    summer: 1.4,
    shoulder: 1.1
  },
  stayOptions: [
    {
      id: 'liberty-bank',
      name: 'The Stay at Liberty Bank Building',
      type: 'coliving',
      verifiedWifi: true,
      socialTone: 'mixed',
      amenities: ['dedicated coworking lounge', 'gym', 'community kitchen'],
      priceTier: 3
    },
    {
      id: 'american-hostel',
      name: 'American Hotel Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'quiet',
      amenities: ['renovated common room', 'high-tops workspace', 'kitchen'],
      priceTier: 2
    }
  ],
resonanceSignals: {
    nightlifeOverall: 6,
    lateNightDining: 4,
    musicScene: 9,
    danceScene: 5,
    barDensity: 7,
    drinkingCulture: 7.0, // Seattle has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 6,
    socialMeetups: 7,
    waterActivities: 8,
    snowActivities: 8,
    natureAccess: 10,
    festivalCulture: 7,
    socialProximity: 4,
    soloFriendly: 8,
    expatCommunityStrength: 6
  }
};