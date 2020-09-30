function sumCPC() {
    var num1 = document.getElementById('cost').value;
    var num2 = document.getElementById('clicks').value;
    var result = parseInt(num1) / parseInt(num2);
      if (!isNaN(result)) {
         document.getElementById('CPC').value = result;
      }
}