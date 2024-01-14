// q.1
let firstNumber = 10;
let secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second")
} else {
    console.log("The first number is greater than the second")
};

// q.2
let age = 11;
let minimumAge = "13";
minimumAgeParsed = parseInt(minimumAge);

if (age >= minimumAgeParsed) {
    console.log("The minimum age is reached")
} else {
    console.log("The minumum age is NOT reached")
};

// q.3
let income = "11.5"
let maxIncome = "13.75"

let incomeParsed = parseFloat(income);
let maxIncomeParsed = parseFloat(maxIncome);

if (incomeParsed >= maxIncomeParsed) {
    console.log("Passed")
} else {
    console.log("Fail")
};


// q.4 
let color = "blue";

if (color == "orange") {
    console.log("This color is a bit rubbish");
} else {
    console.log("This color is nice")
};


// q.5 
let invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not Payed")
} else {
    console.log("Payed")
};


// q.6 
let selectedNumber = 11;
let winningNumber = "15";
if (selectedNumber === parseInt(winningNumber)) {
    console.log("you Win")
} else {
    console.log("You Lose again")
};


// q.7
let daysOfWeek = 2;
let day;

switch (daysOfWeek) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
    default:
        day = "unknown"
}

console.log(day);