// FUNCTIONS, SWITCH 
// STATEMENTS, WHILE… DO
// WHILE LOOPS: chapter  38-44 


// Q#1
// Way 1: Using Built-in Math.pow()
// Function Declaration - creates a named reusable function
// function power(a, b) {
//         // 'let' declares a block-scoped variable named 'result'
//     var result = Math.pow(a, b); // Math.pow() computes a^b
//     // console.log() prints the result to browser console
//     console.log("Result using Math.pow = " + result); 
//     // return sends the final computed value back to the caller
//     return result;
// }

// document.write("the power 2^3 : " + power(2, 3)); // will show: the power 2^3: 8


// Way 2: Using Exponentiation Operator **
// Function Expression - assign an anonymous function to a variable
// var power2 = function(a, b) {
//     // Compute result using exponentiation operator (a ** b)
//     var result = a ** b; // same as Math.pow(a, b)
//     document.write("Result using ** operator 5 ** 4 = " + result);
//     return result;
// };

// // Example call
// power2(5, 4); // 5^4 = 625



// Way 3: Using Loop (Manual Multiplication)
// Arrow Function style - shorter syntax
// var power3 = (a, b) => {
//     // Start with result = 1 (neutral value for multiplication)
//     var result = 1; 
//     // 'for' loop runs b times (multiplying 'a' each time)
//     for (var i = 0; i < b; i++) {  
//         result *= a; // same as result = result * a
//     }
//     document.write("Result using loop = " + result);
//     return result;
// };

// // Example call
// power3(3, 3); // 3*3*3 = 27



// Way 4: Recursive Function (Self-calling)
// Function Declaration with recursion
// function power4(a, b) {
//     // Base case: any number ^0 = 1
//     if (b === 0) { 
//         return 1;
//     }
//     // Recursive case: a^b = a * a^(b-1)
//     return a * power4(a, b - 1);
// }

// // Example call
// document.write("Result using recursion = " + power4(2, 5)); // 32


// Alternative with ES6 Exponentiation Operator (**):
// function power(a, b) {
//     return a ** b; // does the same as Math.pow(a, b)
// }

// document.write("the power 5^4: " + power(5, 4)); // output → the power 5^4: 625


// Q#2
// 1. Using Function Declaration
// function isLeapYear(year){
//     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         return true // leap year
//     } else {
//         return false; // Not a leap year
//     }
// }
// document.write(isLeapYear(2020)) // true
// document.write(isLeapYear(2023)) // false

// 2. Using Function Expression
// var isLeapYear = function(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// };

// document.write(isLeapYear(2016)); // true
// document.write(isLeapYear(2100)); // false


// 3. Using Arrow Function

// var isLeapYear = (year) =>
//     (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// document.write(isLeapYear(2000)); // true
// document.write(isLeapYear(1900)); // false


// 4. Using Ternary Operator
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
//         ? true 
//         : false;
// }

// console.log(isLeapYear(2012)); // true
// console.log(isLeapYear(2013)); // false


// 5. Using Switch Statement
// function isLeapYear(year) {
//     switch (true) {
//         case (year % 400 === 0):
//             return true;
//         case (year % 100 === 0):
//             return false;
//         case (year % 4 === 0):
//             return true;
//         default:
//             return false;
//     }
// }

// console.log(isLeapYear(2024)); // true
// console.log(isLeapYear(2100)); // false



// // 6. Using One-Liner
// var isLeapYear = year => !(year % 400) || (!(year % 4) && year % 100);

// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(2100)); // false


// 7. Using Prompt (User Input)
// function checkLeapYear() {
//     var year = parseInt(prompt("Enter a year:"));
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         alert(year + " is a Leap Year!");
//     } else {
//         alert(year + " is NOT a Leap Year!");
//     }
// }

// checkLeapYear();



