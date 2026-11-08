module.exports = {
  id: 'BRA',
  name: 'Brazil',
  region: 'South America',
  costTier: 'Medium',
  viewMode: 'city-first',
  resonanceMode: 'dynamic',
  personaFit: ['The Business Nomad', 'The Night-Owl Developer', 'The Culture-Seeker'],
  decisionAttributes: {
    visaEase: 8,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 9, vibe: 10 },
    safety: 6,
    avoidIf: ['You are uncomfortable with high-alert urban safety', 'You cannot handle 10-12 hour flights from major hubs'],
    majorHubs: ['GRU', 'GIG', 'FLN']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 6,
      nomadVisa: { 
        available: true, 
        name: 'Visto Temporário V (Digital Nomad)', 
        durationMonths: 12,
        incomeRequirement: 1500 // USD per month
      },
      workPolicy: 'Remote work for foreign entities is fully legal under the Nomad Visa; local work requires sponsorship.',
      registrationAfterDays: 90,
},
    flights: {
      friction: 'medium',
      routingNotes: 'São Paulo (GRU) is the primary gateway for South America.',
      hubs: ['GRU', 'CGH']
    },
    seasonality: { 
      cheapest: [5, 6, 7, 8], 
      sweetSpot: [3, 4, 9, 10], 
      peak: [12, 1, 2] // Carnival season is maximum peak
    },
    seasonalVolatility: { cheapest: 'low', sweetSpot: 'medium', neutral: 'medium', peak: 'high' }
  },
  transportation: {
    daytime: { 
      defaultMode: 'metro', 
      cheapestMode: 'bus', 
      recommendedCard: 'Bilhete Único', 
      notes: 'The São Paulo Metro is world-class, clean, and very efficient.' 
    },
    nighttime: { 
      safestMode: 'rideHailing', 
      recommendedApps: ['Uber', '99'], 
      notes: 'Uber is extremely popular. Always check the license plate before entering.' 
    },
    apps: { 
      rideHailing: ['Uber', '99', 'InDrive'], 
      transit: ['Moovit', 'Google Maps'], 
      navigation: ['Waze', 'Google Maps'] 
    },
    intercity: { 
      cheapest: 'bus', 
      fastest: 'plane', 
      recommended: 'bus (look for "Leito" beds for long trips)' 
    }
  },
  resonanceSignals: {
    nightlifeOverall: 10,
    lateNightDining: 10,
    musicScene: 10,
    danceScene: 10,
    barDensity: 10,
    drinkingCulture: 8.5, // Brazil has a vibrant drinking culture with a focus on socializing, from beach bars to samba clubs.
    safetyAtNight: 6,
    socialMeetups: 9,
    waterActivities: 10, // Incredible coastline in Rio and Florianópolis
    snowActivities: 0,
    natureAccess: 10, // Amazon, Iguazu Falls, and Pantanal
    festivalCulture: 10,
    socialProximity: 8,
    soloFriendly: 8,
    expatCommunityStrength: 9
  },
  packing: {
    clothingStyle: "Urban-casual. Paulistanos dress quite smart (jeans and nice sneakers). Avoid looking like a 'beach' tourist in the city.",
    airportUniform: "Light sweater (for the long-haul AC); theft-resistant crossbody bag.",
    essentialGear: [
      "Noise-canceling headphones (for busy cafés)", 
      "Type N power adapter (standard in Brazil)", 
      "Unlocked phone with physical SIM capability (for Vivo/Claro)"
    ],
    localNuance: "Brazil uses Type N outlets (3 pins). Your Type C (Euro) plugs will fit, but grounded 3-pin tech needs the specific N adapter."
  }
};