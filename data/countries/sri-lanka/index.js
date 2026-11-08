module.exports = {
  id: 'LKA',
  name: 'Sri Lanka',
  region: 'South Asia',
  viewMode: 'city-first',
  resonanceMode: 'city-first',
  personaFit: ['The Slow-Coast Developer', 'The Tea-Country Trekker', 'The Value-Strategist'],
  costTier: 'Low',
  
  decisionAttributes: {
    visaEase: 8,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 7, vibe: 10 },
    safety: 8,
    englishLevel: 8, // Very high due to colonial history
    avoidIf: [
      'Requires 99.9% power uptime without a generator',
      'High sensitivity to humidity (Hard on high-end laptop cooling)',
      'Aversion to "Island Time" service speed'
    ],
    majorHubs: ['CMB', 'WLG', 'HIK']
  },

  /** ⭐ Added for Global Comparison */
  likelihoodScores: {
    nightlife: 6,
    hiking: 9,
    coworking: 8,
    food: 9,
    history: 10,
    safety: 8
  },

  /** ⭐ FULL RESONANCE SECTION */
  resonanceSignals: {
    nightlifeOverall: 6,
    lateNightDining: 5,
    musicScene: 6,
    danceScene: 4,
    barDensity: 7,
    drinkingCulture: 3.0, // Sri Lanka has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 6,
    socialMeetups: 8,
    waterActivities: 10, // World-class surfing/diving
    snowActivities: 0,   // Zero snow
    natureAccess: 10,
    festivalCulture: 9,
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 9
  },

  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: 6,
      nomadVisa: { 
        available: true, 
        name: 'Digital Nomad Visa (Launched Feb 2026)',
        durationMonths: 12,
      },
      workPolicy: "Tourist status allows remote work; Nomad Visa allows local bank accounts.",
      registrationAfterDays: 0,
      requirements: [
        'Proof of $2,000 monthly foreign income.',
        'International health insurance (Mandatory for Nomad Visa).',
        'Police clearance certificate (issued within 3 months).',
        'ETA: $50 USD for 30 days; $200 for 180-day extension.'
      ]
    },
    flights: {
      friction: 'low',
      routingNotes: "CMB (Colombo) is the primary hub. SriLankan Airlines is the reliable flag carrier.",
      hubs: ['CMB']
    },
    seasonality: {
      cheapest: [5, 6, 9], // Southwest Monsoon
      sweetSpot: [2, 3, 10], 
      peak: [12, 1] 
    }
  },

  transportation: {
    daytime: {
      defaultMode: 'rideHailing',
      cheapestMode: 'bus',
      notes: 'Use the PickMe app—it is consistently more reliable than Uber in Sri Lanka for Tuk-Tuks.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['PickMe', 'Uber'],
      notes: 'Stick to PickMe for tracked rides; avoid hailing street Tuk-Tuks after dark.'
    },
    apps: {
      rideHailing: ['PickMe', 'Uber'],
      transit: ['Google Maps'],
      navigation: ['Google Maps', 'Waze']
    },
    intercity: {
      cheapest: 'train',
      fastest: 'flight',
      recommended: 'train',
      notes: 'The Kandy-Ella-Weligama rail line is a functional masterpiece, but book 1st/2nd class 30 days ahead.'
    }
  },
  packing: {
    clothingStyle: "Tropical-functional. Lightweight trekking gear for the hills; modest attire for temple visits.",
    airportUniform: "Cargo pants with zip pockets; light hoodie.",
    essentialGear: [
      "Power bank (grid stability can vary)",
      "Type G power adapter",
      "Microfiber tech-cleaning cloth"
    ]
  }
}; // This closes the entire export default object