// Q#3
// 1 – Using Two Functions (One for S, One for Area)
// Function Declaration - named reusable function to calculate Semi-Perimeter (S)
// function semiPerimeter(a, b, c) { 
//     // 'let' declares a block-scoped variable to store the semi-perimeter
//     var S = (a + b + c) / 2; // Formula: (a + b + c) / 2
//     return S; // return sends back computed value of S
// }

// // Function Declaration - named reusable function to calculate Area
// function triangleArea(a, b, c) {
//     // Call semiPerimeter() function with given sides
//     var S = semiPerimeter(a, b, c); 
    
//     // 'let' declares variable 'area'
//     // Math.sqrt() computes square root
//     // Heron's Formula: sqrt(S * (S-a) * (S-b) * (S-c))
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c)); 
    
//     return area; // return sends computed area
// }

// // document.write() prints the area in browser
// document.write("Area of Triangle = " + triangleArea(3, 4, 5));



// 2 – Using Function Expressions
// Function Expression - assigns an anonymous function to a variable
// var semiPerimeter = function(a, b, c) {
//     return (a + b + c) / 2; // directly return S
// };

// // Function Expression for area
// var triangleArea = function(a, b, c) {
//     var S = semiPerimeter(a, b, c); 
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c)); // return area
// };

// // Printing
// document.write("<br>Area using Function Expressions = " + triangleArea(6, 8, 10));



// 3 – Using Arrow Functions

// Arrow Function for Semi-Perimeter
// var semiPerimeter = (a, b, c) => (a + b + c) / 2;

// // Arrow Function for Area
// var triangleArea = (a, b, c) => {
//     var S = semiPerimeter(a, b, c); 
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// };

// // Output
// document.write("<br>Area using Arrow Functions = " + triangleArea(7, 8, 9));


// 4 – One Function Returns Both Values (Object Return)
// Function that returns both semi-perimeter and area
// function triangleProperties(a, b, c) {
//     var S = (a + b + c) / 2; // semi-perimeter
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c)); // area
//     return { S, area }; // return both values as object
// }

// var result = triangleProperties(10, 12, 14);
// document.write("<br>Semi-Perimeter = " + result.S + ", Area = " + result.area);


// Q#4
// Way 1: Using Arrays and Functions
// Function to calculate average marks
// function calculateAverage(marks) { // commit: define function calculateAverage with parameter marks
//     let total = 0; // commit: initialize total variable
//     for (let i = 0; i < marks.length; i++) { // commit: loop through marks array
//         total += marks[i]; // commit: add each mark to total
//     }
//     return total / marks.length; // commit: return average (total divided by number of subjects)
// }

// // Function to calculate percentage
// function calculatePercentage(marks) { // commit: define function calculatePercentage with parameter marks
//     var total = 0; // commit: initialize total variable
//     for (var i = 0; i < marks.length; i++) { // commit: loop through marks array
//         total += marks[i]; // commit: add each mark to total
//     }
//     var percentage = (total / (marks.length * 100)) * 100; // commit: percentage formula (total ÷ max total × 100)
//     return percentage; // commit: return percentage
// }

// // Main function
// function mainFunction(marks) { // commit: define mainFunction with parameter marks
//     var avg = calculateAverage(marks); // commit: call calculateAverage and store result
//     var perc = calculatePercentage(marks); // commit: call calculatePercentage and store result

//     document.write("Marks: " + marks + "<br>"); // commit: display marks
//     document.write("Average Marks: " + avg + "<br>") ; // commit: display average
//     document.write("Percentage: " + perc + "%" + "<br>"); // commit: display percentage
// }

// // Example call
// mainFunction([80, 90, 70]); // commit: calling mainFunction with example marks




// Way 2: Using reduce() for Sum
// Function to calculate average using reduce
// function calculateAverage(marks) {
//     var total = marks.reduce((sum, val) => sum + val, 0); // commit: reduce adds all values
//     return total / marks.length; // commit: average formula
// }

// // Function to calculate percentage using reduce
// function calculatePercentage(marks) {
//     var total = marks.reduce((sum, val) => sum + val, 0); // commit: sum using reduce
//     return (total / (marks.length * 100)) * 100; // commit: percentage calculation
// }

