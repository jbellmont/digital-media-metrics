const budget = document.querySelector('#budget');
const conversions = document.querySelector('#conversions');
const cpa = document.querySelector('#cpa');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateCPAClick = (e) => {
  e.preventDefault();
  result = budget.value / conversions.value;
  cpa.value = result;
};

calculatorButton.addEventListener('click', onCalculateCPAClick);