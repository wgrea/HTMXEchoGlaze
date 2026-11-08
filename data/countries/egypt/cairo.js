module.exports = {
  id: 'CAI',
  name: 'Cairo',
  type: 'metropolis',
  costMultiplier: 0.5, // Extreme cost-efficiency; massive purchasing power leverage for foreign currencies
  avoidIf: [
    'You have severe respiratory sensitivities (urban smog and heavy desert dust can accumulate intensely)',
    'You suffer from intense sensory overload or require constant urban silence'
  ],
  safetyPattern: {
    day: 4.5,
    night: 4.5,
    notes: 'Violent crime is incredibly rare. Zamalek and Maadi are the greenest, quietest expat enclaves. Downtown is safe but frantic past midnight.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Traditional Ful Mudammas (fava beans) + Ta'ameya (Egyptian falafel) + fresh Aish Baladi bread", 
      cheapest: "Street cart setup: Ful container or egg sandwich for pennies" 
    },
    lunch: { 
      bestValue: "Koshary (Egypt's national dish: lentils, pasta, rice, chickpeas, spicy tomato sauce, fried onions)", 
      cheapest: "Abou Tarek or Koshary El Tahrir outlets (~$1-2 for a massive bowl)" 
    },
    dinner: { 
      bestValue: "Grilled Pigeon (Hamam) or classic Kebab/Kofta platters in old Cairo", 
      cheapest: "Hawawshi (spiced minced meat baked inside whole wheat flatbread pockets)" 
    },
    healthyCheap: "Local neighborhood fruit markets offer massive boxes of mangoes, dates, and fresh leafy greens for very low prices."
  },
  wifiScore: 3, // Fiber infrastructure exists in upscale hubs, but speeds lean toward 30-40 Mbps rather than gigabit feeds. 4G/5G mobile hotspots are mandatory backups.
  coworkingDensity: 7,
  englishLevel: 7, // Broadly spoken in central commercial zones, tourist circuits, and younger student enclaves
  vibe: ['Ancient-Chaos', 'Mega-Urban', 'Unapologetically-Alive'],
  stayOptions: [
    {
      id: 'madina-hostel-cairo',
      name: 'Madina Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Dedicated study desk areas', 'Quiet layout rules (no party logic)', 'Full common kitchen access', 'Central Downtown location'],
      priceTier: 2
    },
    {
      id: 'dahab-hostel-cairo',
      name: 'Dahab Hostel',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Massive rooftop open-air garden', 'Integrated workspace desks', 'Quiet hours policy', 'Pet friendly'],
      priceTier: 1
    },
    {
      id: 'holy-sheet-hostel',
      name: 'Holy Sheet Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'mixed',
      amenities: ['Modern air-conditioned rooms', 'Pod-style privacy curtain beds', 'Laptop lounge tables', 'Laundry amenities'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 7, // Hidden speakeasies, historic downtown pubs (like Carlton Rooftop), and hip underground lounges
    lateNightDining: 10,
    musicScene: 8, // Center of the regional Arab indie and trap music ecosystem
    danceScene: 6,
    barDensity: 6,
    drinkingCulture: 5.5,
    safetyAtNight: 9,
    socialMeetups: 8,
    natureAccess: 5, // Al-Azhar park provides an urban green refuge; desert borders are a short drive away
    festivalCulture: 6,
    socialProximity: 7,
    soloFriendly: 8,
    expatCommunityStrength: 8
  }
};