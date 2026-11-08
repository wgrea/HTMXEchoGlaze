module.exports = {
  id: 'QAT',
  name: 'Qatar',
  region: 'Middle East / GCC',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: [
    'The Business Nomad',
    'The Stopover Explorer',
    'The Architecture Enthusiast',
    'The Luxury Executive'
  ],
  costTier: 'High',
  decisionAttributes: {
    visaEase: 9,
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 9, vibe: 6 },
    safety: 9,
    englishLevel: 9,
    avoidIf: [
      'Strict budget constraints (Accommodation is expensive)',
      'Sensitivity to conservative social laws',
      'Dislikes extreme artificial environments'
    ],
    majorHubs: ['DOH'] 
  },
  likelihoodScores: {
    nightlife: 4,
    hiking: 2,
    coworking: 10,
    food: 9,
    history: 7,
    safety: 9
  },
  resonanceSignals: {
    nightlifeOverall: 4,
    lateNightDining: 9,
    musicScene: 5,
    danceScene: 3,
    barDensity: 4,
    drinkingCulture: 1.5, // Qatar has a growing but still limited drinking culture, focused on high-end bars and socializing within licensed venues.
    safetyAtNight: 10,
    socialMeetups: 5,
    waterActivities: 8,
    snowActivities: 1,
    natureAccess: 3,
    festivalCulture: 6,
    socialProximity: 5,
    soloFriendly: 7,
    expatCommunityStrength: 8
  },
  travelReadiness: {
visa: {
    touristStayDays: 30, // 90 days for some nationalities via waiver
    longStayTouristVisaMonths: null,
    nomadVisa: {
      available: false,
      durationMonths: null,
    },
    workPolicy: "Tourist status; no local employment",
    registrationAfterDays: null,
    requirements: ["Visa waiver or Hayya platform", "Confirmed return ticket", "Discover Qatar hotel booking"],
  },
    seasonality: {
      cheapest: [6, 7, 8], // Extreme heat = low prices
      sweetSpot: [4, 5, 10, 11], 
      peak: [12, 1, 2, 3] 
    },
    seasonalVolatility: {
      cheapest: 'low',
      sweetSpot: 'medium',
      neutral: 'high',
      peak: 'extreme' 
    }
  },

  transportation: {
  daytime: {
    defaultMode: 'metro',
    cheapestMode: 'metro',
    recommendedCard: 'Karwa Smart Card / Goldclub Card',
    notes: 'The Doha Metro is world-class. Use the free "metrolink" feeder buses to get from stations to your final doorstep.'
  },
  nighttime: {
    safestMode: 'rideHailing',
    recommendedApps: ['Karwa Taxi', 'Uber', 'Careem'],
    notes: 'Very safe at all hours. Street-hailing Karwa taxis (turquoise) is common and reliable.'
  },
  apps: {
    rideHailing: ['Karwa Taxi', 'Uber', 'Careem'],
    transit: ['Sila', 'Qatar Rail'],
    navigation: ['Waze', 'Google Maps']
  },
  intercity: {
    cheapest: 'bus',
    fastest: 'bus', // Qatar is small; no domestic rail/flights
    recommended: 'bus'
  }

  },
  packing: {
    clothingStyle: "Business-casual and high-modesty. High-end fabrics; avoid shorts or tank tops in public spaces.",
    airportUniform: "Mid-weight sweater (airport and mall AC is aggressive); slip-on loafers.",
    essentialGear: [
      "Heavy-duty cooling sleeve for tech gear",
      "Premium noise-canceling headphones",
      "Type G (UK-style) power adapter"
    ],
    localNuance: "The heat is external, but the AC is arctic. Always carry a light layer for indoor work."
}
}; // This closes the whole Country object