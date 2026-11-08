module.exports = {
  id: 'BOL',
  name: 'Bolivia',
  region: 'South America',
  costTier: 'Ultra-Low',
  viewMode: 'country-first',
  resonanceMode: 'country-first',
  personaFit: ['The Frontier Explorer', 'The Budget Architect', 'The Adventure Addict'],
  decisionAttributes: {
    visaEase: 7, // Easy for EU/UK; USA requires a more expensive tourist visa
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 6, vibe: 9 },
    safety: 7,
    avoidIf: ['You have a low tolerance for physical discomfort (cold/altitude)', 'You need extremely fast, stable 1Gbps internet'],
    majorHubs: ['LPZ', 'VVI', 'SRE']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 3,
      nomadVisa: { available: false },
      workPolicy: 'Tourist visa allows remote work but local employment is strictly off-limits.',
      registrationAfterDays: null,
 },
    flights: {
      friction: 'high',
      routingNotes: 'La Paz (LPB) and Santa Cruz (VVI) are the main entries. High altitude landings can be intense.',
      hubs: ['VVI', 'LPB']
    },
    seasonality: {
      cheapest: [1, 2, 3], // Rainy season (can affect salt flat photos)
      sweetSpot: [5, 6, 9], // Dry and sunny but cold
      peak: [7, 8] // Winter peak for trekking
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
      defaultMode: 'metro', // The Mi Teleférico cable car system
      cheapestMode: 'bus (Micro)',
      recommendedCard: 'Tarjeta Mi Teleférico',
      notes: 'The cable car system is the world\'s highest "subway in the sky" and is stunning.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['InDrive', 'Yango'],
      notes: 'InDrive is widely used; always negotiate the price within the app before confirming.'
    },
    apps: {
      rideHailing: ['InDrive', 'Yango', 'Uber (limited)'],
      transit: ['Moovit'],
      navigation: ['Google Maps']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'plane',
      recommended: 'plane (Boliviana de Aviación - BoA)'
    }
  },
  resonanceSignals: {
    nightlifeOverall: 7,
    lateNightDining: 8,
    musicScene: 8,
    danceScene: 9,
    barDensity: 7,
    drinkingCulture: 4.0, // Bolivia has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 6,
    socialMeetups: 7,
    waterActivities: 4,
    snowActivities: 5,
    natureAccess: 10,
    festivalCulture: 10,
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 6
  },
  packing: {
    clothingStyle: "Extreme-Layering. It can be 20°C in the sun and 2°C in the shade. Merino wool is your best friend.",
    airportUniform: "Warm down jacket; comfortable boots; hydration tablets (for altitude).",
    essentialGear: [
      "Altitude sickness medication (Sorojchi Pills)",
      "Universal Power Adapter (Type A/C)",
      "High-SPF sunscreen (the UV at 4000m is brutal)"
    ],
    localNuance: "Cash is vital outside of La Paz/Santa Cruz. Note that many places will not accept US dollars that have even a tiny tear."
  }
};