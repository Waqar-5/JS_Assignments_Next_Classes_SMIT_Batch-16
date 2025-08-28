# 📘 JavaScript Practice – String Methods (Ch#21–26)

This repository contains solved practice questions from **Chapters 21–26 (String Methods)**.  
Each exercise demonstrates different **string manipulation techniques** in JavaScript, ranging from basic concatenation to advanced regex usage.

---

## 🚀 Topics Covered
- String concatenation (`+`, `.concat()`, template literals)
- String length (`.length`)
- Finding indexes (`.indexOf()`, `.lastIndexOf()`)
- Extracting characters (`.charAt()`, `[]`, `.slice()`, `.substring()`, `.at()`)
- Replacing strings (`.replace()`, `.replaceAll()`, regex)
- Case conversions (`.toUpperCase()`, `.toLowerCase()`, Title Case methods)
- Converting strings ↔ numbers (`Number()`, `parseInt()`, `.toString()`)
- Username validation (loops, `.includes()`, regex, ASCII codes)
- Password validation (step-by-step and regex methods)
- Searching items in arrays (`for-loop`, `.includes()`, `.some()`)
- Splitting strings (`split()`, regex, loops, spread operator, `Array.from()`)
- Finding the last character of a string
- Counting word occurrences in text (loops, `.match()`, `.filter()`, regex)

---

## 📂 Questions Implemented

### **Q#1** – Greeting user by full name
- Using `+` operator
- Template literals
- `.concat()`

### **Q#2** – Display favorite phone model & its string length

### **Q#3** – Find index of a character in a string

### **Q#4** – Find the last index of a character

### **Q#5** – Get character at a specific index

### **Q#6** – Greeting with `.concat()` (revisited)

### **Q#7** – Replace `"Hyderabad"` with `"Islamabad"`

### **Q#8** – Replace all `"and"` with `&` (regex / replaceAll)

### **Q#9** – Convert string `"472"` into number (3+ ways)

### **Q#10** – Convert input into **Uppercase**

### **Q#11** – Convert input into **Title Case**  
Multiple methods:
- `.charAt()` + `.slice()`
- `.substring()`
- Regex with `.replace()`
- `.map()` for each word
- Regex one-liner (`\b\w`)

### **Q#12** – Remove decimal from number `35.36`  
Methods include `.replace()`, regex, `.split() + .join()`, `parseInt(num * 100)`, `.replaceAll()`

### **Q#13** – Validate **Username**  
Methods:
- ASCII codes
- `.includes()`
- Regex `/[!,.@]/`
- Loop + `.indexOf()`

### **Q#14** – Search item in **Bakery Array**  
Methods:
- Loop + case-insensitive check
- `.includes()`
- `.some()` one-liner

### **Q#15** – **Password Validation**  
Rules:
1. Min 6 characters  
2. Must contain letters & numbers  
3. Should not start with a number  
Solutions:
- Step-by-step function  
- Regex (lookaheads)

### **Q#16** – Split `"University of Karachi"` into characters/words  
Methods:
- `.split(" ")`, `.split("")`
- `for...of`
- `Array.from()`
- Spread `[...str]`
- `.match()` regex
- `.slice()` loop
- `.split()` regex

### **Q#17** – Display **last character** of input  
Methods: `.charAt()`, `[]`, `.slice()`, `.substring()`, `.at()`

### **Q#18** – Count occurrences of `"the"` in text  
Methods:
- `.split()` + loop
- `.match()` regex
- `.filter()`
- One-liner regex count

---

## ✅ Key Takeaways
- Practiced **multiple approaches** for the same problem.  
- Learned **modern JavaScript methods** (`.at()`, `.replaceAll()`, spread operator).  
- Strong grip on **regex** for searching, replacing, and validation.  
- Covers **basic to advanced** use cases of strings.

---

## 🛠️ How to Use
1. Open file in browser.  
2. Uncomment a specific question’s code block.  
3. Refresh page to test results (`alert()` or `document.write()`).  

---


# 📘 JavaScript Practice – Math Methods (Ch#26–30)

This repository contains solved practice questions from **Chapters 26–30 (Math Methods)**.  
Each exercise demonstrates how to use **JavaScript’s Math object** for rounding, absolute values, randomization, and simple games.

---

