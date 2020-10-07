const impressions = document.querySelector('#impressions');
const clicks = document.querySelector('#clicks');
const ctr = document.querySelector('#ctr');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateCTRClick = (e) => {
  e.preventDefault();
  result = (clicks.value / impressions.value) * 100;
  ctr.value = result;
};

calculatorButton.addEventListener('click', onCalculateCTRClick);