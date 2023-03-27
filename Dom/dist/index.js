"use strict";
console.log("hello");
//type alisiing for a specific instance normally since we set the type to unknown you can not access length
//but by telling typescript to treat it as a string it runs how we would like 
let mystery = "Hello World";
console.log(mystery.length);
//! non null asertion operator adding to the end of decleration will mean that the html element is definitly there.
//here we have to cast todoInput as HTMLInputelement in order to gain access to its value property 
const btn = document.querySelector("button");
const todoInput = document.querySelector("input");
const form = document.querySelector(" form");
const list = document.querySelector("ul");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
readTodos();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = todoInput.value;
    const newTodo = {
        text: todoInput.value,
        completed: false
    };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    if (todoInput.value != "") {
        createTodo(newTodo);
    }
    todoInput.value = "";
});
function createTodo(todo) {
    let listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", (e) => {
        todo.completed = checkBox.checked;
        localStorage.setItem("todos", JSON.stringify(todos));
    });
    listItem.append(todo.text);
    listItem.append(checkBox);
    list.appendChild(listItem);
}
