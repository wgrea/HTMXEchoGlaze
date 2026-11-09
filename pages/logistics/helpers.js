/* pages/logistics/helpers.js */
const monthMap = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6, jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
const seasonRank = { Cheapest: 1, 'Sweet Spot': 2, Neutral: 3, Peak: 4 };

function getSeasonTier(country, monthKey) {
  const s = country.travelReadiness?.seasonality;
  if (!s || !monthMap[monthKey]) return 'Neutral';
  const monthNum = monthMap[monthKey];

  if (s.cheapest?.includes(monthNum)) return 'Cheapest';
  if (s.sweetSpot?.includes(monthNum)) return 'Sweet Spot';
  if (s.peak?.includes(monthNum)) return 'Peak';
  return 'Neutral';
}

function applyFilters(r, selectedMonth, visaType) {
  if (!r) return false;
  if (visaType === 'nomad' && !r.visa?.nomadVisa?.available) return false;
  if (visaType === 'tourist' && !(r.visa?.longStayTouristVisaMonths || r.visa?.touristVisaMonths)) return false;
  if (visaType === 'visaFree' && (!r.visa?.touristStayDays || r.visa.touristStayDays <= 0)) return false;

  if (selectedMonth !== 'none') {
    const monthNum = monthMap[selectedMonth];
    const s = r.seasonality;
    if (!s) return false;
    const allActiveMonths = [...(s.cheapest || []), ...(s.sweetSpot || []), ...(s.peak || []), ...(s.neutral || [])];
    if (!allActiveMonths.includes(monthNum)) return false;
  }
  return true;
}

function filterAndSortCountries(countries, selectedMonth, visaType, sortMode) {
  let list = countries.filter(c => applyFilters(c.travelReadiness, selectedMonth, visaType));

  list.sort((a, b) => {
    if (selectedMonth !== 'none') {
      const aTier = getSeasonTier(a, selectedMonth);
      const bTier = getSeasonTier(b, selectedMonth);
      return seasonRank[aTier] - seasonRank[bTier];
    }

    const aVisa = a.travelReadiness?.visa || {};
    const bVisa = b.travelReadiness?.visa || {};

    const aNomad = aVisa.nomadVisa?.durationMonths ?? 0;
    const bNomad = bVisa.nomadVisa?.durationMonths ?? 0;

    const aTourist = aVisa.longStayTouristVisaMonths ?? aVisa.touristVisaMonths ?? 0;
    const bTourist = bVisa.longStayTouristVisaMonths ?? bVisa.touristVisaMonths ?? 0;

    const aStay = aVisa.touristStayDays ?? 0;
    const bStay = bVisa.touristStayDays ?? 0;

    if (visaType === 'nomad') {
      if (sortMode === 'nomadAsc') return aNomad - bNomad;
      if (sortMode === 'nomadDesc') return bNomad - aNomad;
    }
    if (visaType === 'tourist') {
      if (sortMode === 'touristAsc') return aTourist - bTourist;
      if (sortMode === 'touristDesc') return bTourist - aTourist;
    }
    if (visaType === 'visaFree') {
      if (sortMode === 'stayAsc') return aStay - bStay;
      if (sortMode === 'stayDesc') return bStay - aStay;
    }

    return 0;
  });

  return list;
}

module.exports = {
  monthMap,
  getSeasonTier,
  filterAndSortCountries
};
