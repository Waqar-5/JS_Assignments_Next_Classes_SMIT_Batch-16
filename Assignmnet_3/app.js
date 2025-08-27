// String methods: Chapters# 21-26

// Q#1
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your second name: ");

// var fullName = fName + " " + lName;
// alert("Welcome ," + fullName)

// Template literals (modern and cleaner)
// alert(`Welcome to our hospitality, ${fullName}`);

// 3. Using .concat() (from your string methods chapter)
// alert("Welcome to our hospitality, ".concat(fullName));


// Q#2
// user prompt
// var modelPhone = prompt("Enter your favourite phone model: ")

// show on UI
// document.write("My favourite phone is: " + modelPhone + "<br>")

// length of userinut
// document.write("Length of string: " + modelPhone.length + "<br>")


// Q#3
// declare a variable wth assign value
// var country = "Pakistani";

// display that 
// document.write("String: " + country + "<br>")
// find index of using indexof method
// document.write("Index of 'n' : " + country.indexOf('n') + "<br>")



// Q#4
// declare a variable wth assign value
// var str = "Hello World";

// display it
// document.write("String: " + str + "<br>");

// Find its last index of l 
// document.write("Last index of 'l': " + str.lastIndexOf('l') + "<br>");


// Q#5
// // declare a variable wth assign value
// var myCountry = "Pakistani";

// // display that 
// document.write("String: " + myCountry + "<br>")

// // Find index 3 element
// document.write("Character at index 3: " + myCountry.charAt(3) + "<br>")


// Q#6
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your second name: ");

// var fullName = fName + " " + lName;

// // 3. Using .concat() (from your string methods chapter)
// alert("Welcome to our hospitality, ".concat(fullName));



// Q#7
// var city = "Hyderabad";
// document.write("City: " + city + "<br>")

// // replace city to Islamabad city using replace method
// // document.write("City: " + city.replace(city, "Islamabad") + "<br>")
// var replaceMthod =  city.replace("Hyderabad", "Islamabad")
// document.write("After Replacement: " + replaceMthod + "<br>")



// Q#8
// declare and assign value
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// // display it
// document.write("Real Content: " + message + "<br>")

// // using replace all to replace or "/and/g"
// // var allreplaced = message.replaceAll("and", "&")
// var allreplaced = message.replace(/and/g, "&")
// document.write("After replacement: " + allreplaced)



// Q#9
// var numStr = "472";
// document.write("Value: " +numStr + "<br>")
// document.write("Type " + typeof(numStr) +"<br>") // string


// var strConvertedIntoNum = +numStr // or
// // var strConvertedIntoNum = Number(numStr) // or
// // var strConvertedIntoNum = parseInt(numStr) // or

// document.write("Value: " +strConvertedIntoNum  + "<br>")
// document.write("Type " +typeof(strConvertedIntoNum) + "<br>")  // number



// Q#10
// var userInput = prompt("Enter something: ")
// document.write("User input: " + userInput + "<br>")

// converting user input into upper case 
// document.write("Upper case: " + userInput.toUpperCase() + "<br>")


// Q#11
// Method 1
// Title Case Conversion Examples
// var userInputTitleCase = prompt("Enter a word: ")
// document.write("<b>User input:</b> " + userInputTitleCase + "<br>")

// // // converting user input into title case 
// var titleCase = userInputTitleCase.charAt(0).toUpperCase() + userInputTitleCase.slice(1).toLowerCase();
// document.write("Title Case: " + titleCase + "<br>");



//  Method 2: Using substring()

// var method2 = userInputTitleCase.substring(0, 1).toUpperCase() + userInputTitleCase.substring(1).toLowerCase();
// document.write("<b>Method 1 (substring) title case: :</b> " + method2 + "<br>");

// Example:
// input = "waQAr" → output = "Waqar"


// Method 3: Using replace() with regex
// ^\w → matches the first letter of the string
// c => c.toUpperCase() → callback function to convert it
// var method3 = userInputTitleCase.toLowerCase().replace(/^\w/, function(c){
//     return c.toUpperCase();
// });
// document.write("<b>Method 2 (replace + regex) title case:</b> " + method3 + "<br>");


