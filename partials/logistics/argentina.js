/* partials/logistics/argentian.js */
module.exports = {
  id: 'ARG',
  name: 'Argentina',
  region: 'South America',
  icon: '🇦🇷',
  travelReadiness: {
    visa: {
      touristStayDays: 90,
      longStayTouristVisaMonths: 6,
      nomadVisa: { available: true, durationMonths: 6 },
      workPolicy: "Transit residence status; local employment strictly prohibited.",
      registrationAfterDays: 0,
    },
    seasonality: { cheapest: [6, 7, 8], sweetSpot: [10, 11, 3, 4], peak: [12, 1, 2] }
  }
  // ... rest of object
};