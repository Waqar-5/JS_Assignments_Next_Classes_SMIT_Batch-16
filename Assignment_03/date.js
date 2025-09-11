// DATE METHODS: Chapter # 31-34
// Q#1

// var currentDate = new Date()
// // current date and time
// document.write("<b> " +currentDate + "</b>")


// Q#2
 // Array of month names
// var months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];


//  // Get current month index (0 = January, 11 = December)
// var now = new Date();
// var currentMonth = months[now.getMonth()];

//     // Show in alert
// document.write("Current Month: " + currentMonth);



// Way 2: Using toLocaleString()
// var now = new Date();
//   var currentMonth = now.toLocaleString("default", { month: "long" });
//   alert("Current Month: " + currentMonth);



// Way 3: Using Intl.DateTimeFormat
// var now = new Date();
//   var formatter = new Intl.DateTimeFormat("en-US", { month: "long" });
//   var currentMonth = formatter.format(now);
//   alert("Current Month: " + currentMonth);



// Way 4: Using switch Statement
//  var now = new Date();
//   var monthNum = now.getMonth();  // 0–11
//   var currentMonth;

//   switch(monthNum) {
//     case 0: currentMonth = "January"; break;
//     case 1: currentMonth = "February"; break;
//     case 2: currentMonth = "March"; break;
//     case 3: currentMonth = "April"; break;
//     case 4: currentMonth = "May"; break;
//     case 5: currentMonth = "June"; break;
//     case 6: currentMonth = "July"; break;
//     case 7: currentMonth = "August"; break;
//     case 8: currentMonth = "September"; break;
//     case 9: currentMonth = "October"; break;
//     case 10: currentMonth = "November"; break;
//     case 11: currentMonth = "December"; break;
//   }

//   alert("Current Month: " + currentMonth);

// Q#3

// var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat" ];

// var now = new Date();
// var currentDay = days[now.getDay()];

//     // Show in alert
// document.write("Today is " + currentDay);


// Way 2 
  // Array of day names
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   // Create Date object for current date
// var now = new Date();

//   // Get the day index (0 = Sunday, 6 = Saturday)
// var dayIndex = now.getDay();

//   // Use the index to get the correct day from the array
// var currentDay = days[dayIndex];

//   // Show in document
// document.write( "<b>"+ "Today is: " + currentDay + "</b>");


// Way 2: Using toLocaleString() with slice// Create Date object
// var now = new Date();

//   // Get the day name in full (e.g., "Sunday")
// var fullDay = now.toLocaleString("default", { weekday: "long" });

//   // Take only the first 3 characters
// var shortDay = fullDay.slice(0, 3);

//   // Show in document
// document.write( "<b>"+ "Today is: " + shortDay + "</b>");


// Way 3: Using Intl.DateTimeFormat
 // Create Date object
// var now = new Date();

//   // Formatter for weekday short name (Mon, Tue, etc.)
// var formatter = new Intl.DateTimeFormat("en-US", { weekday: "short" });

//   // Format the current day
// var shortDay = formatter.format(now);

//   //   // Show in document
// document.write( "<b>"+ "Today is: " + shortDay + "</b>");




// Q#4

// Way 1

// Create Date object
// var now = new Date();

//     // Get the current day index (0 = Sunday, 6 = Saturday)
// var day = now.getDay();

//     // Check if it's Saturday (6) or Sunday (0)
// if (day === 0 || day === 6) {
//       document.write("<b>It’s Fun day</b>");   // Weekend message
// } else {
//       document.write("<b>It's a working day</b>"); // Optional: for Mon–Fri
// }


// Way 2: Using an Array of Day Names
//  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   var now = new Date();
//   var currentDay = days[now.getDay()];   // Get full name of day

//   if (currentDay === "Sunday" || currentDay === "Saturday") {
//     alert("It’s Fun day");
//   } else {
//     alert("It’s a working day");
//   }


//   Way 3: Using toLocaleString()
//   var now = new Date();
//   var currentDay = now.toLocaleString("default", { weekday: "long" }); // e.g., "Sunday"

//   if (currentDay === "Sunday" || currentDay === "Saturday") {
//     alert("It’s Fun day");
//   } else {
//     alert("It’s a working day");
//   }


// Way 4: Using switch Statement
//  var now = new Date();
//   var day = now.getDay();