## 🚀 Topics Covered
- Rounding numbers (`Math.round()`, `Math.floor()`, `Math.ceil()`)
- Absolute values (`Math.abs()`)
- Random numbers (`Math.random()`)
- Simulating dice rolls & coin tosses
- Generating random numbers in a range
- Extracting numbers from user input
- Simple games (secret number guessing)

---

## 📂 Questions Implemented

### **Q#1** – Round a positive number
- Show **original number, round-off, floor, ceil**  
- Multiple implementations: direct, template literals, arrays, loops

### **Q#2** – Round a negative floating-point number
- Show **original number, round-off, floor, ceil**  
- Implemented using plain JS, template literals, arrays, objects

### **Q#3** – Find absolute value
- Using `Math.abs()`  
- Manual calculation (`if/else`, ternary operator)  
- Custom function  
- Bitwise trick for integers

### **Q#4** – Simulate a dice roll (1–6)
- Using `Math.floor()`, `Math.ceil()`, `Math.round()`  
- Function-based reusable roller  
- Array of dice faces  
- ES6 arrow function

### **Q#5** – Simulate a coin toss
- If/else with `Math.random()`  
- Using `Math.floor()` (0 = Heads, 1 = Tails)  
- Array-based approach  
- Reusable function

### **Q#6** – Generate random number (1–100)
- Using `Math.floor()`  
- Using `Math.ceil()`  
- Function `getRandom(min, max)`

### **Q#7** – Parse user weight input
- Using `parseFloat()`  
- Using regex to extract numeric value  
- Manually removing “kgs” / “kilograms”  
- Loop until valid input entered

### **Q#8** – Secret number guessing game
- Generate secret number (1–10)  
- Compare with user input using `if/else`  
- Loop until correct guess (`while`)  
- Show results in browser (`document.write()`)  
- Short version with ternary operator

---

## ✅ Key Takeaways
- Practiced **rounding methods** and their differences.  
- Learned **random number generation** in ranges.  
- Simulated **real-world scenarios** (dice, coin, guessing games).  
- Extracted and validated **numeric input from strings**.  
- Explored **multiple approaches** (functions, arrays, regex, loops).  

---

## 🛠️ How to Use
1. Open file in browser.  
2. Uncomment the question block you want to test.  
3. Refresh to see output (`document.write()`, `alert()`).  

---

✨ This assignment gives hands-on practice with the most useful **JavaScript Math methods**.






# 📘 JavaScript Practice – Date Methods (Ch#31–34)

This repository contains solved practice questions from **Chapters 31–34 (Date Methods)**.  
Each exercise demonstrates different ways of working with the **JavaScript Date object**.

---

## 🚀 Topics Covered
- Getting current date & time
- Extracting month & day names
- Weekend checks ("Fun day")
- First / last half of the month
- Elapsed time since Jan 1, 1970
- AM / PM detection
- Creating specific dates
- Calculating days since an event (e.g., Ramadan)
- Calculating seconds since 2015
- Date arithmetic (adding / subtracting hours, years)
- Estimating birth year from age
- Generating K-Electric bill

---

## 📂 Questions Implemented

### **Q#1** – Display current date & time
- Using `new Date()`

### **Q#2** – Display current month name
- Using array of months  
- Using `.toLocaleString()`  
- Using `Intl.DateTimeFormat`  
- Using `switch`

### **Q#3** – Display current day (short form)
- Using array of days  
- Using `.toLocaleString().slice()`  
- Using `Intl.DateTimeFormat`

### **Q#4** – Check if today is **“Fun day”**
- Using `.getDay()` if/else  
- Using array of day names  
- Using `.toLocaleString()`  
- Using `switch`  
- Using ternary operator

### **Q#5** – Determine if date is in **first or last half** of month
- If/else with `.getDate()`  
- Ternary operator  
- `switch(true)`  
- Function for reusability

### **Q#6** – Show **elapsed milliseconds & minutes** since Jan 1, 1970
- Using `.getTime()`  
- Using function  
- Using `.valueOf()`  
- Using `Date.UTC()`

### **Q#7** – Check AM or PM
- Using `.getHours()`  
- Ternary operator  
- `.toLocaleTimeString()`  
- Function  
- `switch(true)`

