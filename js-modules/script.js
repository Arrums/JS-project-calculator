import * as myFunctions from "./functions.js";

//Selecting Elements

const result = document.getElementById("result");
const numBtns = Array.from(
	document.getElementsByClassName("calculator__buttons__btn--num"),
);
const displayOper = document.getElementById("currentOper");
const pctBtn = document.getElementById("btnPercent");
const plusMinBtn = document.getElementById("btnPMin");
const decimalBtn = document.querySelector("#btnDec");
const acBtn = document.querySelector("#btnAC");
const opsBtns = Array.from(document.getElementsByClassName("opsbtn"));
const eqBtn = document.querySelector("#btnEq");

//Initial value in display
let initialVal = 0;
let currentOps;
let currentVal;

//number button event listener
numBtns.map((numBtn) =>
	numBtn.addEventListener("click", (event) => {
		if (displayOper.innerText.length > 9) {
			myFunctions.limitLength(displayOper.innerText);
		} else {
			return myFunctions.addNumber(event.target.innerText);
		}
	}),
);

//All Clear button event listener
acBtn.addEventListener("click", () => {
	myFunctions.removeNumber();
});

//Decimal button event listener
decimalBtn.addEventListener("click", () => {
	myFunctions.addDecimal(decimalBtn.value);
});

//Percent button event listener
pctBtn.addEventListener("click", () => {
	displayOper.innerText = displayOper.innerText / 100;
});

//Plus minus button event listener
plusMinBtn.addEventListener("click", () => {
	displayOper.innerText = displayOper.innerText * -1;
});

//Operator button event listener
opsBtns.map((opsBtn) =>
	opsBtn.addEventListener("click", (event) => {
		//storing the numbers behind the operator to initialVal
		initialVal = displayOper.innerText;
		//adding the operator to the display
		myFunctions.addOps(event.target.innerText);
		//storing the operator to the currentOps
		currentOps = opsBtn.value;
	}),
);

// equal button event listener
eqBtn.addEventListener("click", () => {
	//finding index of the first number after operator using regex
	const indexAt = displayOper.innerText.match(/[+\-÷×]/).index + 1;
	//assigning second number to a variable
	currentVal = displayOper.innerText.slice(indexAt);
	//calculate
	myFunctions.calculate(initialVal, currentOps, currentVal);
});
