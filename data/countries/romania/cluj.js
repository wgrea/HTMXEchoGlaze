module.exports = {
  id: 'CLJ',
  name: 'Cluj-Napoca',
  type: 'tech-enclave',
  costMultiplier: 1.1, // Marginally higher than rural Romania due to its massive tech sector
  avoidIf: [
    'You are sensitive to high-volume university student crowds',
    'You want flat, easy walking terrain (the city settles into a distinct valley structure)'
  ],
  safetyPattern: {
    day: 5,
    night: 4.8,
    notes: 'One of the safest student cities in Europe. The central walking zones and university quarters are calm at all hours.'
  },
  foodStrategy: {
    breakfast: { bestValue: "Covrigărie: Warm traditional pretzels (Covrigi) from a street window", cheapest: "Grocery: Borsec carbonated water + hot Merdenea pastry" },
    lunch: { bestValue: "Meniu Zilei (Menu of the Day) at central university bistros", cheapest: "Street: Shaorma or sliced pizza near Piezisă Street" },
    dinner: { bestValue: "Traditional Varză a la Cluj (Transylvanian baked cabbage and minced meat)", cheapest: "University Canteen or local budget buffet basements" },
    dessert: { bestValue: "Papanși (Fried cottage cheese donuts with heavy sour cream and blueberry jam)", cheapest: "Grocery: A classic Rom chocolate bar" },
    healthyCheap: "Fresh farm stalls at Piața Mihai Viteazu offer deep discounts on local berries, greens, and cheeses."
  },
  wifiScore: 5, // Top-tier European speeds; gigabit infrastructure is standard
  coworkingDensity: 4,
  englishLevel: 9, // Exceptionally high among the massive local tech and university demographic
  vibe: ['Youthful', 'Tech-Forward', 'Bohemian'],
  stayOptions: [
    {
      id: 'choco-home-hostel',
      name: 'Choco Home & Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['High-speed fiber drops', 'Fully equipped shared kitchen', 'Outdoor garden terrace', 'Laundry access'],
      priceTier: 2
    },
    {
      id: 'retro-youth-hostel-cluj',
      name: 'Retro Youth Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Laptop-friendly workspace desks', 'Sauna access (3+ nights)', 'Free bike rentals', 'Central pedestrian street location'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 9, // Packed clubs and alternative student bars stretch late along Piezisă
    lateNightDining: 8,
    musicScene: 10, // Host of legendary electronic music festivals
    danceScene: 8,
    barDensity: 9,
    drinkingCulture: 8.5,
    safetyAtNight: 10,
    socialMeetups: 9,
    natureAccess: 8, // Direct proximity to the Hoia-Baciu forest and Apuseni trails
    festivalCulture: 10,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 8,
    snowActivities: 5,
    waterActivities: 2
  },
  countryId: 'ROU'
};