// // Main Function
// function mainFunction(marks) {
//     var avg = calculateAverage(marks); // commit: call average function
//     var perc = calculatePercentage(marks); // commit: call percentage function
//     document.write(`Marks: ${marks}` + "<br>"); // commit: template literal for marks
//     document.write(`Average: ${avg}` + "<br>"); // commit: template literal for average
//     document.write(`Percentage: ${perc}%` + "<br>"); // commit: template literal for percentage
// }

// // Example
// mainFunction([85, 75, 90]);



// Way 3: Using Arrow Functions
// Arrow function for average
// const calculateAverage = (marks) => marks.reduce((sum, val) => sum + val, 0) / marks.length;

// // Arrow function for percentage
// const calculatePercentage = (marks) => {
//     var total = marks.reduce((sum, val) => sum + val, 0); 
//     return (total / (marks.length * 100)) * 100; 
// };

// // Main Function
// const mainFunction = (marks) => {
//     var avg = calculateAverage(marks);
//     var perc = calculatePercentage(marks);
//     document.write("Marks:", marks + "<br>");
//     document.write("Average:", avg + "<br>");
//     document.write("Percentage:", perc + "%" + "<br>");
// };

// // Example
// mainFunction([92, 88, 79]);



// Q#5

// // ✅ Commit: Define the main custom function named customIndexOf
// function customIndexOf(str, char) {
//     // ✅ Commit: Initialize index counter starting from 0
//     var index = 0;

//     // ✅ Commit: Use while loop to iterate through the string until its end
//     while (index < str.length) {
//         // ✅ Commit: Use switch statement to check current character
//         switch (str[index]) {
//             // ✅ Commit: If character at current index matches target char
//             case char:
//                 // ✅ Commit: Return the index of found character
//                 return index;

//             // ✅ Commit: Default case means no match yet, continue loop
//             default:
//                 break;
//         }
//         // ✅ Commit: Increment index to move to next character in string
//         index++;
//     }

//     // ✅ Commit: If character not found, return -1 just like built-in indexOf
//     return -1;
// }

// // ✅ Commit: Define mainFunction to test our customIndexOf
// function mainFunction() {
//     // ✅ Commit: Example string to test
//     var myString = "hello world";

//     // ✅ Commit: Example character to search for
//     var myChar = "o";

//     // ✅ Commit: Call customIndexOf to find index
//     var result = customIndexOf(myString, myChar);

//     // ✅ Commit: Display result in console
//     document.write("Index of '" + myChar + "' in '" + myString + "' is: " + result);
// }

// // ✅ Commit: Execute mainFunction
// mainFunction();


// Way 1: Using for loop inside a custom function
// Commit: Defining a custom function
// function customIndexOf(str, char) {  
//     // Commit: str = input string
//     // Commit: char = character to search

//     for (var i = 0; i < str.length; i++) {  
//         // Commit: Loop runs from 0 → str.length-1
//         // Commit: i = current index
        
//         if (str[i] === char) {  
//             // Commit: if current character matches target
//             return i;  
//             // Commit: return index immediately
//         }
//     }
//     return -1;  
//     // Commit: if not found return -1
// }

// // Test
// document.write("index of e in hello: "+ (customIndexOf("hello", "e"))); // Output: 1



// Way 2: Using while loop
// function customIndexOfWhile(str, char) {  
//     var i = 0;  // Commit: start index
//     while (i < str.length) {  
//         // Commit: loop continues until end of string
//         if (str[i] === char) {  
//             // Commit: check match
//             return i;  
//         }
//         i++;  // Commit: move to next index
//     }
//     return -1;  
// }

// // Test
// document.write("index of o in hello: "+ (customIndexOfWhile("hello", "o"))); // Output: 1


// Way 3: Using do...while loop
// function customIndexOfDoWhile(str, char) {  
//     var i = 0;  
//     if (str.length === 0) return -1;  
//     // Commit: handle empty string

