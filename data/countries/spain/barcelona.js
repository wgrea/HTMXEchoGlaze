module.exports = {
  id: 'BCN',
  name: 'Barcelona',
  type: 'metropolis',
  costMultiplier: 1.8,
  avoidIf: [
    'Strict budget (Highest tourist taxes in Spain as of April 2026)',
    'High sensitivity to "Overtourism" crowds',
    'Aversion to aggressive pickpocketing environments (Las Ramblas/Gothic)'
  ],
  safetyPattern: {
    day: 4,
    night: 3,
    notes: 'Violent crime is low, but petty theft is "professional" tier. Watch your tech in El Raval and the Metro.'
  },
  foodAffordability: {
    grocery: 6,
    streetFood: 4, // Very limited street food culture; mostly sit-down tapas
    diningOut: 7
  },
  foodStrategy: {
    breakfast: { bestValue: "Granja: Café + Ensaïmada", cheapest: "Supermercado Bonpreu: Bakery section" },
    lunch: { bestValue: "Menu del Día in Gràcia (~€14-18)", cheapest: "Boqueria Market: Back-row empanadas" },
    dinner: { bestValue: "Poblenou: Shared tapas away from center", cheapest: "Carrer de Blai: €1.50 Pinxtos" },
    dessert: { bestValue: "Petritxol Street: Churros & Chocolate", cheapest: "Xurreria Trebol" },
    healthyCheap: "Weekly 'Mercats de Barri' (like Mercat de l'Abaceria) offer better produce prices than the tourist-heavy La Boqueria."
  },
  wifiScore: 5,
  coworkingDensity: 10,
  englishLevel: 8,
  vibe: ['Innovative', 'Coastal', 'Architectural'],
  seasonalMultipliers: {
    winter: 0.8,
    summer: 2.8, // Massive spike; avoid July/August
    shoulder: 1.4
  },
  stayOptions: [
    {
      id: 'the-social-hub-poblenou',
      name: 'The Social Hub Poblenou',
      type: 'hybrid',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Dedicated coworking wing', 'Rooftop pool', 'Quiet booths'],
      priceTier: 3
    },
    {
      id: 'la-fabrica-co',
      name: 'La Fabrica & Co',
      type: 'coliving',
      verifiedWifi: true,
      socialTone: 'community',
      amenities: ['Boutique talent hub', 'High-speed fiber', 'Events'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 9,
    musicScene: 10,
    danceScene: 10,
    barDensity: 9,
    drinkingCulture: 9.5, // Barcelona has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 6,
    socialMeetups: 10,
    waterActivities: 9,
    snowActivities: 6, // Proximity to Pyrenees
    natureAccess: 7,
    festivalCulture: 10,
    socialProximity: 8,
    soloFriendly: 8,
    expatCommunityStrength: 10
  }
};