// Code goes here
console.log("Hello World!");

// Storing Information in Variables
const name = "David";
let age = 28;

const productName = "ice cream",
  productType = "food";

console.log("productName", productName);
console.log("productType", productType);

const first = 12,
  second = 3;

const answer = first + second;

console.log("answer", answer);

// This is a comment

/*
    hey

    Just for demo purposes
*/

// Arrays

const cities = ["NY", "Los angeles", "Chicago"];

console.log("cities", cities);

// if() Statement

const state = "FL";
let taxPercent = 0;

if (state === "FL") {
  taxPercent = 7;
} else if (state === "NY") {
  taxPercent = 8;
}

console.log("taxPercent", taxPercent);

// switch() Statement

const stateExample = "TX";

switch (stateExample) {
  case "NY":
    console.log("stateExample", stateExample);
    break;

  case "TX":
    console.log("stateExample", stateExample);
    break;

  default:
    break;
}

// for() Loop

const testArray = [0, 1, 2, 3, 4];

for (let i = 0; i < testArray.length; i++) {
  const element = testArray[i];

  console.log("Element", element);
}

// Functions

function showMessage() {
  console.log("Hey show message");
}

showMessage();

function showMessageWithParams(message) {
  console.log("message", message);
}

showMessageWithParams("hey show message im passing params");

// Function return value

function triplePlus(value) {
  const newValue = value + value + value;

  return newValue;
}

const result = triplePlus(4);

console.log("triplePlus", result);

// Objects

const person = {
  name: "John",
  age: 32,
  partime: false
};

console.log("person.name", person.name);
console.log("person.age", person.age);
console.log("person.partime", person.partime);

// DOM

const paragraph = document.getElementById("paragraph");

const okButton = document.getElementById("ok-button");

okButton.addEventListener("click", function() {
  paragraph.innerText = "change text";
});

const title = document.getElementById("title");

title.style.display = "none";

const showTitleButton = document.getElementById("show-title-button");

showTitleButton.addEventListener("click", function() {
  title.style.display = "block";
});
