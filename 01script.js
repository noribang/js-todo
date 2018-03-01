/***************/
/* Version 1 */
/***************/
// 1. It should have a place to store todos.
// 2. It should have a way to display todos.
// 3. It should have a way to add new todos.
// 4. It should have a way to change/ update a todo.
// 5. It should have a way to delete a todo.

// 1. It should have a place to store todos.
var todos = ["no 1",  "no 2", "no 3"];
// 2. It should have a way to display todos.
console.log("My todos: ", todos, " is an array.")
// 3. It should have a way to add new todos.
todos.push('no4', 'no 5');
// 4. It should have a way to change/ update a todo.
todos[0] = 'replace first';
todos[3] = 'replace index 3';
// 5. It should have a way to delete a todo.
todos.splice(0, 1);
todos.splice(3, 1);
todos.splice(2, 3);