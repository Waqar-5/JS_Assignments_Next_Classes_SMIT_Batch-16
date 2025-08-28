// FUNCTION Chapter# 35-38 


// Q#1
// var currenteDate = new Date()
// document.write(currenteDate)


// Q#2

// 1. Using String Concatenation
// Commit: Use string concatenation to greet user
// function greetUserConcat(firstName, lastName){
//     // var fullName = firstName + " " +  lastName;

//     //2. Using Template Literals
//     //   var fullName = `${firstName} ${lastName}`;


//     // Commit: Use array join to combine first and last name
//     var fullName = [firstName, lastName].join(" ");
//     document.write("Hello, " + fullName + "! Welcome!");
// }

// // Example usage
// greetUserConcat("Waqar", "Ali");


// real
// 2.Using Prompt to Take User Input

// Commit: Take user input from browser and greet
// function greetUserPrompt() {
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");
//     document.write(`Hello, ${firstName} ${lastName}! Welcome!`);
// }

// // Example usage (run in browser)
// greetUserPrompt();


// Single Function with All Methods
// Commit: Combined greetings using all methods
// function greetUserAll(firstName, lastName) {
//     // Concatenation
//     // document.write("Concat: Hello, " + firstName + " " + lastName + "!");

//     // Template literal
//     // document.write(`Template: Hello, ${firstName} ${lastName}!`);

//     // Join
//     document.write("Join: Hello, " + [firstName, lastName].join(" ") + "!");
// }

// // Example usage
// greetUserAll("Waqar", "Ali");




// Q#3
// Commit: Function to add two user-input numbers
// function addTwoNumbers() {
//     // Take input from the user
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));

//     // Calculate sum
//     var sum = num1 + num2;

//     // Display result
//     document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);

//     // Return sum (optional)
//     return sum;
// }

// // Example usage
// addTwoNumbers();



//2. Using Function Parameters (Without Prompt)
// Commit: Function to add two numbers passed as arguments

// function addNumbers(num1, num2){
//     var sum = num1 + num2;
//     return sum
// }

// // Example usage
// var result = addNumbers(5, 10);
// document.write("The sum is: " + result);


//3. Using Arrow Function
// Commit: Arrow function to add two numbers
// const addNumbersArrow = (num1, num2) => num1 + num2;

// // Example usage
// document.write("Sum using arrow function: " + addNumbersArrow(7, 8));



// Q#4
// Commit: Calculator using if-else statements
// function calculator(num1, num2, operator) {
//     var result;
//       if(operator === "+") {
//         result = num1 + num2;
//     } else if(operator === "-") {
//         result = num1 - num2;
//     } else if(operator === "*") {
//         result = num1 * num2;
//     } else if(operator === "/") {
//         result = num1 / num2;
//     } else if(operator === "%") {
//         result = num1 % num2;
//     } else {
//         result = "Invalid operator!";
//     }

//     document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
//     return result;
    
// }



// // Example usage
// calculator(10, 5, "+");
// // calculator(10, 5, "-");




//2. Using Switch Statement
// Commit: Calculator using switch statement
// function calculatorSwitch(num1, num2, operator) {
//     var result;

//     switch(operator) {
//         case "+": result = num1 + num2; break;
//         case "-": result = num1 - num2; break;
//         case "*": result = num1 * num2; break;
//         case "/": result = num1 / num2; break;
//         case "%": result = num1 % num2; break;
//         default: result = "Invalid operator!";
//     }

//     document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
//     return result;
// }

// Example usage
// calculatorSwitch(20, 4, "/");

// //3. Using Object as Operator Map
// // Commit: Calculator using object mapping
// function calculatorMap(num1, num2, operator) {
//    var  operations = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//         "*": (a, b) => a * b,
//         "/": (a, b) => a / b,
//         "%": (a, b) => a % b
//     };

//     var result = operations[operator] ? operations[operator](num1, num2) : "Invalid operator!";
//     document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
//     return result;
// }

// // Example usage
// calculatorMap(8, 3, "*");


//4. Using Prompt for User Input

// Commit: Interactive calculator using prompt
// function calculatorPrompt() {
//     var num1 = parseFloat(prompt("Enter first number:"));
//     var num2 = parseFloat(prompt("Enter second number:"));
//     var operator = prompt("Enter operator (+, -, *, /, %):");

//     var result;

//     switch(operator) {
//         case "+": result = num1 + num2; break;
//         case "-": result = num1 - num2; break;
//         case "*": result = num1 * num2; break;
//         case "/": result = num1 / num2; break;
//         case "%": result = num1 % num2; break;
//         default: result = "Invalid operator!";
//     }

//     document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
//     return result;
// }

// // Example usage (in browser)
// calculatorPrompt();


// 5. Using Arrow Function (Concise Version)

