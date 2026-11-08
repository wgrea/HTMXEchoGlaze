module.exports = {
  id: 'ROU',
  name: 'Romania',
  region: 'Balkans & Carpathians',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: ['The High-Bandwidth Dev', 'The Budget-Optimizer', 'The Slow-Traveler'],
  costTier: 'Low-Medium',
  decisionAttributes: {
    visaEase: 9, // 90 days visa-free for US/EU/UK; integrated into Schengen air/sea rules
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 10, vibe: 8 },
    safety: 9,
    englishLevel: 8,
    avoidIf: ['You are easily frustrated by slow intercity rail links', 'You strongly dislike brutalist and concrete architectural mixes'],
    majorHubs: ['CLJ', 'OTP']
  },
  likelihoodScores: { nightlife: 8, hiking: 9, coworking: 7, food: 8, history: 9, safety: 9 },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: null,
      nomadVisa: { 
        available: true, 
        name: 'Romania Digital Nomad Visa', 
        durationMonths: 12,
        incomeRequirement: 3700
      },
      workPolicy: "Remote work for foreign entities is fully legal under standard tourist stays or the explicit nomad visa.",
      workPolicyCategory: 'nomad-visa',
      registrationAfterDays: 15,
      requirements: ["Valid passport", "Proof of remote income matching threshold", "Clean criminal record check"]
    },
    flights: {
      friction: 'low',
      routingNotes: 'Cluj (CLJ) and Bucharest (OTP) are massive hubs for low-cost European lines like Wizz Air and Ryanair.',
      hubs: ['CLJ', 'OTP']
    },
    seasonality: { cheapest: [11, 12, 1, 2], sweetSpot: [5, 6, 9, 10], peak: [7, 8] },
    seasonalVolatility: { cheapest: 'low', sweetSpot: 'medium', neutral: 'medium', peak: 'high' }
  },
  transportation: {
    daytime: {
      defaultMode: 'bus',
      cheapestMode: 'tram',
      recommendedCard: 'Contactless Bank Card',
      notes: 'Most urban transit networks support paying directly with your contactless bank card or phone onboard.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Bolt', 'Uber'],
      notes: 'Bolt is incredibly dominant across Romanian cities and highly reliable late at night.'
    },
    apps: {
      rideHailing: ['Bolt', 'Uber'],
      transit: ['Moovit', 'Google Maps'],
      navigation: ['Google Maps', 'Waze']
    },
    intercity: {
      cheapest: 'train',
      fastest: 'flight',
      recommended: 'bus' // FlixBus or regional operators are often faster and cleaner than the national rail system (CFR)
    }
  },
  resonanceSignals: {
    nightlifeOverall: 8,
    lateNightDining: 7,
    musicScene: 9, // Electronic music destination hub (Untold, Electric Castle)
    danceScene: 7,
    barDensity: 9,
    drinkingCulture: 8.0, // High social drinking focus centered around vibrant student cafe-bars
    safetyAtNight: 9,
    socialMeetups: 8,
    waterActivities: 4,
    snowActivities: 8, // Poiana Brasov and nearby Transylvanian ski runs are solid budget spots
    natureAccess: 9, // Carpathian trails and forests are spectacular and highly accessible
    festivalCulture: 9,
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 7
  },
  packing: {
    clothingStyle: "Casual and practical. Layers are essential due to quick weather shifts in the hilly terrain.",
    airportUniform: "Zippered technical hoodie and flexible sneakers optimized for cobblestone walking layers.",
    essentialGear: [
      "Gigabit ethernet cable (to harness the elite fixed line architecture directly)",
      "Type C/F European power adapter",
      "Durable weather-resistant daypack for mountain excursions"
    ],
    localNuance: "Fixed internet here is blindingly fast across the board. You don't need to overpay for co-working access because even simple budget hostel networks easily manage high-volume video calls and pushes."
  }
};