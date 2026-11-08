module.exports = {
  id: 'LNV',
  name: 'Lonavala',
  type: 'hill-station',
  costMultiplier: 1.2, // Weekend premium applies
  avoidIf: [
    'Hates intense fog/rain (July-August Monsoon)',
    'Low tolerance for weekend tourist crowds from Mumbai/Pune',
    'Needs high-end fine dining'
  ],
  safetyPattern: {
    day: 5,
    night: 3,
    notes: 'Safe in resorts; avoid unlit forest trails or lake perimeters after dark due to terrain/wildlife.'
  },
  foodAffordability: {
    grocery: 8,
    streetFood: 9,
    diningOut: 7
  },
  foodStrategy: {
    breakfast: { bestValue: "Roadside: Batata Vada + Chai", cheapest: "Grocery: Maggi Cup" },
    lunch: { bestValue: "Bhojanalaya: Unlimited Thali", cheapest: "Street: Vada Pav (The 2026 staple)" },
    dinner: { bestValue: "Dhaba: Butter Chicken + Naan", cheapest: "Street: Sweet Corn" },
    dessert: { bestValue: "Lonavala Chikki (World famous)", cheapest: "Fudge sampling" },
    healthyCheap: "Fresh local corn and grilled sweet potatoes (Shakarkandi) from roadside vendors are the healthiest low-cost fuel."
  },
  wifiScore: 4,
  coworkingDensity: 5,
  englishLevel: 9,
  vibe: ['Mist-covered', 'Cozy', 'Disconnected'],
  seasonalMultipliers: {
    winter: 1.2,
    summer: 1.1,
    shoulder: 0.8,
    monsoon: 2.5 // Extreme spike due to "Monsoon Tourism"
  },
  stayOptions: [
    {
      id: 'zostel-plus-lonavala',
      name: 'Zostel Plus Lonavala',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'chill',
      amenities: ['Lakeside view', 'Dedicated focus room', 'Fireplace', 'Infinity pool'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 4,
    lateNightDining: 4,
    musicScene: 3,
    danceScene: 2,
    barDensity: 5,
    drinkingCulture: 5.5, // Lonavala has a small but vibrant drinking culture centered around socializing, with a few local bars and cafes that serve alcohol.
    safetyAtNight: 7,
    socialMeetups: 5,
    waterActivities: 6, // Lake focus
    snowActivities: 0,
    natureAccess: 9,
    festivalCulture: 5,
    socialProximity: 6,
    soloFriendly: 8,
    expatCommunityStrength: 4
  }
};