module.exports = {
  id: 'JOR',
  name: 'Jordan',
  region: 'Middle East',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: ['The Cultural Archaeologist', 'The True Backpacker', 'The Slow-Traveler'],
  costTier: 'Medium',
  decisionAttributes: {
    visaEase: 8, // Visa on arrival available or bundled directly into the 'Jordan Pass'
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 6, vibe: 9 },
    safety: 9,
    englishLevel: 7,
    avoidIf: ['You demand blazing gigabit fiber lines at all times', 'Your budget cannot stretch past ultra-cheap Southeast Asian thresholds'],
    majorHubs: ['AMM', 'AQJ']
  },
  likelihoodScores: { nightlife: 5, hiking: 8, coworking: 6, food: 9, history: 10, safety: 9 },
  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: 3, // Easily extended at local police stations
      nomadVisa: { available: false },
      workPolicy: "Remote work for foreign employers is implicitly tolerated under standard tourist status.",
      workPolicyCategory: 'tourist',
      registrationAfterDays: 30,
      requirements: ["Valid passport with 6 months validity", "Jordan Pass or 40 JOD for Visa on Arrival"]
    },
    flights: {
      friction: 'medium',
      routingNotes: 'Queen Alia International (AMM) has solid global connections. Some low-cost regional carriers service it.',
      hubs: ['AMM']
    },
    seasonality: { cheapest: [12, 1, 2], sweetSpot: [3, 4, 5, 9, 10, 11], peak: [6, 7, 8] },
    seasonalVolatility: { cheapest: 'low', sweetSpot: 'medium', neutral: 'medium', peak: 'high' }
  },
  transportation: {
    daytime: {
      defaultMode: 'walk',
      cheapestMode: 'bus',
      recommendedCard: 'Cash Only',
      notes: 'White "service taxis" run fixed routes like buses and are incredibly cost-effective once you learn the tracks.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Careem', 'Uber'],
      notes: 'Careem is the premier choice across the Middle East with highly reliable fixed-fare logic.'
    },
    apps: {
      rideHailing: ['Careem', 'Uber'],
      transit: ['Google Maps'],
      navigation: ['Google Maps']
    },
    intercity: {
      cheapest: 'bus', // JETT Bus network
      fastest: 'taxi', // Private hire or shared taxi
      recommended: 'bus' // JETT Bus is comfortable and highly reliable
    }
  },
  resonanceSignals: {
    nightlifeOverall: 5, // Strongly concentrated to specific hip neighborhoods like Weibdeh
    lateNightDining: 8,
    musicScene: 5,
    danceScene: 4,
    barDensity: 5,
    drinkingCulture: 4.5, // Respectful, localized cafe culture dominates heavily over traditional pubs
    safetyAtNight: 9,
    socialMeetups: 7,
    waterActivities: 7, // Dead Sea floating and Aqaba diving options
    snowActivities: 1,
    natureAccess: 9, // Wadi Rum and the Jordan Trail offer unmatched desert geography
    festivalCulture: 4,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 7
  },
  packing: {
    clothingStyle: "Modest and smart-casual. Cover knees and shoulders out of respect; lightweight linen works perfectly.",
    airportUniform: "Breathable cargo trousers and light layers; slip-on boots for quick security transitions.",
    essentialGear: [
      "The Jordan Pass (printed physical copy—saves major visa fees upfront if bought before arrival)",
      "Type G power adapter (UK standard style used natively)",
      "High-grade rugged power bank for desert tracking loops"
    ],
    localNuance: "Do not judge a hostel here by an infrastructure speed test. The real asset is the community layer—hosts will literally rewrite their whole day to help you route your transport or map out local spots."
  }
};