// CPM 

function sumCPM() {
      var num5 = document.getElementById('cost').value;
      var num6 = document.getElementById('impressions').value;
      var result = parseInt(num5) / parseInt(num6);
      if (!isNaN(result)) {
         document.getElementById('CPM').value = result*1000;
      }
}