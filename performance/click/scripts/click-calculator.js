const ctr = document.querySelector('#ctr');
const impressions = document.querySelector('#impressions');
const clicks = document.querySelector('#clicks');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateClicksClick = (e) => {
  e.preventDefault();
  result = impressions.value * (ctr.value / 100);
  clicks.value = result;
};

calculatorButton.addEventListener('click', onCalculateClicksClick);