module.exports = {
  id: 'BGD',
  name: 'Bangladesh',
  region: 'South Asia',
  costTier: 'Ultra-Low',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: ['The Frontier Explorer', 'The Value-Strategist', 'The Street-Food Connoisseur'],
  decisionAttributes: {
    visaEase: 6, // Visa on Arrival (30 days) available for many, but longer stays require paperwork
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 5, vibe: 8 },
    safety: 6,
    avoidIf: ['You are a first-time solo traveler', 'You need a quiet, sterile environment to work'],
    majorHubs: ['DHA', 'CGP', 'ZYL']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 30,
      nomadVisa: { available: false },
      workPolicy: 'Remote work for foreign companies is a grey area; most use tourist visas.',
},
    flights: {
      friction: 'medium',
      routingNotes: 'Dhaka (DAC) is well connected to Middle East and Asian hubs.',
      hubs: ['DAC']
    },
    seasonality: {
      cheapest: [5, 6, 7], // Monsoon season
      sweetSpot: [11, 12, 1, 2], // Mild winter
      peak: [12, 1]
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
      cheapestMode: 'bus',
      recommendedCard: 'None (Cash is King)',
      notes: 'Rickshaws are the soul of the city; use them for short distances.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Uber', 'Pathao'],
      notes: 'Pathao is the local king for bike-sharing—the only way to beat traffic.'
    },
    apps: {
      rideHailing: ['Uber', 'Pathao', 'Shohoz'],
      transit: ['Google Maps'],
      navigation: ['Google Maps']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'plane',
      recommended: 'plane (US-Bangla or Novoair)'
    }
  },
  resonanceSignals: {
    nightlifeOverall: 2,
    lateNightDining: 9,
    musicScene: 8,
    danceScene: 4,
    barDensity: 1,
    drinkingCulture: 0.5, // Bangladesh has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 5,
    socialMeetups: 6,
    waterActivities: 8, // Cox's Bazar is the world's longest natural sea beach
    snowActivities: 0,
    natureAccess: 9, // Sunderbans (Mangroves) and Sylhet (Tea Gardens)
    festivalCulture: 10,
    socialProximity: 6,
    soloFriendly: 8,
    expatCommunityStrength: 5
  },
  packing: {
    clothingStyle: "Modest-functional. Breathable cotton or linen. Avoid shorts in public to respect local norms.",
    airportUniform: "Lightweight joggers; slip-on shoes; high-quality N95 mask (for dust/pollution).",
    essentialGear: [
      "High-capacity power bank (30,000mAh+ for load shedding)",
      "Universal Adapter (Type C/D/G)",
      "Portable air purifier or mask"
    ],
    localNuance: "Load shedding (planned power outages) is a part of life. A high-quality mobile hotspot (Grameenphone) is your best friend."
  }
};