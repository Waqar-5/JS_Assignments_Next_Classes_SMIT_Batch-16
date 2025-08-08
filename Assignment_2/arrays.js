// Chapter #13-15
// ARRAYS
//Q#1:  Declare an empty array using JS literal notation to store
// student names in future.


var studentName = []; // empty array
studentName.push("Khan <br>"); // add name
document.write(studentName); // Output: ["Khan"]

document.write("*********************************** <br>");



// Q#2
// Declare an empty array using JS object notation to store
// student names in future.

//  JS object notation
var studentNames = {
  names: []
};
studentNames.names.push("Ali");
studentNames.names.push("Ayesha");

document.write(studentNames.names);
// Output: { names: [ 'Ali', 'Ayesha' ] }


document.write("<br>***********************************<br>");


//Q#3
// Declare and initialize a strings array.
var fruits = ["Apple", "Orange", "Mango", "Peach"]


// Q#4
// Declare and initialize a numbers array.
var numbers = [1, 2, 3, 4, 5]

// Q#5
// Declare and initialize a boolean array.
var bool = [true, false]

// Q#6
// Declare and initialize a mixed array.
var mixedArr = ["Ali", 1,2,3, true, null]


// document.write("***************************************");


// Q#7
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// Declare and initialize the array
var arr = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. PHIL.", "PhD"]  

// Display title
document.write("<h2>Qualifications in Pakistan:</h2>");

  // Display the list
document.write("<ol>"); // ordered list


for (var i = 0; i < arr.length; i++){
    document.write("<li>" + arr[i] + "</li>");
    
}

document.write("</ol>");



document.write("************************************* <br>")
// Q#8
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

  // Step 1: Store student names
var students = ["Akhlaque", "Asad", "Khan"];


  // Step 2: Store student scores
var studentsScore = [450, 400, 350];

// Total marks for each student
var totalScore = 500; 

// Step 3: Display the result
document.write("<h2>Student Scores and Percentages</h2>");

