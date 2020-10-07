const budget = document.querySelector('#budget');
const clicks = document.querySelector('#clicks');
const cpc = document.querySelector('#cpc');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateCPCClick = (e) => {
  e.preventDefault();
  result = budget.value / clicks.value;
  cpc.value = result;
};

calculatorButton.addEventListener('click', onCalculateCPCClick);