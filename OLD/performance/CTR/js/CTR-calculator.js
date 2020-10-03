// CTR or click through rate

function sumClickThroughRate() {
      var num5 = document.getElementById('clicks').value;
      var num6 = document.getElementById('impressions').value;
      var result = parseInt(num5) / parseInt(num6);
      if (!isNaN(result)) {
         document.getElementById('clickThroughRate').value = result*100;
      }
}