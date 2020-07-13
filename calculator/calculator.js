// ADD
function add (a, b) {
	return a + b;
}

// SUBTRACT
function subtract (a, b) {
	return a - b;
}

// SUM
function sum (arr) {
	let result = 0;
	
	arr.forEach((e) => {
		result += e;
	});

	return result;
}

// MULTIPLY
function multiply (arr) {
	const result = arr.reduce((total, number) => {
		return total * number;
	});

	return result;
}

// POWER
function power(a, b) {
	return Math.pow(a,b);
}

// FACTORIAL
function factorial(a) {
	if (a === 0 || a === 1) {

		return 1;
	} else {
		
		for (i = a - 1; i >= 1; i--) {
			a *= i;
		}
		return a;
	} 
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}