for (var i = 0; i < students.length; i++){
    var percentage = (studentsScore[i]/ totalScore) * 100;
    document.write(
        "Score of <strong> "+ students[i] + "</strong> is " + 
        studentsScore[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>"  
    );
}

document.write("******************************************** <br>");


// // Q#9
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colorNames = ["Red", "Yellow", "Pink", "Brown"]
document.write("Original Array: ",colorNames);

document.write("<br>****************************************************** <br>");

// a: part
var userInput = prompt("Enter your color to add in beginning of array: ")
colorNames.unshift(userInput)
document.write("After ading color in beginning of array: ",colorNames);


document.write("<br>********************************************************* <br>");

// b: part
document.write("Now, Original Array:",colorNames);
var userInput = prompt("Enter your color to add in ending of array: ")
colorNames.push(userInput)
document.write("<br>After ading color in ending of array: ",colorNames);


document.write("<br>*********************************************************<br>");


// c: part
document.write("Orginial Array: ", colorNames)

colorNames.unshift("lightBlue", "lightGreen")
document.write("<br>After adding two colors in array: ", colorNames);

document.write("<br> ********************************************************* <br>");


// d: part
document.write("Original Array: ", colorNames);
colorNames.shift()
document.write("<br>After removing first element from array: ", colorNames);

document.write("<br>******************************************************** <br>");


// e: part
document.write("Original Array: " + colorNames);
colorNames.pop()
document.write("<br>After reoming last item from array: ", colorNames);

document.write("<br>******************************************************** <br>");

// f: part
document.write("<h3>Original Colors:</h3>");
document.write(colorNames.join(", "));

// ===== (f) Add color at user-defined index =====
var addIndex = +prompt("At which index do you want to add a color? (0 to " + colorNames.length + ")");
var newColor = prompt("Enter the name of the color you want to add:");
colorNames.splice(addIndex, 0, newColor); // insert at index

document.write("<h3>After Adding '" + newColor + "' at index " + addIndex + ":</h3>");
document.write(colorNames.join(", ") );

document.write("<br>******************************************************");

document.write("<h3>Original Colors:</h3>");
document.write(colorNames.join(", "));
// === (g) Delete color(s) from user-defined index ===
var delIndex = +prompt("At which index do you want to delete color(s)?");
var delCount = +prompt("How many colors do you want to delete?");

// Remove colors using splice
colorNames.splice(delIndex, delCount);

// Show updated array after deletion
document.write("<h2>After Deleting " + delCount + " Color(s) from Index " + delIndex + ":</h2>");
document.write(colorNames.join(", "));


document.write("<br>******************************************************");




// Q#10
// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var studentScores = [300, 400, 250, 160]
document.write("Scores of Students before using sort method : ", studentScores, " <br>");

studentScores.sort()
document.write("Ordered Scores of Students, using sort method : ", studentScores) 


document.write("<br>******************************************************");


// Q#11
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// Step 1: Initialize the cities array
var cities = ["Karachi", "Hyderabad", "Larkana", "Sukkur", "Dadu", "Lahore"]
// Step 2: Display all cities
document.write("<br> <h2>Cities list: </h2>" + " <h3>"+ cities.join(", ") + "</h3>")


// Step 3: Copy 3 cities to selectedCities array (from index 2 to 4)
var selectedCities = cities.slice(2, 5) // Larkana, Sukkur, Dadu
// Step 4: Display selected cities
document.write("<h2>Selected Cities:</h2>" + "<h3>"+ selectedCities.join(", ") + "<\h2>");


document.write("<br>******************************************************<br>");
// Q#12
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// Step 1: Create the array
var arr = ["This", " is", " my", " cat"];
document.write("Array: <br>" + arr + "<br> <br>");

// Step 2: Join the array elements into a single string
var sentence = arr.join("");
// Step 3: Display the result in browser
document.write("<b>String: </b> <br>" + "<b>" + sentence + "</b>") ;


document.write("<br>******************************************************<br>");
// Q#13
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// Step 1: Create an empty array
var newArray = [];

// Step 2: Add items (in newArray)
newArray.push("Keyboard");
newArray.push("Mouse");
newArray.push("Printer");
newArray.push("Monitor");


// Other way
// while(newArray.length > 0){
//   document.write("<b>Out: </b><br><b>" + newArray.shift() + "</b><br>");
// }


// Step 3: Show original queue
document.write("<b>Devices :</b> <br>" + newArray.join(", ") + "<br>");

// Step 4: Remove items in FIFO order (dequeue)
document.write("<b><br>Items removed in FIFO order:  <br></b>");
document.write("<b>Out: </b><br> <b>",newArray.shift() + "</b><br>");
document.write("<b>Out: </b><br> <b>",newArray.shift() + "</b><br>");
document.write("<b>Out: </b><br> <b>",newArray.shift() + "</b><br>");
document.write("<b>Out: </b><br> <b>",newArray.shift() + "</b><br>");


document.write("<br>******************************************************<br>");



// Q#14
// Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)

// Step 1: Create an empty array
var newArray = [];

// Step 2: Add items (LIFO behavior using push)
newArray.push("Keyboard");
newArray.push("Mouse");
newArray.push("Printer");
newArray.push("Monitor");

// Step 3: Show original stack
document.write("<b>Devices :</b> <br>" + newArray.join(", ") + "<br>");

// Step 4: Remove items in LIFO order (stack-style pop)
document.write("<b><br>Items removed in LIFO order:  <br></b>");
document.write("<b>Out: </b><br> <b>" + newArray.pop() + "</b><br>");
document.write("<b>Out: </b><br> <b>" + newArray.pop() + "</b><br>");
document.write("<b>Out: </b><br> <b>" + newArray.pop() + "</b><br>");
document.write("<b>Out: </b><br> <b>" + newArray.pop() + "</b><br>");


document.write("<br>******************************************************<br>");


// // Q#15
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// Step 1: Create an array of mobile manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// Step 2: Start the <select> element
document.write("<label for='manufacturers'>Choose a manufacturer:</label><br>");
document.write("<select id='manufacturers'>");

// Step 3: Use a loop to add <option> tags
for (var i = 0; i < manufacturers.length; i++){
    document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
}
// Step 4: Close the <select> element
document.write("</select>");



document.write("<br>******************************************************<br>");


// Chapter: 17-20:
// Q#1
// Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multidimensional = [[], []]

// document.write("<br>****************************************************<br>");z

// Q#2
// Declare and initialize a multidimensional array
// representing the following matrix:
var multidimensionalArray = 
[
    [0, 1, 2, 3], 
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]


for (var i = 0; i < multidimensionalArray.length; i++) {
    document.write(multidimensionalArray[i].join(" ") + "<br>");
}

document.write("<br>****************************************************<br>");

// Q#3
//Write a program to print numeric counting from 1 to 10.
document.write("1 to 10 numbers: <br> ")
for (var i = 1; i <= 10; i++ ){
    document.write(i + "<br>");
    
}


document.write("<br>****************************************************<br>");
// Q#4
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var num = +prompt("Enter a number to see its multiplication: ")
var len = +prompt("Enter length of table: ")
document.write("<strong>The table of " + num +" and its length is "+ len + " : </strong> <br>" )
for (var i = 1; i <= len; i++){
    document.write(num + " x " + i + " = "  + (i * num) + "</br>")
}


document.write("<br>****************************************************<br>");


// Q#5
// Write a program to print items of the following array
// using for loop:
fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<Strong>Array: </Strong> <br>")
for (var i = 0; i < fruits.length; i++){
    document.write(fruits[i], "<br>");    
}
document.write("<br><strong>Elements with index:</strong><br>");
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}






