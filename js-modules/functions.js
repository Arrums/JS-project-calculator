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
	if (displayOper.innerText.includes(".")) {
		return alert("Error: number has a decimal point.");
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
	//change the type of result to string
	const strResult = equal.toString();
	//adding the value to the upper display and if the length is more than 10, it will be reduce
	if (strResult.length > 9) {
		limitLength(strResult);
	} else if (strResult === "NaN") {
		alert("Error: this expression can't be calculated");
		removeNumber();
		//if the result is NaN, gives an alert and clear the display
	} else {
		result.innerText = strResult;
	}
};
