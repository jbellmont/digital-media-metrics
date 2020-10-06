  const budget = document.querySelector('#budget');
  const impressions = document.querySelector('#impressions');
  const cpm = document.querySelector('#cpm');
  const calculatorButton = document.querySelector('#calculator-button');

  const onCalculateCPMClick = (e) => {
    e.preventDefault();
    result = (budget.value / impressions.value) * 1000;
    cpm.value = result;
  };

calculatorButton.addEventListener('click', onCalculateCPMClick);