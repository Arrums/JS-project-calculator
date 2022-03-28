//Selecting Elements

const result = document.getElementById("result");
const numBtns = Array.from(
	document.getElementsByClassName("calculator__buttons__btn--num"),
);
const currentOper = document.getElementById("currentOper");
const pctBtn = document.getElementById("btnPercent");
const plusMinBtn = document.getElementById("btnPMin");
const decimalBtn = document.querySelector("#btnDec");
const acBtn = document.querySelector("#btnAC");
const opsBtns = Array.from(document.getElementsByClassName("opsbtn"));
const eqBtn = document.querySelector("#btnEq");

//Initial value in display
let initialVal = "0";

//function to add number to display
const addNumber = (numPress) => {
	currentOper.innerText += numPress;
};

//number button event listener
numBtns.map((numBtn) =>
	numBtn.addEventListener("click", (event) => {
		if (currentOper.innerText.length > 10) {
			alert("Error: Maximum number is 10");
		} else {
			console.log(typeof event.target.innerText);
			return addNumber(event.target.innerText);
		}
	}),
);

//function to remove number
const removeNumber = () => {
	currentOper.innerText = "";
	result.innerText = initialVal;
};

//All Clear button event listener
acBtn.addEventListener("click", () => {
	removeNumber();
});

//function to add decimal to number
const addDecimal = (decPress) => {
	if (currentOper.innerText.includes(".")) {
		return alert("Error: number has a decimal point.");
	} else {
		return (currentOper.innerText += decPress);
	}
};

//Decimal button event listener
decimalBtn.addEventListener("click", () => {
	addDecimal(decimalBtn.value);
});

//Percent button event listener
pctBtn.addEventListener("click", () => {
	currentOper.innerText = currentOper.innerText / 100;
});

//Percent button event listener
plusMinBtn.addEventListener("click", () => {
	currentOper.innerText = currentOper.innerText * -1;
});

// Function for operator button
const addOps = (opsPress) => {
	//if the operator already pressed previously, it will replace the current one - doesn't work
	if (currentOper.innerText.includes("/", "*", "-", "+")) {
		return currentOper.innerText.replace(opsPress);
	} else {
		currentOper.innerText += opsPress;
	}
};

//Operator button event listener
opsBtns.map((opsBtn) =>
	opsBtn.addEventListener("click", (event) => {
		addOps(event.target.innerText);
	}),
);

//function to calculate
const calculate = (initial, ops, currentVal) => {
	// let equal;
	// const a = initial;
	// const b = parseFloat(currentVal);
	// const ops =

	if (ops === "+") {
		return (equal = a + b);
	} else if (ops === "-") {
		return (equal = a - b);
	} else if (ops === "*") {
		return (equal = a * b);
	} else if (ops === "/") {
		return (equal = a / b);
	} else {
		equal = initial;
		console.log("same result");
	}
};
// equal button event listener

// eqBtn.map((eq) =>
// 	eq.addEventListener("click", calculate)
// );