//     do {
//         if (str[i] === char) {  
//             return i;  
//         }
//         i++;  
//     } while (i < str.length);  

//     return -1;  
// }

// // Test
// console.log(customIndexOfDoWhile("hello", "h")); // Output: 0



// Way 4: Using switch statement
// function customIndexOfSwitch(str, char) {  
//     for (var i = 0; i < str.length; i++) {  
//         switch (str[i]) {  
//             case char:  
//                 // Commit: if str[i] matches char
//                 return i;  
//             default:  
//                 // Commit: continue loop
//                 break;  
//         }
//     }
//     return -1;  
// }

// // Test
// console.log(customIndexOfSwitch("hello", "l")); // Output: 2

// Q#6
// 1: Using for loop
// function removeVowelsForLoop(sentence) {
//     var result = ""; // commit: create empty string for storing result

//     for (var i = 0; i < sentence.length; i++) {  // commit: iterate each character
//         var char = sentence[i];                  // commit: take current character
//         if ("aeiouAEIOU".indexOf(char) === -1) { // commit: check if not vowel
//             result += char;                      // commit: add character if not vowel
//         }
//     }

//     return result; // commit: return final string without vowels
// }

// document.write(removeVowelsForLoop("Hello World"));


// 2: Using while loop
// function removeVowelsWhile(sentence) {
//     var result = "";      // commit: store result
//     var i = 0;            // commit: start index

//     while (i < sentence.length) {                // commit: loop until end of sentence
//         var char = sentence[i];                  // commit: get character
//         if ("aeiouAEIOU".indexOf(char) === -1) { // commit: check not vowel
//             result += char;                      // commit: add non-vowel
//         }
//         i++;                                     // commit: move to next index
//     }

//     return result; // commit: return new sentence
// }

// console.log(removeVowelsWhile("JavaScript Fun"));


// 3: Using do...while loop
// function removeVowelsDoWhile(sentence) {
//     var result = ""; // commit: store result
//     var i = 0;       // commit: index start

//     do {
//         var char = sentence[i];                  // commit: pick character
//         if ("aeiouAEIOU".indexOf(char) === -1) { // commit: check not vowel
//             result += char;                      // commit: keep it if consonant
//         }
//         i++;                                     // commit: increment index
//     } while (i < sentence.length);               // commit: loop until end

//     return result; // commit: return modified sentence
// }

// console.log(removeVowelsDoWhile("OpenAI Rocks"));


// 4: Using switch
// function removeVowelsSwitch(sentence) {
//     var result = ""; // commit: final result

//     for (var i = 0; i < sentence.length; i++) {
//         var char = sentence[i];
//         switch (char.toLowerCase()) { // commit: check vowels
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 break;                 // commit: skip vowel
//             default:
//                 result += char;        // commit: keep consonant
//         }
//     }

//     return result; // commit: return without vowels
// }

// document.write(removeVowelsSwitch("Education is Power"));


// 5: Using Regular Expressions
// function removeVowelsRegex(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, ""); 
//     // commit: regex finds all vowels globally & replaces with empty string
// }

// document.write(removeVowelsRegex("Artificial Intelligence"));

// // 6: Using Array.filter
// function removeVowelsFilter(sentence) {
//     return sentence
//         .split("")                              // commit: convert string to array
//         .filter(ch => !"aeiouAEIOU".includes(ch)) // commit: keep only non-vowels
//         .join("");                              // commit: rejoin array into string
// }

// document.write(removeVowelsFilter("Remove Vowels Please"));




// Q#7
// 1: Using Function + Switch + While Loop
// Function to check if a character is a vowel
// function isVowel(ch) {                          // commit: define function isVowel to check character
//     switch (ch.toLowerCase()) {                 // commit: use switch to handle lowercase vowel cases
//         case 'a':                               // commit: check if 'a'
//         case 'e':                               // commit: check if 'e'
//         case 'i':                               // commit: check if 'i'
//         case 'o':                               // commit: check if 'o'
//         case 'u':                               // commit: check if 'u'
//             return true;                        // commit: if match, return true
//         default:                                // commit: if none matches
//             return false;                       // commit: return false
//     }
// }

