// https://www.omnicalculator.com/finance/sortino-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const sortinoratioRadio = document.getElementById('sortinoratioRadio');
const averagereturnonassetRadio = document.getElementById('averagereturnonassetRadio');
const standarddeviationofthedownsideRadio = document.getElementById('standarddeviationofthedownsideRadio');
const riskfreerateRadio = document.getElementById('riskfreerateRadio');

let sortinoratio;
let averagereturnonasset = v1;
let standarddeviationofthedownside = v2;
let riskfreerate = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

sortinoratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Average return on asset';
  variable2.textContent = 'Standard deviation of the downside';
  variable3.textContent = 'Risk free rate';
  averagereturnonasset = v1;
  standarddeviationofthedownside = v2;
  riskfreerate = v3;
  result.textContent = '';
});

averagereturnonassetRadio.addEventListener('click', function() {
  variable1.textContent = 'Sortino ratio';
  variable2.textContent = 'Standard deviation of the downside';
  variable3.textContent = 'Risk free rate';
  sortinoratio = v1;
  standarddeviationofthedownside = v2;
  riskfreerate = v3;
  result.textContent = '';
});

standarddeviationofthedownsideRadio.addEventListener('click', function() {
  variable1.textContent = 'Sortino ratio';
  variable2.textContent = 'Average return on asset';
  variable3.textContent = 'Risk free rate';
  sortinoratio = v1;
  averagereturnonasset = v2;
  riskfreerate = v3;
  result.textContent = '';
});

riskfreerateRadio.addEventListener('click', function() {
  variable1.textContent = 'Sortino ratio';
  variable2.textContent = 'Average return on asset';
  variable3.textContent = 'Standard deviation of the downside';
  sortinoratio = v1;
  averagereturnonasset = v2;
  standarddeviationofthedownside = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(sortinoratioRadio.checked)
    result.textContent = `Sortino ratio = ${computesortinoratio().toFixed(2)}`;

  else if(averagereturnonassetRadio.checked)
    result.textContent = `Average return on asset = ${computeaveragereturnonasset().toFixed(2)}`;

  else if(standarddeviationofthedownsideRadio.checked)
    result.textContent = `Standard deviation of the downside = ${computestandarddeviationofthedownside().toFixed(2)}`;

  else if(riskfreerateRadio.checked)
    result.textContent = `Risk free rate = ${computeriskfreerate().toFixed(2)}`;
})

// calculation

function computesortinoratio() {
  return ((Number(averagereturnonasset.value) / 100) - (Number(riskfreerate.value) / 100)) / Number(standarddeviationofthedownside.value);
}

function computeaveragereturnonasset() {
  return ((Number(sortinoratio.value) * Number(standarddeviationofthedownside.value)) + (Number(riskfreerate.value) / 100)) * 100;
}

function computestandarddeviationofthedownside() {
  return ((Number(averagereturnonasset.value) / 100) - (Number(riskfreerate.value) / 100)) / Number(sortinoratio.value);
}

function computeriskfreerate() {
  return ((Number(averagereturnonasset.value) / 100) - (Number(sortinoratio.value) * Number(standarddeviationofthedownside.value))) * 100;
}