// Method 4: Using map() for full sentence
// This will convert EVERY word to Title Case
// var method4 = userInputTitleCase.toLowerCase().split(" ") // break string into words
// .map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }).join(" "); // join words back together
// document.write("<b>Method 3 (map for all words):</b> " + method4 + "<br>");


//  Method 5: Using regex for all words
// \b\w → matches the first letter of every word
// var method5 = userInputTitleCase.toLowerCase().replace(/\b\w/g, function(c) {
//     return c.toUpperCase();
// });
// document.write("<b>Method 4 (regex all words):</b> " + method5 + "<br>");



// or 
// // Shortest and easiest way (regex)
// var titleCase = userInputTitleCase.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
// document.write("<b>Title Case:</b> " + titleCase);

// Q#12
// method 1
// var num = 35.36;
// var convertNumIntoStr = num.toString().replace(".", "")
// document.write("Number: " + num + "<br>")
// document.write("Result: " +convertNumIntoStr)



// var num = 35.36;
// document.write("<b>Original Number:</b> " + num + "<br><br>");

//  Method 2: Using regex (\D)
//    1. Convert number into string → "35.36"
//    2. \D = non-digit → remove everything that is not a number
//    3. Leaves only digits → "3536"
// var method2 = num.toString().replace(/\D/g, "");
// document.write("<b>Method 2 (regex), result:</b> " + method2 + "<br>");


//    Method 3: Using split() + join()
// 1. Split "35.36" into ["35", "36"]
// 2. Join them back without a dot → "3536"

// var method3 = num.toString().split(".").join("");
// document.write("<b>Method 3 (split + join), result:</b> " + method3 + "<br>");


// Method 4: Using Math * parseInt()
//  1. Multiply number by 100 → 35.36 * 100 = 3536
//    2. Use parseInt() to remove any floating leftovers
//    3. Result = 3536 (as a number, not string)
//    ⚠️ Works only if you know the number of decimal places (here 2).

// var method4 = parseInt(num * 100);
// document.write("<b>Method 4 (math * 100) result:</b> " + method4 + "<br>");



//    Method 5: Using replaceAll() (ES2021+)
//  1. Convert to string
//    2. Replace ALL "." → ""
//    3. Cleaner than normal replace() if multiple decimals
// var method5 = num.toString().replaceAll(".", "");
// document.write("<b>Method 5 (replaceAll):</b> " + method5 + "<br>");



// Q#13
// Step 1: Take input from user
var userName = prompt("Enter your username: ");


// // Step 2: Check each character in username
// var isValid = true;  // assume valid first

// for (var i = 0; i < userName.length; i++){
//     var charCode = userName.charCodeAt(i);  // get ASCII code of each character

//     // Step 3: Match against ASCII codes of special characters
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;  // stop loop once an invalid character is found
// }
// }

// // Step 4: Show result
// if (isValid){
//     alert("Vlaid Username: " + userName);
// } else {
//     alert("Invalid Username! Please avoid using [@ - , !]");
// }

// ✅ Method 2: Using .includes() (Shortest Way)
// Check if username contains forbidden characters
// if(
//     userName.includes("!") ||   // contains "!"
//     userName.includes(",") ||  // contains ","
//     userName.includes(".") ||  // contains "."
//     userName.includes("@")   // contains "@" 
// ) {
//     alert("Invalid Username! Please avoid using [@ . , !]"); // show invalid message
// }  else {
//   alert("Valid Username: " + userName); // show valid username
// }

// ✅ Method 3: Using Regular Expression (Regex)

// Create a regex pattern that checks for [! , . @]
// var forbidden = /[!,.@]/;
// // Test if username matches the regex
// if (forbidden.test(userName)) {
//   alert("Invalid Username! Please avoid using [@ . , !]"); // show invalid message
// } else {
//   alert("Valid Username: " + userName); // show valid username
// }


// ✅ Method 4: Using Loop + indexOf()


var forbiddenChars = ["!", ",", ".", "@"];

// Assume username is valid first
var isValid = true;

// Loop through each forbidden character
for (var i = 0; i < forbiddenChars.length; i++) {
  if (userName.indexOf(forbiddenChars[i]) !== -1) {
    // If any forbidden character found, mark invalid
    isValid = false;
    break; // exit loop early
  }
}

// Show result based on validation
if (isValid) {
  alert("Valid Username: " + userName);
} else {
  alert("Invalid Username! Please avoid using [@ . , !]");
}