// Commit: Arrow function calculator
// const calculatorArrow = (num1, num2, operator) => {
//     var ops = {
//         "+": (a,b) => a+b,
//         "-": (a,b) => a-b,
//         "*": (a,b) => a*b,
//         "/": (a,b) => a/b,
//         "%": (a,b) => a%b
//     };
// var result = ops[operator] ? ops[operator](num1,num2) : "Invalid operator!";
//     document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
//     return result;
// }

// // Example usage
// calculatorArrow(15, 3, "%");




// Q#5
// Q#5: Function to calculate a^b
// function squares(a, b){
//     var square = a ** b; // exponentiation
//     return square;
// }

// var num1 = 4;
// var num2 = 5;

// // Display the result correctly
// document.write("Square of " + num1 + " to the power of " + num2 + " is: " + squares(num1, num2));


// 2.Using Standard Function and * Operator
// Commit: Standard function using multiplication
// function squareMultiply(num) {
//     return num * num;
// }

// // Example usage
// document.write("Square using multiplication: " + squareMultiply(5) + "<br>");



// 3 Using Exponentiation Operator **
// Commit: Standard function using exponentiation operator
// function squareExponent(num) {
//     return num ** 2;
// }

// // Example usage
// document.write("Square using ** operator: " + squareExponent(6) + "<br>");



//4. Using Math.pow() Method
// Commit: Standard function using Math.pow()
// function squareMathPow(num) {
//     return Math.pow(num, 2);
// }

// // Example usage
// document.write("Square using Math.pow(): " + squareMathPow(7) + "<br>");



//5. Using Arrow Function
// Commit: Arrow function for squaring
// const squareArrow = num => num * num;

// // Example usage
// document.write("Square using arrow function: " + squareArrow(8) + "<br>");


//6. Using Inline Anonymous Function
// Commit: Anonymous function assigned to a variable
// var squareAnonymous = function(num) {
//     return num ** 2;
// }

// // Example usage
// document.write("Square using anonymous function: " + squareAnonymous(9) + "<br>");


//7. Using Prompt for User Input
// Commit: Interactive squaring function with prompt
// function squarePrompt() {
//     var num = parseFloat(prompt("Enter a number to square:"));
//     var result = num * num;
//     document.write("Square of " + num + " is: " + result);
// }

// // Example usage (run in browser)
// squarePrompt();


// Q#6

// 1. Using Iterative for Loop
// function factorial(n){
//     var fact = 1;
//     for (var i = 1; i < n; i++){
//         fact *= i;// multiply fact by current i
//     }
//     return fact

// }
// // Example usage
// document.write("Factorial of 5 (iterative): " + factorial(5) + "<br>");


//2. Using Recursive Function

// Commit: Factorial using recursion
// Commit: Factorial using recursion
// function factorialRecursive(n) {
//     if (n === 0 || n === 1) return 1; // base case
//     return n * factorialRecursive(n - 1); // recursive call
// }

// // Example usage
// document.write("Factorial of 6 (recursive): " + factorialRecursive(6) + "<br>");


//3. Using while Loop
// Commit: Factorial using while loop
// function factorialWhile(n) {
//     var fact = 1;
//     var i = 1;
//     while (i <= n) {
//         fact *= i;
//         i++;
//     }
//     return fact;
// }

// // Example usage
// document.write("Factorial of 7 (while loop): " + factorialWhile(7) + "<br>");


//4. Using Arrow Function (Recursive)
// Commit: Factorial using recursive arrow function
// const factorialArrow = n => n <= 1 ? 1 : n * factorialArrow(n - 1);

// // Example usage
// document.write("Factorial of 8 (arrow function): " + factorialArrow(8) + "<br>");



//5. Using Prompt for User Input
// Commit: Interactive factorial using prompt
// function factorialPrompt() {
//     var n = parseInt(prompt("Enter a number to compute factorial:"));
//     var fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     document.write("Factorial of " + n + " is: " + fact);
// }

// // Example usage (run in browser)
// factorialPrompt();


// Q#7
//1. Using for Loop
// Commit: Function to display counting using for loop
// function countingFor(start, end) {
//     // Commit: Loop from start to end
//     for (let i = start; i <= end; i++) {
//         // Commit: Display current number in browser
//         document.write(i + "<br>");
//     }
// }

// // Example usage
// countingFor(1, 10);


//2. Using while Loop
// Commit: Function to display counting using while loop
// function countingWhile(start, end) {
//     // Commit: Initialize counter variable
//     var i = start;
//     // Commit: Loop while i is less than or equal to end
//     while (i <= end) {
//         // Commit: Display current number in browser
//         document.write(i + "<br>");
//         // Commit: Increment counter
//         i++;
//     }
// }

// // Example usage
// countingWhile(5, 15);

