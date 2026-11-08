module.exports = {
  id: 'MIA',
  name: 'Miami',
  type: 'beach',
  costMultiplier: 1.6,
  avoidIf: [
    'Hates humidity',
    'Dislikes flashy social scenes',
    'Hates traffic friction'
  ],
  safetyPattern: {
    day: 3,
    night: 3,
    notes: 'Tourist-Target Pattern — petty theft in South Beach; Brickell is a safe corporate bubble'
  },
  foodAffordability: {
    grocery: 5,
    streetFood: 8,
    diningOut: 5
  },
  foodStrategy: {
  breakfast: { bestValue: "Street: Ventanita (Cuban Coffee + Croqueta)", cheapest: "Grocery: Publix BOGO deals" },
  lunch: { bestValue: "Healthy: Poke or Ceviche (lunch specials)", cheapest: "Street: Empanadas from a window" },
  dinner: { bestValue: "Shared: Large Cuban Platter (Rice/Beans/Protein)", cheapest: "Grocery: Publix 'PubSub' Sandwich" },
  dessert: { bestValue: "Tradition: Key Lime Pie", cheapest: "Grocery: Frozen Mochi" },
  healthyCheap: "Fresh coconut water from street vendors is cheaper than bottled drinks and highly hydrating in the heat."
},
  wifiScore: 5,
  coworkingDensity: 4,
  englishLevel: 4,
  vibe: ['Beach lifestyle', 'Nightlife', 'Latin culture'],
  seasonalMultipliers: {
    winter: 1.5,
    summer: 0.8,
    shoulder: 1.1
  },
  stayOptions: [
    {
      id: 'viajero-miami',
      name: 'Viajero Miami',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['coworking library', 'pool', 'bar', 'events'],
      priceTier: 3
    }
  ],
resonanceSignals: {
    nightlifeOverall: 10,
    lateNightDining: 8,
    musicScene: 7,
    danceScene: 10,
    barDensity: 9,
    drinkingCulture: 9.0, // Miami has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 6,
    socialMeetups: 7,
    waterActivities: 10,
    snowActivities: 1,
    natureAccess: 7,
    festivalCulture: 9,
    socialProximity: 6,
    soloFriendly: 5,
    expatCommunityStrength: 9
  }
};