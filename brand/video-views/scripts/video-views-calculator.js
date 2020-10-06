const vtr = document.querySelector('#vtr');
const impressions = document.querySelector('#impressions');
const videoViews = document.querySelector('#video-views');
const calculatorButton = document.querySelector('#calculator-button');

const onCalculateVideoViewsClick = (e) => {
  e.preventDefault();
  result = impressions.value * (vtr.value/100);
  videoViews.value = result;
};

calculatorButton.addEventListener('click', onCalculateVideoViewsClick);