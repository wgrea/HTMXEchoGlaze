module.exports = {
  id: 'NPL',
  name: 'Nepal',
  region: 'South Asia',
  costTier: 'Ultra-Low',
  viewMode: 'city-first', 
  resonanceMode: 'city-first',
  personaFit: ['The Himalayan Hiker', 'The Zen Seeker', 'The Budget Strategist'],
  
  decisionAttributes: {
    visaEase: 9, // On-arrival is seamless
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 5, vibe: 10 },
    safety: 9,
    englishLevel: 8, // Very high in tourist hubs
    avoidIf: [
      'Requires "Big City" sanitation standards',
      'Cannot handle dust (Kathmandu "Dustmandu" effect)',
      'Requires high-bandwidth synchronous video calls daily'
    ],
    majorHubs: ['KTM', 'PKR']
  },

  /** ⭐ Added for Global Comparison UI */
  likelihoodScores: {
    nightlife: 4,
    hiking: 10,
    coworking: 6,
    food: 8,
    history: 10,
    safety: 9
  },

  /** ⭐ FULL RESONANCE SECTION */
  resonanceSignals: {
    nightlifeOverall: 4,
    lateNightDining: 3,
    musicScene: 6,
    danceScene: 3,
    barDensity: 5,
    drinkingCulture: 4.5, // Nepal has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 9,
    socialMeetups: 8,
    waterActivities: 7, // High-tier Rafting/Kayaking
    snowActivities: 10, // Himalayan trekking/peaks
    natureAccess: 10,
    festivalCulture: 10,
    socialProximity: 8,
    soloFriendly: 10,
    expatCommunityStrength: 8
  },

  travelReadiness: {
    visa: {
      touristStayDays: 90, 
      longStayTouristVisaMonths: 5, // 150 days per calendar year limit
      nomadVisa: { 
        available: true, 
        name: 'Digital Nomad Visa (5-Year Multiple Entry)',
        durationMonths: 12, // 1 year per entry
        incomeRequirement: 1500 
      },
      workPolicy: "Tourist status allows remote work; nomad visa grants local banking rights.",
      registrationAfterDays: 0,
      requirements: [
        'Visa on Arrival: 15/30/90 days ($30/$50/$125 USD).',
        'Nomad Visa: Proof of $1,500/mo income OR $20,000 savings.',
        'Health Insurance: Minimum $100,000 coverage (required for Nomad Visa).',
        '2026 Tip: Use the Department of Immigration’s online portal 15 days before arrival.'
      ]
    },
    flights: {
      friction: 'medium',
      routingNotes: "KTM is the only international entry. Domestic flights to Pokhara are 25 mins but weather-dependent.",
      hubs: ['KTM']
    },
    seasonality: {
      cheapest: [6, 7, 8], // Monsoon
      sweetSpot: [3, 4, 5], // Spring
      peak: [10, 11] // Autumn / Clear Skies
    }
  },

  transportation: {
    daytime: {
      defaultMode: 'walk',
      cheapestMode: 'bus',
      notes: 'Use Pathao or Indriver for bike taxis in KTM/Pokhara to avoid traffic.'
    },
    nighttime: {
      safestMode: 'taxi',
      recommendedApps: ['Pathao', 'Indriver'],
      notes: 'Walking Lakeside (Pokhara) or Thamel (KTM) is safe at night, but use apps for longer distances.'
    },
    apps: {
      rideHailing: ['Pathao', 'Indriver'],
      transit: ['Google Maps'],
      navigation: ['Google Maps']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'plane',
      recommended: 'tourist-bus' // Greenline or Jagadamba for safety/comfort
    }
  },
  packing: {
    clothingStyle: "Rugged-utilitarian. Layered technical gear; focus on durability and warmth for Kathmandu evenings.",
    airportUniform: "Down-vest or puffer jacket; sturdy boots for immediate transit to dusty terrain.",
    essentialGear: [
      "Ruggedized hard-case for Analogue Pocket/Switch",
      "Portable solar charger for remote work days",
      "Multi-port GAN charger"
    ]
  }
};