module.exports = {
  id: 'LPB',
  name: 'Luang Prabang',
  type: 'hub',
  costMultiplier: 0.6, // Excellent value; your money goes very far here
  avoidIf: [
    'You need a fast-paced, high-energy nightlife (there is a 11:30 PM curfew)',
    'You are sensitive to smoke (Burning Season: Feb–April)',
    'You require a massive metro system (it is a walking/cycling town)'
  ],
  safetyPattern: {
    day: 5,
    night: 5,
    notes: 'One of the safest towns in Asia. Very low crime; just respect the local monks and quiet hours.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Khao Piak Sen (Lao Noodle Soup) at a riverside stall", 
      cheapest: "Baguette sandwiches (a French colonial legacy) from the market" 
    },
    lunch: { 
      bestValue: "Lao BBQ (Sindad) - specifically the buffet style", 
      cheapest: "Vegetarian buffet at the Night Market entrance" 
    },
    dinner: { 
      bestValue: "Mekong River fish at a bamboo restaurant", 
      cheapest: "Khao Poon (spicy rice vermicelli soup)" 
    },
    healthyCheap: "The morning market has incredible fresh dragon fruit and mangosteens. Saffron Coffee provides high-quality local beans."
  },
  wifiScore: 3, // Fiber is at key hostels; Starlink is becoming a popular backup here
  coworkingDensity: 4,
  englishLevel: 6,
  vibe: ['Zen-Colonial', 'Golden-Hour-Aesthetic', 'Spiritual-Riverfront'],
  stayOptions: [
    {
      id: 'my-lao-home',
      name: 'My Lao Home',
      type: 'hybrid',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Dedicated quiet workspace', 'On-site cafe', 'Teak wood interiors', 'Central location'],
      priceTier: 2
    },
    {
      id: 'mad-monkey-lpb',
      name: 'Mad Monkey LPB',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Poolside work area', 'Organized tours', 'Large common space', 'Fastest wifi in the area'],
      priceTier: 2
    },
    {
      id: 'sunrise-riverside-pool',
      name: 'Sunrise Riverside',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'ultra-quiet',
      amenities: ['River views', 'Pool', 'Quiet bedside pods', 'Large garden for laptop work'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 3, // Curfews keep things very quiet
    lateNightDining: 4,
    musicScene: 4,
    danceScene: 2,
    barDensity: 5,
    drinkingCulture: 8.0, // Luang Prabang has a modest drinking culture with a focus on socializing, from traditional beerlao to riverside bars.
    safetyAtNight: 10,
    socialMeetups: 7,
    waterActivities: 8, // Kuang Si Falls and Mekong river cruises
    snowActivities: 0,
    natureAccess: 10, // Surrounded by jungle and waterfalls
    festivalCulture: 9, // Pi Mai (Lao New Year) is incredible
    socialProximity: 9, // Very small, you will see the same people every day
    soloFriendly: 10,
    expatCommunityStrength: 7
  }
};