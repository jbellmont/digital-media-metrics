const budget = document.querySelector('#budget');
const impressions = document.querySelector('#impressions');
const cpm = document.querySelector('#cpm');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateImpressionsClick = (e) => {
  e.preventDefault();
  result = (budget.value / cpm.value) * 1000;
  impressions.value = result;
};

calculatorButton.addEventListener('click', onCalculateImpressionsClick);