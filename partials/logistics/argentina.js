/* partials/logistics/argentina.js */
module.exports = {
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
    seasonality: { 
      cheapest: [6, 7, 8], 
      sweetSpot: [3, 4, 10, 11], 
      peak: [1, 2, 12], 
      neutral: [5, 9] 
    }
  }
};