### **Q#8** – Create date object for **December 31, 2020**
- Direct constructor  
- Year, Month, Day numbers  
- Using `.setFullYear()`  
- Using `Date.UTC()`

### **Q#9** – Days since **1st Ramadan 2015**
- Using subtraction of Date objects  
- Function version  
- Using `.setFullYear()` approach

### **Q#10** – Seconds passed since **beginning of 2015**
- Using `.getTime()`  
- Direct subtraction  
- Using `Date.UTC()`  
- Function version

### **Q#11** – Show time **1 hour ago**
- Subtract 1 hour with `.setHours()`

### **Q#12** – Show date **100 years back**
- Using `.setFullYear()`  
- Using a copied Date object  
- Using milliseconds (`getTime() - years*ms`)  
- Function version

### **Q#13** – Calculate **birth year** from age
- Simple subtraction of age from current year  
- Function version  
- Using Date arithmetic (ms)  
- Using `.setFullYear()`

### **Q#14** – **K-Electric Bill**
- Prompt for customer details  
- Calculate **Net Amount** (units × charges)  
- Calculate **Gross Amount** (with surcharge)  
- Display formatted bill in browser  
- Function-based reusable version

---

## ✅ Key Takeaways
- Learned **multiple approaches** for working with dates.  
- Practiced `.getDate()`, `.getDay()`, `.getMonth()`, `.getFullYear()`, `.getHours()`, `.getTime()`.  
- Explored **date formatting methods** (`toLocaleString`, `Intl.DateTimeFormat`).  
- Strengthened **problem-solving with Date arithmetic**.  

---

## 🛠️ How to Use
1. Open file in browser.  
2. Uncomment the code block for the question you want to test.  
3. Refresh the page to see the output (`document.write()` / `alert()`).  

---

✨ This assignment covers all important **JavaScript Date Methods** with examples and multiple techniques.


✨ This assignment serves as a **comprehensive revision** of JavaScript string methods.

# 📘 JavaScript Practice – Functions (Ch#35–38)

This repository contains solved practice questions from **Chapters 35–38 (Functions)**.  
Each exercise is solved using **multiple approaches** (standard functions, arrow functions, recursion, switch statements, loops, prompts, etc.) to provide a complete understanding of JavaScript functions.

---

## 🚀 Topics Covered
- Declaring & calling functions
- Function parameters & return values
- Arrow functions
- Recursion
- Prompt-based input & output
- Nested functions
- Default parameters
- String & number operations
- Simple calculators

---

## 📂 Questions Implemented

### **Q#1 – Show Current Date & Time**
- Using `new Date()` to display current date/time.

---

### **Q#2 – Greeting Function**
- String concatenation  
- Template literals  
- Array `.join()`  
- Prompt-based input  
- Combined function (all methods)

---

### **Q#3 – Add Two Numbers**
- Prompt-based input  
- Function with parameters  
- Arrow function (concise version)

---

### **Q#4 – Calculator**
- Using if–else statements  
- Using switch statement  
- Using object operator mapping  
- Interactive prompt version  
- Arrow function (compact operator map)

---

### **Q#5 – Square / Power Function**
- Exponentiation operator (`**`)  
- Multiplication (`*`)  
- `Math.pow()`  
- Arrow function  
- Anonymous function  
- Prompt-based input

---

### **Q#6 – Factorial**
- Iterative loop  
- Recursive function  
- While loop  
- Recursive arrow function  
- Prompt-based input

---

### **Q#7 – Counting Between Two Numbers**
- For loop  
- While loop  
- Do…While loop  
- Arrow function  
- Prompt-based input

---

### **Q#8 – Hypotenuse with Nested Functions**
- Standard function with inner `calculateSquare`  
- Arrow function with nested function  
- Prompt-based version  
- Arrow + prompt version

---

### **Q#9 – Area of a Rectangle**
- Direct values  
- Using variables  
- Mixing values + variables  
- Prompt-based input  
- Default parameters  
- Arrow function

---

### **Q#10 – Palindrome Checker**
- Using `split()`, `reverse()`, `join()`  
- Using for loop  
- Recursive approach  
- Arrow function  
- Prompt-based input

---

### **Q#11 – Capitalize First Letter of Each Word**
- Using `split()` + `map()` + `join()`  
- Using for loop  
- Using regex (`replace`)  
- Using for…of loop  
- One-liner with arrow function