//   switch (day) {
//     case 0:   // Sunday
//     case 6:   // Saturday
//       alert("It’s Fun day");
//       break;
//     default:
//       alert("It’s a working day");
//   }


// Way 5: Using Ternary Operator
// var now = new Date();
//   var day = now.getDay();

//   alert((day === 0 || day === 6) ? "It’s Fun day" : "It’s a working day");


// Q#5
// Way 1: Using getDate() with if/else
// var now = new Date();               // Create Date object
// var dayOfMonth = now.getDate();     // Get current date (1–31)

// if (dayOfMonth < 16) {              // If date is less than 16
//     alert("<b>First fifteen days of the month</b>");  
// } else {                            // Else means 16–31
//     alert("<b>Last days of the month</b>");
// }



// Way 2: Using Ternary Operator
// var now = new Date();                     // Current date object
// var dayOfMonth = now.getDate();           // Extract date number (1–31)

//   // Use ternary operator to check condition and alert directly
// alert(dayOfMonth < 16 
//     ? "First fifteen days of the month" 
//     : "Last days of the month");


// Way 3: Using switch(true) (Creative Way)
// var now = new Date();               // Current date
// var dayOfMonth = now.getDate();     // Day number of the month

// switch (true) {                     // switch on true to check conditions
// case (dayOfMonth < 16):           // Case when date is less than 16
// alert("First fifteen days of the month");
//     break;
//     default:                          // Otherwise (16–31)
//     alert("Last days of the month");
//   }


// Way 4: Using Function for Reusability
//   function checkMonthHalf() {                   // Function to check
//     var now = new Date();                       // Create Date object
//     var dayOfMonth = now.getDate();             // Get current date (1–31)

//     if (dayOfMonth < 16) {                      // First half
//       return "<b>First fifteen days of the month</b>";
//     } else {                                    // Second half
//       return "<b>Last days of the month</b>";
//     }
//   }

//   alert(checkMonthHalf());                      




// Q#6
// Way 1: Using Date.now()
//  var d = new Date();                          // Create Date object (current time)

//     // Milliseconds since Jan 1, 1970
//     elapsedMilliseconds = d.getTime();           // getTime() returns ms since epoch

//     // Minutes since Jan 1, 1970
//     elapsedMinutes = Math.floor(elapsedMilliseconds / 60000); // divide ms by 60000

//     document.write("Current Date " + d + "<br>"); 

//     // Show milliseconds
//     document.write("Elapsed Milliseconds since Jan 1, 1970: " + elapsedMilliseconds + "<br>");

//     // Show minutes
//     document.write("Elapsed Minutes since Jan 1, 1970: " + elapsedMinutes);



// Way 2: Using a Function
//  function getElapsedTime() {
//     var now = new Date();                          // Current date & time
//     var ms = now.getTime();                        // Milliseconds since 1970
//     var min = Math.floor(ms / 60000);             // Convert to minutes
//     return [ms, min];                              // Return both values as array
//   }

//   // Assign to variables without declaring (global)
//   [elapsedMilliseconds, elapsedMinutes] = getElapsedTime();

//   // Display
//   document.write("Elapsed Milliseconds since Jan 1, 1970: " + elapsedMilliseconds + "<br>");
//   document.write("Elapsed Minutes since Jan 1, 1970: " + elapsedMinutes);


// Way 3: Using new Date().valueOf()
//  var now = new Date();                          // Current date object

//   // valueOf() returns milliseconds since Jan 1, 1970
//   elapsedMilliseconds = now.valueOf();          

//   // Convert milliseconds to minutes
//   elapsedMinutes = Math.floor(elapsedMilliseconds / 60000);

//   // Display
//   document.write("Elapsed Milliseconds since Jan 1, 1970: " + elapsedMilliseconds + "<br>");
//   document.write("Elapsed Minutes since Jan 1, 1970: " + elapsedMinutes);



// Way 4: Using UTC Time
// var now = new Date();                                 // Current date
// elapsedMilliseconds = Date.UTC(
// now.getFullYear(), now.getMonth(), now.getDate(),
// now.getHours(), now.getMinutes(), now.getSeconds()
// );                                                    // UTC milliseconds since Jan 1, 1970

// elapsedMinutes = Math.floor(elapsedMilliseconds / 60000); // Convert to minutes

