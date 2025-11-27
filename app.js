// Exchange rate
const USD_RATE = 0.012;

// Dataset with coordinates (Bhopal + Indore)
const DATA_SET = [
  { City:"Bhopal", Landmark:"Arera Colony", Category:"Residential", Rate2018:3200, Rate2024:4700, lat:23.235, lng:77.445 },
  { City:"Bhopal", Landmark:"Arera Colony", Category:"Commercial",  Rate2018:6300, Rate2024:9300, lat:23.235, lng:77.445 },
  { City:"Bhopal", Landmark:"MP Nagar", Category:"Residential", Rate2018:4000, Rate2024:5500, lat:23.257, lng:77.420 },
  { City:"Bhopal", Landmark:"MP Nagar", Category:"Commercial",  Rate2018:9300, Rate2024:13300, lat:23.257, lng:77.420 },
  { City:"Bhopal", Landmark:"Kolar Road", Category:"Residential", Rate2018:1500, Rate2024:2500, lat:23.205, lng:77.472 },
  { City:"Bhopal", Landmark:"Kolar Road", Category:"Commercial",  Rate2018:3500, Rate2024:6500, lat:23.205, lng:77.472 },
  { City:"Bhopal", Landmark:"Hoshangabad Road", Category:"Residential", Rate2018:1700, Rate2024:3000, lat:23.185, lng:77.400 },
  { City:"Bhopal", Landmark:"Hoshangabad Road", Category:"Commercial",  Rate2018:3700, Rate2024:6000, lat:23.185, lng:77.400 },
  { City:"Bhopal", Landmark:"Shahpura Lake", Category:"Residential", Rate2018:2800, Rate2024:4200, lat:23.220, lng:77.440 },
  { City:"Bhopal", Landmark:"Shahpura Lake", Category:"Commercial",  Rate2018:5200, Rate2024:7800, lat:23.220, lng:77.440 },
  { City:"Bhopal", Landmark:"TT Nagar", Category:"Residential", Rate2018:3500, Rate2024:5200, lat:23.245, lng:77.410 },
  { City:"Bhopal", Landmark:"TT Nagar", Category:"Commercial",  Rate2018:8000, Rate2024:12000, lat:23.245, lng:77.410 },
  { City:"Bhopal", Landmark:"BHEL Township", Category:"Residential", Rate2018:1900, Rate2024:2700, lat:23.280, lng:77.415 },
  { City:"Bhopal", Landmark:"BHEL Township", Category:"Commercial",  Rate2018:4700, Rate2024:6500, lat:23.280, lng:77.415 },
  { City:"Bhopal", Landmark:"Old City", Category:"Residential", Rate2018:1800, Rate2024:2800, lat:23.270, lng:77.405 },
  { City:"Bhopal", Landmark:"Old City", Category:"Commercial",  Rate2018:4500, Rate2024:6800, lat:23.270, lng:77.405 },
  { City:"Bhopal", Landmark:"Ashoka Garden", Category:"Residential", Rate2018:1600, Rate2024:2600, lat:23.275, lng:77.440 },
  { City:"Bhopal", Landmark:"Ashoka Garden", Category:"Commercial",  Rate2018:3800, Rate2024:5800, lat:23.275, lng:77.440 },
  { City:"Bhopal", Landmark:"Near Oriental College", Category:"Residential", Rate2018:1400, Rate2024:2400, lat:23.200, lng:77.480 },
  { City:"Bhopal", Landmark:"Near Oriental College", Category:"Commercial",  Rate2018:3300, Rate2024:5500, lat:23.200, lng:77.480 },
  { City:"Bhopal", Landmark:"Near Railway Station", Category:"Residential", Rate2018:3300, Rate2024:4800, lat:23.260, lng:77.410 },
  { City:"Bhopal", Landmark:"Near Railway Station", Category:"Commercial",  Rate2018:8500, Rate2024:12500, lat:23.260, lng:77.410 },
  { City:"Bhopal", Landmark:"Neelbad", Category:"Residential", Rate2018:1300, Rate2024:2300, lat:23.160, lng:77.450 },
  { City:"Bhopal", Landmark:"Neelbad", Category:"Commercial",  Rate2018:3000, Rate2024:5000, lat:23.160, lng:77.450 },
  { City:"Bhopal", Landmark:"Indrapuri", Category:"Residential", Rate2018:2000, Rate2024:3100, lat:23.270, lng:77.380 },
  { City:"Bhopal", Landmark:"Indrapuri", Category:"Commercial",  Rate2018:4800, Rate2024:7000, lat:23.270, lng:77.380 },
  { City:"Indore", Landmark:"Vijay Nagar", Category:"Residential", Rate2018:4500, Rate2024:6500, lat:22.753, lng:75.892 },
  { City:"Indore", Landmark:"Vijay Nagar", Category:"Commercial",  Rate2018:11000, Rate2024:16000, lat:22.753, lng:75.892 },
  { City:"Indore", Landmark:"Super Corridor", Category:"Residential", Rate2018:2000, Rate2024:4000, lat:22.780, lng:75.820 },
  { City:"Indore", Landmark:"Super Corridor", Category:"Commercial",  Rate2018:4000, Rate2024:7500, lat:22.780, lng:75.820 }
];