// // Function to count successive vowels
// function countVowelPairs(sentence) {            // commit: define function countVowelPairs
//     var count = 0;                              // commit: initialize counter to 0
//     var i = 0;                                  // commit: start index from 0
//     while (i < sentence.length - 1) {           // commit: loop until second last character
//         var first = sentence[i];                // commit: store current character
//         var second = sentence[i + 1];           // commit: store next character
//         if (isVowel(first) && isVowel(second)) {// commit: check if both are vowels
//             count++;                            // commit: increase counter
//         }
//         i++;                                    // commit: move to next character
//     }
//     return count;                               // commit: return total vowel pairs
// }

// // Test
// var line = "Pleases read this application and give me gratuity";   // commit: define input string
// document.write(countVowelPairs(line));             // commit: print result




// 2: Using Do-While Loop
// function isVowel(ch) {
//     switch (ch.toLowerCase()) {    // commit: convert to lowercase and check vowel
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             return true;           // commit: return true if vowel
//         default:
//             return false;          // commit: otherwise false
//     }
// }

// function countVowelPairsDoWhile(sentence) {     // commit: define function countVowelPairsDoWhile
//     var count = 0;                              // commit: initialize counter
//     var i = 0;                                  // commit: start from index 0
//     do {                                        // commit: enter do-while loop
//         var first = sentence[i];                // commit: current character
//         var second = sentence[i + 1];           // commit: next character
//         if (isVowel(first) && isVowel(second)) {// commit: check if both are vowels
//             count++;                            // commit: increase counter
//         }
//         i++;                                    // commit: increment index
//     } while (i < sentence.length - 1);          // commit: continue until second last character
//     return count;                               // commit: return total vowel pairs
// }

// // ✅ define your line of text
// var line = "do all possible ways amnd apply commit on each line for each word";

// // ✅ call function
// document.write("Vowel pairs: " + countVowelPairsDoWhile(line));



// 3: Using Regex (Alternative Way, but still with function)
// function countVowelPairsRegex(sentence) {       // commit: define regex-based function
//     let matches = sentence.match(/[aeiou]{2}/gi); // commit: regex to find two vowels together
//     return matches ? matches.length : 0;        // commit: return count or 0
// }

// // Example sentence
// let line = "Pleases read this application and give me gratuity"; // commit: define text line

// document.write(countVowelPairsRegex(line)); // commit: test regex solution




// Q#8
// Way 1: Normal Functions
// commit: define function to convert km → meters
// function toMeters(km) { return km * 1000; }   // commit: 1 km = 1000 meters

// // commit: define function to convert km → feet
// function toFeet(km) { return km * 3280.84; }  // commit: 1 km = 3280.84 feet

// // commit: define function to convert km → inches
// function toInches(km) { return km * 39370.1; } // commit: 1 km = 39370.1 inches

// // commit: define function to convert km → centimeters
// function toCentimeters(km) { return km * 100000; } // commit: 1 km = 100000 cm

// // commit: take input from user
// var distance = +prompt("Enter distance in km: "); 

// // commit: display converted results
// document.write("Meters: " + toMeters(distance) + "<br>");
// document.write("Feet: " + toFeet(distance) + "<br>");
// document.write("Inches: " + toInches(distance) + "<br>");
// document.write("Centimeters: " + toCentimeters(distance) + "<br>");


// Way 2: Arrow Functions


// commit: arrow function for meters
// var toMeters = (km) => km * 1000; 

// // commit: arrow function for feet
// var toFeet = (km) => km * 3280.84;

// // commit: arrow function for inches
// var toInches = (km) => km * 39370.1;

// // commit: arrow function for centimeters
// var toCentimeters = (km) => km * 100000;

// // commit: input
// var distance = +prompt("Enter distance in km: "); 

