module.exports = {
  id: 'BKK',
  name: 'Bangkok',
  type: 'metropolis',
  costMultiplier: 1.0, // Base reference for "Low" tier
  avoidIf: [
    'Hate sensory overload (noise/smells/crowds)',
    'Asthma or respiratory sensitivity',
    'Cannot handle 35°C+ temperatures daily'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Very safe from violent crime; minor scams (Tuk-tuks/closed temples) are the primary nuisance.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Street: Moo Ping (Grilled Pork) + Sticky Rice", 
      cheapest: "7-Eleven: Ham & Cheese Toastie (A cult classic)" 
    },
    lunch: { 
      bestValue: "Mall Food Court (Pier 21 Terminal 21)", 
      cheapest: "Street: Pad Kra Pao (Basil Stir-fry)" 
    },
    dinner: { 
      bestValue: "Chinatown (Yaowarat) small plates", 
      cheapest: "Night Market: Boat Noodles" 
    },
    dessert: { 
      bestValue: "Mango Sticky Rice (Seasonal)", 
      cheapest: "Street: Coconut Ice Cream" 
    },
    healthyCheap: "Local 'Raat Khao' stalls (rice and curry) always have veggie/tofu options; 7-Eleven sells boiled eggs and pre-cut fruit."
  },
  wifiScore: 5,
  coworkingDensity: 5,
  englishLevel: 4,
  vibe: ['Cyberpunk', 'Gold Temples', 'Neon', 'Street Food'],
  stayOptions: [
    {
      id: 'luk-hostel',
      name: 'Luk Hostel',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Rooftop Cafe', 'Dedicated Work Zone', 'Chinatown Location'],
      priceTier: 1
    },
    {
      id: 'the-yard-bangkok',
      name: 'The Yard Bangkok',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Garden', 'Green Space', 'Yoga Area', 'Ari Neighborhood'],
      priceTier: 2
    }
  ],
resonanceSignals: {
    nightlifeOverall: 10, // From Sukhumvit clubs to Chinatown jazz bars
    lateNightDining: 10, // You can get a world-class meal at 3 AM
    musicScene: 8,
    danceScene: 10, // Global hub for EDM (Onyx) and Underground (VOID/Mustache)
    barDensity: 10,
    drinkingCulture: 8.5, // Bangkok has a vibrant drinking culture with a focus on socializing, from rooftop bars to lively night markets.
    safetyAtNight: 9, // Statistically very safe for a megacity
    socialMeetups: 10, // Ranked #1 Nomad City in 2026 reports
    waterActivities: 5, // River-based; requires travel for beaches
    snowActivities: 0,
    natureAccess: 4, // Lumpini/Benjakitti are great, but it's a concrete jungle
    festivalCulture: 10, // Songkran in Bangkok is the largest water fight on earth
    socialProximity: 8,
    soloFriendly: 10,
    expatCommunityStrength: 10
  }
};