module.exports = {
  id: 'PAK',
  name: 'Pakistan',
  region: 'South Asia',
  costTier: 'Ultra-Low',
  viewMode: 'city-first',
  resonanceMode: 'dynamic',
  personaFit: ['The Frontier Explorer', 'The Budget Architect', 'The Culture-Seeker'],
  decisionAttributes: {
    visaEase: 8, // E-Visa system is fast and reliable for 170+ countries
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 7, vibe: 10 },
    safety: 6,
    avoidIf: ['You are uncomfortable with occasional political protests', 'You have a low tolerance for spicy food or noise'],
    majorHubs: ['LHE', 'ISB', 'KHI']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: 3,
      nomadVisa: { available: false },
      workPolicy: 'Remote work on a tourist e-Visa is the standard for nomads.',
      registrationAfterDays: 30,
      requirements: ['Valid passport', 'Digital photo', 'Invitation letter (usually provided by tour companies or hotels)']
    },
    flights: {
      friction: 'medium',
      routingNotes: 'Direct flights from UK/Europe via PIA; excellent connections via Dubai/Doha.',
      hubs: ['ISB', 'LHE']
    },
    seasonality: {
      cheapest: [6, 7, 8], // Hot and humid (monsoon)
      sweetSpot: [3, 4, 10, 11], // Perfect weather
      peak: [12, 1] // Cool winter
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
      defaultMode: 'rideHailing',
      cheapestMode: 'rickshaw',
      recommendedCard: 'Metro Card (for Lahore Speed Bus/Metro)',
      notes: 'Always use a ride-hailing app for Rickshaws to avoid haggling over "foreigner prices."'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['inDrive', 'Uber', 'Bykea'],
      notes: 'Bykea (bike taxis) is the fastest way through traffic but for brave souls only.'
    },
    apps: {
      rideHailing: ['inDrive', 'Uber', 'Bykea', 'Yango'],
      transit: ['Yango Superapp', 'Google Maps'],
      navigation: ['Google Maps', 'Waze']
    },
    intercity: {
      cheapest: 'bus (Daewoo)',
      fastest: 'plane',
      recommended: 'bus (Faisal Movers / Daewoo)'
    }
  },
  resonanceSignals: {
    nightlifeOverall: 2,
    lateNightDining: 10,
    musicScene: 10,
    danceScene: 4,
    barDensity: 1,
    drinkingCulture: 0.5, // Pakistan has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 6,
    socialMeetups: 7,
    waterActivities: 2,
    snowActivities: 8, // Gilgit-Baltistan and Malam Jabba offer incredible peaks
    natureAccess: 10, // The Karakoram and Himalayas are world-class
    festivalCulture: 10,
    socialProximity: 6,
    soloFriendly: 9,
    expatCommunityStrength: 6
  },
  packing: {
    clothingStyle: "Conservative-modern. For men: jeans/t-shirts are fine. For women: loose tunics (Kurta) and pants (Shalwar). Carry a scarf.",
    airportUniform: "Loose, comfortable cotton clothes; sturdy walking shoes.",
    essentialGear: [
      "Power bank (for intercity travel)",
      "Universal Adapter (Type C/D/G)",
      "Unlocked phone (get a Zong or Jazz SIM)"
    ],
    localNuance: "Pakistan is a cash-heavy society. While Gulberg accepts cards, have plenty of smaller Rupee notes for rickshaws and street food."
  }
};