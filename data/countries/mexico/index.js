// data/countries/mexico/index.js
module.exports = {
  id: 'MEX',
  name: 'Mexico',
  region: 'North America / LatAm',
  viewMode: 'country-first',
  resonanceMode: 'country-first',
  personaFit: ['The Cultural Architect', 'The Time-Zone Synchronizer', 'The Street Food Strategist'],
  costTier: 'Medium-Low',
  decisionAttributes: {
    visaEase: 10,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 9, vibe: 10 },
    safety: 6,
    englishLevel: 5,
    avoidIf: ['Highly sensitive to noise pollution', 'Requires strict 1:1 rule-following culture'],
    majorHubs: ['MEX', 'CUN', 'GDL']
  },
  likelihoodScores: { nightlife: 10, hiking: 8, coworking: 9, food: 10, history: 10, safety: 6 },
  
  /** ⭐ FULL RESONANCE SECTION: No missing keys for filtering */
  resonanceSignals: {
    nightlifeOverall: 9,
    lateNightDining: 10,
    musicScene: 9,
    danceScene: 8,
    barDensity: 10,
    drinkingCulture: 7.0, // Mexico has a vibrant drinking culture with a focus on socializing, from mezcal bars to beach clubs.
    safetyAtNight: 6,
    socialMeetups: 10,
    waterActivities: 8,  // Coastal hubs (Oaxaca/Yucatán) are 10, interior is 1
    snowActivities: 1,   // Only specific peaks (Pico de Orizaba), not a nomad hub activity
    natureAccess: 8,
    festivalCulture: 10,
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 10
  },

  travelReadiness: {
    visa: {
      touristStayDays: 180,
      longStayTouristVisaMonths: 12, // Temporary Resident (Nomad)
      nomadVisa: { 
        available: true, 
        durationMonths: 12 
      },
      workPolicy: "Strictly foreign income; local Mexican employment requires a separate NUT (Work Permit).",
      registrationAfterDays: 30, // For residency holders
      requirements: [
        "2026 Update: FMM is now 100% digital at major airports; keep your QR code safe.",
        "Temporary Residency: Proof of ~$2,600+ monthly income (average across 6 months).",
        "Savings: ~$43,000+ liquid for 12 months can bypass income requirements.",
        "Passport valid 6+ months from date of entry."
      ]
    },
    /** ⭐ Lean Flight Schema */
    flights: {
      friction: 'low',
      routingNotes: "MEX and CUN are massive hubs. Volaris and VivaAerobus are the reliable budget carriers.",
      hubs: ['MEX', 'CUN', 'GDL', 'TIJ']
    },
    seasonality: { 
      cheapest: [5, 6, 9], // Rainy season / Hurricane peak
      sweetSpot: [10, 11, 3, 4], 
      peak: [12, 1, 2] // High winter / Holy Week (Semana Santa)
    },
    seasonalVolatility: { 
      cheapest: 'high', 
      sweetSpot: 'low', 
      neutral: 'medium', 
      peak: 'high' 
    }
  },
  transportation: {
    daytime: { 
      defaultMode: 'metro/bus', 
      cheapestMode: 'metro', 
      recommendedCard: 'Tarjeta de Movilidad Integrada', 
      notes: 'In CDMX, the Metrobus is often faster than Uber in peak traffic due to dedicated lanes.' 
    },
    nighttime: { 
      safestMode: 'rideHailing', 
      recommendedApps: ['Uber', 'Didi'], 
      notes: '2026 Tip: Uber is now fully legal and integrated at MEX airport T1/T2, ending the old taxi-stand monopoly.' 
    },
    apps: { 
      rideHailing: ['Uber', 'Didi', 'Cabify'], 
      transit: ['Citymapper', 'Google Maps', 'Metro-MB'], 
      navigation: ['Waze'] 
    },
    intercity: { 
      cheapest: 'bus', 
      fastest: 'plane', 
      recommended: 'luxury-bus (ADO/ETN)' 
    }
  },
  packing: {
    clothingStyle: "Colorful-urban. CDMX favors 'smart' looks (jeans/button-downs); coastal areas are beach-ready.",
    airportUniform: "Medium hoodie for high-altitude CDMX arrival; easy-access passport pouch.",
    essentialGear: [
      "Shock-proof case for all tech",
      "Type A/B power adapter (same as USA)",
      "Sun-protection for screen visibility"
    ]
  }
};