// Indicative bank offers (replace later with live data feed if needed)
const BANK_OFFERS = [
  { bank:"SBI",  product:"Home Loan",        customer:"All",           type:"Home Loan",
    rateMin:8.4, rateMax:9.15, proc:{ pct:0.35, min:2000, max:10000 }, maxTenure:30, link:"https://sbi.co.in/web/personal-banking/loans/home-loans", lastUpdated:"2024-10" },
  { bank:"HDFC Bank", product:"Home Loan",   customer:"All",           type:"Home Loan",
    rateMin:8.5, rateMax:9.5,  proc:{ pct:0.5,  min:3000, max:10000 }, maxTenure:30, link:"https://www.hdfc.com/home-loan", lastUpdated:"2024-10" },
  { bank:"ICICI Bank", product:"Home Loan",  customer:"All",           type:"Home Loan",
    rateMin:8.6, rateMax:9.6,  proc:{ pct:0.5,  min:3500, max:10000 }, maxTenure:30, link:"https://www.icicibank.com/personal-banking/loans/home-loan", lastUpdated:"2024-10" },
  { bank:"Axis Bank", product:"Home Loan",   customer:"All",           type:"Home Loan",
    rateMin:8.5, rateMax:9.4,  proc:{ pct:0.5,  min:3000, max:10000 }, maxTenure:30, link:"https://www.axisbank.com/retail/loans/home-loan", lastUpdated:"2024-10" },
  { bank:"PNB", product:"Home Loan",         customer:"All",           type:"Home Loan",
    rateMin:8.5, rateMax:9.25, proc:{ pct:0.35, min:2000, max:10000 }, maxTenure:30, link:"https://www.pnbindia.in/home-loan.html", lastUpdated:"2024-10" },
  { bank:"Bank of Baroda", product:"LAP",    customer:"Self Employed", type:"LAP",
    rateMin:10.0,rateMax:12.5, proc:{ pct:1.0,  min:7500, max:25000 }, maxTenure:15, link:"https://www.bankofbaroda.in/personal-banking/loans/loan-against-property", lastUpdated:"2024-10" },
  { bank:"Kotak", product:"LAP",             customer:"All",           type:"LAP",
    rateMin:10.5,rateMax:13.0, proc:{ pct:1.0,  min:10000,max:30000 }, maxTenure:15, link:"https://www.kotak.com/en/personal-banking/loans/loan-against-property.html", lastUpdated:"2024-10" },
  { bank:"Union Bank", product:"Home Loan",  customer:"All",           type:"Home Loan",
    rateMin:8.4, rateMax:9.35, proc:{ pct:0.5,  min:3000, max:10000 }, maxTenure:30, link:"https://www.unionbankofindia.co.in/english/home-loans.aspx", lastUpdated:"2024-10" }
];

