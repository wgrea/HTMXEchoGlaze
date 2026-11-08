module.exports = {
  id: 'ALA',
  name: 'Almaty',
  type: 'hub',
  costMultiplier: 0.8, // Exceptional value for high-infrastructure urban living
  avoidIf: [
    'You are highly sensitive to winter air pollution inverted within the mountain basin',
    'You expect flat walking layouts (the city slopes steadily upward as you walk south toward the mountains)'
  ],
  safetyPattern: {
    day: 5,
    night: 4.5,
    notes: 'Incredibly peaceful city. Central grid squares (Golden Quarter) and pedestrian corridors like Panfilov Street are highly monitored and safe at all hours.'
  },
  foodStrategy: {
    breakfast: { bestValue: "Local Café: Blini (pancakes) with curd or eggs", cheapest: "Street Bakery: Fresh Samsa (savory pastry pastry baked in a tandoor)" },
    lunch: { bestValue: "Lanzhou Noodle Bars: Hand-pulled noodle bowls", cheapest: "Lagman House: Hearty portion of pulled noodles and beef" },
    dinner: { bestValue: "Traditional dining: Beshbarmak (horsemeat/beef over flat noodle sheets) or Shashlik sets", cheapest: "Navat or local canteen: Standard plate of plov with hot tea" },
    dessert: { bestValue: "Traditional Baursaks (fried dough puffs) with local honey", cheapest: "Grocery: Kazakhstan-brand chocolate bars (blue wrapper)" },
    healthyCheap: "Green Bazaar (Zelyony Bazar) offers unmatched wholesale pricing on fresh nuts, dried fruits, local honey, and fresh curds (Qurt)."
  },
  wifiScore: 4, // Strong fixed fiber; exceptional and cheap 4G/5G mobile hotspot backups
  coworkingDensity: 7,
  englishLevel: 6, // High among students and hospitality staff in central neighborhoods; helpful to learn basic Russian/Kazakh phrases
  vibe: ['Soviet-Modernist', 'Alpine-Border', 'Cafe-Centric'],
  stayOptions: [
    {
      id: 'urban-pack-hostel',
      name: 'Urban Pack Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'balanced',
      amenities: ['Dedicated laptop workstations', 'Full shared kitchen configuration', 'Central pedestrian zone proximity', 'Privacy pod curtains'],
      priceTier: 2
    },
    {
      id: 'wanderlust-hostel-almaty',
      name: 'Wanderlust Hostel',
      type: 'hostel',
      verifiedWifi: true,
      socialTone: 'social',
      amenities: ['Charming courtyard social garden', 'Laptop desks', 'Tour planning coordination desk', 'Shared laundry room'],
      priceTier: 2
    },
    {
      id: 'capsule-hotel-almaty',
      name: 'Capsule Hotel Interhouse',
      type: 'premium-hostel',
      verifiedWifi: true,
      socialTone: 'quiet',
      amenities: ['Sound-isolated capsule slots', 'Ergonomic shared work lounge', 'High-speed dedicated Wi-Fi network drop'],
      priceTier: 2
    }
  ],
  resonanceSignals: {
    nightlifeOverall: 8, // Deep underground speakeasies and localized bar quarters behind Dostyk avenue
    lateNightDining: 8,
    musicScene: 8,
    danceScene: 7,
    barDensity: 8,
    drinkingCulture: 7.5,
    safetyAtNight: 9,
    socialMeetups: 8,
    natureAccess: 10, // Take a city bus straight up to the Medeu ice rink and Shymbulak mountains
    festivalCulture: 7,
    socialProximity: 8,
    soloFriendly: 9,
    expatCommunityStrength: 8,
    snowActivities: 10,
    waterActivities: 3
  },
  countryId: 'KAZ'
};