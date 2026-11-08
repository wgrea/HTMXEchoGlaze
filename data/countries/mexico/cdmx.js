module.exports = {
  id: 'MEX',
  name: 'Mexico City',
  type: 'metropolis',
  costMultiplier: 1.4,
  avoidIf: [
    'Sensitive to high-altitude (2,240m) or poor air quality',
    'Aversion to constant urban background noise (the "Tamales" trucks)',
    'Requires a beach or coastal climate'
  ],
  safetyPattern: {
    day: 4,
    night: 3,
    notes: 'Roma, Condesa, and Coyoacán are very safe; avoid Tepito or Doctores after dark.'
  },
  foodAffordability: {
    grocery: 7,
    streetFood: 10,
    diningOut: 8
  },
  foodStrategy: {
    breakfast: { bestValue: "Chilaquiles from a street stand", cheapest: "Tamal + Atole (Street Cart)" },
    lunch: { bestValue: "Fondas (3-course fixed price lunch)", cheapest: "Tacos al Pastor (5-for-price-of-4 deals)" },
    dinner: { bestValue: "Taquería Orinoco (Premium but high-spec)", cheapest: "Tlacoyos at a local market" },
    healthyCheap: "Juice stands (Jugos) offer massive liters of fresh green juice for ~€2; Fondas usually include a vegetable soup."
  },
  wifiScore: 5,
  coworkingDensity: 10,
  englishLevel: 6,
  vibe: ['Colonial-Modern', 'High-Energy', 'Culinary-Peak'],
  seasonalMultipliers: {
    winter: 1.2, // "Snowbird" peak
    summer: 0.8, // Rainy season discounts
    shoulder: 1.0
  },
  stayOptions: [
    {
      id: 'wanderlust-district',
      name: 'Wanderlust District',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Dedicated quiet workroom', 'High-speed fiber', 'Privacy curtains', 'Communal breakfast'],
      priceTier: 1
    },
    {
      id: 'casa-pancha',
      name: 'Casa Pancha',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'chill',
      amenities: ['Quiet lofts', 'Designer bunks', 'Filter coffee', 'Meditation space'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 10,
    musicScene: 9,
    barDensity: 10,
    drinkingCulture: 8.5, // Mexico City has a vibrant drinking culture with a focus on socializing, from mezcalerías to rooftop bars.
    safetyAtNight: 6,
    socialMeetups: 10,
    natureAccess: 5, // Chapultepec is great, but mountains are a drive
    festivalCulture: 10,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 10
  }
};