// DOM References
const citySel = document.getElementById('city');
const landmarkSel = document.getElementById('landmark');
const categorySel = document.getElementById('category');
const sizeInput = document.getElementById('size');
const yearInput = document.getElementById('year');
const roadWidthInput = document.getElementById('roadWidth');
const frontageInput = document.getElementById('frontage');
const cornerPlotSel = document.getElementById('cornerPlot');
const predictionForm = document.getElementById('predictionForm');

const resultsCard = document.getElementById('resultsCard');
const errorCard = document.getElementById('errorCard');
const errorText = document.getElementById('errorText');

const priceEl = document.getElementById('priceResult');
const rateEl = document.getElementById('rateResult');
const premiumBadge = document.getElementById('premiumBadge');
const breakdownEl = document.getElementById('breakdown');
const priceGraph = document.getElementById('priceGraph');

const interestInput = document.getElementById('interest');
const tenureInput = document.getElementById('tenure');
const downPctInput = document.getElementById('downPct');
const emiSummary = document.getElementById('emiSummary');

// Bank offers DOM
const offersCard = document.getElementById('offersCard');
const offersBody = document.getElementById('offersBody');
const offerTypeSel = document.getElementById('offerType');
const offerCustomerSel = document.getElementById('offerCustomer');
const offerSortSel = document.getElementById('offerSort');
const offersNote = document.getElementById('offersNote');

// State + Map
let map, marker;
let currentState = { years: [], baseRates: [], baseFutureRate: 0, size: 0, factor: 1.0, totalPriceINR: 0 };

// Helpers
const unique = (arr) => [...new Set(arr)];
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
const formatINR = (val) => `₹${Math.round(val).toLocaleString('en-IN')}`;

function fillDropdown(sel, items, placeholder){
  sel.innerHTML = `<option value="">${placeholder}</option>`;
  items.forEach(v => sel.insertAdjacentHTML('beforeend', `<option value="${v}">${v}</option>`));
}
function getCities(){ return unique(DATA_SET.map(r=>r.City)).sort(); }
function getLandmarks(city){ return unique(DATA_SET.filter(r=>r.City===city).map(r=>r.Landmark)).sort(); }
function getCategories(city, lm){ return unique(DATA_SET.filter(r=>r.City===city && r.Landmark===lm).map(r=>r.Category)).sort(); }
function getRow(city,lm,cat){ return DATA_SET.find(r=>r.City===city && r.Landmark===lm && r.Category===cat); }
function getCoords(city, lm){ const r = DATA_SET.find(x=>x.City===city && x.Landmark===lm); return r ? [r.lat, r.lng] : null; }

// Prediction math
function predictRate(year, r2018, r2024){
  const years = 2024-2018;
  if(r2018<=0 || years<=0) return { futureRate:r2024, cagr:0 };
  const cagr = Math.pow(r2024/r2018, 1/years) - 1;
  let rate = r2024;
  for(let y=2025; y<=year; y++){
    let g = cagr;
    if(y>2040) g *= 0.95;
    else if(y>2035) g *= 0.98;
    rate *= (1+g);
  }
  return { futureRate: Math.max(rate,1000), cagr };
}
function buildSeries(year, row){
  const xs = [];
  for(let y=2018; y<=year; y++) xs.push(y);
  const ys = xs.map(y=>{
    if(y<=2024){
      const t = (y-2018)/(2024-2018);
      return row.Rate2018 + (row.Rate2024-row.Rate2018)*t;
    }
    return predictRate(y, row.Rate2018, row.Rate2024).futureRate;
  });
  return { xs, ys };
}
function computePremiumFactor(roadFt, isCorner, frontageFt){
  let p = 0;
  if(roadFt > 40) p += 0.06;
  else if(roadFt >= 31) p += 0.04;
  else if(roadFt >= 21) p += 0.02;

  if(frontageFt >= 50) p += 0.06;
  else if(frontageFt >= 40) p += 0.04;
  else if(frontageFt >= 30) p += 0.02;
  else if(frontageFt >= 20) p += 0.01;

  if(isCorner) p += 0.05;

  const factor = 1 + p;
  return { factor, premiumPct: (p*100) };
}
function plotRates(years, baseRates, factor){
  const adjusted = baseRates.map(r => r*factor);
  Plotly.newPlot('priceGraph', [
    { x: years, y: baseRates, type:'scatter', mode:'lines+markers',
      name:'Base rate', line:{color:'#4361ee', width:3}, fill:'tozeroy', fillcolor:'rgba(67,97,238,0.12)' },
    { x: years, y: adjusted, type:'scatter', mode:'lines+markers',
      name:'Adjusted (with premiums)', line:{color:'#9b59b6', width:3} }
  ], {
    title:'Rate Trend (₹/sq ft)', xaxis:{ title:'Year' }, yaxis:{ title:'Rate (₹/sq ft)' },
    template:'plotly_white', hovermode:'x unified', margin:{t:40,l:50,r:20,b:40}, legend: { orientation:'h', y:-0.2 }
  }, { responsive:true, displaylogo:false });
}

