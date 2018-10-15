var number1 = parseInt(prompt("Enter number:"));
var number2 = parseInt(prompt("Enter another number:"));

//Add
var add = function(number1, number2) {
return number1 + number2;
};

//Division
var resultDivide = function(number1, number2) {
return number1 / number2;
};

//Subtract
var resultSubtract= function(number1, number2) {
return number1 - number2;
};

//Multiply
var resultMultiply= function(number1, number2) {
return number1 * number2;
};

//alert(add(number1, number2));
//alert(resultDivide(number1, number2));
//alert(resultSubtract(number1, number2));
alert(resultMultiply(number1, number2));
