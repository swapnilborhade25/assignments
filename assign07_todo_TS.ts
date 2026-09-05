
const form = document.querySelector("#todoForm") as HTMLFormElement;  // as HTMLFormElement
const todoName = document.querySelector("#todoName") as HTMLInputElement; // as => assertion
const addBtn = document.querySelector("#addBtn") as HTMLButtonElement;
const todoList = document.querySelector("#todoList") as HTMLUListElement;

// Get todos from local storage
let todos: string[] = JSON.parse(localStorage.getItem("todos") || "[]"); // define type ': string[]'

// Render function
function render(): void {  // given void as a return type
    todoList.innerHTML = ""; // clear the existing list in html

    todos.forEach((todo: string, i: number) => {  // todo=> string and i=> number

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
form.addEventListener("submit", (event: SubmitEvent) => {

    event.preventDefault();

    const name: string = todoName.value.trim();     // ': string ' added

    if (name === "") {
        return;
    }

    todos.push(name);

    localStorage.setItem("todos", JSON.stringify(todos));

    todoName.value = "";

    render();
});


// Delete function
function deleteToDo(i: number): void {  // write 'void'  and ': number'

    todos.splice(i, 1);

    localStorage.setItem("todos", JSON.stringify(todos));

    render();
}


// Update function
function updateToDo(i: number): void {      // write 'void' and ': number'

    const newName: string | null = prompt(      // '|' type alias 
        "update your todo :",
        todos[i]
    );

    if (newName === null) {
        return;
    }

    todos[i] = newName;

    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );

    render();
}

