// impressions 

function sumImpressions() {
      var num1 = document.getElementById('spend').value;
      var num2 = document.getElementById('CPM').value;
      var result = parseInt(num1) / parseInt(num2);
      if (!isNaN(result)) {
         document.getElementById('impressions').value = result*1000;
      }
}