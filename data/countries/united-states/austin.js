module.exports = {
  id: 'AUS',
  name: 'Austin',
  type: 'hub',
  costMultiplier: 1.5,
  avoidIf: [
    'Needs strong public transit',
    'Hates extreme heat/humidity'
  ],
  safetyPattern: {
    day: 4,
    night: 3,
    notes: 'Safe-Bubble Pattern — central/west safe; avoid underpasses & late-night East 6th'
  },
  foodAffordability: {
    grocery: 7,
    streetFood: 8,
    diningOut: 5
  },
  foodStrategy: {
  breakfast: { bestValue: "Grocery: Taco Deli (at Whole Foods/HEB)", cheapest: "Fast Food: P. Terry's Breakfast Burger" },
  lunch: { bestValue: "Street: Food Truck Tacos (Corn tortillas = Healthy)", cheapest: "Grocery: HEB Meal Deal combo" },
  dinner: { bestValue: "Shared: BBQ Family Style (split by weight)", cheapest: "Street: 6th St. Pizza Slice" },
  dessert: { bestValue: "Tradition: Amy's Ice Cream", cheapest: "Grocery: Round Rock Donuts (Store bought)" },
  healthyCheap: "Central Market (North Lamar) bulk bins and salad bar are the highest quality-to-cost nutrition hub."
},
  wifiScore: 5,
  coworkingDensity: 5,
  englishLevel: 5,
  vibe: ['Music-centric', 'Tech hub', 'Outdoor'],
  seasonalMultipliers: {
    winter: 1.1,
    summer: 1.2,
    shoulder: 1.4
  },
  stayOptions: [
    {
      id: 'outsite-austin',
      name: 'Outsite Austin',
      type: 'coliving',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['central open workspace', 'in-room desks', 'community events'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 6,
    musicScene: 10,
    danceScene: 6,
    barDensity: 10,
    drinkingCulture: 8.0, // Austin has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 7,
    socialMeetups: 9,
    waterActivities: 9,
    snowActivities: 1,
    natureAccess: 8,
    festivalCulture: 10,
    socialProximity: 7,
    soloFriendly: 9,
    expatCommunityStrength: 5
  }
};