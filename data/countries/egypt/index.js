module.exports = {
  id: 'EGY',
  name: 'Egypt',
  region: 'North Africa & Middle East',
  costTier: 'Ultra-Low',
  viewMode: 'city-first',
  resonanceMode: 'country-first',
  personaFit: ['The Cultural Archaeologist', 'The True Backpacker', 'The Chaos-Tolerant Dev'],
  decisionAttributes: {
    visaEase: 9, // 30-day Visa on Arrival for 40+ countries ($25 cash USD required at airport bank counters)
    digitalNomadVisa: false,
    nomadFriendliness: { infra: 6, vibe: 8 },
    safety: 8, // High security presence in tourist zones; low violent crime, but high persistent scam/hassle friction
    avoidIf: ['You require pristine, silent streets to focus', 'You have a very low threshold for intense, aggressive street negotiation'],
    majorHubs: ['CAI', 'SSH', 'HRG']
  },
  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: 6, // Renewable at the Mugamma/Immigration offices or online e-visa portal
      nomadVisa: { available: false },
      workPolicy: 'Remote work for external clients operates in a legal gray area under tourist status and is completely unmonitored.',
      workPolicyCategory: 'tourist',
      registrationAfterDays: 7, // Officially required within 7 days, but hotels/hostels log this digitally for you automatically
      requirements: ["Valid passport with 6 months validity", "$25 USD pristine cash bill for the visa sticker"]
    },
    flights: {
      friction: 'low',
      routingNotes: 'Cairo International (CAI) is massive and highly accessible globally. Budget carriers like Wizz Air open cheap paths into Sphinx Airport (SPX) or Hurghada.',
      hubs: ['CAI', 'SPX']
    },
    seasonality: {
      cheapest: [6, 7, 8], // Extreme summer heat (can regularly exceed 42°C/107°F)
      sweetSpot: [3, 4, 10, 11], // Perfect shoulder months with warm days and cool desert nights
      peak: [12, 1, 2] // Winter peak for sightseeing crowds
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
      cheapestMode: 'metro',
      recommendedCard: 'Metro Token / Contactless Ticket',
      notes: 'Cairo Metro is remarkably efficient, fast, and completely skips the legendary surface-level gridlock traffic.'
    },
    nighttime: {
      safestMode: 'rideHailing',
      recommendedApps: ['Uber', 'InDrive'],
      notes: 'Never take unmetered street cabs; Uber or InDrive lock down deterministic upfront pricing parameters and keep records.'
    },
    apps: {
      rideHailing: ['Uber', 'InDrive', 'Careem'],
      transit: ['Cairo Metro App'],
      navigation: ['Google Maps']
    },
    intercity: {
      cheapest: 'bus', // Go Bus network is high-spec and digital
      fastest: 'flight', // EgyptAir for internal long hops (Cairo to Luxor/Aswan)
      recommended: 'train' // The daytime express trains or specialized sleeper lines up the Nile
    }
  },
  resonanceSignals: {
    nightlifeOverall: 6, // Alcohol is concentrated in specific neighborhood pockets (Zamalek) and historic rooftop hideouts
    lateNightDining: 10, // Cairo never sleeps; food spots run 24/7
    musicScene: 7, // Vibrant indie and alternative Arabic electronic movements
    danceScene: 5,
    barDensity: 6,
    drinkingCulture: 5.0, // Centered primarily around ahwas (traditional coffee and shisha hubs) rather than beer bars
    safetyAtNight: 8,
    socialMeetups: 7,
    waterActivities: 9, // World-class scuba diving and kitesurfing in the Red Sea (Dahab/Hurghada)
    snowActivities: 0,
    natureAccess: 8, // Desert safari loops and Nile access tracks are legendary
    festivalCulture: 5,
    socialProximity: 8,
    soloFriendly: 8,
    expatCommunityStrength: 8
  },
  packing: {
    clothingStyle: "Smart-conservative. Light, breathable fabrics (linen/cotton). Long trousers and covered shoulders out of cultural respect outside beach resorts.",
    airportUniform: "Loose track pants; linen shirt; slip-on trainers for rapid security loops.",
    essentialGear: [
      "Pristine, crisp $25 USD bill (wrinkled or torn bills will be rejected at airport customs counters)",
      "Type C/F European power adapter",
      "High-potency rehydration packets and stomach emergency meds (Antinal/Diax)"
    ],
    localNuance: "Cash is king. While card readers are spreading in metropolitan chain stores, street food stalls, markets, and regional transport options demand physical paper Egyptian Pounds (EGP)."
  }
};