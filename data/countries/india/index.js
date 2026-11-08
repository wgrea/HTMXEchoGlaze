module.exports = {
  id: 'IND',
  name: 'India',
  region: 'South Asia',
  viewMode: 'country-first',
  resonanceMode: 'country-first',
  personaFit: [
    'The Systems Architect',
    'The High-Bandwidth Nomad',
    'The Chaos-Driven Developer'
  ],
  costTier: 'Low',
  decisionAttributes: {
    visaEase: 7, // E-visa is efficient; no dedicated Nomad Visa yet in 2026
    digitalNomadVisa: false, 
    nomadFriendliness: { infra: 7, vibe: 9 },
    safety: 6,
    englishLevel: 9,
    avoidIf: [
      'Low tolerance for sensory overload (noise/crowds)',
      'Respiratory sensitivity (Air Quality Index in North India Oct-Feb)',
      'Requires consistent "Quiet Hours" outside of designated hubs'
    ],
    majorHubs: ['DEL', 'BOM', 'BLR']
  },
  likelihoodScores: {
    nightlife: 7,
    hiking: 10,
    coworking: 8,
    food: 10,
    history: 10,
    safety: 6
  },
  resonanceSignals: {
    nightlifeOverall: 7,
    lateNightDining: 9,
    musicScene: 8,
    danceScene: 6,
    barDensity: 6,
    drinkingCulture: 4.5, 
    safetyAtNight: 5,
    socialMeetups: 9,
    waterActivities: 7,
    snowActivities: 8,
    natureAccess: 10,
    festivalCulture: 10,
    socialProximity: 9,
    soloFriendly: 7,
    expatCommunityStrength: 8
  },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 6,
      nomadVisa: { available: false, durationMonths: null },
      workPolicy: "Tourist E-Visa; remote work for non-Indian entities generally permitted.",
      registrationAfterDays: 180,
      requirements: [
        "E-Tourist Visa (30-day, 1-year, or 5-year)",
        "Passport valid 6+ months",
        "Onward flight proof (occasionally requested)"
      ]
    },
    seasonality: {
      cheapest: [5, 6, 7, 8], // Monsoon / Peak Heat
      sweetSpot: [3, 4, 9, 10],
      peak: [11, 12, 1, 2]
    },
    seasonalVolatility: {
      cheapest: 'low',
      sweetSpot: 'medium',
      neutral: 'medium',
      peak: 'extreme'
    }
  },
  transportation: {
    daytime: {
      defaultMode: 'Auto-Rickshaw / Metro',
      cheapestMode: 'Bus',
      recommendedCard: 'NCMC (National Common Mobility Card)',
      notes: 'Metro systems in Delhi/Bangalore are top-tier; use Rickshaws for "last-mile" via apps.'
    },
    nighttime: {
      safestMode: 'Ride-Hailing',
      recommendedApps: ['Uber', 'Ola', 'Rapido'],
      notes: 'Rapido (Bike Taxis) is the fastest way to bypass traffic but carries higher safety risk at night.'
    },
    apps: {
      rideHailing: ['Uber', 'Ola', 'Rapido'],
      transit: ['Where is my Train', 'Google Maps', 'Chalo'],
      navigation: ['Google Maps', 'Apple Maps (improving)']
    },
    intercity: {
      cheapest: 'Sleeper Class Train',
      fastest: 'Domestic Flight',
      recommended: 'Vande Bharat Express (Premium Rail)'
    }
  },
  packing: {
    clothingStyle: "Cultural-respectful and breathable. Loose-fitting cottons; avoid overly tight clothing in traditional areas.",
    airportUniform: "Compression socks for long-haul flights; cotton hoodie for cabin chill.",
    essentialGear: [
      "Dust-proof sleeves for all gaming handhelds",
      "Voltage stabilizer/surge protector",
      "Hand sanitizer and tech-wipes"
    ],
    localNuance: "Monsoon season requires a dedicated waterproof tech-cover for your backpack."
  }
};