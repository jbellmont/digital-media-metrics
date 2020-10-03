// VTR 

function sumVTR() {
      var num5 = document.getElementById('completedViews').value;
      var num6 = document.getElementById('views').value;
      var result = parseInt(num5) / parseInt(num6);
      if (!isNaN(result)) {
         document.getElementById('VTR').value = result*100;
      }
}