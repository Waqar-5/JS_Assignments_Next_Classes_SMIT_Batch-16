// MATH METHODS: Chapter #26-30 

// Q#1
// var positiveNum = +prompt("Enter a number: ")

// // a) 
// document.write("Number: " + positiveNum + "<br>")

// b)
// var roundoff = Math.round(positiveNum)
// document.write("round off value: " + roundoff + "<br>")

// c) 
// var floorvalue = Math.floor(positiveNum)
// document.write("floor value: " + floorvalue + "<br>")


// // d) 
// var ceilvalue = Math.ceil(positiveNum)
// document.write("ceil value: " + ceilvalue + "<br>")


// way 2
// Take a positive integer input from user
// var num = +prompt("Enter a positive integer:");

// // Display original number
// document.write("<b>Number:</b> " + num + "<br>");

// // round() → Rounds to nearest integer (0.5+ goes up, below 0.5 goes down)
// document.write("<b>Round off value:</b> " + Math.round(num) + "<br>");

// // floor() → Always rounds down
// document.write("<b>Floor value:</b> " + Math.floor(num) + "<br>");

// // ceil() → Always rounds up
// document.write("<b>Ceil value:</b> " + Math.ceil(num) + "<br>");

// Way 3
// // Q#1
// var num = +prompt("Enter a positive number");

// document.write(`Number: ${num}<br>`);
// document.write(`Round off value: ${Math.round(num)}<br>`);
// document.write(`Floor value: ${Math.floor(num)}<br>`);
// document.write(`Ceil value: ${Math.ceil(num)}<br>`);


// way 3
// var num = +prompt("Enter a positive number");

// document.write(
//   "Number: " + num + "<br>" +
//   "Round off value: " + Math.round(num) + "<br>" +
//   "Floor value: " + Math.floor(num) + "<br>" +
//   "Ceil value: " + Math.ceil(num)
// );

// way 4
// var num = +prompt("Enter a positive number");
// var values = [
//   ["Number", num],
//   ["Round off value", Math.round(num)],
//   ["Floor value", Math.floor(num)],
//   ["Ceil value", Math.ceil(num)]
// ];

// values.forEach(v => document.write(`${v[0]}: ${v[1]}<br>`));




// Q#2
// var negativeFloatingNum = +prompt("Enter a negative floating number: ")

// // a) 
// document.write("Number: " + negativeFloatingNum + "<br>")

// b)
// var roundoff = Math.round(negativeFloatingNum)
// document.write("round off value: " + roundoff + "<br>")

// c) 
// var floorvalue = Math.floor(negativeFloatingNum)
// document.write("floor value: " + floorvalue + "<br>")


// // d) 
// var ceilvalue = Math.ceil(negativeFloatingNum)
// document.write("ceil value: " + ceilvalue + "<br>")


// way 2
// var num = +prompt("Enter a negative floating point number");

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");


// Way 2: Using Template Literals (shorter & cleaner)
// var num = +prompt("Enter a negative floating point number");

// document.write(`
// Number: ${num} <br>
// Round off value: ${Math.round(num)} <br>
// Floor value: ${Math.floor(num)} <br>
// Ceil value: ${Math.ceil(num)} <br>
// `);

// Way 3: Using Array of Pairs + Loop (scalable way)

// var num = +prompt("Enter a negative floating point number");

// var values = [
//   ["Number", num],
//   ["Round off value", Math.round(num)],
//   ["Floor value", Math.floor(num)],
//   ["Ceil value", Math.ceil(num)]
// ];

// values.forEach(v => document.write(`${v[0]}: ${v[1]}<br>`));


// Way 4: Using Object + Loop (more readable)
// var num = +prompt("Enter a negative floating point number");

// var results = {
//   "Number": num,
//   "Round off value": Math.round(num),
//   "Floor value": Math.floor(num),
//   "Ceil value": Math.ceil(num)
// };

// for (var key in results) {
//   document.write(key + ": " + results[key] + "<br>");
// }




// Q#3
// var num = -4;
// var num = +prompt("Enter a number to know its ABS value: ");

// var absoultevalue = Math.abs(num)
// document.write("The absoulte value of " + num + " is " +absoultevalue)

// Ask user for a number
// var num = +prompt("Enter a number");

// // Declare variable to store absolute value
// var absoluteValue;

