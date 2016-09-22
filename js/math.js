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
      
  } else {
    console.log('Invalid operator! Must be +, -, *, or \/.')
    $('#result').append('Invalid operator! Must be +, -, *, or \/.')
  }   
}

$(document).ready(function() {
  doMath();
});