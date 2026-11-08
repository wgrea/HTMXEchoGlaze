module.exports = {
  id: 'PRT',
  name: 'Portugal',
  region: 'Western Europe',
  viewMode: 'city-first',
  resonanceMode: 'city-first',
  personaFit: [
    'The Coastal Nomad',
    'The Pastry Enthusiast',
    'The Surf & Work Specialist'
  ],
  costTier: 'Medium',
  decisionAttributes: {
    visaEase: 4,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 9, vibe: 9 },
    safety: 9,
    avoidIf: [
      'Frustrated by slow-moving bureaucracy (AIMA)',
      'Sensitive to high humidity/damp winters',
      'Dislike steep hills and cobblestones'
    ],
    majorHubs: ['LIS', 'OPO', 'FAO']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 12,
      nomadVisa: {
        available: true,
        name: 'D8 Digital Nomad Visa',
        durationMonths: 12,
        incomeRequirement: 3680 // 4x minimum wage as of 2026
      },
      workPolicy: 'Remote work for non-Portuguese entities allowed',
      registrationAfterDays: 90,
      requirements: [
        'NIF (Tax Number)',
        'Portuguese bank account',
        'Proof of accommodation (6-12 months)',
        'Clean criminal record'
      ]
    },
    flights: {
      friction: 'low',
      routingNotes: 'Excellent connectivity via TAP Air Portugal; major low-cost hub for Europe.',
      hubs: ['LIS', 'OPO']
    },
    seasonality: {
      cheapest: [1, 2, 11, 12],
      sweetSpot: [5, 6, 9, 10],
      peak: [7, 8]
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
      defaultMode: 'train',
      cheapestMode: 'bus',
      recommendedCard: 'Navegante / Viva Viagem',
      notes: 'CP (Comboios de Portugal) is excellent for intercity; Rede Expressos for cheaper bus routes.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Bolt', 'Uber', 'Free Now'],
      notes: 'Public transport frequency drops significantly after 1:00 AM outside major hubs.'
    },
    apps: {
      rideHailing: ['Bolt', 'Uber', 'Free Now'],
      transit: ['Citymapper', 'Comboios de Portugal', 'Gira (Bikes)'],
      navigation: ['Google Maps', 'Waze']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'train',
      recommended: 'train'
    }
  },
resonanceSignals: {
    nightlifeOverall: 8,
    lateNightDining: 6.5, // Portugal eats late, but kitchens often close by 11 PM
    musicScene: 8, // Strong Fado tradition + growing electronic scene
    danceScene: 8.5,
    barDensity: 9,
    drinkingCulture: 9.5, // Vibrant café culture and strong wine scene, but less focused on heavy drinking compared to Spain
    safetyAtNight: 9,
    socialMeetups: 9,
    waterActivities: 10, // World-class surfing and sailing
    snowActivities: 3, // Limited to Serra da Estrela (seasonal)
    natureAccess: 8,
    festivalCulture: 9, // Peak June festivities
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 9
  },
  packing: {
    clothingStyle: "Boho-European. Focus on high-traction footwear for cobblestones; layered knits for the Atlantic breeze.",
    airportUniform: "Windbreaker jacket; slip-on sneakers for security efficiency.",
    essentialGear: [
      "European Type F adapter",
      "Foldable laptop stand for cafe-work",
      "Polarized lenses for high-glare coastlines"
    ]
  }
};