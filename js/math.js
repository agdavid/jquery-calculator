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
      $('#result').html('Invalid numbers! Must be real numbers.');
    } else {
      solve(num1, num2, operator);
    }    
  } else {
    console.log('Invalid operator! Must be +, -, *, or \/.');
    $('#result').html('Invalid operator! Must be +, -, *, or \/.');
  }   
}

function solve(num1, num2, operator) {
  switch(operator) {
    case '+':
      $('#result').html((num1 + num2).toString());
      break;
    case '-':
      $('#result').html((num1 - num2).toString());
      break;
    case '*':
      $('#result').html((num1 * num2).toString());
      break;
    case '/':
      $('#result').html((num1 / num2).toString());
      break;
  }
}

$(document).ready(function() {
  doMath();
});