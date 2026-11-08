module.exports = {
  id: 'GRC',
  name: 'Greece',
  region: 'Europe / Mediterranean',
  viewMode: 'city-first',
  resonanceMode: 'dynamic',
  personaFit: [
    'The Island Hopper',
    'The Ancient Historian',
    'The Mediterranean Foodie',
    'The Digital Nomad (DNV Path)'
  ],
  costTier: 'Medium',
  decisionAttributes: {
    visaEase: 7,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 8, vibe: 10 },
    safety: 8,
    englishLevel: 8,
    avoidIf: [
      'High heat sensitivity (July/August peaks)',
      'Frustrated by "Island Time" logistics'
    ],
    majorHubs: ['ATH', 'SKG'] 
  },
  likelihoodScores: {
    nightlife: 9,
    hiking: 7,
    coworking: 8,
    food: 10,
    history: 10,
    safety: 8
  },
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 10,
    musicScene: 8,
    danceScene: 7,
    barDensity: 10,
    drinkingCulture: 7.0, // Greece has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 8,
    socialMeetups: 9,
    waterActivities: 10,
    snowActivities: 4,
    natureAccess: 8,
    festivalCulture: 9,
    socialProximity: 9,
    soloFriendly: 9,
    expatCommunityStrength: 8
  },
  travelReadiness: {
visa: {
    touristStayDays: 90, // Schengen Area limit
    longStayTouristVisaMonths: 12,
    nomadVisa: {
      available: true,
      durationMonths: 12, // Renewable for up to 3 years
    },
    workPolicy: "Tourist status; no local employment",
    registrationAfterDays: null,
    requirements: ["Schengen entry rules", "Proof of remote income (for Nomad Visa)", "Health insurance"],
  },
    seasonality: {
      cheapest: [1, 2, 11, 12],
      sweetSpot: [5, 6, 9, 10], 
      peak: [7, 8] 
    },
    seasonalVolatility: {
      cheapest: 'low',
      sweetSpot: 'medium',
      neutral: 'medium',
      peak: 'extreme' // Island prices can triple in August
    }
  },

  transportation: {
  daytime: {
    defaultMode: 'metro',
    cheapestMode: 'bus',
    recommendedCard: 'ATH.ENA Card',
    notes: 'In Athens, the metro is king. For islands, "KTEL" (local buses) are the standard but schedules vary wildly by season.'
  },
  nighttime: {
    safestMode: 'taxi',
    recommendedApps: ['FreeNow (FREENOW)', 'Uber (Taxi only)'],
    notes: 'Public transit is limited at night. FreeNow is the standard for calling official licensed taxis.'
  },
  apps: {
    rideHailing: ['FreeNow', 'Uber', 'Bolt'],
    transit: ['OASA Telematics', 'Moovit'],
    navigation: ['Google Maps']
  },
  intercity: {
    cheapest: 'bus', // KTEL coaches
    fastest: 'flight',
    recommended: 'ferry' // Specifically for island hopping
  }
  },
  packing: {
    clothingStyle: "Mediterranean-utility. Lightweight cottons in neutral or blue tones; focus on 'Island-pro' aesthetics.",
    airportUniform: "Breathable linen shirt over a tee; sunglasses in a hard case for the immediate sun-glare.",
    essentialGear: [
      "Waterproof dry-bag for island-hopping days",
      "Polarized sunglasses",
      "Type C/E power adapter"
    ],
    localNuance: "Island ferries can be rough; ensure your handheld console is in a shock-absorbent case."
  }
};