// data/countries/argentina/buenos-aires.js
module.exports = {
  id: 'BUE',
  name: 'Buenos Aires',
  type: 'metropolis',
  costMultiplier: 1.0, // High inflation but favorable exchange rates for USD/EUR
  avoidIf: [
    'Aversion to late-night noise (dinner starts at 10 PM)',
    'Low tolerance for economic instability/currency complexity',
    'Looking for a tropical or beach environment'
  ],
  safetyPattern: {
    day: 4,
    night: 3,
    notes: 'Palermo and Recoleta are very safe. San Telmo is fine but watch your pockets in crowds.'
  },
  foodAffordability: {
    grocery: 9,
    streetFood: 8,
    diningOut: 8
  },
  foodStrategy: {
    breakfast: { bestValue: "Medialunas + Café con Leche combo", cheapest: "Facturas from a bakery" },
    lunch: { bestValue: "Empanada shops (order by the dozen)", cheapest: "Choripán from a park stall" },
    dinner: { bestValue: "Parrilla (Steak) in Almagro", cheapest: "Pizza by the slice (Guerrín style)" },
    healthyCheap: "Local 'Verdulerias' have incredibly cheap high-quality produce. Beef is cheaper than chicken."
  },
  wifiScore: 5, // Generally excellent fiber in the city
  coworkingDensity: 10,
  englishLevel: 8,
  vibe: ['European-Chic', 'Intellectual', 'Gritty-Romantic'],
  seasonalMultipliers: {
    winter: 0.8,
    summer: 1.2,
    shoulder: 1.0
  },
  stayOptions: [
    {
      id: 'viajero-buenos-aires',
      name: 'Viajero Buenos Aires',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Work desks in rooms', 'Dedicated meeting rooms', 'Rooftop + Indoor pool', 'San Telmo location'],
      priceTier: 2
    },
    {
      id: 'che-juan-ba',
      name: 'Che Juan BA',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'ultra-quiet',
      amenities: ['Modern build', 'Quiet pods', 'Communal laptop area', 'Central location'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 10,
    lateNightDining: 10,
    musicScene: 10,
    danceScene: 10, // Tango + Techno
    barDensity: 10,
    drinkingCulture: 8.5, // Buenos Aires has a vibrant drinking culture with a focus on socializing, from traditional parrillas to trendy cocktail bars.
    safetyAtNight: 7,
    socialMeetups: 10,
    natureAccess: 4, // Mostly urban parks; need a ferry to Uruguay for beaches
    festivalCulture: 9,
    socialProximity: 10,
    soloFriendly: 9,
    expatCommunityStrength: 9
  }
};