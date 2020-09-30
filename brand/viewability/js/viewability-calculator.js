// viewability 
// ads served in view / total ads served * 100

function sumViewability() {
      var num1 = document.getElementById('inViewImpressions').value;
      var num2 = document.getElementById('impressions').value;
      var result = parseInt(num1) / parseInt(num2);
      if (!isNaN(result)) {
         document.getElementById('viewability').value = result*100;
      }
}