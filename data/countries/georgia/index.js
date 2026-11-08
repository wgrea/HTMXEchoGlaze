module.exports = {
  id: 'GEO',
  name: 'Georgia',
  region: 'Eurasia',
  viewMode: 'city-first',
  resonanceMode: 'dynamic',
  personaFit: ['The Budget Architect', 'The Creative Soul', 'The Frontier Explorer'],
  costTier: 'Affordable',
  decisionAttributes: {
    visaEase: 10, // The world standard: 365 days visa-free for 95+ countries
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 8, vibe: 10 },
    safety: 9,
    englishLevel: 7,
    avoidIf: ['You require strict Western-style traffic discipline', 'You are sensitive to high-decibel social environments'],
    majorHubs: ['TBS', 'BUS', 'KUT']
  },
  likelihoodScores: { nightlife: 10, hiking: 10, coworking: 9, food: 10, history: 10, safety: 9 },
  travelReadiness: {
    visa: {
      touristStayDays: 365,
      longStayTouristVisaMonths: 12,
      nomadVisa: { 
        available: true, 
        name: 'Remotely from Georgia', 
        durationMonths: 12,
        incomeRequirement: 2000 
      },
      workPolicy: "Citizens of visa-free countries can work remotely for 1 year without further permits.",
      registrationAfterDays: null,
      requirements: ["Valid passport", "Nationalities of 95+ countries (USA, EU, UK, etc.)"]
    },
    flights: {
      friction: 'low',
      routingNotes: 'Kutaisi (KUT) is a major WizzAir hub for ultra-low-cost Euro connections.',
      hubs: ['TBS', 'KUT']
    },
    seasonality: { cheapest: [11, 12, 1, 2], sweetSpot: [5, 6, 9, 10], peak: [7, 8] },
    seasonalVolatility: { cheapest: 'low', sweetSpot: 'medium', neutral: 'medium', peak: 'high' }
  },
  transportation: {
    daytime: { 
      defaultMode: 'metro', 
      cheapestMode: 'bus', 
      recommendedCard: 'MetroMoney / Travel Card (Blue)', 
      notes: 'Tbilisi Metro is deep, Soviet-era, and incredibly efficient.' 
    },
    nighttime: { 
      safestMode: 'rideHailing', 
      recommendedApps: ['Bolt', 'Yandex'], 
      notes: 'Bolt is the gold standard here. Extremely cheap by global standards.' 
    },
    apps: { 
      rideHailing: ['Bolt', 'Yandex Go'], 
      transit: ['Tbilisi Transport', 'Moovit'], 
      navigation: ['Google Maps', 'Yandex Maps'] 
    },
    intercity: { 
      cheapest: 'bus', // Marshrutkas (minibuses)
      fastest: 'train', // High-speed Stadler train to Batumi
      recommended: 'train' 
    }
  },
  resonanceSignals: {
    nightlifeOverall: 9,      // Bassiani/Khidi are legendary; Tbilisi is a techno capital
    lateNightDining: 8,       // 24hr Shavi Lomi and street food, but slows down outside Tbilisi
    musicScene: 8,            // Strong underground scene and traditional polyphonic singing
    danceScene: 9,            // From world-class clubbing to traditional folk dance
    barDensity: 9,            // Sololaki and Vera are packed with wine bars and hidden pubs
    drinkingCulture: 9.5,     // Strong coffee culture and traditional wine-making
    safetyAtNight: 8,         // Very high, especially in tourist and residential nomad hubs
    socialMeetups: 10,        // Massive Telegram/WhatsApp communities for nomads
    waterActivities: 7,       // Black Sea (Batumi) is great in summer, though not "tropical"
    snowActivities: 9,        // Gudauri and Bakuriani offer some of the best value skiing in Eurasia
    natureAccess: 10,         // The Caucasus mountains are accessible within 2-3 hours from the capital
    festivalCulture: 8,       // Tbilisi Open Air, GEM Fest, and countless wine festivals
    socialProximity: 9,       // Compact city centers make it easy to see the same faces
    soloFriendly: 10,         // Extremely easy to navigate and meet people as a lone traveler
    expatCommunityStrength: 10 // One of the most robust and welcoming nomad scenes globally
  },
  packing: {
    clothingStyle: "Functional-layered. Tbilisi locals favor dark, edgy street wear (all black). High-performance gear for mountains.",
    airportUniform: "Sturdy boots (for the hills); windproof shell jacket.",
    essentialGear: [
      "Magti Prepaid SIM (the best coverage in the Caucasus)", 
      "Type C/F power adapter", 
      "Portable battery (for long marshrutka rides)"
    ],
    localNuance: "Georgia uses 220V/50Hz. If you plan to work in the mountains, a rugged laptop sleeve is mandatory for the bumpy roads."
  }
};