// // If number is negative, multiply by -1 to make it positive
// if (num < 0) {
//   absoluteValue = -num;   // e.g., -4 → 4
// } else {
//   absoluteValue = num;    // if already positive, keep same
// }

// // Display result
// document.write("The absolute value of " + num + " is " + absoluteValue);




// Way 3: Using Ternary Operator
// Ask user for a number
// var num = +prompt("Enter a number");

// // One-liner absolute value using ternary operator
// var absoluteValue = (num < 0) ? -num : num;

// // Show result
// document.write("The absolute value of " + num + " is " + absoluteValue);



// Way 4: Using a Custom Function
// Custom function to calculate absolute value
// function myAbs(n) {
//   // If negative, multiply by -1, else return as is
//   return (n < 0) ? -n : n;
// }

// // Ask user for a number
// var num = +prompt("Enter a number");

// // Call custom function instead of Math.abs
// var absoluteValue = myAbs(num);

// // Show result
// document.write("The absolute value of " + num + " is " + absoluteValue);


// Way 5: Using Bitwise (for integers only ⚠️)
// var num = +prompt("Enter a number:");
// var absolute = (num ^ (num >> 31)) - (num >> 31);
// document.write("Absolute value: " + absolute);



// Q#4
// Way 1: Using Math.floor()
// Simulate dice roll using Math.floor
// var diceValue = Math.floor(Math.random() * 6) + 1;  
// // Math.random() → gives number between 0 and 1 (e.g., 0.345)
// // Multiply by 6 → gives number between 0 and <6
// // Math.floor → removes decimal (e.g., 3.7 → 3)
// // +1 → ensures value is between 1 and 6 (not 0 to 5)
// document.write("<b>Random Dice value:</b>  " + diceValue + "<br>");
// document.write("<b>Random Dice value:</b> " + diceValue + "<br>");


// Way 2: Using Math.ceil()
// Simulate dice roll using Math.ceil
// var diceValue = Math.ceil(Math.random() * 6);  
// // Math.random() * 6 → range 0 to <6
// // Math.ceil → rounds UP (0.01 → 1, 5.9 → 6)
// // So values will always be 1 to 6
// document.write("<b>Random Dice value:</b> " + diceValue);


// Way 3: Using Math.round() with adjustment
// Simulate dice roll using Math.round
// var diceValue = Math.round(Math.random() * 5) + 1;
// // Math.random() * 5 → range 0 to <5
// // Math.round → gives integer 0 to 5
// // +1 → shifts range to 1 to 6
// document.write("<b>Random Dice value: </b>" + diceValue);


// Way 4: Function Reusable Dice Roller
// Function to roll dice
// function rollDice(){
//     return Math.floor(Math.random() * 6) + 1;
//       // Always returns number between 1 and 6
// }

// // Call the function and show result
// document.write("<b>Random Dice value:</b> " + rollDice());


// Way 5: Using Array of Dice Faces
// Dice faces stored in array
// var diceFaces = [1, 2, 3, 4, 5, 6];  

// // Pick a random index from array
// var randomIndex = Math.floor(Math.random() * diceFaces.length);  
// // Math.floor ensures index is integer (0–5)

// // Get dice value using random index
// var diceValue = diceFaces[randomIndex];  

// document.write("<b>Random Dice value:</b> " + diceValue);


// Way 6: ES6 Arrow Function
// Arrow function for dice roll
// var rollDice = () => Math.floor(Math.random() * 6) + 1;

// // Call function multiple times
// document.write("<b>Random Dice value:</b> " + rollDice() + "<br>");
// document.write("<b>Random Dice value:</b> " + rollDice() + "<br>");




// Q#5
// Way 1: Using Math.random() with if/else
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
// var randomNum = Math.random();  

// // If the random number is less than 0.5, we say it's Heads, otherwise Tails
// var coin = randomNum < 0.5 ? "Heads" : "Tails";  

// // Display result in browser
// document.write(randomNum +" random coin value: " + "<b> " +coin+ " </b>");



// Way 2: Using Math.floor()
// Math.random() gives a number between 0 and 1
// Multiply by 2 so we get values between 0 and <2
// Math.floor() will make it either 0 or 1
// var toss = Math.floor(Math.random() * 2);  

// // If toss is 0 → Heads, if 1 → Tails
// if (toss === 0) {
//   document.write(toss + " random coin value: Heads");
// } else {
//   document.write( toss +" random coin value: Tails");
// }


