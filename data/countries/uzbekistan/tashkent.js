module.exports = {
  id: 'TAS',
  name: 'Tashkent',
  type: 'capital',
  costMultiplier: 0.7, // Tremendous purchasing power across local services and dining layers
  avoidIf: [
    'You require heavy, dense concentrations of traditional western-style pub crawl lanes',
    'You are frustrated by dry, dusty air conditions during peak summer months'
  ],
  safetyPattern: {
    day: 5,
    night: 5,
    notes: 'Remarkably safe and peaceful capital. Broad, beautifully lit boulevards like Amir Timur Avenue remain active and completely secure well past midnight.'
  },
  foodStrategy: {
    breakfast: { bestValue: "Local Café: Traditional Somsa + hot green tea", cheapest: "Street window: Hot non (flatbread) fresh from a clay tandir" },
    lunch: { bestValue: "Central Plov Center (Besh Qozon): Massive copper cauldrons serving legendary wedding plov", cheapest: "Chorsu Bazaar food stalls: Skewers of shashlik with shredded onions" },
    dinner: { bestValue: "Traditional diner: Lagman (hand-pulled soup noodles) or Manti (steamed dumplings)", cheapest: "Local diner: Norin (cold shredded horsemeat and dough noodle layers)" },
    dessert: { bestValue: "Local sweet halva or fresh seasonal watermelons", cheapest: "Grocery: Local dried apricots and almonds" },
    healthyCheap: "Chorsu Bazaar is unbeatable for bulk purchases of fresh walnuts, tomatoes, pomegranates, and fresh kazy (local deli items)."
  },
  wifiScore: 3, // Standard VDSL/Fiber lines handle 30-50 Mbps easily; local mobile hotspots are dirt cheap
  coworkingDensity: 5,
  englishLevel: 6, // High among university students in modern hubs like Chilanzar; Russian is universally understood
  vibe: ['Soviet-Modernist', 'Spacious', 'Hospitable'],
  stayOptions: [
    {
      id: 'topchan-hostel',
      name: 'Topchan Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Spacious shared common lounge', 'Dedicated work desks', 'Full guest kitchen setup', 'Social dinner gatherings'],
      priceTier: 1
    },
    {
      id: 'art-hostel-tashkent',
      name: 'Art Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Charming inner courtyard garden', 'Laptop-friendly communal tables', 'Indoor swimming pool', 'Central location near Cosmonauts Metro'],
      priceTier: 2
    },
    {
      id: 'safari-hostel',
      name: 'Safari Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'quiet',
      amenities: ['Quiet study/work zone rooms', 'High-speed dedicated router drops', 'Shared laundry amenities'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 6, // Focused craft cocktail bars and underground spots near Grand Mir Hotel
    lateNightDining: 8,
    musicScene: 6,
    danceScene: 5,
    barDensity: 6,
    drinkingCulture: 6.5,
    safetyAtNight: 10,
    socialMeetups: 7,
    natureAccess: 7, // Quick electric train links up to the Tien Shan foothills
    festivalCulture: 6,
    socialProximity: 8,
    soloFriendly: 10,
    expatCommunityStrength: 7,
    snowActivities: 7,
    waterActivities: 3
  },
  countryId: 'UZB'
};