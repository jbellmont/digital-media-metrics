// Video views

function sumVideoViews() {
      var num1 = document.getElementById('impressions').value;
      var num2 = document.getElementById('VTR').value;
      var result = parseInt(num1) * parseInt(num2);
      if (!isNaN(result)) {
         document.getElementById('videoViews').value = result/100;
      }
}