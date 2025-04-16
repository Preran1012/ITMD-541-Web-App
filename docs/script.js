const billInput = document.getElementById('billTotal');
const taxTotal = document.getElementById('totalWithTax');
const tipSlider = document.getElementById('tipSlider');
const tipPercent = document.getElementById('tipPercent');
const tipAmount = document.getElementById('tipAmount');
const totalWithTipTax = document.getElementById('totalWithTipTax');
const currencySelect = document.getElementById('currency');
const conversionRateDisplay = document.getElementById('conversionRateDisplay');
const convertedTip = document.getElementById('convertedTip');
const convertedTotal = document.getElementById('convertedTotal');
const errorMsg = document.getElementById('errorMsg');

// Mock currency rates
const currencyRates = {
  usd: 1,
  inr: 83.12,
  eur: 0.91
};

// Calculate values when inputs change
function calculate() {
  const bill = parseFloat(billInput.value);

  if (isNaN(bill) || bill < 0) {
    errorMsg.textContent = 'Please enter a valid positive bill amount.';
    clearFields();
    return;
  }

  errorMsg.textContent = '';

  const tax = bill * 0.11;
  const totalWithTaxVal = bill + tax;
  const tipPercentVal = parseInt(tipSlider.value);
  const tipVal = totalWithTaxVal * (tipPercentVal / 100);
  const totalWithTip = totalWithTaxVal + tipVal;

  // Update fields
  taxTotal.value = totalWithTaxVal.toFixed(2);
  tipPercent.textContent = `${tipPercentVal}%`;
  tipAmount.value = tipVal.toFixed(2);
  totalWithTipTax.value = totalWithTip.toFixed(2);

  updateCurrencyConversion(tipVal, totalWithTip);
}

// Clear fields on error
function clearFields() {
  taxTotal.value = '';
  tipPercent.textContent = '0%';
  tipAmount.value = '';
  totalWithTipTax.value = '';
  convertedTip.value = '';
  convertedTotal.value = '';
  conversionRateDisplay.textContent = '';
}

// Convert to selected currency
function updateCurrencyConversion(tipVal, totalWithTip) {
  const selectedCurrency = currencySelect.value;
  const rate = currencyRates[selectedCurrency];
  const symbol = getCurrencySymbol(selectedCurrency);

  conversionRateDisplay.textContent = `Conversion Rate: 1 USD = ${rate} ${symbol}`;
  convertedTip.value = `${symbol}${(tipVal * rate).toFixed(2)}`;
  convertedTotal.value = `${symbol}${(totalWithTip * rate).toFixed(2)}`;
}

function getCurrencySymbol(code) {
  switch (code) {
    case 'usd': return '$';
    case 'inr': return '₹';
    case 'eur': return '€';
    default: return '';
  }
}

// Dark mode toggle
const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Event listeners
billInput.addEventListener('input', calculate);
tipSlider.addEventListener('input', calculate);
currencySelect.addEventListener('change', calculate);

