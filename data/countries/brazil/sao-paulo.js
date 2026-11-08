module.exports = {
  id: 'SAO',
  name: 'São Paulo',
  type: 'metropolis',
  costMultiplier: 1.1, // Higher than other LatAm cities, but great value for USD
  avoidIf: [
    'Aversion to heavy traffic and urban sprawl',
    'Preference for beach-focused living (it is an inland concrete jungle)',
    'Low tolerance for high-alert safety routines'
  ],
  safetyPattern: {
    day: 3,
    night: 2,
    notes: 'Stick to Jardins, Pinheiros, and Vila Madalena. "Phone snatching" by bike is the main threat—never use your phone on the sidewalk.'
  },
  foodStrategy: {
    breakfast: { 
      bestValue: "Pão na chapa (toasted buttered bread) + Pingado (latte) at a Padaria", 
      cheapest: "Pão de Queijo from a street vendor" 
    },
    lunch: { 
      bestValue: "Prato Feito (PF) - a massive set plate of rice, beans, and meat", 
      cheapest: "Pastel (fried pastry) from a 'Feira Livre' (street market)" 
    },
    dinner: { 
      bestValue: "Rodízio de Pizza (all-you-can-eat) in Moema", 
      cheapest: "Mortadella Sandwich at the Mercado Municipal (huge enough to share)" 
    },
    healthyCheap: "Self-service 'Quilo' restaurants allow you to pay by weight—excellent for fresh salads and grilled proteins at a fixed price."
  },
  wifiScore: 5, // Fiber is standard in business districts; 5G is widespread
  coworkingDensity: 10,
  englishLevel: 6, // High in business hubs (Itaim Bibi/Faria Lima), lower elsewhere
  vibe: ['Concrete-Jungle', 'Gastronomic-Mecca', 'Hyper-Urban'],
  stayOptions: [
    {
      id: 'selina-madalena',
      name: 'Selina Vila Madalena',
      type: 'coworking-hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Dedicated CoWork', 'Rooftop bar', 'Located in the heart of nightlife', 'Library zone'],
      priceTier: 3
    },
    {
      id: 'o-de-casa',
      name: 'Ô de Casa Hostel',
      type: 'boutique-hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Award-winning bar', 'Hammock area', 'Traveler-focused events', 'Vila Madalena location'],
      priceTier: 2
    },
    {
      id: 'z-hostel',
      name: 'Z.Hostel',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'productive',
      amenities: ['Modern pods', 'Quiet work area', 'Near Metro station'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 10, // Vila Madalena is arguably the best bar district in the world
    lateNightDining: 10, // 24-hour diners and pizza are a religion here
    musicScene: 10, // Home of Brazilian Techno and MPB (Música Popular Brasileira)
    danceScene: 9,
    barDensity: 10,
    drinkingCulture: 9.0, // São Paulo has a vibrant drinking culture with a focus on socializing, from traditional botecos to trendy cocktail bars.
    safetyAtNight: 5,
    socialMeetups: 9,
    waterActivities: 0,
    snowActivities: 0,
    natureAccess: 5, // Ibirapuera Park is the green lung; beaches are 1.5 hours away
    festivalCulture: 9,
    socialProximity: 8,
    soloFriendly: 7,
    expatCommunityStrength: 8
  }
};