function doMath() {

  var num1 = $('#num1').val().parseInt();
  var num2 = $('#num2').val().parseInt();
  var operator = ('#operator').val();

  result(num1, num2, operator);

}

$(document).ready(function() {

});