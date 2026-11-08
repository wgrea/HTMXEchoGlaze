module.exports = {
  id: 'OAX',
  name: 'Oaxaca',
  type: 'cultural-hub',
  costMultiplier: 1.2,
  avoidIf: [
    'Aversion to slow-paced environments',
    'Highly sensitive to seasonal allergens or dust',
    'Needs a "Big City" high-rise infrastructure'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Very safe city; stick to the illuminated Centro zones at night.'
  },
  foodAffordability: {
    grocery: 8,
    streetFood: 10,
    diningOut: 9
  },
  foodStrategy: {
    breakfast: { bestValue: "Memelas at Mercado de la Merced", cheapest: "Pan de Yema + Hot Chocolate" },
    lunch: { bestValue: "Comedor Tipico inside the market", cheapest: "Tlayuda from a street cart" },
    dinner: { bestValue: "Itanoni (Corn-focused specialty)", cheapest: "Tacos del Carmen (Street)" },
    healthyCheap: "Fresh fruit waters (Aguas Frescas) are ubiquitous and cheap; seek out the 'Organic Market' for raw snacks."
  },
  wifiScore: 3, // Fiber is expanding but can be spotty; stay with verified spots
  coworkingDensity: 6,
  englishLevel: 5,
  vibe: ['Artisanal', 'Ancestral', 'Vibrant'],
  seasonalMultipliers: {
    winter: 1.4, // Day of the Dead / Christmas peak
    summer: 0.9,
    shoulder: 1.1
  },
  stayOptions: [
    {
      id: 'leveli-coliving',
      name: 'Leveli Coliving & Hostel',
      type: 'colive-hostel',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Dedicated Coworking zone', 'Ergonomic seating', 'High-speed Fiber', 'Quiet rooftop'],
      priceTier: 2
    },
    {
      id: 'hostal-central-oax',
      name: 'Hostal Central',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'chill',
      amenities: ['Dining room doubles as workspace', 'Free coffee/tea all day', 'Quiet patio', 'No party policy'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 7,
    lateNightDining: 8,
    musicScene: 8,
    barDensity: 9,
    drinkingCulture: 8.0, // Oaxaca has a vibrant drinking culture with a focus on socializing, from mezcalerías to traditional pulquerías.
    safetyAtNight: 8,
    socialMeetups: 8,
    natureAccess: 9, // Sierra Norte is world-class for hiking
    festivalCulture: 10,
    socialProximity: 10,
    soloFriendly: 10,
    expatCommunityStrength: 8
  }
};