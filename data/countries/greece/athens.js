module.exports = {
  id: 'ATH',
  name: 'Athens',
  type: 'capital',
  costMultiplier: 1.1,
  avoidIf: [
    'Sensitive to graffiti and urban decay',
    'Dislikes high-density heat islands'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Vibrant and safe in Koukaki/Plaka; exercise caution in Omonoia backstreets at 3 AM.'
  },
  foodAffordability: {
    grocery: 7,
    streetFood: 10,
    diningOut: 8
  },
  foodStrategy: {
    breakfast: { bestValue: "Bakery: Koulouri (Sesame Ring)", cheapest: "Grocery: Greek Yogurt + Honey" },
    lunch: { bestValue: "Street: Pork/Chicken Gyro Wrap", cheapest: "Bakery: Tiropita (Cheese Pie)" },
    dinner: { bestValue: "Taverna: Horiatiki + Mousaka", cheapest: "Street: Souvlaki Skewers" },
    dessert: { bestValue: "Tradition: Loukoumades", cheapest: "Bakery: Baklava" },
    healthyCheap: "Farmer Markets (Laiki) provide incredibly cheap olives, feta, and seasonal produce."
  },
  wifiScore: 8,
  coworkingDensity: 8,
  englishLevel: 9,
  vibe: ['Ancient', 'Rebellious', 'Academic', 'Sun-drenched'],
  seasonalMultipliers: {
    winter: 0.7,
    summer: 1.8,
    shoulder: 1.2
  },
  stayOptions: [
    {
      id: 'selina-theatrou',
      name: 'Selina Athens Theatrou',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced', // Better for working
      amenities: ['Dedicated Coworking', 'Rooftop Bar', 'Privacy Pods', 'Kitchen'],
      priceTier: 2
    },
    {
      id: 'athens-backpackers',
      name: 'Athens Backpackers',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Laundry', 'Walking Tours', 'Strong Community'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 10,
    musicScene: 8,
    danceScene: 7,
    barDensity: 10,
    drinkingCulture: 7.0, // Athens has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 8,
    socialMeetups: 9,
    waterActivities: 7,
    snowActivities: 3,
    natureAccess: 7,
    festivalCulture: 9,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 8
  }
};