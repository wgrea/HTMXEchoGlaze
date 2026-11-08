module.exports = {
  id: 'LAO',
  name: 'Laos',
  region: 'Southeast Asia',
  costTier: 'Ultra-Low',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: ['The Budget Architect', 'The Slow-Traveler', 'The Tropical Nomad'],
  decisionAttributes: {
    visaEase: 9, // Visa on Arrival or E-visa is very simple
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 6, vibe: 10 },
    safety: 9,
    avoidIf: ['You require 1Gbps internet for large file uploads', 'You are frustrated by "Lao Time" (very slow service)'],
    majorHubs: ['VTE', 'LPB']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: 2, // Can easily extend at immigration
      nomadVisa: { available: false },
      workPolicy: 'Remote work is technically unofficial but widely practiced on tourist visas.',
      registrationAfterDays: null,
      requirements: ['Valid passport', '2 passport photos', '$40 USD for Visa on Arrival']
    },
    flights: {
      friction: 'low',
      routingNotes: 'Direct flights from Bangkok or Hanoi. The new train from Vientiane is now the preferred entry.',
      hubs: ['VTE', 'LPB']
    },
    seasonality: {
      cheapest: [5, 6, 7, 8, 9], // Monsoon
      sweetSpot: [11, 12, 1], // Cool and dry
      peak: [12, 4] // Holidays & Lao New Year
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
      defaultMode: 'walk',
      cheapestMode: 'bicycle',
      recommendedCard: 'None',
      notes: 'Rent a bicycle for $2-3 a day. It is the best way to see the city.'
    },
    nighttime: {
      safestMode: 'walk',
      recommendedApps: ['Loca'],
      notes: 'Loca is the "Lao Uber" and works well in Vientiane and Luang Prabang.'
    },
    apps: {
      rideHailing: ['Loca', 'Indrive'],
      transit: ['Google Maps'],
      navigation: ['Google Maps']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'train', // The new high-speed railway is a game changer
      recommended: 'train'
    }
  },
  resonanceSignals: {
    nightlifeOverall: 3,
    lateNightDining: 4,
    musicScene: 5,
    danceScene: 3,
    barDensity: 5,
    drinkingCulture: 8.5, // Laos has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 9,
    socialMeetups: 7,
    waterActivities: 9,
    snowActivities: 0,
    natureAccess: 10,
    festivalCulture: 9,
    socialProximity: 8,
    soloFriendly: 10,
    expatCommunityStrength: 7
  },
  packing: {
    clothingStyle: "Tropical-modest. Shoulders and knees must be covered for temples. Light linen is best.",
    airportUniform: "Slip-on shoes (required for every temple and home); light hoodie for the high-speed train AC.",
    essentialGear: [
      "Type A/C/G Power Adapter",
      "Dry-bag (essential for river trips)",
      "High-quality insect repellent"
    ],
    localNuance: "Cash is still king, but 'BCEL One' (the local banking app) QR codes are used everywhere. Carry small denominations of Lao Kip."
  }
};