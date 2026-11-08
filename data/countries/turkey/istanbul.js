module.exports = {
  id: "IST", // Standardized to IST
  countryId: "TUR",
  name: "Istanbul",
  type: "hub",
  costMultiplier: 1.2,
  vibe: ["Electric", "Historic", "Chaos-Chic", "Culinary-Heavy"],
  avoidIf: [
    "You hate dense crowds and sensory overload", 
    "You are frustrated by slow bureaucracy (Ikamet process)",
    "You are sensitive to air quality (Smog can peak in winter)"
  ],
  safetyPattern: {
    day: 9,
    night: 7,
    notes: "Very safe for a megacity. Avoid taxi friction by using the 'BiTaksi' app—insist on the meter even with apps.",
  },
  
  /** ⭐ Food Strategy - Matches your "Food Strategy" UI link */
  foodStrategy: {
    breakfast: {
      bestValue: "Serpme Kahvaltı in Beşiktaş (Shared Spread)",
      cheapest: "Simit and tea from a street cart (under $1)",
      note: "Breakfast salons in Beşiktaş offer the best vibe/value ratio for a morning work session.",
    },
    lunch: {
      bestValue: "Esnaf Lokantası (Tradesmen Restaurants like 'Lades 2')",
      cheapest: "Tavuk Pilav (Chicken & Rice) street stalls",
      note: "Esnaf spots offer home-cooked quality for local prices; look for where the shopkeepers eat.",
    },
    dinner: {
      bestValue: "Meyhane in Kadıköy (Tapas/Meze style)",
      cheapest: "Balık Ekmek (Fish Sandwich) by the Eminönü waterfront",
    },
    dessert: {
      bestValue: "Karaköy Güllüoğlu Baklava",
      cheapest: "Dondurma (Turkish Ice Cream) from local 'Mado' or street carts",
    },
    healthyCheap: "Look for 'Çorba' (Lentil Soup) shops—it's the ultimate high-protein, low-cost utility meal in Turkey.",
    nomadProTip: "Use 'Getir' for high-speed grocery/food delivery during deep-work sessions.",
  },

  wifiScore: 7,
  coworkingDensity: 9,
  englishLevel: 7,
  
  /** ⭐ Updated Resonance for 2026 Global Filter Compatibility */
  resonanceSignals: {
    nightlifeOverall: 10,
    lateNightDining: 10,
    musicScene: 9,
    danceScene: 8,
    barDensity: 10,
    drinkingCulture: 5.0, // Istanbul has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 7,
    socialMeetups: 9,
    waterActivities: 4, // Bosphorus is for views, not swimming
    snowActivities: 1,  // Occasional light snow, no 'activities'
    natureAccess: 5,
    festivalCulture: 9,
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 9,
  },

  /** ⭐ Updated Stay Options to match your "WiFi Needs" UI Filter */
  stayOptions: [
    {
      id: "nest-nomad",
      name: "Nest Digital Nomad House",
      type: "hostel", // Or 'coliving'
      verifiedWifi: true,
      socialTone: "quiet",
      /** 🚀 Maps to your '4.5+ Power User' filter */
      workability: 5, 
      amenities: ["Coworking Space", "Ergonomic Chairs", "Private Rooms Only", "500Mbps Fiber", "Phone Booths"],
      priceTier: 2,
    },
    {
      id: "second-home",
      name: "Second Home Hostel",
      type: "hostel",
      verifiedWifi: true,
      socialTone: "social",
      /** 💻 Maps to your '3.5+ Standard Work' filter */
      workability: 3, 
      amenities: ["Rooftop Terrace", "Weekly Social Events", "Communal Kitchen", "Fiber WiFi"],
      priceTier: 1,
    }
  ],
};