// document.write("Elapsed Milliseconds (UTC) since Jan 1, 1970: " + elapsedMilliseconds + "<br>");
// document.write("Elapsed Minutes (UTC) since Jan 1, 1970: " + elapsedMinutes);



// Q#7
// Way 1: Using getHours() with if/else
// var now = new Date();            // Create Date object for current date and time
// var hours = now.getHours();      // Get current hour (0–23)

// if (hours < 12) {                // Check if hour is less than 12
//     document.write("It’s AM");              // It's before noon
//   } else {                         // Otherwise
//     document.write("It’s PM");              // It's after noon
//   }


// Way 2: Using Ternary Operator
// var now = new Date();            // Current date object
// var hours = now.getHours();      // Extract hour (0–23)

//   // Use ternary operator to alert AM or PM
// document.write((hours < 12) ? "It’s AM" : "It’s PM");


// Way 3: Using toLocaleTimeString()
//  var now = new Date();  

//   // Get the time in 12-hour format with AM/PM
//   var timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', hour12: true });

//   // Extract AM or PM from string
//   var ampm = timeString.slice(-2);  

// document.write("It’s " + ampm);           // Alert "AM" or "PM"


// Way 4: Using Function
// function checkAmPm() {
//     var now = new Date();           // Current date
//     var hours = now.getHours();     // Get current hour
//     return (hours < 12) ? "It’s AM" : "It’s PM"; // Return string
//   }

// document.write(checkAmPm());               // Call function and show result



// Way 5: Using Switch (Creative Way)
//  var now = new Date();             // Current date
//   var hours = now.getHours();       // Get hours (0–23)

//   switch(true) {                    // Switch on true to use conditions
//     case (hours < 12):
//       alert("It’s AM");            // Before noon
//       break;
//     default:
//       alert("It’s PM");            // Noon or later
//   }


// Q#8
// Way 1: Direct Date Constructo
  // Create Date object for December 31, 2020
// var laterDate = new Date("December 31, 2020");   // Assign to variable without var (global)

//   // Display the date
// document.write("Later Date: " + laterDate);



// Way 2: Using Year, Month, Day Numbers
// Month is 0-indexed (0 = Jan, 11 = Dec)
// laterDate = new Date(2020, 11, 31);           // Year: 2020, Month: 11 (Dec), Day: 31

//   // Display the date
// document.write("Later Date: " + laterDate);



// Way 3: Using setFullYear() and setMonth()
// laterDate = new Date();                        // Create current Date object

// laterDate.setFullYear(2020);                  // Set year to 2020
// laterDate.setMonth(11);                       // Set month to December (0-indexed)
// laterDate.setDate(31);                        // Set day to 31

//   // Display the date
// document.write("Later Date: " + laterDate);


// Way 4: Using Date.UTC()
 // Create a UTC date object for December 31, 2020
// laterDate = new Date(Date.UTC(2020, 11, 31)); // Year:2020, Month:11, Day:31

//   // Display the date
// document.write("Later Date: " + laterDate);


// Q#9
// Way 1: Using getTime()
  // Create a Date object for 1st Ramadan (June 18, 2015)
//   var firstRamadan = new Date(2015, 5, 18); // Month is 0-indexed, so 5 = June

//   // Create a Date object for the starting date of this Ramadan
//   var thisRamadanStart = new Date(2025, 2, 11); // Example: March 11, 2025 (adjust for actual year)

//   // Calculate difference in milliseconds
//   var diffMs = thisRamadanStart - firstRamadan; // Difference in milliseconds

//   // Convert milliseconds to days
//   var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // 1 day = 24*60*60*1000 ms

//   // Alert the number of days passed
//   document.write(diffDays +" Days passed since 1st Ramadan: 2015 " );


// Way 2: Using a Function
// function daysSinceRamadan(startDate, endDate) {
//     // Subtract two Date objects → milliseconds
//     var diffMs = endDate - startDate;
//     // Convert milliseconds to days
//     return Math.floor(diffMs / (1000 * 60 * 60 * 24));
//   }

//   // 1st Ramadan
//   var firstRamadan = new Date(2015, 5, 18);
//   // Starting date of this Ramadan
//   var thisRamadanStart = new Date(2025, 2, 11);

//   // Calculate days
//   var diffDays = daysSinceRamadan(firstRamadan, thisRamadanStart);

