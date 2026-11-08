/* partials/logistics/azerbaijan.js */
module.exports = {
  name: 'Azerbaijan',
  region: 'Eurasia',
  icon: '🇦🇿',
  travelReadiness: {
    visa: {
      touristStayDays: 30,
      longStayTouristVisaMonths: 0,
      nomadVisa: { available: false },
      workPolicy: "ASAN Visa or e-Visa; no local employment permitted.",
      registrationAfterDays: 15,
    },
    seasonality: { 
      cheapest: [1, 2, 12], 
      sweetSpot: [3, 4, 5, 9, 10], 
      peak: [6, 7, 8], 
      neutral: [11] 
    }
  }
};