const impressions = document.querySelector('#impressions');
const videoViews = document.querySelector('#video-views');
const vtr = document.querySelector('#vtr');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateVTRClick = (e) => {
  e.preventDefault();
  result = (videoViews.value / impressions.value) * 100;
  vtr.value = result;
};

calculatorButton.addEventListener('click', onCalculateVTRClick);