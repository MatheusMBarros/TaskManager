// TaskPrototype.js
const TaskModel = require('../models/TaskModel')
 class TaskPrototype {
  createTaskCopy(existingTask, modifications) {
    const newTask = new TaskModel({
      title: existingTask.title,
      description: existingTask.description,
      dueDate: existingTask.dueDate,
      category: existingTask.category,
      ...modifications, // Aplica modificações fornecidas
    });

    return newTask;
  }
}

module.exports = new TaskPrototype();
