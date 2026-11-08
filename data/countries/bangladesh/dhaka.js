module.exports = {
  id: 'DHA',
  name: 'Dhaka',
  type: 'metropolis',
  costMultiplier: 0.5, // One of the most affordable megacities on earth
  avoidIf: [
    'You have low tolerance for extreme traffic congestion',
    'Sensory overload (noise/crowds) is a dealbreaker',
    'You require high walkability (it is dense but chaotic)'
  ],
  safetyPattern: {
    day: 4,
    night: 2,
    notes: 'Gulshan and Banani are the safe, upscale enclaves. Avoid large protests or unlit areas of Old Dhaka after dark.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Paratha + Dal + Milk Tea (Cha) from a local 'Hotel' (roadside eatery)", 
      cheapest: "Street-side Pitha (rice cakes) or Singara" 
    },
    lunch: { 
      bestValue: "Kacchi Biryani (Star Kabab is a must)", 
      cheapest: "Bhuna Khichuri from a local canteen" 
    },
    dinner: { 
      bestValue: "Grilled Chicken and Naan in Banani", 
      cheapest: "Fuchka (street snack) - highly addictive, but check for food safety" 
    },
    healthyCheap: "Fresh tropical fruits (mangoes, lychees, jackfruit) are incredibly cheap in local markets. Stick to bottled water strictly."
  },
  wifiScore: 3, // Fiber exists (Link3/AmberIT) but power outages (load shedding) require a UPS/Power bank
  coworkingDensity: 5,
  englishLevel: 8, // Surprisingly high due to British colonial history and education
  vibe: ['Hyper-Dense', 'Unfiltered-Soul', 'Chaos-Modernism'],
  stayOptions: [
    {
      id: 'hostel-zoofamily',
      name: 'Hostel By Zoofamily',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Near airport train station', 'Business center', 'Meeting rooms', 'Shared kitchen'],
      priceTier: 1
    },
    {
      id: 'japanese-lodge-hydrangea',
      name: 'Japanese Lodge Hydrangea',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'ultra-quiet',
      amenities: ['Uttara location', 'Air conditioning', 'Desk in room', 'Quiet atmosphere'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 2, // Non-existent public bar scene (mostly private clubs/hotels)
    lateNightDining: 9, // Street food and Biryani shops stay open very late
    musicScene: 7, // Incredible folk and classical music if you know where to look
    danceScene: 4,
    barDensity: 1, // Alcohol is restricted; mostly found in 5-star hotels
    drinkingCulture: .5, // Drinking is not a major part of social culture due to religious and legal restrictions.
    safetyAtNight: 4,
    socialMeetups: 6,
    waterActivities: 2, // Buriganga river is for boat watching, not swimming
    snowActivities: 0,
    natureAccess: 3, // Requires 8+ hours to reach the Sunderbans or Sylhet
    festivalCulture: 10, // Pahela Baishakh (New Year) is a massive explosion of color
    socialProximity: 5, // People are everywhere, but nomad-specific proximity is low
    soloFriendly: 7, // Locals are incredibly hospitable to foreigners
    expatCommunityStrength: 5 // Small, tight-knit group mostly in Gulshan
  }
};