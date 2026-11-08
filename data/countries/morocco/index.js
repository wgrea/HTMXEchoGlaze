module.exports = {
  id: 'MAR',
  name: 'Morocco',
  region: 'North Africa',
  costTier: 'Low-Medium',
  viewMode: 'city-first',
  resonanceMode: 'dynamic',
  personaFit: ['The Cultural Soul', 'The Frontier Explorer', 'The Aesthetic Nomad'],
  decisionAttributes: {
    visaEase: 9, // 90 days visa-free for many; e-Visa/ETA system is streamlined
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 7, vibe: 9 },
    safety: 8,
    avoidIf: ['You find intense social interaction/negotiation exhausting', 'You require a low-humidity, temperate climate year-round'],
    majorHubs: ['CMN', 'RAK', 'TNG']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 12,
      nomadVisa: { 
        available: true, 
        name: 'Self-Employed / Remote Work Visa', 
        durationMonths: 12,
        incomeRequirement: 1500 
      },
      workPolicy: 'Tourist entry allows remote work; longer residency requires the "Temporary Residence Card" (Carte de Séjour).',
      registrationAfterDays: 90,
      requirements: ['Valid passport', 'Proof of remote work', 'Health insurance', 'Police clearance']
    },
    flights: {
      friction: 'low',
      routingNotes: 'Casablanca (CMN) is the global hub; Marrakech (RAK) and Agadir (AGA) for low-cost Euro carriers.',
      hubs: ['CMN', 'RAK']
    },
    seasonality: {
      cheapest: [1, 2, 11, 12], // Winter (can be cold in the mountains)
      sweetSpot: [3, 4, 5, 9, 10], // Spring and Autumn
      peak: [7, 8, 12] // Mid-summer and Christmas/NYE
    },
    seasonalVolatility: {
      cheapest: 'medium',
      sweetSpot: 'medium',
      neutral: 'medium',
      peak: 'high'
    }
  },
  transportation: {
    daytime: {
      defaultMode: 'taxi', // Petit Taxi (city) / Grand Taxi (intercity)
      cheapestMode: 'bus',
      recommendedCard: 'None (Cash)',
      notes: 'Always insist on the meter (compteur) in Petit Taxis.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Heetch', 'Careem', 'Indrive'],
      notes: 'Ride-hailing is common in major cities but often uses "secret" pickups to avoid taxi conflict.'
    },
    apps: {
      rideHailing: ['Heetch', 'Careem', 'Indrive'],
      transit: ['ONCF (Trains)', 'CTM (Buses)'],
      navigation: ['Google Maps', 'Waze']
    },
    intercity: {
      cheapest: 'bus (CTM)',
      fastest: 'train (Al Boraq)',
      recommended: 'train'
    }
  },
  resonanceSignals: {
    nightlifeOverall: 6,
    lateNightDining: 8,
    musicScene: 9,
    danceScene: 6,
    barDensity: 6,
    drinkingCulture: 2.5, // Morocco has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 7,
    socialMeetups: 8,
    waterActivities: 9, // Taghazout and Essaouira are surf capitals
    snowActivities: 6, // Oukaïmeden offers unique, high-altitude skiing
    natureAccess: 10, // Sahara desert, Atlas mountains, and rugged coastlines
    festivalCulture: 9,
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 9
  },
  packing: {
    clothingStyle: "Modest-chic. Think linens and light cottons. Long sleeves/pants are respected and protect from the sun.",
    airportUniform: "Breathable layers; easy-to-remove shoes (for security and carpeted spaces); quality sunglasses.",
    essentialGear: [
      "Type C/E Power Adapter",
      "Stomach-soothing meds (activated charcoal)",
      "High-quality power bank"
    ],
    localNuance: "Marrakech is the center, but nomads often split time: 2 weeks of work in the city, 1 week of surfing in Taghazout (the 'Sundesk' hostel is the OG nomad hub there)."
  }
};