module.exports = {
  id: 'COL',
  name: 'Colombia',
  region: 'South America',
  viewMode: 'country-first',
  resonanceMode: 'country-first',
  personaFit: [
    'The High-Energy Coder',
    'The Tropical Strategist',
    'The Night-Owl Developer'
  ],
  costTier: 'Low',
  decisionAttributes: {
    visaEase: 8,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 8, vibe: 9 },
    safety: 5,
    englishLevel: 3,
    avoidIf: [
      'Sensitive to high-density urban noise',
      'Requires low-vigilance personal safety (needs "Street Smarts")',
      'Aversion to steep, hilly terrain (in Medellín/Manizales)'
    ],
    majorHubs: ['BOG', 'MDE', 'CTG']
  },
  likelihoodScores: {
    nightlife: 10,
    hiking: 9,
    coworking: 10,
    food: 8,
    history: 8,
    safety: 5
  },
  resonanceSignals: {
    nightlifeOverall: 10,
    lateNightDining: 9,
    musicScene: 10,
    danceScene: 10, // Salsa/Reggaeton capital
    barDensity: 10,
    drinkingCulture: 8.0, // Colombia has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 4,
    socialMeetups: 10,
    waterActivities: 7,
    snowActivities: 1,
    natureAccess: 9,
    festivalCulture: 10,
    socialProximity: 10,
    soloFriendly: 9,
    expatCommunityStrength: 10
  },

  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 6,
      nomadVisa: {
        available: true,
        durationMonths: 24
      },
      workPolicy: "Strictly foreign remote work. 2026 rule: Must earn 3x Minimum Wage (~$1,385 USD/mo).",
      registrationAfterDays: 0,
      requirements: [
        "Proof of foreign employment/contracts",
        "Bank statements (last 3 months)",
        "Health insurance with $70k+ coverage",
        "Passport valid 6+ months"
      ]
    },
    seasonality: {
      cheapest: [10, 11, 5], // Peak rainy season
      sweetSpot: [2, 3, 7, 8],
      peak: [12, 1]
    },
    seasonalVolatility: {
      cheapest: 'medium',
      sweetSpot: 'low',
      neutral: 'medium',
      peak: 'high'
    }
  },

  transportation: {
    daytime: {
      defaultMode: 'metro/bus',
      cheapestMode: 'bus',
      recommendedCard: 'Cívica (Medellín) / Tullave (Bogotá)',
      notes: 'Medellín has the only Metro in the country. Bogotá relies on the TransMilenio BRT system.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Cabify', 'Uber', 'Didi'],
      notes: 'Never hail a yellow taxi on the street at night. Use Cabify for the highest safety vetting.'
    },
    apps: {
      rideHailing: ['Cabify', 'Uber', 'Didi', 'InDrive'],
      transit: ['Moovit', 'Google Maps'],
      navigation: ['Waze']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'plane',
      recommended: 'plane (Avianca/LATAM)'
    }
  },
  packing: {
    clothingStyle: "City-sleek. Medellín and Bogotá are fashion-forward; dark jeans and leather/canvas sneakers.",
    airportUniform: "Lightweight rain-shell (afternoon showers are common); secure internal pockets.",
    essentialGear: [
      "Anti-theft backpack locks",
      "Type A/B power adapter",
      "Protective case for handheld screens"
    ]
  }
};