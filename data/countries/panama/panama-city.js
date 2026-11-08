module.exports = {
  id: 'PTY',
  name: 'Panama City',
  type: 'metropolis',
  costMultiplier: 1.2, // US Dollar based; more expensive than Colombia but cheaper than Miami
  avoidIf: [
    'You hate high humidity and sudden tropical downpours',
    'You prefer "old-world" European walkability over skyscrapers',
    'You are on an ultra-low "backpacker" budget'
  ],
  safetyPattern: {
    day: 4,
    night: 3,
    notes: 'Casco Viejo, Marbella, and El Cangrejo are very safe. Avoid "El Chorrillo" bordering the old town, even during the day.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Hojaldras (fried dough) + Café con Leche from a local fonda", 
      cheapest: "Empanadas from a 'Pio Pio' stall" 
    },
    lunch: { 
      bestValue: "Executive Menu (Menú del Día) in El Cangrejo", 
      cheapest: "Sancocho (chicken stew) - filling and ubiquitous" 
    },
    dinner: { 
      bestValue: "Fresh Ceviche at the Mercado de Mariscos", 
      cheapest: "Arroz con Pollo from a neighborhood cafeteria" 
    },
    healthyCheap: "Multi-ethnic grocery stores (Riba Smith) offer high-quality imported and local produce. Tropical fruits are best bought from street carts."
  },
  wifiScore: 5, // Exceptional fiber; the city is a global subsea cable landing point
  coworkingDensity: 10,
  englishLevel: 8, // Very high due to the Canal and international banking sector
  vibe: ['Miami-Lite', 'Tropical-Corporate', 'Colonial-Chic'],
  stayOptions: [
    {
      id: 'selina-casco-viejo',
      name: 'Selina Casco Viejo',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'party',
      amenities: ['Rooftop pool', 'Dedicated Cowork zone', 'Historic building', 'Regular nomad events'],
      priceTier: 4
    },
    {
      id: 'la-tribu-hostel',
      name: 'La Tribu Hostel',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Modern design', 'Quiet work nooks', 'Central location', 'Curated tours'],
      priceTier: 2
    },
    {
      id: 'hostel-villa-vento',
      name: 'Villa Vento Surf',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Pool', 'Kitchen access', 'Near Marbella business district'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 9, // Casco Viejo rooftops are world-class
    lateNightDining: 8,
    musicScene: 7, // Strong Reggaeton and Jazz influences
    danceScene: 8,
    barDensity: 9,
    drinkingCulture: 7.5, // Panama City has a vibrant drinking culture with a focus on socializing, from traditional cantinas to trendy rooftop bars.
    safetyAtNight: 7,
    socialMeetups: 9,
    waterActivities: 7, // Panama Canal tours + nearby Taboga Island
    snowActivities: 0,
    natureAccess: 8, // Metropolitan Natural Park is a rainforest inside the city
    festivalCulture: 8,
    socialProximity: 7,
    soloFriendly: 9,
    expatCommunityStrength: 10
  }
};