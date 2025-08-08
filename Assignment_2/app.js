// chapters9-11.pdf
// Conditions 
// Q#1
var userInput = prompt("Enter the city name:").toLowerCase();

if (userInput === "karachi") {
    alert("Welcome to city of lights");
}
//  else if (userInput === "lahore") {
//     alert("Welcome to the heart of Pakistan");
// } else {
//     alert("City not recognized");
// }


// Q#2 
userInput = prompt("Enter your gender(greeting): ").toLocaleLowerCase()
if (userInput === "male"){
    alert("Good morning Sir.")
} else if (userInput === "female"){
    alert("Good Morning ma'am")
}



// Q#30.24
userInput = prompt("Enter a color to know traffic: ")
if (userInput === "red"){
    alert("Must Stop")
} else if (userInput === "yellow"){
    alert("Ready to move")
} else if (userInput === "green"){
    alert("Move now")
}


// Q#4
remain_fuel = parseFloat(prompt("Enter remaining fuel in car: "))
if (remain_fuel < 0.24){
    alert("Please refill the fuel in your car")
}

// Q#5 



// Q#6
totalMarks = +prompt("Enter the total marks: ")
sub1 = +prompt("Enter your first subject marks")
sub2 = +prompt("Enter your second subject marks")
sub3 = +prompt("Enter your third subject marks")

// Add all three subject marks
var obtainMarks = sub1 + sub2 + sub3

// Calculate percentage
var percentage = (obtainMarks / totalMarks) * 100;


// Check grade and remarks
var grade, remarks;
if (percentage >= 80){
    grade  = "A-one"
    remarks = "excellent"
} else if (percentage >= 70){
    grade  = "A"
    remarks = "good"
} else if (percentage >= 60){
    grade  = "B"
    remarks = "You need to improve"
} else {
    grade  = "Fail"
    remarks = "Sorry"
}

// Start writing to document
document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");300


// Q#7
secret_number = (Math.floor(Math.random() * 10) + 1)

user_prompt = +prompt("Enter a number between 1 and 10:")
if (user_prompt === secret_number){
    alert("🎉 Bingo! Correct anwser")    
} else if(user_prompt === secret_number + 1 || user_prompt === secret_number - 1){
    alert("✨ Close enough to the correct answer")
} else {
    alert("❌ Wrong guess. Try again!");
}

// Q#8
var user_input = +prompt("Enter a number:");

if (user_input % 3 === 0) {
    alert("The number " + user_input + " is divisible by 3.");
} else {
    alert("The number " + user_input + " is NOT divisible by 3.");
}

// Q#9
var user_input = +prompt("Enter a number:");
if (user_input % 2 === 0){
    alert("The number  "+ user_input+" is even!")
} else{
    alert("The number "+ user_input +" is odd")
}




// Q#10
var temp = +prompt("Enter the temoerature: ")
if (temp > 40) {
    alert("It is too hot outside.")
} else if (temp > 30){
    alert("The weather today is Normal")
} else if (temp > 20){
    alert("Today's Weather is cool.")
} else if(temp > 10){
    alert("OMG! Today's weather i so Cool.")
} else {
    alert("It's freezing! Stay warm.");
}



// Q#11
// Calculator 
// Q#11 - Simple Calculator

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Select your operation: (+, -, *, /, %)");

var result;

if (operation === "+") {
    result = num1 + num2;
    alert("Result: " + result);
} 
else if (operation === "-") {
    result = num1 - num2;
    alert("Result: " + result);
} 
else if (operation === "*") {
    result = num1 * num2;
    alert("Result: " + result);
} 
else if (operation === "/") {
    if (num2 === 0) {
        alert("Error: Cannot divide by zero!");
    } else {
        result = num1 / num2;
        alert("Result: " + result);
    }
} 
else if (operation === "%") {
    if (num2 === 0) {
        alert("Error: Cannot divide by zero!");
    } else {
        result = num1 % num2;
        alert("Result: " + result);
    }
} 
else {
    alert("Error: Please enter a valid operation (+, -, *, /, %)");
}


// chapters12-13
// If..else and else if statement, testing set of condition

var input = prompt("Enter a single character:");

if (input.length !== 1) {
       console.log("Please enter exactly one character.");
} else {
  var charCode = input.charCodeAt(0);

  if (charCode >= 48 && charCode <= 57) {
           console.log
("You entered a Number.");
  } else if (charCode >= 65 && charCode <= 90) {
           console.log
("You entered an Uppercase Letter.");
  } else if (charCode >= 97 && charCode <= 122) {
           console.log
("You entered a Lowercase Letter.");
  } else {
       console.log("You entered a special character or something else.");
  }
}


// Q#2 

var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid integers.");
} else {
  if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);
  } else {
    console.log("Both numbers are equal.");
  }
}



// Q#3 
var number = parseFloat(prompt("Enter a number:"));

if (isNaN(number)) {
  console.log("Please enter a valid number.");
} else {
  if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}


// Q#4 
var char = prompt("Enter a single character: ");

if (char.length !== 1) {
    console.log("Please entry only one character.");
} else {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var isVowel = vowels.includes(char.toLowerCase());
    console.log("Is vowel? " + isVowel);
    
}



// Q#5 
var correctPassword = "Secret123";  // Stored password
var userPassword = prompt("Enter your password:");

if (!userPassword) {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}



// Q#6 

// Correct 
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}else{
    greeting = "Good evening";
}

console.log(greeting); // Output: Good day


// Q#7 


var time = prompt("Enter time in 24-hour format (e.g. 1900 for 7 PM):");

if (time === null || time.trim() === "") {
  console.log("Please enter the time!");
} else {
  time = parseInt(time);

  if (time >= 0 && time < 1200) {
    console.log("Good morning!");
  } else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
  } else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
  } else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
  } else {
    console.log("Invalid time. Please enter a time between 0000 and 2359.");
  }
}