//3. Using do-while Loop
// Commit: Function to display counting using do-while loop
// function countingDoWhile(start, end) {
//     // Commit: Initialize counter variable
//     var i = start;
//     // Commit: Loop at least once and then check condition
//     do {
//         // Commit: Display current number in browser
//         document.write(i + "<br>");
//         // Commit: Increment counter
//         i++;
//     } while (i <= end);
// }

// // Example usage
// countingDoWhile(3, 8);



//4. Using Arrow Function with for Loop
// Commit: Arrow function to display counting
// const countingArrow = (start, end) => {
//     // Commit: Loop from start to end
//     for (var i = start; i <= end; i++) {
//         // Commit: Display current number in browser
//         document.write(i + "<br>");
//     }
// }

// // Example usage
// countingArrow(1, 5);


//5. Using Prompt for Interactive Counting
// Commit: Interactive counting function using prompt
// function countingPrompt() {
//     // Commit: Take start number from user
//     var start = parseInt(prompt("Enter start number:"));
//     // Commit: Take end number from user
//     var end = parseInt(prompt("Enter end number:"));
//     // Commit: Loop from start to end
//     for (var i = start; i <= end; i++) {
//         // Commit: Display current number in browser
//         document.write(i + "<br>");
//     }
// }

// // Example usage (run in browser)
// countingPrompt();




// Q#8

//1. Using Standard Nested Function
// Commit: Outer function to calculate hypotenuse
// function calculateHypotenuse(base, perpendicular) {
//     // Commit: Inner function to calculate square of a number
//     function calculateSquare(num) {
//         // Commit: Multiply number by itself
//         return num * num;
//     }

//     // Commit: Calculate square of base
//     var baseSquared = calculateSquare(base);
//     // Commit: Calculate square of perpendicular
//     var perpendicularSquared = calculateSquare(perpendicular);
//     // Commit: Sum of squares
//     var sumOfSquares = baseSquared + perpendicularSquared;
//     // Commit: Calculate hypotenuse using Math.sqrt
//     var hypotenuse = Math.sqrt(sumOfSquares);
//     // Commit: Display hypotenuse in browser
//     document.write("Hypotenuse: " + hypotenuse);
//     // Commit: Return hypotenuse
//     return hypotenuse;
// }

// // Example usage
// calculateHypotenuse(3, 4); // Should output 5



//2. Using Arrow Functions (Nested)
// Commit: Outer arrow function to calculate hypotenuse
// const calculateHypotenuseArrow = (base, perpendicular) => {
//     // Commit: Inner arrow function to calculate square
//     const calculateSquare = num => num ** 2;

//     // Commit: Sum of squares
//     let sumOfSquares = calculateSquare(base) + calculateSquare(perpendicular);
//     // Commit: Calculate hypotenuse
//     let hypotenuse = Math.sqrt(sumOfSquares);
//     // Commit: Display result
//     document.write("Hypotenuse (arrow): " + hypotenuse);
//     // Commit: Return hypotenuse
//     return hypotenuse;
// }

// // Example usage
// calculateHypotenuseArrow(5, 12); // Should output 13



//3. Interactive Version with prompt()
// Commit: Outer function to calculate hypotenuse from user input
// function calculateHypotenusePrompt() {
//     // Commit: Take base from user
//     let base = parseFloat(prompt("Enter base:"));
//     // Commit: Take perpendicular from user
//     let perpendicular = parseFloat(prompt("Enter perpendicular:"));

//     // Commit: Inner function to calculate square
//     function calculateSquare(num) {
//         return num * num; // Multiply number by itself
//     }

//     // Commit: Calculate sum of squares
//     let sumOfSquares = calculateSquare(base) + calculateSquare(perpendicular);
//     // Commit: Calculate hypotenuse
//     let hypotenuse = Math.sqrt(sumOfSquares);
//     // Commit: Display hypotenuse
//     document.write("Hypotenuse: " + hypotenuse);
//     // Commit: Return hypotenuse
//     return hypotenuse;
// }

// // Example usage (run in browser)
// calculateHypotenusePrompt();


// 4.using Nested Functions Inside Arrow Function with Prompt
// Commit: Arrow function with inner function and prompt
// const calculateHypotenuseArrowPrompt = () => {
//     // Commit: Take inputs from user
//     let base = parseFloat(prompt("Enter base:"));
//     let perpendicular = parseFloat(prompt("Enter perpendicular:"));

//     // Commit: Inner function to calculate square
//     const calculateSquare = num => num ** 2;

//     // Commit: Calculate hypotenuse
//     let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     // Commit: Display result
//     document.write("Hypotenuse (arrow + prompt): " + hypotenuse);
//     // Commit: Return hypotenuse
//     return hypotenuse;
// }

// // Example usage
// calculateHypotenuseArrowPrompt();


// Q#10
// function areaOfRectangle(width, height){
//     return width * height
// }
// var height = 9;
// alert(areaOfRectangle(2, height))