// EMI + Bank offers
function updateEMIOutputs(totalPriceINR){
  let rate = parseFloat(interestInput.value || '0');
  let years = parseInt(tenureInput.value || '0', 10);
  let downPct = parseFloat(downPctInput.value || '0');

  rate = clamp(rate, 0, 100);
  years = clamp(years, 0, 100);
  downPct = clamp(downPct, 0, 100);

  const downPayment = totalPriceINR * (downPct/100);
  const principal = Math.max(totalPriceINR - downPayment, 0);

  let emi = 0, totalPay = 0, totalInt = 0;
  if(rate > 0 && years > 0 && principal > 0){
    const r = rate/12/100;
    const n = years*12;
    const pow = Math.pow(1+r, n);
    emi = principal * r * pow / (pow - 1);
    totalPay = emi * n;
    totalInt = totalPay - principal;
  }

  emiSummary.innerHTML = `
    Loan principal: <b>${formatINR(principal)}</b> • Monthly EMI: <b>${formatINR(emi)}</b><br/>
    Total interest: <b>${formatINR(totalInt)}</b> • Total payment: <b>${formatINR(totalPay)}</b>
  `;
}

function calcEMI(principal, rateAnnualPct, years){
  if (!principal || principal <= 0 || !rateAnnualPct || !years) return 0;
  const r = rateAnnualPct/12/100;
  const n = Math.round(years*12);
  const pow = Math.pow(1+r, n);
  return principal * r * pow / (pow - 1);
}
function feeAmount(proc, principal){
  const pctAmt = (proc.pct/100) * principal;
  return Math.min(proc.max, Math.max(proc.min, pctAmt));
}
function renderBankOffers(){
  if (!currentState || !currentState.totalPriceINR || currentState.totalPriceINR <= 0){
    offersCard.style.display = 'none';
    return;
  }

  const loanType = offerTypeSel.value;
  const customer = offerCustomerSel.value;
  let tenureYears = parseFloat(tenureInput.value || '20');
  tenureYears = Math.max(1, tenureYears);

  const downPct = parseFloat(downPctInput.value || '0');
  const loanAmount = Math.max(0, currentState.totalPriceINR * (1 - downPct/100));

  if (loanAmount <= 0){
    offersNote.textContent = "No loan amount (100% down payment). Adjust down payment to see offers.";
    offersBody.innerHTML = "";
    offersCard.style.display = 'block';
    return;
  }

  let rows = BANK_OFFERS
    .filter(o => o.type === loanType && (o.customer === "All" || o.customer === customer || customer === "All"))
    .map(o => {
      const tenureUsed = Math.min(tenureYears, o.maxTenure);
      const emiMin = calcEMI(loanAmount, o.rateMin, tenureUsed);
      const fee = feeAmount(o.proc, loanAmount);
      return { ...o, tenureUsed, emiMin, fee };
    });

  const sortBy = offerSortSel.value;
  rows.sort((a,b)=>{
    if (sortBy === 'rate') return a.rateMin - b.rateMin;
    if (sortBy === 'fee')  return a.fee - b.fee;
    return a.emiMin - b.emiMin;
  });

  offersBody.innerHTML = rows.map(o => `
    <tr>
      <td><b>${o.bank}</b></td>
      <td>${o.product}</td>
      <td><span class="rate-pill">${o.rateMin.toFixed(2)}% – ${o.rateMax.toFixed(2)}%</span><br><span class="dim">Updated: ${o.lastUpdated}</span></td>
      <td><b>₹${Math.round(o.emiMin).toLocaleString('en-IN')}</b><br><span class="dim">Est. at min rate</span></td>
      <td>${o.tenureUsed} yrs <span class="dim">(max ${o.maxTenure})</span></td>
      <td>₹${Math.round(o.fee).toLocaleString('en-IN')} <span class="dim">@ ${o.proc.pct}%</span></td>
      <td><a class="apply-btn" href="${o.link}" target="_blank" rel="noopener">Apply</a></td>
    </tr>
  `).join('');

  offersNote.innerHTML = `
    Loan amount considered: <b>₹${Math.round(loanAmount).toLocaleString('en-IN')}</b> 
    • Tenure: <b>${tenureYears}</b> yrs (bank max applies) 
    • Down payment: <b>${downPct}%</b>
  `;
  offersCard.style.display = 'block';
}

