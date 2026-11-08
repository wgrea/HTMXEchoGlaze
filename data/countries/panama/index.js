module.exports = {
  id: 'PAN',
  name: 'Panama',
  region: 'Central America',
  costTier: 'Medium-High',
  viewMode: 'city-first',
  resonanceMode: 'dynamic',
  personaFit: ['The Business Nomad', 'The Logistics King', 'The Tropical Strategist'],
  decisionAttributes: {
    visaEase: 9,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 10, vibe: 8 },
    safety: 8,
    avoidIf: ['You want a deep "off-the-grid" cultural immersion', 'You find USD-based pricing unattractive in LatAm'],
    majorHubs: ['PTY', 'DAV', 'BOC']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 6,
      nomadVisa: { 
        available: true, 
        name: 'Short Stay Visa for Remote Workers', 
        durationMonths: 9,
        incomeRequirement: 3000 // $36,000 annually
      },
      workPolicy: 'Remote work for non-Panamanian companies is actively encouraged; 0% local tax on foreign income.',
      registrationAfterDays: null,
      requirements: ['Proof of $3,000/mo income', 'Health insurance', 'Criminal record check']
    },
    flights: {
      friction: 'low',
      routingNotes: 'Tocumen (PTY) is the "Hub of the Americas" with direct flights almost everywhere.',
      hubs: ['PTY']
    },
    seasonality: {
      cheapest: [5, 6, 7, 8, 9, 10], // Rainy season
      sweetSpot: [11, 12, 4],
      peak: [1, 2, 3] // Dry season
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
      defaultMode: 'metro',
      cheapestMode: 'bus (MetroBus)',
      recommendedCard: 'Tarjeta Rápida',
      notes: 'The only metro system in Central America—spotless and incredibly fast.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Uber'],
      notes: 'Uber is very reliable and safe here. Taxis (yellow) can be inconsistent.'
    },
    apps: {
      rideHailing: ['Uber', 'Indrive'],
      transit: ['MiBus Maps'],
      navigation: ['Waze', 'Google Maps']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'plane',
      recommended: 'bus (from Albrook Terminal)'
    }
  },
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 8,
    musicScene: 7,
    danceScene: 8,
    barDensity: 9,
    drinkingCulture: 7.5, // Panama has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 7,
    socialMeetups: 9,
    waterActivities: 10, // San Blas and Bocas del Toro are world-class
    snowActivities: 0,
    natureAccess: 9, // Bird watching in Gamboa and hiking in Boquete
    festivalCulture: 8,
    socialProximity: 7,
    soloFriendly: 9,
    expatCommunityStrength: 10
  },
  packing: {
    clothingStyle: "Tropical-Professional. Business-casual in the city; flip-flops only for the beach.",
    airportUniform: "Breathable tech-wear; noise-canceling headphones; light sweater for the airport chill.",
    essentialGear: [
      "No adapter needed (US Type A/B)",
      "High-quality umbrella",
      "Power bank (for travel to islands)"
    ],
    localNuance: "Panama uses the US Dollar (Balboa is only in coins). This makes it extremely easy for those with US-based income."
  }
};