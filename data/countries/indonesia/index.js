module.exports = {
  id: 'IDN',
  name: 'Indonesia',
  region: 'Southeast Asia',
  costTier: 'Medium-Low',
  viewMode: 'city-first', // Bali is the primary entry point for nomads
  resonanceMode: 'city-first',
  personaFit: ['The Tropical Creative', 'The Tech-Enclave Founder', 'The Surfer-Dev'],
  
  decisionAttributes: {
    visaEase: 7,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 8, vibe: 10 },
    safety: 8,
    avoidIf: [
      'Dislikes heavy scooter traffic and "Influencer" density',
      'Sensitive to volcanic activity/seismic alerts',
      'Needs high-speed walking infrastructure (Walking is difficult in Bali)'
    ],
    majorHubs: ['DPS', 'CGK', 'SUB']
  },

  /** ⭐ Added Likelihood Scores for Global Comparison */
  likelihoodScores: {
    nightlife: 9,
    hiking: 8,
    coworking: 10,
    food: 9,
    history: 7,
    safety: 8
  },

  /** ⭐ Added Country-Level Resonance for UI Filtering */
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 8,
    musicScene: 8,
    danceScene: 9,
    barDensity: 10,
    drinkingCulture: 1.0, // Indonesia has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 7,
    socialMeetups: 10,
    waterActivities: 10,
    snowActivities: 0,
    natureAccess: 9,
    festivalCulture: 8,
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 10
  },

  travelReadiness: {
    visa: {
      touristStayDays: 30, // VoA (Extendable once)
      nomadVisa: { 
        available: true, 
        name: 'E33G Remote Worker KITAS',
        durationMonths: 12,
      },
      workPolicy: "Strictly remote for foreign entities; no local revenue allowed.",
      registrationAfterDays: 0, 
      requirements: [
        'E-VoA: Apply online via evisa.imigrasi.go.id for 30 days; extend online.',
        'E33G: Requires $60k annual salary + active foreign employment contract.',
        'Proof of funds: $2,000 minimum balance for 3 consecutive months.',
        '2026 Note: E33G holders can now open local Bank Mandiri/BCA accounts.',
        'International Driving Permit (IDP) required for scooter legal safety.'
      ]
    },
    flights: {
      friction: 'low',
      routingNotes: "DPS (Bali) is a global hub. Use AirAsia or Jetstar for regional hops.",
      hubs: ['DPS', 'CGK']
    },
    seasonality: {
      cheapest: [1, 2, 11], // Deep monsoon
      sweetSpot: [4, 5, 9, 10], // Shoulder months
      peak: [7, 8, 12] // Dry season and Christmas
    }
  },

  transportation: {
    daytime: {
      defaultMode: 'rideHailing',
      cheapestMode: 'bus',
      notes: 'Gojek/Grab bikes are essential. 2026 Tip: Use Bluebird for airport runs to avoid local taxi mafia friction.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Gojek', 'Grab', 'Bluebird'],
      notes: 'Canggu traffic at 10 PM is worse than noon—budget 3x travel time.'
    },
    apps: {
      rideHailing: ['Gojek', 'Grab', 'Bluebird'],
      transit: ['Google Maps', 'Moovit'],
      navigation: ['Google Maps', 'Waze']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'flight',
      recommended: 'flight' // Domestic air travel is high utility in an archipelago
    }
  },
  packing: {
    clothingStyle: "Island-casual. Breathable synthetics; sarong-ready for temples. Avoid heavy denim in the humidity.",
    airportUniform: "Loose joggers and a light tee; flip-flops in the bag for immediate swap upon arrival.",
    essentialGear: [
      "Dry-bag for tech (essential for scooter travel)",
      "International SIM-card tool",
      "Type C/F power adapter"
    ]
  }
};