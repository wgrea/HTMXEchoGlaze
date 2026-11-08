// data/countries/argentina/index.js
module.exports = {
  id: 'ARG',
  name: 'Argentina',
  region: 'South America',
  viewMode: 'country-first',
  resonanceMode: 'country-first',
  personaFit: ['The European Soul', 'The Night-Owl Developer', 'The Value-Strategist'],
  costTier: 'Low-Medium',
  decisionAttributes: {
    visaEase: 9,
    digitalNomadVisa: true,
    nomadFriendliness: { infra: 9, vibe: 10 },
    safety: 7,
    englishLevel: 7,
    avoidIf: ['Frustrated by complex currency exchange systems', 'Needs early-morning social life'],
    majorHubs: ['BUE', 'MDZ', 'BRC']
  },
  likelihoodScores: { nightlife: 10, hiking: 10, coworking: 9, food: 9, history: 9, safety: 7 },
  resonanceSignals: {
    nightlifeOverall: 10, lateNightDining: 10, musicScene: 9, danceScene: 10, barDensity: 10, drinkingCulture: 7.5, // Argentina has a vibrant drinking culture with a focus on socializing, from beach bars to rooftop lounges.
    safetyAtNight: 7, socialMeetups: 9, waterActivities: 5, snowActivities: 9, natureAccess: 10,
    festivalCulture: 9, socialProximity: 10, soloFriendly: 9, expatCommunityStrength: 9
  },
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 6,
      nomadVisa: { available: true, durationMonths: 6 },
      workPolicy: "Transit residence status; local employment strictly prohibited.",
      registrationAfterDays: 0,
},
    seasonality: { cheapest: [6, 7, 8], sweetSpot: [10, 11, 3, 4], peak: [12, 1, 2] },
    seasonalVolatility: { cheapest: 'low', sweetSpot: 'medium', neutral: 'medium', peak: 'high' }
  },
  transportation: {
    daytime: { defaultMode: 'subte', cheapestMode: 'colectivo (bus)', recommendedCard: 'SUBE', notes: 'The SUBE card is mandatory and sometimes hard to find—buy it at a "Kiosco".' },
    nighttime: { safestMode: 'rideHailing', recommendedApps: ['Cabify', 'Uber'], notes: 'Cabify is often preferred by locals for safety and fixed pricing.' },
    apps: { rideHailing: ['Cabify', 'Uber', 'Didi'], transit: ['Moovit', 'Google Maps'], navigation: ['Google Maps'] },
    intercity: { cheapest: 'bus', fastest: 'plane', recommended: 'plane (Aerolineas Argentinas)' }
  },
  packing: {
    clothingStyle: "Smart-casual with dark tones. Argentines dress well; avoid looking like a 'backpacker' in the city.",
    airportUniform: "Light jacket for the long-haul flight AC; easy-access pocket for the SUBE card.",
    essentialGear: [
      "Large tech-dedicated backpack (30L+)", 
      "Hard-shell case for handheld console", 
      "Universal power adapter (Type I/C)"
    ]
    // localNuance: "Optional note here"
  }
};