console.log("Hello JavaScript Todo App");

const input = document.querySelector("#input");
const ol = document.querySelector("#ol");

const inputTodo = [];

function renderTodo() {   
    ol.innerHTML = "";
    for (let i = 0; i < inputTodo.length; i++) {
        ol.innerHTML += `
        <li>
            ${inputTodo[i]} 
            <button onclick="editTodo(${i})">Edit</button>
            <button onclick="deleteTodo(${i})">Delete</button>
        </li>`;
    }
}
function addTodo() {
    inputTodo.push(input.value);

    renderTodo();
    input.value = "";    
}
function editTodo(index) {
    console.log("Todo Task Edited", index);
    const updatedVal = prompt("Enter Updated Value Please", inputTodo[index]);
    inputTodo[index] = updatedVal
    
    renderTodo();
}
function deleteTodo(index) {
    console.log("Todo Task Deleted");
    inputTodo.splice(index, 1);

    renderTodo();
}