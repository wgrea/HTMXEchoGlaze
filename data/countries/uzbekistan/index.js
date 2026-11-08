module.exports = {
  id: 'UZB',
  name: 'Uzbekistan',
  region: 'Central Asia',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: ['The Cultural Explorer', 'The Budget-Optimizer', 'The Silk Road Rail-Rider'],
  costTier: 'Affordable',
  decisionAttributes: {
    visaEase: 9, // 30 days visa-free for 80+ countries (USA, EU, UK, etc.)
    digitalNomadVisa: true, // Tashkent Digital Nomad Visa framework active
    nomadFriendliness: { infra: 7, vibe: 8 },
    safety: 9.5, // Exceptionally high state priority on public security
    englishLevel: 5, // Rising rapidly among urban youth; Uzbek and Russian are dominant
    avoidIf: ['You require blazing gigabit fiber lines for video rendering pipelines', 'You easily struggle with intense mid-summer desert heat waves'],
    majorHubs: ['TAS', 'SKD', 'BHK']
  },
  likelihoodScores: { nightlife: 6, hiking: 8, coworking: 7, food: 9, history: 10, safety: 10 },
  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: null,
      nomadVisa: { 
        available: true, 
        name: 'IT-Visa / Nomad Status', 
        durationMonths: 12,
        incomeRequirement: 1500 
      },
      workPolicy: "Remote work for foreign employers is legally permitted during the standard 30-day visa-free window.",
      workPolicyCategory: 'nomad-visa',
      registrationAfterDays: 3, // Handled automatically by hotels/hostels via the 'E-Mehmon' system
      requirements: ["Valid passport", "Hostel/Hotel digital registration slip"]
    },
    flights: {
      friction: 'low',
      routingNotes: 'Tashkent International (TAS) is the premier gateway to Central Asia with strong direct routes to Istanbul, Dubai, Seoul, and London.',
      hubs: ['TAS']
    },
    seasonality: { cheapest: [12, 1, 2], sweetSpot: [3, 4, 5, 9, 10, 11], peak: [6, 7, 8] },
    seasonalVolatility: { cheapest: 'low', sweetSpot: 'medium', neutral: 'medium', peak: 'high' }
  },
  transportation: {
    daytime: {
      defaultMode: 'metro',
      cheapestMode: 'bus',
      recommendedCard: 'ATTO Card / Contactless Bank Card',
      notes: 'The Tashkent Metro is a literal underground museum—ornate, clean, and runs every 2-3 minutes.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Yandex Go'],
      notes: 'Yandex Go is standard practice here. Avoid hailing un-metered street cabs to guarantee transparent local pricing structures.'
    },
    apps: {
      rideHailing: ['Yandex Go', 'MyTaxi'],
      transit: ['Yandex Metro', 'Tashkent Bus'],
      navigation: ['2GIS', 'Google Maps', 'Yandex Maps']
    },
    intercity: {
      cheapest: 'train', // Standard slow trains
      fastest: 'train', // 'Afrosiyob' high-speed Spanish-built bullet trains connect Samarkand and Bukhara in hours
      recommended: 'train' // Book Afrosiyob tickets exactly 45 days in advance as they sell out instantly
    }
  },
  resonanceSignals: {
    nightlifeOverall: 5, // Growing club and craft bar pockets, though local tea-house social frameworks dominate
    lateNightDining: 8,
    musicScene: 6,
    danceScene: 6,
    barDensity: 5,
    drinkingCulture: 6.0, // Chaykhanas (teahouses) form the core social foundation; vodka and local wines are common in restaurants
    safetyAtNight: 10, // Walk anywhere past midnight with zero friction
    socialMeetups: 7,
    waterActivities: 5, // Charvak Reservoir is popular for summer day trips
    snowActivities: 8, // Amirsoy Mountain Resort offers modern Poma gondolas and surprisingly high-spec ski fields
    natureAccess: 8, // Chatkal mountains and Tian Shan foothills are reachable within 1.5 hours
    festivalCulture: 6,
    socialProximity: 8,
    soloFriendly: 10,
    expatCommunityStrength: 7
  },
  packing: {
    clothingStyle: "Smart-casual and respectful. Shorts are fine in urban Tashkent, but modest coverage (knees/shoulders) is ideal for historic shrines.",
    airportUniform: "Breathable linen blends; light trail sneakers ready for long pavement treks.",
    essentialGear: [
      "Physical folder for tracking printed hotel registration slips (checked at departure borders)",
      "Type C/F European power adapter",
      "Sturdy dust-resistant camera or phone case for desert wind gusts"
    ],
    localNuance: "Cash culture is shrinking rapidly due to widespread Uzcard/Humo and Visa terminals, but keeping some local currency bills handy for neighborhood bazaars is still smart."
  }
};