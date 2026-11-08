// data/countries/argentina/index.js
module.exports = {
  id: 'AZE',
  name: 'Azerbaijan',
  region: 'Caucasus / Eurasia',
  viewMode: 'country-first',
  resonanceMode: 'country-first',
  personaFit: [
    'The Budget Architect',
    'The Silk Road Historian',
    'The F1 Enthusiast'
  ],
  costTier: 'Low–Medium',
  decisionAttributes: {
    visaEase: 5,
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 8, vibe: 7 },
    safety: 8,
    englishLevel: 3,
    avoidIf: [
      'Sensitive to "Grey-Zone" political tensions',
      'Requires high LGBTQ+ visibility'
    ],
    majorHubs: ['GYD']
  },
  likelihoodScores: {
    nightlife: 6,
    hiking: 9,
    coworking: 7,
    food: 9,
    history: 10,
    safety: 8
  },
  resonanceSignals: {
    nightlifeOverall: 7,
    lateNightDining: 8.5,
    musicScene: 6,
    danceScene: 5,
    barDensity: 6,
    drinkingCulture: 3.5, // Azerbaijan has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 9,
    socialMeetups: 4,
    waterActivities: 6,
    snowActivities: 8,
    natureAccess: 9,
    festivalCulture: 7,
    socialProximity: 8,
    soloFriendly: 8,
    expatCommunityStrength: 4
  },

  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: null,
      nomadVisa: {
        available: false,
        durationMonths: null
      },
      workPolicy: "Tourist status; no local employment",
      registrationAfterDays: 15,
},
    seasonality: {
      cheapest: [1, 2, 11],
      sweetSpot: [5, 6, 9, 10],
      peak: [7, 8, 3]
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
      defaultMode: 'bus',
      cheapestMode: 'bus',
      recommendedCard: 'BakıKart',
      notes:
        'Baku has a highly efficient metro and "red bus" system. Avoid older purple/smaller buses as they don\'t always accept the card.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Bolt', 'Uber AZ'],
      notes:
        'Metro closes at midnight. Avoid "unmarked" street taxis; Bolt is extremely cheap and tracks your GPS.'
    },
    apps: {
      rideHailing: ['Bolt', 'Uber AZ', 'Yango'],
      transit: ['BakiKart', '2GIS', 'Google Maps'],
      navigation: ['Waze', 'Google Maps']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'train',
      recommended: 'train'
    }
  },
  packing: {
    clothingStyle: "Modern-polished. Baku is a 'mini-Dubai'; lean into structured jackets and clean sneakers over athletic wear.",
    airportUniform: "Structured hoodie or tech-fleece; easy-access pocket for the ASAN Visa printout.",
    essentialGear: [
      "Hard-shell case for PS5 Portable (long regional flights)",
      "Universal adapter with surge protection",
      "Compact umbrella for Caspian winds"
    ]
  }
};
