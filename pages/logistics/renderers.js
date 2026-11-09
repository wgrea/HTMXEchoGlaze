/* pages/logistics/renderers.js */
const { monthMap, getSeasonTier, filterAndSortCountries } = require('./helpers');

function renderFilterBar(selectedMonth, visaType, sortMode) {
  const months = [
    { val: 'none', label: 'Visa Mode (No Month)' },
    { val: 'jan', label: 'January' }, { val: 'feb', label: 'February' },
    { val: 'mar', label: 'March' }, { val: 'apr', label: 'April' },
    { val: 'may', label: 'May' }, { val: 'jun', label: 'June' },
    { val: 'jul', label: 'July' }, { val: 'aug', label: 'August' },
    { val: 'sep', label: 'September' }, { val: 'oct', label: 'October' },
    { val: 'nov', label: 'November' }, { val: 'dec', label: 'December' }
  ].map(m => `<option value="${m.val}" ${m.val === selectedMonth ? 'selected' : ''}>${m.label}</option>`).join('');

  let sortSelectHtml = '';
  if (selectedMonth === 'none' && visaType !== 'all') {
    let options = `<option disabled ${sortMode === 'none' ? 'selected' : ''}>Sort</option>`;
    if (visaType === 'nomad') {
      options += `<option value="nomadAsc" ${sortMode === 'nomadAsc' ? 'selected' : ''}>Short → Long</option>`;
      options += `<option value="nomadDesc" ${sortMode === 'nomadDesc' ? 'selected' : ''}>Long → Short</option>`;
    } else if (visaType === 'tourist') {
      options += `<option value="touristAsc" ${sortMode === 'touristAsc' ? 'selected' : ''}>Short → Long</option>`;
      options += `<option value="touristDesc" ${sortMode === 'touristDesc' ? 'selected' : ''}>Long → Short</option>`;
    } else if (visaType === 'visaFree') {
      options += `<option value="stayAsc" ${sortMode === 'stayAsc' ? 'selected' : ''}>Short → Long</option>`;
      options += `<option value="stayDesc" ${sortMode === 'stayDesc' ? 'selected' : ''}>Long → Short</option>`;
    }

    sortSelectHtml = `
      <select name="sortMode" hx-get="/api/logistics/compare-all" hx-target="#logistics-content" hx-include="#filter-bar" class="text-[10px] font-bold uppercase p-2 rounded border bg-slate-50">
        ${options}
      </select>
    `;
  }

  const visas = [
    { val: 'all', label: 'Visa Type: All' },
    { val: 'nomad', label: 'Digital Nomad Visa' },
    { val: 'tourist', label: 'Tourist Visa' },
    { val: 'visaFree', label: 'Visa‑Free Stay' }
  ].map(v => `<option value="${v.val}" ${v.val === visaType ? 'selected' : ''}>${v.label}</option>`).join('');

  return `
    <form id="filter-bar" class="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
      <select name="month" hx-get="/api/logistics/compare-all" hx-target="#logistics-content" hx-include="#filter-bar" class="text-[10px] font-bold uppercase p-2 rounded border bg-slate-50">
        ${months}
      </select>
      ${selectedMonth === 'none' ? `
        ${sortSelectHtml}
        <select name="visaType" hx-get="/api/logistics/compare-all" hx-target="#logistics-content" hx-include="#filter-bar" class="text-[10px] font-bold uppercase p-2 rounded border bg-slate-50">
          ${visas}
        </select>
      ` : ''}
    </form>`;
}

function renderComparisonCards(countries, selectedMonth, visaType) {
  if (!countries.length) return `<p class="col-span-full text-xs text-slate-500 italic p-4 text-center">No countries match these filters.</p>`;

  return countries.map((c, i) => {
    const seasonTier = selectedMonth !== 'none' ? getSeasonTier(c, selectedMonth) : null;
    const touristMonths = c.travelReadiness?.visa?.longStayTouristVisaMonths ?? c.travelReadiness?.visa?.touristVisaMonths ?? null;
    let visaHtml = '';

    if (selectedMonth !== 'none') {
      visaHtml = `
        <div class="flex justify-between border-b border-slate-50 pb-1 mb-1">
          <span class="text-slate-400 uppercase">Season</span>
          <span class="font-bold text-indigo-600">${seasonTier}</span>
        </div>`;
    } else {
      if (visaType === 'nomad' || visaType === 'all') {
        visaHtml += `
          <div class="flex justify-between">
            <span class="text-slate-400 uppercase">Nomad Visa</span>
            <span class="font-bold text-slate-700">${c.travelReadiness?.visa?.nomadVisa?.available ? `${c.travelReadiness.visa.nomadVisa.durationMonths} Months` : 'None'}</span>
          </div>`;
      }
      if (visaType === 'visaFree' || visaType === 'all') {
        visaHtml += `
          <div class="flex justify-between">
            <span class="text-slate-400 uppercase">Visa-Free Stay</span>
            <span class="font-bold text-slate-700">${c.travelReadiness?.visa?.touristStayDays ?? 0} Days</span>
          </div>`;
      }
      if (visaType === 'tourist' || visaType === 'all') {
        visaHtml += `
          <div class="flex justify-between">
            <span class="text-slate-400 uppercase">Tourist Visa</span>
            <span class="font-bold text-slate-700">${touristMonths ? `${touristMonths} Months` : 'None'}</span>
          </div>`;
      }
    }

    return `
      <button 
        hx-get="/api/logistics/country?country=${c.slug}&month=${selectedMonth}"
        hx-target="#logistics-content"
        class="group p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-indigo-500 hover:ring-1 hover:ring-indigo-500 transition-all text-left"
      >
        <div class="flex justify-between items-start mb-3">
          <span class="text-2xl">${c.icon}</span>
          <span class="text-[9px] font-black uppercase tracking-tighter text-slate-400 bg-slate-100 px-2 py-1 rounded">#${i + 1}</span>
        </div>
        <h3 class="font-black text-slate-900 group-hover:text-indigo-600 transition-colors">${c.name}</h3>
        <div class="mt-4 space-y-1.5 text-[10px]">${visaHtml}</div>
      </button>`;
  }).join('');
}

function renderSeasonalityStrip(seasonality, selectedMonth) {
  const monthLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const monthKeys = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  
  return Array.from({ length: 12 }).map((_, i) => {
    const monthNum = i + 1;
    const isHighlighted = monthKeys[i] === selectedMonth;
    const isSweet = seasonality?.sweetSpot?.includes(monthNum);
    const isCheap = seasonality?.cheapest?.includes(monthNum);
    const isPeak = seasonality?.peak?.includes(monthNum);

    const bgClass = isSweet ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
      : isCheap ? 'bg-sky-50 border-sky-200 text-sky-800'
      : isPeak ? 'bg-rose-50 border-rose-200 text-rose-800'
      : 'bg-slate-50 border-slate-100 text-slate-400';

    const statusText = isSweet ? '✨ Sweet' : isCheap ? '💸 Cheap' : isPeak ? '🔥 Peak' : '• Neutral';

    return `
      <div class="min-w-[75px] flex-1 rounded-2xl border px-3 py-3 text-center text-xs transition-all ${isHighlighted ? 'ring-2 ring-indigo-500 ring-offset-2 z-10' : ''} ${bgClass}">
        <div class="text-[10px] font-black uppercase tracking-[0.16em] mb-1">${monthLabels[i]}</div>
        <div class="text-[10px] font-bold">${statusText}</div>
      </div>`;
  }).join('');
}

module.exports = {
  filterAndSortCountries,
  renderFilterBar,
  renderComparisonCards,
  renderSeasonalityStrip
};