// // commit: output
// document.write(`Meters: ${toMeters(distance)}<br>`);
// document.write(`Feet: ${toFeet(distance)}<br>`);
// document.write(`Inches: ${toInches(distance)}<br>`);
// document.write(`Centimeters: ${toCentimeters(distance)}<br>`);


// Way 3: Anonymous Functions (Assigned to Variables)

// commit: anonymous function assigned to variable for meters
// var toMeters = function(km) { return km * 1000; };

// // commit: anonymous function assigned to variable for feet
// var toFeet = function(km) { return km * 3280.84; };

// // commit: anonymous function assigned to variable for inches
// var toInches = function(km) { return km * 39370.1; };

// // commit: anonymous function assigned to variable for centimeters
// var toCentimeters = function(km) { return km * 100000; };

// // commit: input
// var distance = +prompt("Enter distance in km: "); 

// // commit: output
// document.write("Meters: " + toMeters(distance) + "<br>");
// document.write("Feet: " + toFeet(distance) + "<br>");
// document.write("Inches: " + toInches(distance) + "<br>");
// document.write("Centimeters: " + toCentimeters(distance) + "<br>");



// Way 4: IIFE (Immediately Invoked Function Expressions)
// // commit: input
// var distance = +prompt("Enter distance in km: "); 

// // commit: IIFE for meters
// (function(km){ document.write("Meters: " + (km * 1000) + "<br>"); })(distance);

// // commit: IIFE for feet
// (function(km){ document.write("Feet: " + (km * 3280.84) + "<br>"); })(distance);

// // commit: IIFE for inches
// (function(km){ document.write("Inches: " + (km * 39370.1) + "<br>"); })(distance);

// // commit: IIFE for centimeters
// (function(km){ document.write("Centimeters: " + (km * 100000) + "<br>"); })(distance);


// Way 5: Object with Methods
// commit: create object with conversion methods
// var converter = {
//     toMeters: function(km) { return km * 1000; },      // commit: method
//     toFeet: function(km) { return km * 3280.84; },     // commit: method
//     toInches: function(km) { return km * 39370.1; },   // commit: method
//     toCentimeters: function(km) { return km * 100000; } // commit: method
// };

// // commit: input
// var distance = +prompt("Enter distance in km: "); 

// // commit: output
// document.write("Meters: " + converter.toMeters(distance) + "<br>");
// document.write("Feet: " + converter.toFeet(distance) + "<br>");
// document.write("Inches: " + converter.toInches(distance) + "<br>");
// document.write("Centimeters: " + converter.toCentimeters(distance) + "<br>");




// Q#9
// Function Declaration + if/else
    // commit: define flat constants for clarity
var OVERTIME_RATE = 12;     // commit: rupees per overtime hour
var OVERTIME_THRESHOLD = 40;// commit: hours after which overtime begins

// // commit: named function to compute overtime pay from total hours
// function overtimePay(hoursWorked) {
//   hoursWorked = Math.floor(hoursWorked);                  // commit: enforce whole hours
//   if (hoursWorked <= OVERTIME_THRESHOLD) {                // commit: no overtime at/below 40
//     return 0;                                             // commit: pay is zero
//   } else {                                                // commit: overtime case
//     var overtimeHours = hoursWorked - OVERTIME_THRESHOLD; // commit: compute extra hours
//     return overtimeHours * OVERTIME_RATE;                 // commit: pay = hours * rate
//   }
// }

// // commit: examples
// document.write("38h → Rs." + overtimePay(38) + "<br>"); // commit: 0
// document.write("40h → Rs." + overtimePay(40) + "<br>"); // commit: 0
// document.write("45h → Rs." + overtimePay(45) + "<br>"); // commit: 60



// 2) Compact with Math.max + Ternary (one return path)
// commit: concise function using Math.max to clamp negatives to 0
// function overtimePayTernary(hoursWorked) {
//   hoursWorked = Math.floor(hoursWorked);                            // commit: whole hours
//   var overtimeHours = Math.max(0, hoursWorked - OVERTIME_THRESHOLD); // commit: clamp
//   return overtimeHours * OVERTIME_RATE;                             // commit: compute pay
// }

