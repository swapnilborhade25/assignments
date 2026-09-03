const form = document.querySelector("#todoForm");
const todoName = document.querySelector("#todoName");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

// get todo's from local storage
let todos = JSON.parse(localStorage.getItem("todos")) || []; 

// render function
function render(){
    todoList.innerHTML = ""; // clear the existing list in html
    
    todos.forEach ((todo,i) =>{
        const li = document.createElement("li"); // it creates new html element in js not in webpage
        li.textContent = todo;
        // update button
        const updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.addEventListener("click" , () =>{
            updateToDo(i);
        });

        // delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click" , () => {
            deleteToDo(i);
        });

        li.appendChild(updateBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}


// add todo
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    const name = todoName.value.trim(); 
    if (name === ""){
        return;
    }
    todos.push (name); // add name to list
    localStorage.setItem("todos", JSON.stringify(todos)); //save list into local storage
    todoName.value ="";
    render();

});

// delete function 
function deleteToDo(i){
    todos.splice(i,1);
    localStorage.setItem("todos", JSON.stringify(todos));
    render ();
}
// update function
function updateToDo(i){
    const newName = prompt("update your todo :",todos[i]);
    todos [i] = newName;
    localStorage.setItem("todos",JSON.stringify(todos));
    render();
}