// Error helpers
function showError(msg){
  errorText.textContent = msg || 'Something went wrong.';
  errorCard.style.display = 'block';
  resultsCard.style.display = 'none';
  offersCard.style.display = 'none';
}
function clearError(){ errorCard.style.display = 'none'; }

// Map
function initMap(){
  map = L.map('leafletMap').setView([23.2599,77.4126], 12);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'&copy; OpenStreetMap contributors'
  }).addTo(map);
  setTimeout(()=> map.invalidateSize(), 200);
  window.addEventListener('resize', ()=> map.invalidateSize());
}
function updateMarker(city, lm){
  if(marker){ map.removeLayer(marker); marker = null; }
  if(city && lm){
    const coords = getCoords(city, lm);
    if(coords){
      marker = L.marker(coords).addTo(map).bindPopup(`<b>${lm}, ${city}</b>`).openPopup();
      map.setView(coords, 13);
      return;
    }
  }
  if(city){
    const center = city==='Indore' ? [22.7196,75.8577] : [23.2599,77.4126];
    map.setView(center, 11);
  }
}

// UI init
function initUI(){
  fillDropdown(citySel, getCities(), 'Select City');
  initMap();
  clearError();
}

// Events
citySel.addEventListener('change', ()=>{
  const city = citySel.value;
  fillDropdown(landmarkSel, [], 'Select Landmark');
  fillDropdown(categorySel, [], 'Select Category');
  landmarkSel.disabled = !city;
  categorySel.disabled = true;
  if(city){
    fillDropdown(landmarkSel, getLandmarks(city), 'Select Landmark');
    updateMarker(city, null);
  }
  resultsCard.style.display = 'none';
  offersCard.style.display = 'none';
  clearError();
});
landmarkSel.addEventListener('change', ()=>{
  const city = citySel.value;
  const lm = landmarkSel.value;
  fillDropdown(categorySel, [], 'Select Category');
  categorySel.disabled = !lm;
  if(lm){
    fillDropdown(categorySel, getCategories(city, lm), 'Select Category');
    updateMarker(city, lm);
  }
  resultsCard.style.display = 'none';
  offersCard.style.display = 'none';
  clearError();
});

predictionForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  clearError();

  const city = citySel.value;
  const lm = landmarkSel.value;
  const cat = categorySel.value;
  const size = Number(sizeInput.value);
  const year = Number(yearInput.value);

  if(!city || !lm || !cat) return showError('Please select City, Landmark, and Category.');
  if(!Number.isFinite(size) || size <= 0) return showError('Please enter a valid Size (sq ft) greater than 0.');
  if(!Number.isFinite(year) || year < 2025 || year > 2050) return showError('Prediction Year must be between 2025 and 2050.');

  const row = getRow(city, lm, cat);
  if(!row) return showError('No data for this combination. Try another.');

  const { xs, ys } = buildSeries(year, row);
  const { futureRate, cagr } = predictRate(year, row.Rate2018, row.Rate2024);

  const roadFt = clamp(Number(roadWidthInput.value || 0), 0, 999);
  const frontageFt = clamp(Number(frontageInput.value || 0), 0, 999);
  const isCorner = (cornerPlotSel.value === 'yes');
  const { factor, premiumPct } = computePremiumFactor(roadFt, isCorner, frontageFt);

  const adjustedRate = futureRate * factor;
  const totalPriceINR = adjustedRate * size;
  const totalPriceUSD = totalPriceINR * USD_RATE;

  currentState = { years: xs, baseRates: ys, baseFutureRate: futureRate, size, factor, totalPriceINR };

  priceEl.innerHTML = `${formatINR(totalPriceINR)} <span class="muted">(≈ $${Math.round(totalPriceUSD).toLocaleString('en-IN')})</span>`;
  rateEl.textContent = `Base rate: ${formatINR(futureRate)}/sq ft • Adjusted rate: ${formatINR(adjustedRate)}/sq ft • CAGR (2018→2024): ${((Math.pow(row.Rate2024/row.Rate2018, 1/(2024-2018)) - 1)*100).toFixed(2)}%`;
  premiumBadge.textContent = `Premium factor: x${factor.toFixed(2)} (+${premiumPct.toFixed(1)}%)`;

  breakdownEl.innerHTML = `
    • Size: <b>${size.toLocaleString('en-IN')}</b> sq ft<br/>
    • Road width: <b>${roadFt} ft</b> • Frontage: <b>${frontageFt} ft</b> • Corner: <b>${isCorner ? 'Yes' : 'No'}</b><br/>
    • City: <b>${city}</b> • Landmark: <b>${lm}</b> • Category: <b>${cat}</b>
  `;

  plotRates(xs, ys, factor);
  resultsCard.style.display = 'block';
  updateEMIOutputs(totalPriceINR);
  updateMarker(city, lm);
  renderBankOffers();
});

// Live premium recalcs
function recalcPremiums(){
  if(resultsCard.style.display !== 'block') return;
  const roadFt = clamp(Number(roadWidthInput.value || 0), 0, 999);
  const frontageFt = clamp(Number(frontageInput.value || 0), 0, 999);
  const isCorner = (cornerPlotSel.value === 'yes');
  const { factor, premiumPct } = computePremiumFactor(roadFt, isCorner, frontageFt);

  currentState.factor = factor;
  const adjustedRate = currentState.baseFutureRate * factor;
  const totalPriceINR = adjustedRate * currentState.size;
  currentState.totalPriceINR = totalPriceINR;

  priceEl.innerHTML = `${formatINR(totalPriceINR)} <span class="muted">(≈ $${Math.round(totalPriceINR*USD_RATE).toLocaleString('en-IN')})</span>`;
  rateEl.textContent = `Base rate: ${formatINR(currentState.baseFutureRate)}/sq ft • Adjusted rate: ${formatINR(adjustedRate)}/sq ft`;
  premiumBadge.textContent = `Premium factor: x${factor.toFixed(2)} (+${premiumPct.toFixed(1)}%)`;

  plotRates(currentState.years, currentState.baseRates, factor);
  updateEMIOutputs(totalPriceINR);
  renderBankOffers();
}
roadWidthInput.addEventListener('input', recalcPremiums);
frontageInput.addEventListener('input', recalcPremiums);
cornerPlotSel.addEventListener('change', recalcPremiums);

// Live EMI + Offers recalcs
[interestInput, tenureInput, downPctInput].forEach(el=>{
  el.addEventListener('input', ()=>{
    if(resultsCard.style.display !== 'block') return;
    updateEMIOutputs(currentState.totalPriceINR);
    renderBankOffers();
  });
});

// Offers filters
[offerTypeSel, offerCustomerSel, offerSortSel].forEach(el => el.addEventListener('change', renderBankOffers));

// Init
document.addEventListener('DOMContentLoaded', ()=>{
  fillDropdown(citySel, getCities(), 'Select City');
  initMap();
  clearError();
});