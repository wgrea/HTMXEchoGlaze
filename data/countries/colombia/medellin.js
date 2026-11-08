module.exports = {
  id: 'MDE',
  name: 'Medellín',
  type: 'regional-hub',
  costMultiplier: 1.1,
  avoidIf: [
    'Sensitive to steep hills and walking inclines',
    'Aversion to loud Reggaeton and aggressive nightlife energy',
    'Low tolerance for "Digital Nomad" gentrification bubbles'
  ],
  safetyPattern: {
    day: 3,
    night: 2,
    notes: 'Stick to well-lit areas in Poblado/Laureles. "No dar papaya" (Don’t show off tech) is the local rule.'
  },
  foodAffordability: {
    grocery: 8,
    streetFood: 9,
    diningOut: 8
  },
  foodStrategy: {
    breakfast: { bestValue: "Arepa de Huevo + Coffee", cheapest: "Grocery: Pan de Bono" },
    lunch: { bestValue: "Menu del Día (Soup, Main, Juice)", cheapest: "Street: Empanadas de Iglesia" },
    dinner: { bestValue: "Bandeja Paisa (Split between two)", cheapest: "Salchipapas (Street food cart)" },
    healthyCheap: "Fruit salads from street vendors are massive and cost ~€1.50. Look for 'Corrientazos' for balanced lunches."
  },
  wifiScore: 4, // 5G is solid; fiber is standard in stay-zones
  coworkingDensity: 9,
  englishLevel: 4,
  vibe: ['Tropical-Urban', 'Innovative', 'Noisy'],
  seasonalMultipliers: {
    winter: 1.3,
    summer: 0.9,
    shoulder: 1.0
  },
  stayOptions: [
    {
      id: 'los-patios',
      name: 'Los Patios',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Separate Cowork Building', 'Gym', 'Rooftop workspace', 'Pod-style beds'],
      priceTier: 2
    },
    {
      id: 'black-sheep-medellin',
      name: 'Black Sheep Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'chill',
      amenities: ['Quiet common areas', 'Stable fiber', 'Outdoor terrace', 'Fully equipped kitchen'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 10,
    lateNightDining: 8,
    musicScene: 10,
    danceScene: 10,
    barDensity: 10,
    drinkingCulture: 9.0, // Medellín has a vibrant drinking culture with a focus on socializing, from craft cocktail bars to lively salsa clubs.
    safetyAtNight: 4,
    socialMeetups: 10,
    waterActivities: 2,
    natureAccess: 8, // Proximity to Guatapé/Arví
    festivalCulture: 9,
    socialProximity: 10,
    soloFriendly: 9,
    expatCommunityStrength: 10
  }
};