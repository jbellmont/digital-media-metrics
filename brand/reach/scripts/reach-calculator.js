const reach = document.querySelector('#reach');
const impressions = document.querySelector('#impressions');
const frequency = document.querySelector('#frequency');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateReachClick = (e) => {
  e.preventDefault();
  result = impressions.value / frequency.value;
  reach.value = result;
};

calculatorButton.addEventListener('click', onCalculateReachClick);