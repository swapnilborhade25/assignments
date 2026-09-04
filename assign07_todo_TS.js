"use strict";
const form = document.querySelector("#todoForm"); // as HTMLFormElement
const todoName = document.querySelector("#todoName"); // as => assertion
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
// Get todos from local storage
let todos = JSON.parse(localStorage.getItem("todos") || "[]"); // define type ': string[]'
// Render function
function render() {
    todoList.innerHTML = ""; // clear the existing list in html
    todos.forEach((todo, i) => {
        const li = document.createElement("li");
        li.textContent = todo;
        // Update button
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.addEventListener("click", () => {
            updateToDo(i);
        });
        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteToDo(i);
        });
        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}
// Add todo
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = todoName.value.trim(); // ': string ' added
    if (name === "") {
        return;
    }
    todos.push(name);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoName.value = "";
    render();
});
// Delete function
function deleteToDo(i) {
    todos.splice(i, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
}
// Update function
function updateToDo(i) {
    const newName = prompt(// '|' type alias 
    "update your todo :", todos[i]);
    if (newName === null) {
        return;
    }
    todos[i] = newName;
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
}
