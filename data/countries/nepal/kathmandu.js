module.exports = {
  id: 'KTM',
  name: 'Kathmandu',
  type: 'metropolis',
  costMultiplier: 0.75, // Slightly higher than Pokhara due to capital city tax
  avoidIf: [
    'Respiratory sensitivity (High dust and PM2.5 levels in Thamel/central areas)',
    'Low tolerance for extreme sensory input (honking, crowds, narrow alleys)',
    'Requires a minimalist, "clean" aesthetic for productivity'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Very safe against violent crime. Thamel is lively late, but watch for "professional" friendly scammers offering treks or herbals.'
  },
  foodAffordability: {
    grocery: 9,
    streetFood: 10,
    diningOut: 8
  },
  foodStrategy: {
    breakfast: { bestValue: "Local: Sel Roti + Milk Tea", cheapest: "Street: Chickpea Curry (Chana)" },
    lunch: { bestValue: "Newari Khaja Set (Traditional/Nutritious)", cheapest: "Momos (Buffalo or Veg) - ~€1.50" },
    dinner: { bestValue: "Thamel: Thakali Thali (Refills included)", cheapest: "Local: Chow Mein / Fried Rice" },
    dessert: { bestValue: "Juju Dhau (King Curd from Bhaktapur)", cheapest: "Street: Hot Lassi" },
    healthyCheap: "Look for 'Bhojanalayas' (local canteens) for the most authentic and cheap Dal Bhat. It’s the ultimate fuel for the long-haul developer."
  },
  wifiScore: 4, // 87Mbps median fixed speed in 2026; high-end hostels are stable
  coworkingDensity: 7,
  englishLevel: 9,
  vibe: ['Ancient', 'Chaotic', 'Spiritual', 'Gritty'],
  seasonalMultipliers: {
    winter: 0.8, // Cold but clear skies
    summer: 0.6, // Monsoon (Air is cleaner, but roads are muddy)
    shoulder: 1.5 // Peak trekking seasons (Oct/Nov & Mar/Apr)
  },
  stayOptions: [
    {
      id: 'thamel-nomads',
      name: 'Thamel Nomads',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Dedicated quiet zone', 'Private bar', 'Fast fiber', '24h check-in'],
      priceTier: 1
    },
    {
      id: 'planet-nomad-hostel',
      name: 'Planet Nomad Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Rooftop workspace', 'Mountain views', 'High-speed internet', 'Community jam sessions'],
      priceTier: 1
    },
    {
      id: 'yakety-yak',
      name: 'Yakety Yak Hostel',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'social-lite',
      amenities: ['On-site restaurant', 'Large common lounge', 'Central Thamel location'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 7,
    lateNightDining: 8,
    musicScene: 8,
    danceScene: 4,
    barDensity: 9,
    drinkingCulture: 6.0, // Kathmandu has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 7,
    socialMeetups: 9,
    waterActivities: 1,
    snowActivities: 2,
    natureAccess: 6,
    festivalCulture: 10,
    socialProximity: 10,
    soloFriendly: 10,
    expatCommunityStrength: 9
  }
};