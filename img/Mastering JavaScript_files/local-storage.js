//Local Storage

// localStorage.setItem("todo", "Leonel is Here");
// localStorage.setItem("user", "leo");

// //Sessions Storage
// sessionStorage.setItem("user", "Whats popping");

// //localStorage.clear();
// localStorage.clear();

//Getting stuff back
// const user = localStorage.getItem("user");

// console.log(user);
// console.log(typeof user);

const todoList = ["I need to go to the gym", "need to go to work", "put gas"];

localStorage.setItem("todos", JSON.stringify(todoList));

const retrieve = JSON.parse(localStorage.getItem("todos"));

console.log(retrieve);

// //Object
// const todoList2 = {
//   todo1: "GYM",
//   todo2: "Eat",
// };
