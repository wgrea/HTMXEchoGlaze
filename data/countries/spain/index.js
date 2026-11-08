module.exports = {
  id: 'ESP',
  name: 'Spain',
  region: 'Western Europe',
  viewMode: 'country-first',
  resonanceMode: 'country-first',
  personaFit: [
    'The Remote Architect',
    'The Night-Owl Developer',
    'The Tapas Strategist'
  ],
  costTier: 'Medium',
  decisionAttributes: {
    visaEase: 8, // Schengen / EU focus
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 9, vibe: 10 },
    safety: 9,
    englishLevel: 6,
    avoidIf: [
      'Strict 9-to-5 dining schedule requirements',
      'Intolerance for bureaucratic "Mañana" culture'
    ],
    majorHubs: ['MAD', 'BCN', 'AGP']
  },
  likelihoodScores: {
    nightlife: 10,
    hiking: 8,
    coworking: 9,
    food: 10,
    history: 10,
    safety: 9
  },
  resonanceSignals: {
    nightlifeOverall: 10,
    lateNightDining: 10,
    musicScene: 7,
    danceScene: 8,
    barDensity: 10,
    drinkingCulture: 9.0,
    safetyAtNight: 8,
    socialMeetups: 8,
    waterActivities: 9,
    snowActivities: 5,
    natureAccess: 8,
    festivalCulture: 10,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 8
  },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: null,
      nomadVisa: {
        available: true,
        durationMonths: 12 // Renewable up to 5 years
      },
      workPolicy: "Digital Nomad Visa allows remote work for foreign companies.",
      registrationAfterDays: 0,
      requirements: [
        "Schengen entry requirements",
        "Proof of remote income (approx €2,500/mo)",
        "No criminal record",
        "Private health insurance"
      ]
    },
    seasonality: {
      cheapest: [1, 2, 11],
      sweetSpot: [4, 5, 9, 10],
      peak: [6, 7, 8]
    },
    seasonalVolatility: {
      cheapest: 'low',
      sweetSpot: 'medium',
      neutral: 'medium',
      peak: 'high'
    }
  },
  transportation: {
    daytime: {
      defaultMode: 'metro/train',
      cheapestMode: 'bus',
      recommendedCard: 'Multi Card (Madrid) / T-Usual (BCN)',
      notes: 'High-speed rail (AVE/Ouigo/Iryo) is world-class for intercity travel.'
    },
    nighttime: {
      safestMode: 'walking / rideHailing',
      recommendedApps: ['Cabify', 'Uber', 'FreeNow'],
      notes: 'Cabify is often more professional and consistent than Uber in Spain.'
    },
    apps: {
      rideHailing: ['Cabify', 'Uber', 'Bolt'],
      transit: ['Citymapper', 'Google Maps', 'Renfe Cercanías'],
      navigation: ['Google Maps', 'Waze']
    },
    intercity: {
      cheapest: 'bus (Alsa)',
      fastest: 'train (AVE)',
      recommended: 'train (Ouigo/Iryo for price-performance)'
    }
  },
  packing: {
    clothingStyle: "Urban-chic. Spanish cities favor style; dark denim, clean white sneakers, and well-fitted tees.",
    airportUniform: "Light blazer or utility jacket; cross-body bag for immediate access to the T-Usual card.",
    essentialGear: [
      "Compact crossbody 'tech-sling' for handhelds",
      "Type F power adapter",
      "Reusable water bottle for public fountains"
    ]
  }
};