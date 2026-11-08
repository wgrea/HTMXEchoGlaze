// data/countries/armenia/yerevan.js
module.exports = {
  id: 'YER',
  name: 'Yerevan',
  type: 'capital',
  costMultiplier: 0.75, // Slightly higher than Tbilisi due to housing demand, but still low
  avoidIf: [
    'Highly sensitive to traffic noise and aggressive driving',
    'Seeking a large, diverse international community (it is very tight-knit)',
    'Expectant of high-speed public transit (the metro is limited)'
  ],
  safetyPattern: {
    day: 5,
    night: 5,
    notes: 'Incredibly safe. Locals walk in Cascade and Northern Avenue well past midnight. Violent crime is nearly non-existent for travelers.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Gata (sweet bread) from a local bakery + Armenian coffee", 
      cheapest: "Ponchik (custard-filled donuts) from Grand Candy" 
    },
    lunch: { 
      bestValue: "Zhengyalov Hats (herb-stuffed flatbread) - specialized shops in center", 
      cheapest: "Lahmajoun (Armenian pizza) - incredibly cheap and filling" 
    },
    dinner: { 
      bestValue: "Khorovats (BBQ) in the Paronyan Street area", 
      cheapest: "Tumanyan Shaurma (a local institution)" 
    },
    healthyCheap: "SAS Supermarket's food court for high-quality prepared salads and grilled meats. Fresh apricots and walnuts from GUM Market."
  },
  wifiScore: 4, // Stable fiber in Kentron; 4G/5G coverage is excellent
  coworkingDensity: 7,
  englishLevel: 6, // Good with youth; Russian is the dominant second language
  vibe: ['Pink-Tufa-Aesthetic', 'Jazz-Cafe-Culture', 'Ancient-Resilient'],
  stayOptions: [
    {
      id: 'kantar-hostel',
      name: 'Kantar Hostel',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Exceptional breakfast', 'Large common work area', 'Central location', 'Quiet dorms'],
      priceTier: 2
    },
    {
      id: 'armenia-inn',
      name: 'Armenian Inn',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'quiet',
      amenities: ['Garden workspace', 'Family-run atmosphere', 'Kitchen access'],
      priceTier: 1
    },
    {
      id: 'loft-yerevan',
      name: 'The LOFT',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['24/7 access', 'Event space', 'Quiet pods', 'Self-service kitchen'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 7, // Excellent wine bars and jazz; club scene is smaller than Tbilisi
    lateNightDining: 9,
    musicScene: 8, // Famous for Live Jazz and Classical
    danceScene: 6,
    barDensity: 8, // Saryan Street is the 'Wine Street' hub
      drinkingCulture: 7.0, // Yerevan has a vibrant drinking culture with a focus on socializing, from traditional wine bars to trendy cocktail lounges.
    safetyAtNight: 10,
    socialMeetups: 7,
    waterActivities: 1, // Landlocked (Swan Lake is a pond); Hrazdan river isn't for swimming
    snowActivities: 0, 
    natureAccess: 6, // Great parks; Dilijan/Sevan require a 1.5hr drive
    festivalCulture: 8, // Wine Days in May is a must
    socialProximity: 10, // Everyone hangs out in the small "Kentron" circle
    soloFriendly: 10,
    expatCommunityStrength: 8
  }
};