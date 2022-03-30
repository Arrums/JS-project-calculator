const displayOper = document.getElementById("currentOper");
const result = document.getElementById("result");

//function to add number to display
export const addNumber = (numPress) => {
	displayOper.innerText += numPress;
};

//function to limit number if it's more than 10
export const limitLength = (currentDisp) => {
	alert("Error: Maximum number is 10");
	displayOper.innerText = currentDisp.slice(0, 9);
};

//function to remove number
export const removeNumber = () => {
	displayOper.innerText = "";
	result.innerText = 0;
};

//function to add decimal to number
export const addDecimal = (decPress) => {
	if (/\.{2,}/.test(displayOper.innerText)) {
		return "Error: Number already has decimal point.";
	} else if (displayOper.innerText === "") {
		return (displayOper.innerText += `0.`);
	} else {
		return (displayOper.innerText += decPress);
	}
};

// Function for operator button
export const addOps = (opsPress) => {
	//if the operator already pressed previously, it will replace the current one
	if (/\d+[+\-÷×]/.test(displayOper.innerText)) {
		return (displayOper.innerText = displayOper.innerText.replace(
			/[+\-÷×]/,
			opsPress,
		));
	} else {
		displayOper.innerText += opsPress;
	}
};

// function to calculate
export const calculate = (initialNum, ops, currentNum) => {
	let equal;
	let a = parseFloat(initialNum);
	let b = parseFloat(currentNum);

	switch (ops) {
		case "+":
			equal = a + b;
			break;
		case "-":
			equal = a - b;
			break;
		case "*":
			equal = a * b;
			break;
		case "/":
			equal = a / b;
			break;
		default:
			equal = initial;
	}

	// rounded the numbers
	const roundedEq = rounding(equal);
	//change the type of result to string
	const strResult = roundedEq.toString();

	if (strResult === "NaN") {
		alert("Error: this expression can't be calculated.");
		removeNumber();
		//if the result is NaN, gives an alert and clear the display
	} else {
		displayOper.innerText = "";
		result.innerText = strResult;
	}
};

export const rounding = (num) => {
	if (String(num).length > 9) {
		return num.toFixed(7);
	}
	return String(num);
};
