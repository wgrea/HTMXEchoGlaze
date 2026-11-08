module.exports = {
  id: 'LPZ',
  name: 'La Paz',
  type: 'metropolis',
  costMultiplier: 0.6, // Incredibly affordable; high quality of life for low spend
  avoidIf: [
    'You suffer from severe altitude sickness (the city is at 3,640m+)',
    'You need a warm, tropical climate (it is perpetually "brisk")',
    'You are frustrated by frequent street protests/parades'
  ],
  safetyPattern: {
    day: 4,
    night: 3,
    notes: 'Sopocachi is the safest nomad enclave. Be cautious in El Alto at night or in crowded markets like the Witches\' Market.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Salteña (Bolivian empanada) - must eat before 11 AM", 
      cheapest: "Api (purple corn drink) + Pastel with cheese from a street stall" 
    },
    lunch: { 
      bestValue: "Almuerzo Completo (Soup, Main, Dessert) for ~$3-4", 
      cheapest: "Silpancho (thin meat + rice + egg) from a local comedor" 
    },
    dinner: { 
      bestValue: "Gourmet Andean fusion in Sopocachi", 
      cheapest: "Anticucho (skewered beef heart) - a late-night street staple" 
    },
    healthyCheap: "The local 'Ferias' (markets) have incredibly cheap quinoa, avocados, and high-altitude honey. Quinoa is a staple, not a luxury here."
  },
  wifiScore: 3, // Fiber is hitting the high-end zones; 4G/5G mobile data is actually very reliable
  coworkingDensity: 6,
  englishLevel: 5, // Spanish is vital; younger staff in Sopocachi speak English
  vibe: ['Neo-Andean', 'Gravity-Defying', 'Gritty-Authentic'],
  stayOptions: [
    {
      id: 'selina-la-paz',
      name: 'Selina La Paz',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Dedicated Coworking Floor', 'Yoga studio', 'Movie room', 'Sopocachi location'],
      priceTier: 3
    },
    {
      id: 'wild-rover-lp',
      name: 'Wild Rover La Paz',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'party',
      amenities: ['Upgraded WiFi (2025)', 'Huge social bar', 'Central location', 'Pod-style beds'],
      priceTier: 1
    },
    {
      id: 'the-adventure-brew',
      name: 'The Adventure Brew Hostel',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Rooftop bar', 'On-site craft brewery', 'Breakfast included', 'Heated rooms (essential!)'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 8, // Very active, late-night scene in Sopocachi
    lateNightDining: 7,
    musicScene: 7, // Folk-fusion and underground rock
    danceScene: 6,
    barDensity: 8,
    drinkingCulture: 5.5, // La Paz has a vibrant drinking culture with a focus on socializing, from traditional chicherias to trendy rooftop bars.
    safetyAtNight: 6,
    socialMeetups: 7,
    waterActivities: 2, // Lake Titicaca is nearby, but it is ice cold
    snowActivities: 4, // High-altitude peaks nearby but no "resort" infrastructure
    natureAccess: 10, // Valley of the Moon and the Death Road are right there
    festivalCulture: 10, // Grand Poder and Carnival involve 24/7 dancing
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 7
  }
};