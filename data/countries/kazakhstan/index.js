module.exports = {
  id: 'KAZ',
  name: 'Kazakhstan',
  region: 'Central Asia',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: ['The Frontier Explorer', 'The Cafe Worker', 'The Alpine Developer'],
  costTier: 'Affordable',
  decisionAttributes: {
    visaEase: 9, // 30 days visa-free for citizens of 70+ countries (USA, EU, UK)
    digitalNomadVisa: true, // Neo Nomad Visa recently implemented
    nomadFriendliness: { infra: 8, vibe: 9 },
    safety: 9,
    englishLevel: 5, // Rapidly growing among youth in Almaty, but Russian/Kazakh dominate
    avoidIf: ['You cannot handle intense, sub-zero winter temperatures', 'You require a highly walkable layout outside major urban centers'],
    majorHubs: ['ALA', 'NQZ']
  },
  likelihoodScores: { nightlife: 7, hiking: 10, coworking: 8, food: 8, history: 7, safety: 9 },
  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: null,
      nomadVisa: { 
        available: true, 
        name: 'Neo Nomad Visa', 
        durationMonths: 12,
        incomeRequirement: 3000
      },
      workPolicy: "Remote work for overseas employers is fully legal under the visa-free framework or Neo Nomad status.",
      workPolicyCategory: 'nomad-visa',
      registrationAfterDays: 3, // Handled automatically by accommodation registration (Migration Notification)
      requirements: ["Valid passport", "Proof of remote income threshold", "Health insurance"]
    },
    flights: {
      friction: 'medium',
      routingNotes: 'Almaty International Airport (ALA) is well connected to major regional transit hubs like Istanbul, Doha, and Tashkent.',
      hubs: ['ALA']
    },
    seasonality: { cheapest: [11, 12, 1, 2], sweetSpot: [5, 6, 9, 10], peak: [7, 8] },
    seasonalVolatility: { cheapest: 'low', sweetSpot: 'medium', neutral: 'medium', peak: 'high' }
  },
  transportation: {
    daytime: {
      defaultMode: 'metro',
      cheapestMode: 'bus',
      recommendedCard: 'ONAY! Card / Contactless Bank Card',
      notes: 'Almaty Metro is beautifully architectural, spotlessly clean, and highly efficient for cross-town lines.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Yandex Go'],
      notes: 'Yandex Go is completely non-negotiable here. It is safe, extremely cheap, and tracks fares transparently.'
    },
    apps: {
      rideHailing: ['Yandex Go'],
      transit: ['CityBus', '2GIS'],
      navigation: ['2GIS', 'Google Maps'] // 2GIS is vastly superior for local building entrances and transit tracking in Almaty
    },
    intercity: {
      cheapest: 'train',
      fastest: 'flight',
      recommended: 'train' // The modern, high-speed Talgo trains between Almaty and Astana are reliable and highly scenic
    }
  },
  resonanceSignals: {
    nightlifeOverall: 7,
    lateNightDining: 8,
    musicScene: 8, // Thriving indie, hip-hop, and modern electronic scenes in Almaty
    danceScene: 6,
    barDensity: 8,
    drinkingCulture: 7.0, // Blended mix of traditional tea ceremonies and modern craft beer/cocktail scenes
    safetyAtNight: 9,
    socialMeetups: 8,
    waterActivities: 4, // Beautiful alpine lakes (Big Almaty Lake, Kolsai), but freezing cold
    snowActivities: 10, // Shymbulak is the premier, high-infrastructure ski resort in Central Asia
    natureAccess: 10, // The snow-capped Tien Shan mountains sit directly on the southern edge of Almaty
    festivalCulture: 7,
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 8
  },
  packing: {
    clothingStyle: "Smart urban casual for the city (dark tones, stylish street gear). High-performance thermal windbreakers for mountain loops.",
    airportUniform: "Layered thermal fleece; high-comfort sneakers built for rapid city walking setups.",
    essentialGear: [
      "2GIS App (download the offline Almaty regional data immediately)",
      "Type C/F European power adapter",
      "Sturdy, insulated hydration flask for mountain trekking runs"
    ],
    localNuance: "Almaty is essentially a specialty café paradise. Widespread fiber broadband means you can walk into almost any central coffee shop, purchase a flat white, and easily push codebase revisions."
  }
};