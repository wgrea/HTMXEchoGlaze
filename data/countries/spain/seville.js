module.exports = {
  id: 'SVQ',
  name: 'Seville',
  type: 'regional-hub',
  costMultiplier: 1.2,
  avoidIf: [
    'Extreme heat intolerance (June–August often exceeds 40°C)',
    'Requires fast-paced "hustle" culture',
    'Arriving during Semana Santa/Feria without 6 months lead time'
  ],
  safetyPattern: {
    day: 5,
    night: 5,
    notes: 'One of the safest feeling cities in Spain. Relaxed atmosphere even in the early hours.'
  },
  foodAffordability: {
    grocery: 8,
    streetFood: 6,
    diningOut: 9
  },
  foodStrategy: {
    breakfast: { bestValue: "Tostada con Tomate y Jamón + Café", cheapest: "Bar El Comercio: Churros" },
    lunch: { bestValue: "Mercado de Triana: Fresh stalls", cheapest: "La Gorda Te Alimenta: €3-5 Tapas" },
    dinner: { bestValue: "Bodega Santa Cruz: Standing tapas", cheapest: "Montaditos (100 Montaditos on Wednesdays)" },
    dessert: { bestValue: "Torrijas (Seasonal)", cheapest: "Heladeria Rayas" },
    healthyCheap: "Triana Market is the utility play here—high quality local proteins and fruit at neighborhood prices."
  },
  wifiScore: 4,
  coworkingDensity: 6,
  englishLevel: 5,
  vibe: ['Traditional', 'Warm', 'Ornate'],
  seasonalMultipliers: {
    winter: 1.1,
    summer: 0.6, // Significant 'heat discount' on housing
    shoulder: 2.0 // Peaks during Spring festivals
  },
  stayOptions: [
    {
      id: 'joy-setas-coworking',
      name: 'JOY Setas Coworking',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Ergonomic chairs', 'Restored Andalusian patio', 'Rooftop'],
      priceTier: 1
    },
    {
      id: 'the-nomad-hostel',
      name: 'The Nomad Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social-lite',
      amenities: ['Shared kitchen', 'Eco-friendly', 'Workspace'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 8,
    lateNightDining: 9,
    musicScene: 7, // High Flamenco focus
    danceScene: 7,
    barDensity: 10,
    drinkingCulture: 9.0, // Seville has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 9,
    socialMeetups: 7,
    waterActivities: 4, // River only
    snowActivities: 1,
    natureAccess: 6,
    festivalCulture: 10,
    socialProximity: 10,
    soloFriendly: 9,
    expatCommunityStrength: 6
  }
};