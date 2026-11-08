module.exports = {
  id: 'PRN',
  name: 'Pererenan',
  countryId: 'IDN',
  type: 'tech-enclave',
  costMultiplier: 1.5, // Significant premium over non-Bali Indonesia
  avoidIf: [
    'Dislikes "Digital Nomad Bubble" atmospheres',
    'Sensitive to heavy scooter traffic noise'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Very safe residential feel. Main risk is "snatch-and-grab" theft on the Canggu shortcut.'
  },
  foodStrategy: {
    breakfast: { bestValue: "Avo Toast at Honey", cheapest: "Warung: Nasi Jinggo" },
    lunch: { bestValue: "Warung Yess: Local buffet", cheapest: "Warung Bu Mi" },
    dinner: { bestValue: "Shady Shack: Healthy/Vegan", cheapest: "Bakso carts near the beach" },
    dessert: { bestValue: "Gelato at Mason", cheapest: "Indomaret ice cream" },
    healthyCheap: "Local 'Warung Masakan Campur' is the most functional way to eat clean—cheapest way to get high-quality Tempeh."
  },
  wifiScore: 5,
  coworkingDensity: 10,
  englishLevel: 9,
  vibe: ['Coastal', 'Productive', 'Chic', 'Quiet-Luxury'],
  stayOptions: [
    {
      id: 'tribal-bali',
      name: 'Tribal Bali',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Custom work booths', 'No-call zones', 'Pool', 'Huge industrial workspace'],
      priceTier: 2
    },
    {
      id: 'shore-amora',
      name: 'Shore Amora',
      type: 'hybrid',
      verifiedWifi: true,
      socialTone: 'quiet',
      amenities: ['Private work desks', 'Rice field views', 'Near beach'],
      priceTier: 4
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 7, // Quieter than Canggu
    lateNightDining: 6,
    musicScene: 6,
    danceScene: 5,
    barDensity: 8,
    drinkingCulture: 7.5, // Pererenan has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 8,
    socialMeetups: 10,
    waterActivities: 10, // Top-tier surfing
    natureAccess: 8,
    festivalCulture: 7,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 10
  }
};