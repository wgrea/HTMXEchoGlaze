module.exports = {
  id: 'LIS',
  name: 'Lisbon',
  type: 'capital',
  costMultiplier: 1.8,
  avoidIf: [
    'Suffer from knee/joint issues (extremely hilly)',
    'Seeking a quiet, non-touristy environment',
    'On an ultra-tight budget (rent prices have surged)'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Very safe; watch for pickpockets on Tram 28 and in Baixa/Chiado. Avoid poorly lit alleys in Martim Moniz at late hours.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Padaria: Galão + Torrada", 
      cheapest: "Pastelaria: Espresso + Pastel de Nata (€2-3 total)" 
    },
    lunch: { 
      bestValue: "Prato do Dia (Daily Special) in a Tasca", 
      cheapest: "Bifana (Pork Sandwich) + Imperial (Small Beer)" 
    },
    dinner: { 
      bestValue: "Petiscos (Tapas) in Graça/Alfama", 
      cheapest: "Pinhole-in-the-wall Churrasqueira (Takeaway Chicken)" 
    },
    dessert: { 
      bestValue: "Pastéis de Belém (The original)", 
      cheapest: "Supermarket Arroz Doce" 
    },
    healthyCheap: "Frutarias and local markets like Mercado de Arroios offer affordable fresh produce and legumes."
  },
  wifiScore: 5,
  coworkingDensity: 5,
  englishLevel: 5,
  vibe: ['Seven Hills', 'Tiled Walls', 'Golden Hour', 'Vibrant'],
  stayOptions: [
    {
      id: 'selina-secret-garden',
      name: 'Selina Secret Garden',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'mixed',
      amenities: ['Pool', 'Rooftop', 'Dedicated Coworking', 'Yoga'],
      priceTier: 3
    },
    {
      id: 'outsite-cais-sodre',
      name: 'Outsite Cais do Sodré',
      type: 'coliving',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Kitchen', 'Community Events', 'High-speed Fiber'],
      priceTier: 4
    },
    {
      id: 'yes-hostel',
      name: 'Yes! Lisbon Hostel',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Free Dinner', 'Walking Tours', 'Bar'],
      priceTier: 2
    }
  ],
resonanceSignals: {
    nightlifeOverall: 9, // Bairro Alto and Pink Street are legendary
    lateNightDining: 7, 
    musicScene: 8,
    danceScene: 9, // Strongest for Techno (Lux Frágil) and Afro-House (Dock's)
    barDensity: 10, // Highest concentration in Bairro Alto
    drinkingCulture: 9.5, // Lisbon has a vibrant drinking culture with a focus on socializing, from traditional tascas to trendy rooftop bars.
    safetyAtNight: 8,
    socialMeetups: 10, // Massive nomad groups (Lisbonomads)
    waterActivities: 7, // 30-min train to surfing in Carcavelos/Cascais
    snowActivities: 0,
    natureAccess: 6, // Monsanto park is great, but rugged nature requires a car
    festivalCulture: 10, // Santo António (June) turns the whole city into a party
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 10
  }
};