// // commit: example
// document.write("50h → Rs." + overtimePayTernary(50) + "<br>"); // commit: 120


//3. switch(true) pattern (explicit branching)
// commit: switch(true) lets us use boolean cases cleanly
// function overtimePaySwitch(hoursWorked) {
//   hoursWorked = Math.floor(hoursWorked);                 // commit: whole hours
//   switch (true) {                                        // commit: evaluate conditions
//     case (hoursWorked <= OVERTIME_THRESHOLD):            // commit: no overtime case
//       return 0;                                          // commit: zero pay
//     default:                                             // commit: overtime else
//       return (hoursWorked - OVERTIME_THRESHOLD) * OVERTIME_RATE; // commit: calc
//   }
// }

// // commit: example
// document.writeln("41h → Rs." + overtimePaySwitch(41)); // commit: 12



// 4) Array of employees (looping) + for...of
// commit: helper to display multiple employees' overtime
// function overtimePayTernary(hours) {
//   // Example: 40 hours normal, rest at 1.5x rate
//   var rate = 10; // $10 per hour
//   return hours <= 40
//     ? hours * rate
//     : (40 * rate) + ((hours - 40) * rate * 1.5);
// }

// function overtimeList(hoursArray) {                              
//   var results = [];                                            
//   for (var h of hoursArray) {                                  
//     var pay = overtimePayTernary(h);                           
//     results.push({ hours: Math.floor(h), pay });                 
//   }
//   return results;                                                
// }

// // sample data
// var staff = [39, 40, 41, 47, 52];                             
// var result = overtimeList(staff);

// // Pretty print results
// document.write("<pre>" + JSON.stringify(result, null, 2) + "</pre>");


// 5) Prompt-driven (user input) + while sentinel loop
// commit: interactive collector; stop when user enters blank/cancel
// function overtimePromptSession() {
//   var totalOvertimePay = 0;                                       // commit: accumulate pay
//   while (true) {                                                  // commit: infinite loop
//     var raw = prompt("Enter hours worked (blank to finish):");  // commit: get input
//     if (raw === null || raw.trim() === "") break;                 // commit: sentinel stop
//     var hours = Math.floor(Number(raw));                        // commit: to whole number
//     if (Number.isNaN(hours) || hours < 0) {                       // commit: validate
//       document.write("Please enter a valid non-negative whole number.");   // commit: error prompt
//       continue;                                                   // commit: ask again
//     }
//     var pay = overtimePay(hours);                               // commit: compute pay
//     totalOvertimePay += pay;                                      // commit: accumulate
//     document.write(`Hours: ${hours}\nOvertime Pay: Rs.${pay}`);            // commit: feedback
//   }
//   document.write(`Session complete.\nTotal Overtime Pay: Rs.${totalOvertimePay}`); // commit: summary
// }

// // commit: run it (uncomment in a browser environment)
// overtimePromptSession();



// IIFE quick calc (Immediately Invoked Function Expression)
// commit: run a quick one-off calc for 44h
// (function(h) {
//   h = Math.floor(h);                                           // commit: whole hours
//   const pay = Math.max(0, h - OVERTIME_THRESHOLD) * OVERTIME_RATE; // commit: compute
//   document.write(`IIFE 44h → Rs.${pay}`);                         // commit: show
// })(44); // commit: invoke with 44


// 8) do...while variant (guaranteed single pass)
// commit: do...while to mimic scanning a single hours value
// function overtimePayDoWhile(hoursWorked) {
//   var pay;                                         // commit: declare result
//   var h = Math.floor(hoursWorked);                 // commit: whole hours
//   do {                                             // commit: enter loop once
//     var overtime = Math.max(0, h - OVERTIME_THRESHOLD); // commit: compute extra
//     pay = overtime * OVERTIME_RATE;                // commit: calc pay
//   } while (false);                                 // commit: run exactly once
//   return pay;                                      // commit: return result
// }

