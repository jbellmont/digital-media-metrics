const impressionsInView = document.querySelector('#impressions-in-view');
const totalImpressionsServed = document.querySelector('#total-impressions-served');
const viewability = document.querySelector('#viewability');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateViewabilityClick = (e) => {
  e.preventDefault();
  result = (impressionsInView.value / totalImpressionsServed.value) * 100;
  viewability.value = result;
};

calculatorButton.addEventListener('click', onCalculateViewabilityClick);