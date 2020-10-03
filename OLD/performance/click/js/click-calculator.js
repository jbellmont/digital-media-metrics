// CTR or click through rate

function sumClicks() {
      var num1 = document.getElementById('impressions').value;
      var num2 = document.getElementById('CTR').value;
      var result = parseInt(num1) * (parseInt(num2)/100);
      if (!isNaN(result)) {
         document.getElementById('clicks').value = result
      }
}