//   // Alert result
//   document.write(diffDays +" Days passed since 1st Ramadan: 2015 " );




// //   Way 3: Using Direct Date Subtraction
// var firstRamadan = new Date(2015, 5, 18);       // 1st Ramadan
//   var thisRamadanStart = new Date(2025, 2, 11);   // This Ramadan

//   // Direct subtraction of Date objects → milliseconds
//   var diffDays = Math.floor((thisRamadanStart - firstRamadan) / (1000 * 60 * 60 * 24));

//   document.write(diffDays +" Days passed since 1st Ramadan: 2015 " );




// //   Way 4: Using setFullYear, setMonth, setDate
  // Create Date object for first Ramadan
//   var firstRamadan = new Date();
//   firstRamadan.setFullYear(2015);
//   firstRamadan.setMonth(5);  // June
//   firstRamadan.setDate(18);

//   // Create Date object for this Ramadan
//   var thisRamadan = new Date();
//   thisRamadan.setFullYear(2025);
//   thisRamadan.setMonth(2);  // March
//   thisRamadan.setDate(11);

//   // Difference in milliseconds
//   var diffMs = thisRamadan - firstRamadan;

//   // Convert to days
//   var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

//   document.write(diffDays +" Days passed since 1st Ramadan: 2015 " );




// Q#10
// Way 1: Using getTime()
 // Create Date object for beginning of 2015
//   var start2015 = new Date(2015, 12, 5); // Month 0 = January, Day 1

//   // Reference date (current date)
//   var referenceDate = new Date();       // Current date & time

//   // Calculate difference in milliseconds
//   var diffMs = referenceDate.getTime() - start2015.getTime();

//   // Convert milliseconds to seconds
//   var diffSeconds = Math.floor(diffMs / 1000); // 1 second = 1000 milliseconds

//   // Display seconds in browser
//   document.write("On reference data " +start2015+ "  <br> " + diffSeconds + " seconds had passed since beginning of 2015");



// Way 2: Using Direct Date Subtraction
// var start2015 = new Date(2015, 12, 5);   // dec 5, 2015
//   var referenceDate = new Date();         // Current date

//   // Subtract Date objects directly → gives milliseconds
//   var diffSeconds = Math.floor((referenceDate - start2015) / 1000);

//   // Display result
//   document.write("On reference data " +start2015+ "  <br> " + diffSeconds + " seconds had passed since beginning of 2015");


// Way 3: Using Date.UTC() for consistent results
 // Start of 2015 in UTC
//   var start2015 = Date.UTC(2015, 12, 5);  

//   // Reference date in UTC
//   var now = Date.UTC(
//     new Date().getFullYear(), 
//     new Date().getMonth(), 
//     new Date().getDate(), 
//     new Date().getHours(), 
//     new Date().getMinutes(), 
//     new Date().getSeconds()
//   );

//   // Difference in milliseconds
//   var diffMs = now - start2015;

//   // Convert milliseconds to seconds
//   var diffSeconds = Math.floor(diffMs / 1000);

//   // Display result
//   document.write("On reference data " +start2015+ "  <br> " + diffSeconds + " seconds had passed since beginning of 2015");


// Way 4: Using a Function

// function secondsElapsedSince2015(refDate) {
//     var start2015 = new Date(2015, 0, 1);           // Jan 1, 2015
//     return Math.floor((refDate - start2015) / 1000); // Difference in seconds
//   }

//   // Current date as reference
//   var referenceDate = new Date();

//   // Call function to calculate seconds
//   var elapsedSeconds = secondsElapsedSince2015(referenceDate);

//   // Display result
//   document.write("Seconds elapsed between start of 2015 and reference date: " + elapsedSeconds);



// Q#11
  // Step 1: Create a Date object for the current date and time
//   var currentdate = new Date(); 
//   document.write("Current date: " + currentdate + "<br>"); // Display current date

//   // Step 2: Extract the current hours
//   var hours = currentdate.getHours(); 
// //   document.write("Current hour: " + hours + "<br>"); // Display current hour

//   // Step 3: Reset the date object one hour ahead
//   currentdate.setHours(hours - 1); // remove 1 hour to the current hour

//   // Step 4: Display the updated date object
//   document.write("1 hour age, It was " + currentdate);