//2. Standard Function – Arguments as Direct Values
// Commit: Function to calculate area of rectangle
// function areaOfRectangle(width, height) {
    // Commit: Multiply width and height
    // return width * height;
// }

// Commit: Call function with direct numeric values
// document.write("Area (values): " + areaOfRectangle(5, 10) + "<br>");

// or 
//3. Standard Function – Arguments as Variables
// Commit: Declare width and height variables
// var width = 7;
// var height = 9;

// // Commit: Call function with variables
// document.write("Area (variables): " + areaOfRectangle(width, height) + "<br>");


//4. Mixing Value and Variable
// Commit: Variable for height
// var heightVar = 8;

// // Commit: Call function with width as value and height as variable
// document.write("Area (value + variable): " + areaOfRectangle(4, heightVar) + "<br>");

//5. Using Prompt for Interactive Input
// Commit: Take width and height input from user
// var widthInput = parseFloat(prompt("Enter width:"));
// var heightInput = parseFloat(prompt("Enter height:"));

// // Commit: Call function with user input
// document.write("Area (prompt input): " + areaOfRectangle(widthInput, heightInput) + "<br>");



//6. Using Default Parameters
// Commit: Function with default values for width and height
// function areaWithDefaults(width = 5, height = 10) {
//     return width * height;
// }

// // Commit: Call function without passing arguments (uses defaults)
// document.write("Area (default values): " + areaWithDefaults() + "<br>");

// // Commit: Call function with some arguments
// document.write("Area (default + variable): " + areaWithDefaults(7, heightVar) + "<br>");



//7. Using Arrow Function
// Commit: Arrow function to calculate area
// const areaArrow = (width, height) => width * height;

// // Commit: Call arrow function with values
// document.write("Area (arrow function): " + areaArrow(6, 12) + "<br>");

// // Commit: Call arrow function with variables
// document.write("Area (arrow function + variables): " + areaArrow(width, height) + "<br>");



// Q#10
//1. Using split(), reverse(), join()

// Commit: Function to check palindrome using string methods
// function isPalindrome(str) {
//     // Commit: Convert string to lowercase to ignore case
//     str = str.toLowerCase();
//     // Commit: Reverse the string
//     var reversed = str.split("").reverse().join("");
//     // Commit: Compare original and reversed strings
//     if (str === reversed) {
//         return true; // Commit: String is palindrome
//     } else {
//         return false; // Commit: String is not palindrome
//     }
// }

// // Example usage
// document.write("madam is palindrome? " + isPalindrome("madam") + "<br>");
// document.write("hello is palindrome? " + isPalindrome("hello") + "<br>");



//2. Using for Loop
// Commit: Function to check palindrome using for loop
// function isPalindromeLoop(str) {
//     // Commit: Convert string to lowercase
//     str = str.toLowerCase();
//     // Commit: Get string length
//     var len = str.length;
//     // Commit: Compare characters from start and end
//     for (var i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false; // Commit: Not a palindrome
//         }
//     }
//     return true; // Commit: String is palindrome
// }

// // Example usage
// document.write("racecar is palindrome? " + isPalindromeLoop("racecar") + "<br>");
// document.write("world is palindrome? " + isPalindromeLoop("world") + "<br>");



//3. Using Recursive Function
// Commit: Function to check palindrome recursively
// function isPalindromeRecursive(str) {
//     // Commit: Convert to lowercase
//     str = str.toLowerCase();
//     // Commit: Base case: empty or single character
//     if (str.length <= 1) return true;
//     // Commit: Compare first and last characters
//     if (str[0] === str[str.length - 1]) {
//         // Commit: Call recursively on the substring
//         return isPalindromeRecursive(str.slice(1, -1));
//     } else {
//         return false; // Commit: Not a palindrome
//     }
// }

// // Example usage
// document.write("level is palindrome? " + isPalindromeRecursive("level") + "<br>");


// Using Arrow Function
// Commit: Arrow function to check palindrome
// const isPalindromeArrow = str => {
//     str = str.toLowerCase();
//     return str === str.split("").reverse().join("");
// }

// // Example usage
// document.write("deed is palindrome? " + isPalindromeArrow("deed") + "<br>");


//5. Interactive Version with Prompt
// Commit: Function to check palindrome using user input
function palindromePrompt() {
    // Commit: Take input from user
    var str = prompt("Enter a string to check palindrome:");
    // Commit: Convert to lowercase
    str = str.toLowerCase();
    // Commit: Reverse string
    var reversed = str.split("").reverse().join("");
    // Commit: Display result
    if (str === reversed) {
        document.write(str + " is a palindrome.");
    } else {
        document.write(str + " is not a palindrome.");
    }
}

// Example usage (run in browser)
palindromePrompt();
