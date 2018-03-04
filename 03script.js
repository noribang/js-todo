/***************/
/* Version 3 */
/***************/
// V3 Requirements
// 1. It should store the todos array in an object.
// 2. It should have a displayTodos method.
// 3. It should have a addTodo method.
// 4. It should have a changeTodo method.
// 5. It should have a deleteTodo method.

// 1. It should store the todos array on an object.
var todoList = {
	todos: ["item one", "item two", "item three"]
}
// 2. It should have a displayTodos method.
var todoList = {
	todos: ["item one", "item two", "item three"],
	displayTodos: function() {
		console.log('My todos: ', this.todos);
	}
}
// 3. It should have a addTodo method.
var todoList = {
	todos: ["item one", "item two", "item three"],
	displayTodos: function() {
		console.log('My todos: ', this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	}	
}
// 4. It should have a changeTodo method.
var todoList = {
	todos: ["item one", "item two", "item three"],
	displayTodos: function() {
		console.log('My todos: ', this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	}	
}
// 5. It should have a deleteTodo method.
var todoList = {
	todos: ["item one", "item two", "item three"],
	displayTodos: function() {
		console.log('My todos: ', this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}	
}
