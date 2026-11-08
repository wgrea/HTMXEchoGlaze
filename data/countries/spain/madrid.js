module.exports = {
  id: 'MAD',
  name: 'Madrid',
  type: 'capital',
  costMultiplier: 1.5,
  avoidIf: [
    'Extreme heat sensitivity (July/August "La Sarten")',
    'Prefer coastal/ocean air',
    'Highly sensitive to late-night noise levels'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Generally very safe; primary risk is professional pickpocketing in Sol/Gran Vía.'
  },
  foodAffordability: {
    grocery: 7,
    streetFood: 5, // "Street food" is rare; replaced by small Tapas
    diningOut: 8
  },
  foodStrategy: {
    breakfast: { bestValue: "Bar: Pan con Tomate + Café", cheapest: "Supermercado: Napolitana de Chocolate" },
    lunch: { bestValue: "Menu del Día: 3-course (2:00 PM)", cheapest: "Museo del Jamón: Bocadillo de Jamón" },
    dinner: { bestValue: "Taverna: Ración sharing", cheapest: "Takeaway: Empanadas Malvón" },
    dessert: { bestValue: "Chocolatería San Ginés", cheapest: "Grocery: Turrón (seasonal)" },
    healthyCheap: "Fruterías in Lavapiés or Tetuán offer high-quality produce at significant discounts over supermarkets."
  },
  wifiScore: 5,
  coworkingDensity: 10,
  englishLevel: 7,
  vibe: ['Energetic', 'Grand-scale', 'Social'],
  seasonalMultipliers: {
    winter: 0.9,
    summer: 0.7, // Prices drop as locals flee the heat
    shoulder: 1.3
  },
  stayOptions: [
    {
      id: 'the-social-hub-madrid',
      name: 'The Social Hub Madrid',
      type: 'hostel/coworking',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Ergonomic coworking lab', 'Rooftop pool', 'Gym', 'Quiet zones'],
      priceTier: 3
    },
    {
      id: 'ok-hostel-madrid',
      name: 'OK Hostel Madrid',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Large kitchen', 'Custom-built bunks', 'Social dinners'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 10,
    lateNightDining: 10,
    musicScene: 8,
    danceScene: 9,
    barDensity: 10,
    drinkingCulture: 9.5, // Madrid has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 8,
    socialMeetups: 9,
    waterActivities: 2,
    snowActivities: 4,
    natureAccess: 5,
    festivalCulture: 8,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 9
  }
};