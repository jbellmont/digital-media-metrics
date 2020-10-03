// Get element by Id = the Id of the form

// REACH

function sum() {
    var num1 = document.getElementById('impressions').value;
    var num2 = document.getElementById('frequency').value;
    var result = parseInt(num1) / parseInt(num2);
      if (!isNaN(result)) {
         document.getElementById('reach').value = result;
      }
}

