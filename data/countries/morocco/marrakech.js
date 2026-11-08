module.exports = {
  id: 'RAK',
  name: 'Marrakech',
  type: 'hub',
  costMultiplier: 0.85,
  avoidIf: [
    'You have a low tolerance for intense haggling and persistent street vendors',
    'Extreme heat is a dealbreaker (40°C+ in July/August)',
    'You need a quiet, predictable urban flow'
  ],
  safetyPattern: {
    day: 4,
    night: 3,
    notes: 'The Medina is safe but confusing; watch for motorbike traffic in narrow alleys. Stick to Gueliz (the modern quarter) for a more relaxed, Western safety feel.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Msemen (flaky pancake) + Mint Tea at a local stall", 
      cheapest: "Freshly squeezed orange juice in Jemaa el-Fnaa + bread" 
    },
    lunch: { 
      bestValue: "Tagine of the day in a neighborhood 'snack'", 
      cheapest: "Brochettes (meat skewers) with bread and olives" 
    },
    dinner: { 
      bestValue: "Mechoui Alley (slow-roasted lamb) near the square", 
      cheapest: "Harira (lentil soup) - the ultimate budget filler" 
    },
    healthyCheap: "Local souks offer world-class dates, olives, and almonds for pennies. Stick to Gueliz supermarkets for high-quality salads and dairy."
  },
  wifiScore: 4, // 4G/5G is excellent; Riads have thick walls so check for 'WiFi Extenders' specifically
  coworkingDensity: 8,
  englishLevel: 7, // French and Arabic are dominant, but English is widespread in tourism/business
  vibe: ['Ochre-Aesthetic', 'Ancient-Chaos', 'Luxury-Desert-Chic'],
  stayOptions: [
    {
      id: 'lblassa-marrakech',
      name: 'L\'Blassa',
      type: 'coworking-hub',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['High-speed fiber', 'Community events', 'Modern cafe', 'Gueliz location'],
      priceTier: 3
    },
    {
      id: 'equity-point-marrakech',
      name: 'Equity Point',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Rooftop pool', 'Internal courtyard', 'Medina location', 'Quiet work nooks'],
      priceTier: 2
    },
    {
      id: 'the-mad-madina',
      name: 'The Mad Madina',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Traditional Riad vibe', 'Reliable internet', 'Central location', 'Quiet rooftop'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 6, // Great rooftops and some clubs in Gueliz; largely dry in the Medina
    lateNightDining: 9, // Jemaa el-Fnaa food stalls run late
    musicScene: 8, // Traditional Gnawa music is world-class
    danceScene: 5,
    barDensity: 6,
    drinkingCulture: 2.5, // Marrakech has a vibrant drinking culture with a focus on socializing, from traditional tea houses to trendy rooftop bars.
    safetyAtNight: 7,
    socialMeetups: 8,
    waterActivities: 2, // Pools only; no ocean here
    snowActivities: 0,
    natureAccess: 9, // Atlas Mountains and Agafay Desert are very close
    festivalCulture: 9, // International Film Festival and arts festivals
    socialProximity: 8,
    soloFriendly: 8,
    expatCommunityStrength: 9
  }
};