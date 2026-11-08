module.exports = {
  id: 'PKR',
  name: 'Pokhara',
  countryId: 'NPL',
  type: 'mountain-retreat',
  costMultiplier: 0.7,
  avoidIf: [
    'Requires high-speed fiber for 4K video streaming',
    'Cannot handle periodic power maintenance (January/February peak)'
  ],
  safetyPattern: {
    day: 5,
    night: 5,
    notes: 'Incredibly safe. Lakeside is the most solo-friendly nomad hub in South Asia.'
  },
  foodStrategy: {
    breakfast: { bestValue: "Tibetan Bread at Pema Bakery", cheapest: "Sel Roti from street stalls" },
    lunch: { bestValue: "Thakali Thali (Refills included)", cheapest: "Buff Momos" },
    dinner: { bestValue: "Roadhouse Cafe: Firewood Pizza", cheapest: "Chow Mein stalls near Hallan Chowk" },
    dessert: { bestValue: "Apple Pie (Jomsom apples)", cheapest: "Local yogurt (Curd)" },
    healthyCheap: "Dal Bhat is the ultimate fuel. It’s balanced protein/carbs and almost always comes with free seconds of lentils and veg."
  },
  wifiScore: 3, 
  coworkingDensity: 5,
  englishLevel: 9,
  vibe: ['Lakeside', 'Chill', 'Adventure-Hub'],
  stayOptions: [
    {
      id: 'pokhara-backpackers',
      name: 'Pokhara Backpackers',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'chill',
      amenities: ['Garden workspace', 'Solar backup', 'Mountain views'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 5,
    lateNightDining: 4,
    musicScene: 6,
    danceScene: 2,
    barDensity: 7,
    drinkingCulture: 6.0, // Pokhara has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 9,
    socialMeetups: 8,
    waterActivities: 9, // Boating / Paddleboarding / Canyoning
    snowActivities: 10, // Base for Annapurna / Machhapuchhre
    natureAccess: 10,
    festivalCulture: 8,
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 7
  }
};