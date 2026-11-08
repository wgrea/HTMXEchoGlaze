module.exports = {
  id: 'TBS',
  name: 'Tbilisi',
  type: 'capital',
  costMultiplier: 0.7, // Extremely affordable relative to Western Europe
  avoidIf: [
    'You have severe respiratory sensitivities (winter smog in the hollow can be high)',
    'You are looking for a tropical/coastal climate',
    'You prefer flat cities (Tbilisi is very vertical)'
  ],
  safetyPattern: {
    day: 5,
    night: 4,
    notes: 'One of the safest capitals in Eurasia. Vake and Vera are the "posh" areas; Marjanishvili is the creative/hip hub.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Fresh Shotis Puri (bread) from a tone oven + Sulguni cheese", 
      cheapest: "Lobiani (bean-filled bread) from a street bakery" 
    },
    lunch: { 
      bestValue: "Puri Guliani (Fabrika courtyard) or local Salobie", 
      cheapest: "Khinkali (dumplings) - usually priced per piece (~1.5-2 GEL each)" 
    },
    dinner: { 
      bestValue: "Traditional Supra-style dining in Sololaki", 
      cheapest: "Shawarma on Kostava St (notoriously large portions)" 
    },
    healthyCheap: "Shopping at the Deserter Bazaar for walnuts, pomegranate, and farm-fresh greens. Agrohub for high-quality prepared healthy meals."
  },
  wifiScore: 4, // Fiber is common; Magti 4G/5G is world-class for hotspots
  coworkingDensity: 9,
  englishLevel: 7, // Very high among the youth; lower with the older generation
  vibe: ['Ancient-Eclectic', 'Brutalist-Chic', 'Techno-Renegade'],
  stayOptions: [
    {
      id: 'fabrika-tbilisi',
      name: 'Fabrika Hostel & Suites',
      type: 'hybrid',
      verifiedWifi: true,
      socialTone: 'party',
      amenities: ['Massive coworking courtyard', 'Art studios', 'On-site bars', 'Industrial design'],
      priceTier: 2
    },
    {
      id: 'the-tbilisi-pod',
      name: 'The Tbilisi Pod',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Capsule privacy', 'Ergonomic work zones', 'Quiet floor', 'Located in Vera'],
      priceTier: 2
    },
    {
      id: 'pushkin-10',
      name: 'Pushkin 10',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Central location', 'Free laundry', 'Dedicated laptop area', 'Complimentary breakfast'],
      priceTier: 1
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 10, // Bassiani and Khidi are global techno icons
    lateNightDining: 8,
    musicScene: 9,
    danceScene: 10,
    barDensity: 9,
    drinkingCulture: 9.8, // Tbilisi has a vibrant drinking culture with a focus on socializing, from traditional wine bars to trendy cocktail lounges.
    safetyAtNight: 8,
    socialMeetups: 9,
    natureAccess: 8, // Hiking in Mtatsminda or nearby Kazbegi
    festivalCulture: 8,
    socialProximity: 9,
    soloFriendly: 10,
    expatCommunityStrength: 10,
    snowActivities: 0,
    waterActivities: 2
  }
};