document.write("<br>****************************************************<br>");

// Q#6
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a: part 
document.write("<h2>Counting: </h2>")
for (var i = 1; i <= 15; i++){
    document.write(i, ", ")
}

document.write("<h2>Reverse counting:</h2>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<h2>Even:</h2>");
for (var i = 0; i <= 20; i++){
    if (i % 2 == 0)
    document.write(i + ", ");
}

document.write("<h2>Odd:</h2>");
for (var i = 0; i <= 20; i++){
    if (i % 2 != 0)
    document.write(i + ", ");
}

document.write("<h2>Series:</h2>");
for (var i = 1; i <= 20; i++){
    if (i % 2 == 0)
    document.write(i + "k, ");
}


document.write("<br>****************************************************<br>");

// Q#7
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userprompt = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am?")

// for (var i = 0; i < A.length; i++){
//     if (A[i] === userprompt){
//         document.write(userprompt + " is <strong>available</strong> at index" + i + "in our bakery")
//         break
//     }
// }
// if ( i === A.length){
//     document.write("We are sorry." + userprompt+ "is <strong> not available</strong> in our bakery.");
        
// }


// an other way(best way)
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userprompt = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am?");
var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userprompt.toLowerCase()) {
        document.write(userprompt + " is <strong>available</strong> at index " + i + " in our bakery.");
        found = true;
        break;
    }
}

if (!found) {
    document.write("We are sorry. <strong>" + userprompt + "</strong> is <strong>not available</strong> in our bakery.");
}


document.write("<br>****************************************************<br>");

// Q#8
// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var findLargestNum = [24, 53, 78, 91, 12];
var largest = findLargestNum[0];  // Assume first element is the largest initially

for (var i = 1; i < findLargestNum.length; i++){
    if (findLargestNum[i] > largest){
        largest = findLargestNum[i] // Update largest if current element is greater
    }
}
document.write("Array items: " + findLargestNum.join(", ") + "<br>");
document.write("The largest number is: " + largest);



document.write("<br>****************************************************<br>");

// Q#9
// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var findSmallestNum = [24, 53, 78, 91, 12];
var smallest = findSmallestNum[0];  // Assume first element is the smallest initially

for (var i = 1; i < findSmallestNum.length; i++){
    if (findSmallestNum[i] < smallest){
        smallest = findSmallestNum[i] // Update largest if current element is greater
    }
}
document.write("Array items: " + findSmallestNum.join(", ") + "<br>");
document.write("The largest number is: " + smallest);


document.write("<br>****************************************************<br>");

// Q#10
// Write a program to print multiples of 5 ranging 1 to
// 100.
document.write("<h3>Multiples of 5 from 1 to 100:</h3>");
for (var i =5; i <= 100; i += 5){
    document.write(i + ",")
}