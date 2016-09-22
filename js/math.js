function doMath() {
  $('#solve').on('click', function() {
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var operator = $('#operator').val();

    validate(num1, num2, operator);
  })
}

function validate(num1, num2, operator) {
  if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Invalid numbers! Must be real numbers.');
      $('#result').append('Invalid numbers! Must be real numbers.');
    } else {
      // to be continued //
    }    
  } else {
    console.log('Invalid operator! Must be +, -, *, or \/.');
    $('#result').append('Invalid operator! Must be +, -, *, or \/.');
  }   
}

$(document).ready(function() {
  doMath();
});