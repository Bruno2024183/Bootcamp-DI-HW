TodoList class

// todo.js

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  // Method to add a task
  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  // Method to mark a task as complete
  markTaskComplete(taskName) {
    const task = this.tasks.find(t => t.task === taskName);
    if (task) {
      task.completed = true;
    } else {
      console.log(`Task "${taskName}" not found.`);
    }
  }

  // Method to list all tasks
  listTasks() {
    if (this.tasks.length === 0) {
      console.log('No tasks available.');
    } else {
      this.tasks.forEach((task, index) => {
        console.log(
          `${index + 1}. ${task.task} - ${task.completed ? 'Completed' : 'Pending'}`
        );
      });
    }
  }
}

// app.js

import { TodoList } from './todo.js';

// Create an instance of TodoList
const myTodoList = new TodoList();

// Add tasks
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Complete project');
myTodoList.addTask('Read a book');

// Mark one task as complete
myTodoList.markTaskComplete('Complete project');

// List all tasks
console.log('Tasks:');
myTodoList.listTasks();

node app.js
