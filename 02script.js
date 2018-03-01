/***************/
/* Version 2 */
/***************/
// V2 Requirements
// 1. It should have a function to display todos.
// 2. It should have a function to add todos.
// 3. It should have a function to change todos.
// 4. It should have a function to delete todos.

// Store todos in an array.
var todos = ['item 1', 'item 2', 'item 3'];
// 1. It should have a function to display todos.
function displayTodos() {
	console.log('My todos: ', todos);
}
displayTodos();
// 2. It should have a function to add todos.

// function addTodo() {
// 	todos.push("new todo");
// 	displayTodos();
// }

// Customize function by adding parameter.
function addTodo(todo) {
	todos.push(todo);
	// Calling function inside of function
	displayTodos();
}
// Call function.
addTodo('add me');

// 3. It should have a function to change todos.
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}
changeTodo(0, 'new item');

// 4. It should have a function to delete todos.
function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}
deleteTodo(0);