// All metrics are calculated from this script. 
// Get element by Id = the Id of the form

// FREQUENCY

function sum() {
    var num1 = document.getElementById('impressions').value;
    var num2 = document.getElementById('uniqueUsers').value;
    var result = parseInt(num1) / parseInt(num2);
      if (!isNaN(result)) {
         document.getElementById('frequency').value = result;
      }
}


// VTR or view through rate

function sumVTR() {
      var num3 = document.getElementById('videoViews').value;
      var num4 = document.getElementById('impressions').value;
      var result = parseInt(num3) / parseInt(num4);
      if (!isNaN(result)) {
         document.getElementById('VTR').value = result*100;
      }
}

// CTR or click through rate

function sumClickThroughRate() {
      var num5 = document.getElementById('clicks').value;
      var num6 = document.getElementById('impressions').value;
      var result = parseInt(num5) / parseInt(num6);
      if (!isNaN(result)) {
         document.getElementById('clickThroughRate').value = result*100;
      }
}