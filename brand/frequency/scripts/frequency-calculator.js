const uniqueUsers = document.querySelector('#unique-users');
const impressions = document.querySelector('#impressions');
const frequency = document.querySelector('#frequency');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateFrequencyClick = (e) => {
  e.preventDefault();
  result = impressions.value / uniqueUsers.value;
  frequency.value = result;
};

calculatorButton.addEventListener('click', onCalculateFrequencyClick);