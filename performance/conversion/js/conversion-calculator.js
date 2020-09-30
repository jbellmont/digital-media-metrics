// conversions

function sumConversions() {
      var num1 = document.getElementById('impsclicks').value;
      var num2 = document.getElementById('conversionRate').value;
      var result = parseInt(num1) * (parseInt(num2)/100);
      if (!isNaN(result)) {
         document.getElementById('conversions').value = result
      }
}