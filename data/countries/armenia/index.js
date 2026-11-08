// data/countries/armenia/index.js
module.exports = {
  id: 'ARM',
  name: 'Armenia',
  region: 'Eurasia',
  costTier: 'Low-Medium',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: ['The Intellectual Nomad', 'The History Buff', 'The Slow-Traveler'],
  decisionAttributes: {
    visaEase: 9, // 180 days visa-free for USA/EU/UK
    digitalNomadVisa: false, // Not needed due to generous 180-day stay
    nomadFriendliness: { infra: 8, vibe: 9 },
    safety: 10,
    englishLevel: 6,
    avoidIf: ['You need world-class public transport', 'You are bothered by high smoking rates in cafes'],
    majorHubs: ['YER', 'LWN']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 180,
      longStayTouristVisaMonths: 6,
      nomadVisa: { available: false },
      workPolicy: 'Remote work for foreign entities is permitted under the 180-day visa-free stay.',
      registrationAfterDays: 30,
 },
    flights: {
      friction: 'medium',
      routingNotes: 'Zvartnots (EVN) is beautiful but flights can be pricier than Kutaisi in Georgia.',
      hubs: ['EVN']
    },
    seasonality: {
      cheapest: [1, 2, 3, 11],
      sweetSpot: [5, 6, 9, 10],
      peak: [7, 8, 12]
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
      defaultMode: 'walk',
      cheapestMode: 'bus (marshrutka)',
      recommendedCard: 'Yandex Metro App / Cash',
      notes: 'Yerevan Kentron is extremely walkable. For everything else, use the purple vans.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['GG Taxi', 'Yandex Go'],
      notes: 'GG Taxi is the local favorite for better cars and service quality.'
    },
    apps: {
      rideHailing: ['GG Taxi', 'Yandex Go', 'Bolt'],
      transit: ['Yandex Maps', 'A-to-B'],
      navigation: ['Google Maps', 'Yandex Maps']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'taxi (shared)',
      recommended: 'taxi (shared)'
    }
  },
  resonanceSignals: {
    nightlifeOverall: 7,
    lateNightDining: 8,
    musicScene: 9,
    danceScene: 6,
    barDensity: 8,
    drinkingCulture: 6.0, // Armenia has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 10,
    socialMeetups: 8,
    waterActivities: 5, // Lake Sevan is the 'Armenian Sea'
    snowActivities: 8, // Tsaghkadzor is a great budget ski destination
    natureAccess: 9, // Dilijan (Armenian Switzerland) is stunning
    festivalCulture: 8,
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 8
  },
  packing: {
    clothingStyle: "Smart-casual and polished. Armenians take pride in appearance; avoid overly 'sloppy' traveler clothes in Yerevan.",
    airportUniform: "Comfortable sneakers; light scarf (for sun and church visits).",
    essentialGear: [
      "GG Taxi App (must-have local app)",
      "Type C/F power adapter",
      "Portable battery for long mountain excursions"
    ],
    localNuance: "Yerevan is the 'City of Cafes.' You will spend a lot of time working from outdoor tables; bring a glare-reducing screen protector."
  }
};