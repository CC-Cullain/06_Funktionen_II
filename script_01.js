
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

// Variablen und Konstanten

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

// Dateieingabe

function input(a,b) {
	

}

// Dateikonvertierung

function convert(a,b) {

	return parseInt(a), parseInt(b);
}

// Auswahl Rechenart

function calculator(params) {
	
	switch (key) {
		case "+":
			
			return add;
		
		case "-":
			
			return subtract;	
		
		case "*":
			
			return multiply;
		
		case "/":
		case ":":	
			
			return divide;
		
		default:
			return ERROR_STR_GEN;
	}
}

//  module: addition a+b
// output(add(2,2));

function add(a,b) {
	
	return a + b;
}

//  module: subtraction a+b
// output(sub(6,3));

function subtract(a,b) {
	
	return a - b;
}

//  module: multiplication a+b
// output(mult(6,2));

function multiply(a,b) {
	
	return a * b;
}

//  module: division a+b
// output(div(6,2));
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(3,0));

function divide(a,b) {

if (b == 0) {
	return ERROR_STR_DIV
}

return a/b
}

// module: output | test:

function output(outputData) {
	console.log(outputData);
}
  