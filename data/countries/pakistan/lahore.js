module.exports = {
  id: 'LHE',
  name: 'Lahore',
  type: 'metropolis',
  costMultiplier: 0.45, // Shockingly affordable for the quality of food and tech
  avoidIf: [
    'You are highly sensitive to air quality (smog is severe in Nov-Jan)',
    'You need a "walkable" city (it is a sprawl of rickshaws and cars)',
    'You are looking for a public alcohol/bar culture'
  ],
  safetyPattern: {
    day: 4,
    night: 3,
    notes: 'Gulberg and DHA are the "Glazed" sectors—very safe and modern. Use ride-hailing exclusively at night.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Halwa Puri + Chana from a local 'Nashta' spot", 
      cheapest: "Paratha and Chai from a roadside dhaba" 
    },
    lunch: { 
      bestValue: "Chicken Karahi or Nihari (Warid Nihari is legendary)", 
      cheapest: "Daal Chawal (lentils and rice) - a local staple" 
    },
    dinner: { 
      bestValue: "BBQ Platter on M.M. Alam Road", 
      cheapest: "Seekh Kabab and Naan from a street stall" 
    },
    healthyCheap: "Fresh pomegranate juice and seasonal fruits are sold everywhere for pennies. Stick to 'high-turnover' restaurants to ensure food freshness."
  },
  wifiScore: 4, // 5G is widespread in Gulberg; fiber (Nayatel/StormFiber) is solid
  coworkingDensity: 8,
  englishLevel: 9, // One of the highest in the region; English is the official language of business
  vibe: ['Mughal-Grandeur', 'Spicy-Gastronomy', 'Tech-Hustle'],
  stayOptions: [
    {
      id: 'lahore-backpackers',
      name: 'Lahore Backpackers',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['2026 Hoscar Winner', 'Central location', 'Rooftop for sunsets', 'Expert local tours'],
      priceTier: 1
    },
    {
      id: 'backpacker-den',
      name: 'Backpacker\'s Den',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Air conditioning', 'Terrace', 'Private bathrooms available', 'Quiet work area'],
      priceTier: 2
    },
    {
      id: 'five-giants',
      name: 'Five Giants Homestay',
      type: 'hybrid',
      verifiedWifi: true,
      socialTone: 'quiet',
      amenities: ['Family-run warmth', 'Garden space', 'Excellent home-cooked meals', 'Privacy'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 2, // Non-existent public bars; limited to private parties or 5-star hotels
    lateNightDining: 10, // Food Street (Fort Road) stays alive until the early hours
    musicScene: 9, // Home of Qawwali and a massive underground indie/electronic scene
    danceScene: 3,
    barDensity: 1,
    drinkingCulture: 0.5, // Drinking is not a major part of social culture due to religious and legal restrictions.
    safetyAtNight: 5,
    socialMeetups: 7,
    waterActivities: 0,
    snowActivities: 0,
    natureAccess: 4, // Mostly urban; require 6+ hours to reach the northern mountains
    festivalCulture: 10, // Basant (Kite festival) and Sufi nights at shrines
    socialProximity: 6,
    soloFriendly: 9, // The hospitality to foreigners is legendary
    expatCommunityStrength: 6
  }
};