---

### **Q#12 – Find Longest Word in a String**
- Using split + loop  
- Using `reduce()`  
- Using `sort()`  
- Using regex + match  
- ES6 arrow + spread operator  
- Finding multiple longest words

---

### **Q#13 – Count Occurrences of a Letter**
- Using for loop  
- Using `split()` + `filter()`  
- Using regex (`match`)  
- Using `reduce()`  
- Using for…of loop  

---

## ✅ Key Takeaways
- Practiced **multiple styles of function writing**.  
- Solved **real-world problems** (calculator, palindrome, longest word, hypotenuse).  
- Strengthened **string and math operations**.  
- Used **loops, recursion, arrow functions, default params, and regex**.  

---

## 🛠️ How to Use
1. Open the JavaScript file in a browser.  
2. Uncomment the function for the question you want to test.  
3. Run in browser → results shown using `document.write()` / `alert()` / `console.log()`.  

---

✨ This assignment gives **deep hands-on practice with JavaScript functions** in different styles.






# 📘 JavaScript Practice – Functions, Switch, While & Do…While (Ch#38–44)

This repository contains solved practice questions from **Chapters 38–44**.  
Each problem is implemented using **multiple approaches** — such as function declarations, expressions, arrow functions, recursion, switch statements, loops, and IIFEs — to give a complete understanding of different JavaScript techniques.

---

## 🚀 Topics Covered
- Functions (declaration, expression, arrow, recursion, IIFE)
- Switch statements
- While & Do…While loops
- Mathematical functions (power, leap year, area formulas)
- String search & custom indexOf
- Removing vowels from strings
- Successive vowel detection
- Unit conversions (km → meters, feet, inches, cm)
- Arrays, reduce, object return values
- Prompt & user input handling

---

## 📂 Questions Implemented

### **Q#1 – Power Function (a^b)**
- Using `Math.pow()`
- Using Exponentiation Operator `**`
- Using Loop (manual multiplication)
- Using Recursion
- Alternative compact versions

---

### **Q#2 – Leap Year Checker**
- Function Declaration
- Function Expression
- Arrow Function
- Ternary Operator
- Switch Statement
- One-Liner Expression
- Prompt + User Input

---

### **Q#3 – Triangle Semi-Perimeter & Area (Heron’s Formula)**
- Separate functions for `S` and area
- Function Expressions
- Arrow Functions
- Single function returning object `{S, area}`

---

### **Q#4 – Average & Percentage of Marks**
- Using normal functions (loops)
- Using `reduce()` for sum
- Using Arrow Functions
- Main function to display all results

---

### **Q#5 – Custom indexOf() Implementation**
- Using For Loop
- Using While Loop
- Using Do…While Loop
- Using Switch Statement
- Returns index of first match or `-1`

---

### **Q#6 – Remove Vowels from a Sentence**
- Using For Loop
- Using While Loop
- Using Do…While Loop
- Using Switch Statement
- Using Regex Replace
- Using `Array.filter()`

---

### **Q#7 – Count Successive Vowel Pairs**
- Function + Switch + While Loop
- Using Do…While Loop
- Regex version (`/[aeiou]{2}/gi`)
- Counts number of pairs like **“ea”, “oo”, “ai”**

---

### **Q#8 – Distance Conversion (km → meters, feet, inches, cm)**
- Normal Functions
- Arrow Functions
- Anonymous Functions
- IIFE (Immediately Invoked Function Expressions)
- Object with conversion methods

---

## ✅ Key Takeaways
- Practiced **multiple styles of functions** (declaration, expression, arrow, recursion, IIFE).  
- Used **loops (for, while, do…while)** and **switch** in creative ways.  
- Solved **math problems** (power, leap year, triangle area, average/percentage).  
- Built **custom string utilities** (custom indexOf, remove vowels, vowel pairs).  
- Implemented **real-world tasks** like **unit conversion**.  

---

## 🛠️ How to Use
1. Open the JavaScript file in a browser environment.  
2. Uncomment the code block for the question you want to test.  
3. Run and check results via `document.write()`, `console.log()`, or `alert()`.  

---

✨ This assignment demonstrates a **deep dive into functions, loops, and switch statements** in JavaScript.