// Q#12
  // Step 1: Create a Date object for current date and time
//   var currentdate = new Date(); 
//   document.write("Current date: " + currentdate + "<br>"); // Display current date

//   // Step 2: Extract current year
//   var years = currentdate.getFullYear(); 

//   // Step 3: Reset the date 100 years back
//   currentdate.setFullYear(years - 100); // Subtract 100 years

//   // Step 4: Display the updated date
//   document.write("100 years back, it was: " + currentdate + "<br>");
//   alert("100 years back, it was: " + currentdate); // Optional alert



//   Way 2: Using a New Date Object
//   var currentdate = new Date(); 
//   var pastDate = new Date(currentdate); // Copy current date

//   pastDate.setFullYear(pastDate.getFullYear() - 100); // Subtract 100 years

//   document.write("Current date: " + currentdate + "<br>");
//   document.write("100 years back, it was: " + pastDate + "<br>");
//   alert("100 years back, it was: " + pastDate);


// Way 3: Using getTime() and Milliseconds
//  var currentdate = new Date(); 
//   document.write("Current date: " + currentdate + "<br>");

//   // Step 2: Calculate milliseconds for 100 years
//   var msInYear = 1000 * 60 * 60 * 24 * 365.25; // Average year including leap years
//   var pastTime = currentdate.getTime() - (msInYear * 100); // 100 years back

//   var pastDate = new Date(pastTime); // Create new Date from milliseconds

//   document.write("100 years back, it was: " + pastDate + "<br>");
//   alert("100 years back, it was: " + pastDate);


// Way 4: Using Function
// function dateYearsBack(dateObj, yearsBack) {
//     var newDate = new Date(dateObj);        // Copy original date
//     newDate.setFullYear(newDate.getFullYear() - yearsBack); // Subtract years
//     return newDate;
//   }

//   var currentdate = new Date();
//   var pastDate = dateYearsBack(currentdate, 100);

//   document.write("Current date: " + currentdate + "<br>");
//   document.write("100 years back, it was: " + pastDate + "<br>");
//   alert("100 years back, it was: " + pastDate);


// Q#13
// Way 1: Simple Calculation Using getFullYear()
  // Step 1: Ask the user for their age
//   var age = +prompt("Enter your age year:"); // Convert input to number using '+'

//   // Step 2: Get current year
//   var now = new Date();                  
//   var currentYear = now.getFullYear();   // Extract current year

//   // Step 3: Calculate birth year
//   var birthYear = currentYear - age;     

//   // Step 4: Display the birth year in browser and alert
//   document.write("Your age is: " + birthYear + "<br>");
//   alert("Your birth year is: " + age);


// // Way 2: Using Function
// function calculateBirthYear(userAge) {
//     var now = new Date();
//     return now.getFullYear() - userAge; // Birth year
//   }

//   var age = +prompt("Enter your age:");
//   var birthYear = calculateBirthYear(age);

//   document.write("Your age is: " + birthYear + "<br>");
//   document.write("Your birth year is: " + age);


// // Way 3: Using Date Arithmetic
// var age = +prompt("Enter your age:");
//   var now = new Date();

//   // Convert age to milliseconds (approx)
//   var msInYear = 1000 * 60 * 60 * 24 * 365.25; // Approx including leap years
//   var birthDateMs = now.getTime() - (age * msInYear); // Milliseconds of birth

//   var birthDate = new Date(birthDateMs); // Convert back to Date object
//   var birthYear = birthDate.getFullYear();

//   document.write("Your age is: " + birthYear + "<br>");
//   document.write("Your birth year is: " + age);

// Way 4: Using setFullYear()
//  var age = +prompt("Enter your age:");
//   var now = new Date();

//   // Set year to current year minus age
//   now.setFullYear(now.getFullYear() - age);

//   document.write("Your age is: " + now.getFullYear() + "<br>");
//   document.write("Your birth year is: " + age);


// Q#14

  // Step 1: Customer name
//   var customerName = prompt("Enter customer name:");

//   // Step 2: Current Month
//   var now = new Date();
//   var months = ["January","February","March","April","May","June",
//                 "July","August","September","October","November","December"];
//   var currentMonth = months[now.getMonth()];

//   // Step 3: Ask for number of units
//   var units = parseFloat(prompt("Enter number of units consumed:"));

