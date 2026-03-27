// 1. Variables for Age and Major
let name = "Alice";
let age = 22;
let major = "Computer Engineering";

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Major: " + major);

// 2. Function to calculate sum
function calculateSum(a, b) {
    let sum = a + b;
    alert("The sum of " + a + " and " + b + " is: " + sum);
}

// Running the sum function as an example
calculateSum(15, 25);

// 3. If-Else: Check Even or Odd
let userInput = prompt("Enter a number to check if it is Even or Odd:");
let number = parseInt(userInput);

if (isNaN(number)) {
    console.log("That wasn't a valid number!");
} else {
    if (number % 2 === 0) {
        alert(number + " is Even.");
    } else {
        alert(number + " is Odd.");
    }
}

// 4. Loop through an array
let fruits = ["Mango", "Apple", "Banana", "Pineapple", "Orange"];

console.log("Fruit List:");
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit " + (i + 1) + ": " + fruits[i]);
}
