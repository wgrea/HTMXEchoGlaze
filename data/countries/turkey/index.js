module.exports = {
  id: "TUR",
  name: "Turkey",
  region: "Eurasia",
  viewMode: "city-first",
  resonanceMode: "dynamic",
  personaFit: {
    digitalNomad: 9,
    backpacker: 8,
    luxuryTraveler: 7,
    family: 6,
  },
  costTier: "Affordable",
  decisionAttributes: {
    visaEase: 8, // High ease due to e-visa and new DNV
    digitalNomadVisa: true,
    nomadFriendliness: {
      infra: 7,
      vibe: 9,
    },
    safety: 7,
    englishLevel: 6,
    avoidIf: ["You require consistent 200Mbps+ public Wi-Fi", "You are sensitive to high inflation volatility"],
    majorHubs: ["Istanbul", "Antalya", "Izmir", "Bodrum"],
  },
  likelihoodScores: {
    nightlife: 9,
    hiking: 8,
    coworking: 8,
    food: 10,
    history: 10,
    safety: 7,
  },
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 10,
    musicScene: 8,
    danceScene: 7,
    barDensity: 9,
    drinkingCulture: 2.5, // Turkey has a vibrant drinking culture with a focus on socializing, from traditional tea gardens to lively bars and clubs.
    safetyAtNight: 7,
    socialMeetups: 8,
    waterActivities: 9,
    snowActivities: 5,
    natureAccess: 7,
    festivalCulture: 8,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 8,
  },
travelReadiness: {
visa: {
    touristStayDays: 90,
    longStayTouristVisaMonths: 6, // Short-term residence permit (Ikamet)
    nomadVisa: {
      available: true, 
      durationMonths: 12,
    },
    workPolicy: "Tourist status; no local employment",
    registrationAfterDays: null,
    requirements: ["E-visa or visa-free entry", "Proof of funds", "Address registration for long stays"],
  },
    seasonality: {
      cheapest: [1, 2, 11, 12],
      sweetSpot: [4, 5, 9, 10],
      peak: [6, 7, 8],
    }
  },
transportation: {
    daytime: {
      defaultMode: 'bus',
      cheapestMode: 'bus',
      recommendedCard: 'Istanbulkart (for Istanbul) / Kentkart',
      notes: 'Public transit is extensive but can be crowded during peak hours.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['BiTaksi', 'Uber'],
      notes: 'Yellow taxis are ubiquitous; use apps to track fare and route.'
    },
    apps: {
      rideHailing: ['BiTaksi', 'Uber'],
      transit: ['Mobiett', 'Moovit'],
      navigation: ['Google Maps', 'Yandex Maps']
    },
  intercity: {
      cheapest: 'bus',
      fastest: 'flight',
      recommended: 'train'
    } 
  }, // <--- THIS BRACE closes 'transportation' so 'packing' can be its own section

  packing: {
    clothingStyle: "Smart-casual and modest. Focus on breathable linens; ensure shoulders and knees are covered for mosque visits.",
    airportUniform: "Lightweight windbreaker for Istanbul's breeze; slip-on shoes for easy security checks.",
    essentialGear: [
      "Anti-theft daypack for crowded bazaars",
      "High-capacity power bank for long ferry commutes",
      "Type F (European) power adapter"
    ],
    localNuance: "Istanbul is hilly and cobblestoned; high-grip footwear is a functional requirement."
  }
}; // This closes the entire export default object