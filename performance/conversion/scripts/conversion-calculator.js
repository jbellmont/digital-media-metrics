const conversionRate = document.querySelector('#conversion-rate');
const impressionsClicks = document.querySelector('#impressions-clicks');
const conversions = document.querySelector('#conversions');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateConversionsClick = (e) => {
  e.preventDefault();
  result = impressionsClicks.value * (conversionRate.value / 100);
  conversions.value = result;
};

calculatorButton.addEventListener('click', onCalculateConversionsClick);