// Way 3: Using Array (Short and Clean)
// Create an array with both possible outcomes
// var outcomes = ["Heads", "Tails"];  

// // Math.floor(Math.random()*2) → gives 0 or 1
// var result = outcomes[Math.floor(Math.random() * 2)];  

// // Show result
// document.write("Coin Toss Result: " + result);


// Way 4: Using Function (Reusable)
// Define a function to simulate coin toss
// function tossCoin() {
//   return Math.random() < 0.5 ? "Heads" : "Tails";  
// }

// // Call the function and display result
// document.write("Coin Toss Result: " + tossCoin());


// Q#6
// Generate random number between 1 and 100
// var randomNums = Math.floor(Math.random() * 100) + 1;

// Show result in browser
// document.write("random number between 1 and 100: " +randomNums)


// Way 2: Using Math.ceil()

// Generate random number between 1 and 100
// var randomNum = Math.ceil(Math.random() * 100);  

// // Show result in browser
// document.write("Random number (1-100): " + randomNum);



// Way 3: Using a Function (Reusable)
// Function that returns random number in given range
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Use function for 1–100
// var randomNum = getRandom(1, 100);

// // Show result in browser
// document.write("Random number (1-100): " + randomNum);



// Q#7
// var userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms): " );

// // Use parseFloat() to extract the number part (ignores text like "kgs" or "kilograms")
// var weight = parseFloat(userInput);


// // Display the cleaned weight in browser
// document.write("Your weight is: " + weight + " kilograms");


// Way 2: Using Regular Expressions (Regex for more control)
// Ask user for weight input
// var userInput = prompt("Enter your weight:");

// // Use regex to find numeric value (handles decimal numbers too)
// var weightMatch = userInput.match(/[\d\.]+/);

// // If match found, convert to float
// var weight = weightMatch ? parseFloat(weightMatch[0]) : NaN;

// // Display result
// document.write("Your weight is: " + weight + " kilograms");



// Way 3: Manually Removing Text
// Ask user for weight input
// var userInput = prompt("Enter your weight:");

// // Remove words like "kgs" and "kilograms"
// var cleanInput = userInput.replace("kgs", "").replace("kilograms", "").trim();

// // Convert to number
// var weight = parseFloat(cleanInput);

// // Display result
// document.write("Your weight is: " + weight + " kilograms");


// Way 4: Forcing User to Enter Only Number
// Keep asking until a valid number is entered
// var weight;

// do {
//   var userInput = prompt("Enter your weight (only numbers allowed, e.g., 50.2):");
//   weight = parseFloat(userInput);
// } while (isNaN(weight)); // Repeat if input is not a number

// // Display result
// document.write("Your weight is: " + weight + " kilograms");



// Q#8
// var secretNum = Math.floor(Math.random() * 10) + 1;

// // Ask the user to guess a number between 1 and 10
// var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// // Check if the guessed number matches the secret number
// if (userGuess === secretNum) {
//   // If correct → Congratulate the user
//   alert("🎉 Congratulations! You guessed the secret number: " + secretNum);
// } else {
//   // If wrong → Show the secret number
//   alert("❌ Sorry, wrong guess! The secret number was " + secretNum);
// }



// Method 2: Using while loop (keep asking until correct)
// Generate secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Variable to store user guess
// var userGuess;

// // Keep asking until correct guess
// while (userGuess !== secretNumber) {
//   userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

//   if (userGuess === secretNumber) {
//     alert("🎉 Correct! The secret number was " + secretNumber);
//   } else {
//     alert("❌ Wrong guess, try again!");
//   }
// }



// Method 3: Using document.write (show result in browser instead of alert)
// Generate secret number
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Get user input
// var userGuess = parseInt(prompt("Enter a number between 1 and 10:"));

// // Compare numbers
// if (userGuess === secretNumber) {
//   document.write("🎉 Correct! The secret number was: " + secretNumber);
// } else {
//   document.write("❌ Wrong! You guessed " + userGuess + ". Secret was " + secretNumber);
// }


// Method 4: Using Ternary Operator (short way)
// Generate secret number
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Ask user
// var userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// // One-line check using ternary operator
// (userGuess === secretNumber) 
//   ? alert("🎉 Congratulations! You guessed it right: " + secretNumber)
//   : alert("❌ Wrong guess! Secret was " + secretNumber);


