// pages/resonance/renderers.js

const labelMap = {
  "drinkingCulture": "Drinking Culture",
  "danceScene": "Dance Scene",
  "musicScene": "Live Music",
  "nightlifeOverall": "Nightlife Overall",
  "barDensity": "Bar Density",
  "snowActivities": "Snow / Alpine",
  "waterActivities": "Water / Coastal",
  "safetyAtNight": "Night Safety",
  "soloFriendly": "Solo Friendly",
  "natureAccess": "Nature Access",
  "socialEase": "Social Ease",
  "lateNightDining": "Late Night Dining",
  "socialMeetups": "Social Meetups",
  "festivalCulture": "Festival Culture",
  "expatCommunityStrength": "Expat Community"
};

function renderMetricRow(key, score = 0, activeKey, query) {
  const label = labelMap[key] || key;
  const isSelected = activeKey === key;
  const encodedLabel = encodeURIComponent(label);

  return `
    <div class="flex items-center justify-between group p-1.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer ${isSelected ? 'bg-blue-50 border border-blue-100 shadow-sm' : ''}"
         hx-get="/partials/resonance/calculate?selectedSignalKey=${key}&selectedSignalLabel=${encodedLabel}"
         hx-include="#resonance-location-form"
         hx-target="#resonance-content"
         hx-trigger="click">
      <span class="text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors">${label}</span>
      <div class="flex items-center gap-3">
        <div class="w-32 bg-slate-100 h-1.5 rounded-full overflow-hidden shadow-inner">
          <div class="bg-blue-600 h-full rounded-full transition-all duration-500" style="width: ${score * 10}%"></div>
        </div>
        <span class="text-xs font-mono font-black text-slate-400 min-w-[14px] text-right">${score}</span>
      </div>
    </div>
  `;
}

function renderGlobalMatches(signalLabel, matches) {
  return `
    <div class="mt-6 p-4 border-t border-slate-100 animate-fade-in">
      <div class="text-lg mb-2">🌍</div>
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">
        Global Matches for <span class="text-slate-700 block text-sm font-extrabold mt-0.5">${decodeURIComponent(signalLabel)}</span>
      </h3>
      ${matches.length > 0 ? `
        <div class="space-y-1 max-w-xs font-bold text-xs text-slate-700">
          ${matches.map(m => `
            <div class="py-0.5">
              ${m}
            </div>
          `).join('')}
        </div>
      ` : `
        <p class="text-xs text-slate-400 italic">No matches above 7+ threshold metrics found.</p>
      `}
    </div>
  `;
}

function renderResonanceDashboard(signals, query, selectedSignalKey, selectedSignalLabel, globalMatchesHTML = '') {
  const energyGroup = ['drinkingCulture', 'danceScene', 'musicScene', 'nightlifeOverall', 'barDensity'];
  const geographicGroup = ['snowActivities', 'waterActivities'];
  const miscellaneousGroup = ['safetyAtNight', 'soloFriendly', 'natureAccess', 'socialEase', 'lateNightDining', 'socialMeetups', 'festivalCulture', 'expatCommunityStrength'];

  return `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <span>💃</span> Energy & Scene
        </h3>
        <div class="space-y-4">
          ${energyGroup.map(k => renderMetricRow(k, signals[k], selectedSignalKey, query)).join('')}
        </div>
      </div>

      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <span>🌍</span> Geographic Base
        </h3>
        <div class="space-y-4">
          ${geographicGroup.map(k => renderMetricRow(k, signals[k], selectedSignalKey, query)).join('')}
        </div>
      </div>
    </div>

    <!-- 📊 OTHER RESONANCE SIGNALS PANEL -->
    <div class="mt-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">Other Resonance Signals</h3>
      <div class="flex flex-col space-y-1.5 max-w-sm font-bold text-xs text-slate-700">
        ${miscellaneousGroup.map(k => {
          const score = signals[k] || 0;
          const labelName = labelMap[k] || k;
          const isSelected = selectedSignalKey === k;
          const encodedLabel = encodeURIComponent(labelName);

          return `
            <button type="button"
                    class="text-left transition-all hover:text-blue-600 block py-0.5 outline-none ${isSelected ? 'text-blue-600 italic font-black' : 'text-slate-700'}"
                    hx-get="/partials/resonance/calculate?selectedSignalKey=${k}&selectedSignalLabel=${encodedLabel}"
                    hx-include="#resonance-location-form"
                    hx-target="#resonance-content"
                    hx-trigger="click">
              ${labelName}: ${score}
            </button>
          `;
        }).join('')}
      </div>
      
      ${globalMatchesHTML}
    </div>
  `;
}

module.exports = {
  renderResonanceDashboard,
  renderGlobalMatches
};
