module.exports = {
  id: 'WLG',
  name: 'Weligama',
  countryId: 'LKA',
  type: 'coastal-hub',
  costMultiplier: 0.8,
  avoidIf: [
    'Hates "Surf-Bros" and beach party noise',
    'Highly sensitive to humidity/salt air affecting hardware'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'Very safe; mostly surf-communal. Be wary of "Tuk-Tuk price gouging" after 10 PM.'
  },
  foodStrategy: {
    breakfast: { bestValue: "Nomad Cafe: Smoothie Bowl", cheapest: "Local: Kottu Rotty" },
    lunch: { bestValue: "Rice & Curry (Unlimited refills)", cheapest: "Short Eats at local stalls" },
    dinner: { bestValue: "Beach BBQ: Fresh Snapper", cheapest: "Curd + Treacle from a grocery store" },
    dessert: { bestValue: "Buffalo Curd", cheapest: "Watalappan (Coconut custard)" },
    healthyCheap: "Local 'Rice & Curry' spots are the ultimate utility play—high-fiber, diverse nutrients, and under $2."
  },
  wifiScore: 5,
  coworkingDensity: 9,
  englishLevel: 9,
  vibe: ['Coastal', 'Surfer-Chic', 'Social'],
  stayOptions: [
    {
      id: 'plan-b-weligama',
      name: 'Plan B Coworking',
      type: 'coliving',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['A/C workroom', 'Ergonomic chairs', 'Power backup', '500Mbps fiber'],
      priceTier: 2
    },
    {
      id: 'outpost-weligama',
      name: 'Outpost Weligama',
      type: 'hybrid',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Poolside desks', 'Focus zones', 'Community events'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 7,
    lateNightDining: 6,
    musicScene: 7,
    danceScene: 6,
    barDensity: 8,
    drinkingCulture: 6.5, // Weligama has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 7,
    socialMeetups: 9,
    waterActivities: 10, // Surfing capital
    snowActivities: 0,
    natureAccess: 8,
    festivalCulture: 7,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 10
  }
};