module.exports = {
  id: 'USA',
  name: 'United States of America',
  region: 'North America',
  viewMode: 'city-first',
  resonanceMode: 'city-first',
  personaFit: [
    'The Corporate Renegade',
    'The National Park Junkie',
    'The Tech Optimizer'
  ],
  costTier: 'High',
  decisionAttributes: {
    visaEase: 3,
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 10, vibe: 5 },
    safety: 6,
    englishLevel: 10,
    avoidIf: [
      'Requires universal healthcare',
      'Low tolerance for car dependency',
      'Sensitive to political polarization'
    ],
    majorHubs: ['ATL', 'DFW', 'ORD', 'DEN', 'LAX', 'JFK']
  },
  likelihoodScores: {
    nightlife: 8,
    hiking: 10,
    coworking: 10,
    food: 9,
    history: 6,
    safety: 6
  },
  resonanceSignals: {
    nightlifeOverall: 8,
    lateNightDining: 6.5,
    musicScene: 9.5,
    danceScene: 8,
    barDensity: 9,
    drinkingCulture: 7.5, 
    safetyAtNight: 5,
    socialMeetups: 9,
    waterActivities: 9,
    snowActivities: 9,
    natureAccess: 9.5,
    festivalCulture: 9,
    socialProximity: 5,
    soloFriendly: 7,
    expatCommunityStrength: 9
  },
  /** ⭐ NEW: Unified travel readiness block */
/** ⭐ NEW: Unified travel readiness block */
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
      cheapest: [1, 2],
      sweetSpot: [5, 6, 9, 10], // Broadly true, though regional
      peak: [7, 8, 11, 12] // Added Nov/Dec for the massive holiday travel spikes
    },
    seasonalVolatility: {
      cheapest: 'low',     // Deep winter (except ski hubs) is very stable.
      sweetSpot: 'medium', // Shoulder season stability.
      neutral: 'high',     // "Neutral" months like May/Sept often hit by business travel.
      peak: 'high'         // Holiday travel is notoriously volatile.
    }
  },

  transportation: {
  daytime: {
    defaultMode: 'mixed', // Highly city-dependent
    cheapestMode: 'bus',
    notes: 'Except for NYC, Chicago, and DC, a car is usually required. In 2026, many cities use "Tap to Pay" via phone/bank card.'
  },
  nighttime: {
    safestMode: 'rideHailing',
    recommendedApps: ['Uber', 'Lyft'],
    notes: 'Night owl bus/train service is sparse outside major hubs. Use ride-hailing for door-to-door safety.'
  },
  apps: {
    rideHailing: ['Uber', 'Lyft'],
    transit: ['Transit App', 'Citymapper', 'Google Maps'],
    navigation: ['Google Maps', 'Apple Maps', 'Waze']
  },
  intercity: {
    cheapest: 'bus', // FlixBus / Greyhound
    fastest: 'flight',
    recommended: 'flight'
    } 
  }, // <--- THIS BRACE closes 'transportation' so 'packing' can be its own section

  packing: {
    clothingStyle: "Utility-casual. Athleisure is the standard; prioritize comfort and durability over formal style.",
    airportUniform: "TSA-ready setup: slip-ons, no belt, laptop in a dedicated quick-access sleeve.",
    essentialGear: [
      "High-wattage GAN charger (for rapid outlet-snagging)",
      "Noise-canceling headphones for domestic hubs",
      "Backup battery for long Amtrak/Bus routes"
    ],
    localNuance: "Distances are vast; ensure you have offline gaming/media saved for dead-zones."
  }
};