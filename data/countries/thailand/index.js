module.exports = {
  id: 'THA',
  name: 'Thailand',
  region: 'Southeast Asia',
  viewMode: 'city-first',
  resonanceMode: 'city-first',
  personaFit: [
    'The Budget Architect',
    'The Tropical Nomad',
    'The Street Food Connoisseur'
  ],
  costTier: 'Low',
  decisionAttributes: {
    visaEase: 5,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 9, vibe: 10 },
    safety: 8,
    avoidIf: [
      'Extremely sensitive to air quality (Burning Season Feb–April)',
      'Overwhelmed by intense heat and humidity',
      'Prefer strict adherence to traffic rules'
    ],
    majorHubs: ['BKK', 'DMK', 'CNX', 'HKT']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 60,
      longStayTouristVisaMonths: 9,
      nomadVisa: {
        available: true,
        name: 'DTV (Destination Thailand Visa)',
        durationMonths: 60,
        incomeRequirement: 14500 // Min 500,000 THB in savings/holdings
      },
      workPolicy: 'Remote work for non-Thai entities is officially legalized under DTV',
      registrationAfterDays: 90,
      requirements: [
        'Proof of 500k THB (~$14.5k) in bank/savings',
        'Employment contract or freelance portfolio',
        'Location proof (outside Thailand at time of application)'
      ]
    },
    flights: {
      friction: 'low',
      routingNotes: 'Major global hub; BKK is one of the best-connected airports in the world.',
      hubs: ['BKK', 'DMK']
    },
    seasonality: {
      cheapest: [5, 6, 9, 10], // Rainy season
      sweetSpot: [11, 1, 2], // Cool season
      peak: [12, 4] // Holidays & Songkran
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
      cheapestMode: 'bus',
      recommendedCard: 'Rabbit Card (BTS) / MRT Card',
      notes: 'BTS (Skytrain) and MRT (Subway) are separate systems; both are world-class but require separate cards.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Grab', 'Bolt'],
      notes: 'Motorbike taxis (Win) are fastest in traffic but high-risk. Use Grab for transparent pricing.'
    },
    apps: {
      rideHailing: ['Grab', 'Bolt', 'Indriver'],
      transit: ['ViaBus', 'Google Maps', '12Go'],
      navigation: ['Google Maps', 'Waze']
    },
    intercity: {
      cheapest: 'bus',
      fastest: 'flight',
      recommended: 'train' // Sleeper trains are a top experience
    }
  },
resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 10, // 24-hour food culture is a core pillar
    musicScene: 7,
    danceScene: 7.5,
    barDensity: 9,
    drinkingCulture: 6.5, // Vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 8,
    socialMeetups: 10,
    waterActivities: 10, // Islands (Phuket/Samui) are world-leading
    snowActivities: 0,
    natureAccess: 9, // Jungle trekking in the North, Marine parks in South
    festivalCulture: 10, // Songkran and Loy Krathong are global bucket-list items
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 10
    },
  packing: {
    clothingStyle: "Light-tropical. Quick-dry fabrics; linen trousers for temples. Avoid cotton (it won't dry in the humidity).",
    airportUniform: "Ultra-light hoodie; compression socks; slip-on shoes for temple-hopping later.",
    essentialGear: [
      "Waterproof tech-pouch",
      "Type A/C power adapter",
      "Extra Joy-Cons for social gaming in hostels"
]
    // localNuance is optional in your interface, so it's fine to omit it.
  }
}; // This closes the whole Country object