// // commit: example
// document.write("43h → Rs." + overtimePayDoWhile(43)); // commit: 36




// Q#10
// Way 1: Simple Math with Division and Modulus
// Function start
// function cashierNotes(amount) { // define function cashierNotes with parameter amount
//   // Calculate 100 notes
//   var hundred = Math.floor(amount / 100); // divide amount by 100 to find how many 100 notes
//   // Remaining amount after 100s
//   var remainder = amount % 100; // find remainder after taking 100 notes
//   // Calculate 50 notes
//   var fifty = Math.floor(remainder / 50); // divide remainder by 50 to find 50 notes
//   // Update remainder after 50s
//   remainder = remainder % 50; // remainder after taking 50 notes
//   // Calculate 10 notes
//   var ten = Math.floor(remainder / 10); // divide remainder by 10 to find 10 notes
//   // Return result as object
//   return { hundred: hundred, fifty: fifty, ten: ten }; // return notes distribution
// }

// // Example run
// console.log(cashierNotes(1260)); // amount 1260 → { hundred: 12, fifty: 1, ten: 1 }



// Way 2: Using While Loop
// function cashierNotesLoop(amount) { // define function with amount
//   var hundred = 0, fifty = 0, ten = 0; // initialize counters for each note
//   // Give 100 notes first
//   while (amount >= 100) { // loop while amount is >= 100
//     hundred++; // increment hundred counter
//     amount -= 100; // subtract 100 from amount
//   }
//   // Give 50 notes
//   while (amount >= 50) { // loop while amount is >= 50
//     fifty++; // increment fifty counter
//     amount -= 50; // subtract 50
//   }
//   // Give 10 notes
//   while (amount >= 10) { // loop while amount is >= 10
//     ten++; // increment ten counter
//     amount -= 10; // subtract 10
//   }
//   // return result
//   return { hundred: hundred, fifty: fifty, ten: ten }; // object return
// }

// // Example run
// document.write(JSON.stringify(cashierNotesLoop(1260)));
// // → { hundred: 12, fifty: 1, ten: 1 }


// Way 3: Using If-Else Steps
// function cashierNotesIf(amount) { // define function
//   var hundred = 0, fifty = 0, ten = 0; // initialize
//   // Check 100
//   if (amount >= 100) { // if amount >= 100
//     hundred = Math.floor(amount / 100); // assign hundred notes
//     amount = amount % 100; // update amount
//   }
//   // Check 50
//   if (amount >= 50) { // if amount >= 50
//     fifty = Math.floor(amount / 50); // assign fifty notes
//     amount = amount % 50; // update amount
//   }
//   // Check 10
//   if (amount >= 10) { // if amount >= 10
//     ten = Math.floor(amount / 10); // assign ten notes
//     amount = amount % 10; // update amount
//   }
//   return { hundred: hundred, fifty: fifty, ten: ten }; // return result
// }

// document.write(JSON.stringify(cashierNotesIf(1260))); // → { hundred: 12, fifty: 1, ten: 1 }



// Way 4: Using Array of Denominations
// function cashierNotesArray(amount) { // define function
//   var notes = [100, 50, 10]; // array of denominations
//   var result = {}; // object to hold result
//   for (var note of notes) { // loop through each note
//     result[note] = Math.floor(amount / note); // divide to find count of notes
//     amount = amount % note; // update amount
//   }
//   return result; // return notes distribution
// }
// document.write(JSON.stringify(cashierNotesArray(1260))); // → {"10":1,"50":1,"100":12}



// // Way 5: One-Liner Functional
// var cashierNotesOneLine = (amount) => [100,50,10].map(n=>{
//     let notes = Math.floor(amount / n);
//     amount %= n;
//     return [n, notes];
//   });
// ;

// document.write(JSON.stringify(cashierNotesOneLine(1260))); 
// // [[100,12],[50,1],[10,1]]