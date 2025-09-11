// Grab the input element from HTML
var input = document.getElementById("input"); 
// 'var' declares a variable → can be reassigned
// 'document' refers to the HTML page
// '.getElementById("input")' finds the element with id="input"
// assigns it to variable 'input'

// Grab the unordered list element to display tasks
var ul = document.getElementById("output"); 
// similar explanation: finds <ul> with id="output"

// Grab Add button element
var addBtn = document.getElementById("addBtn"); 
// finds the button with id="addBtn"

// Grab Update button element
var updateBtn = document.getElementById("updateBtn"); 
// finds button with id="updateBtn" used during edits

// Track which task is being edited
var editId = null; 
// 'null' means no task is selected initially

// Function to add a new task
function addTodo() { 
  // check if input is empty
  if (input.value.trim() === "") { 
    // '.value' gets text typed by user
    // '.trim()' removes spaces at start/end
    alert("Please enter a task!"); // show alert if empty
    return; // exit function early
  }

  // create a new list item <li>
  var li = document.createElement("li"); 
  // 'document.createElement' creates HTML element dynamically

  // generate unique id based on current time
  var id = Date.now(); 
  // 'Date.now()' returns milliseconds since 1970
  li.setAttribute("id", id); 
  // assign this id to the li element

  // Set the HTML content of the li
  li.innerHTML = `
    <span>${input.value}</span> 
    <!-- span displays task text dynamically -->
    <div class="actions"> 
      <!-- container for buttons -->
      <button class="edit-btn" onclick="editTodo(${id})">Edit</button> 
      <!-- button calls editTodo function with id -->
      <button class="delete-btn" onclick="deleteTodo(${id})">Delete</button>
      <!-- button calls deleteTodo function with id -->
    </div>
  `;

  // append the new li to the ul
  ul.appendChild(li); 
  // 'appendChild' adds li to the list

  input.value = ""; 
  // clear input box after adding
}

// Function to delete a task
function deleteTodo(id) { 
  // get the li by id
  var li = document.getElementById(id); 
  li.remove(); 
  // removes the li element from the DOM
}

// Function to edit a task
function editTodo(id) { 
  var li = document.getElementById(id); 
  // find li by id

  var taskText = li.querySelector("span").innerText; 
  // '.querySelector("span")' finds span inside li
  // '.innerText' gets the displayed text

  input.value = taskText; 
  // put text back into input for editing

  editId = id; 
  // store id of task being edited

  addBtn.style.display = "none"; 
  // hide Add button
  updateBtn.style.display = "inline-block"; 
  // show Update button
}

// Function to update an edited task
function updateTodo() { 
  var li = document.getElementById(editId); 
  // find li being edited

  li.querySelector("span").innerText = input.value; 
  // update span text with new input

  input.value = ""; 
  // clear input box
  editId = null; 
  // reset editId

  addBtn.style.display = "inline-block"; 
  // show Add button
  updateBtn.style.display = "none"; 
  // hide Update button
}