//   // Step 4: Ask for charges per unit
//   var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));

//   // Step 5: Ask for late payment surcharge
//   var lateSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

//   // Step 6: Calculate Net Amount Payable (within Due Date)
//   var netAmount = units * chargesPerUnit;

//   // Step 7: Calculate Gross Amount Payable (after Due Date)
//   var grossAmount = netAmount + lateSurcharge;

//   // Step 8: Round amounts to 2 decimal places
//   netAmount = netAmount.toFixed(2);
//   grossAmount = grossAmount.toFixed(2);
//   chargesPerUnit = chargesPerUnit.toFixed(2);
//   lateSurcharge = lateSurcharge.toFixed(2);

//   // Step 9: Display bill in browser
//   document.write("<h1>K-Electric Bill</h1>");
//   document.write("Customer Name: <b>" + customerName + "</b><br>");
//   document.write("Month: <b>" + currentMonth + "</b><br>");
//   document.write("Number of Units: <b>" + units + "</b><br>");
//   document.write("Charges per Unit: <b>" + chargesPerUnit + "</b><br><br>\n");
//   document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
//   document.write("Late Payment Surcharge: <b>" + lateSurcharge + "</b><br>");
//   document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b><br>");




// Way 2: Using Function for Reusability
//  function generateBill(name, units, charges, surcharge) {
//     var now = new Date();
//     var months = ["January","February","March","April","May","June",
//                   "July","August","September","October","November","December"];
//     var month = months[now.getMonth()];

//     var net = (units * charges).toFixed(2);
//     var gross = (parseFloat(net) + surcharge).toFixed(2);
//     charges = charges.toFixed(2);
//     surcharge = surcharge.toFixed(2);

//     document.write("<h1>K-Electric Bill</h1>");
//     document.write("Customer Name: <b>" + name + "</b><br>");
//     document.write("Month: <b>" + month + "</b><br>");
//     document.write("Number of Units: <b>" + units + "</b><br>");
//     document.write("Charges per Unit: <b>" + charges + "</b><br><br><br>");
//     document.write("Net Amount Payable (within Due Date): <b>" + net + "</b><br>");
//     document.write("Late Payment Surcharge: <b>" + surcharge + "</b><br>");
//     document.write("Gross Amount Payable (after Due Date): <b>" + gross + "</b><br>");
//   }

//   var customerName = prompt("Enter customer name:");
//   var units = parseFloat(prompt("Enter number of units:"));
//   var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
//   var lateSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

//   generateBill(customerName, units, chargesPerUnit, lateSurcharge);


// Way 3: Using Template Literals
// var customerName = prompt("Enter customer name:");
//   var units = parseFloat(prompt("Enter number of units:"));
//   var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
//   var lateSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

//   var now = new Date();
//   var month = now.toLocaleString('default', { month: 'long' });

//   var net = (units * chargesPerUnit).toFixed(2);
//   var gross = (parseFloat(net) + lateSurcharge).toFixed(2);

//   // Display using template literals for cleaner code
//   document.write(`
//     <h1>K-Electric Bill</h1>
//     Customer Name: <b>${customerName}</b><br>
//     Month: <b>${month}</b><br>
//     Number of Units: <b>${units}</b><br>
//     Charges per Unit: <b>${chargesPerUnit.toFixed(2)}</b><br>
//     Net Amount Payable (within Due Date): <b>${net}</b><br>
//     Late Payment Surcharge: <b>${lateSurcharge.toFixed(2)}</b><br>
//     Gross Amount Payable (after Due Date): <b>${gross}</b><br>
//   `);


// Way 4: Using Alerts Instead of Document
//   var customerName = prompt("Enter customer name:");
//   var units = parseFloat(prompt("Enter number of units:"));
//   var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
//   var lateSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

//   var net = (units * chargesPerUnit).toFixed(2);
//   var gross = (parseFloat(net) + lateSurcharge).toFixed(2);

//   alert(
//     `K-Electric Bill\n
// Customer Name: ${customerName}\n
// Number of Units: ${units}\n
// Charges per Unit: ${chargesPerUnit.toFixed(2)}\n
// Net Amount Payable (within Due Date): ${net}\n
// Late Payment Surcharge: ${lateSurcharge.toFixed(2)}\n
// Gross Amount Payable (after Due Date): ${gross}`
//   );