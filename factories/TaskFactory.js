// TaskFactory.js

const TaskModel = require("../models/TaskModel")
class TaskFactory {
  async createTask(title, description, dueDate, category) {
    const newTask = new TaskModel({ title, description, dueDate, category });
    await newTask.save();
    return TaskModel(title, description, dueDate, category)
  }
}

module.exports = new TaskFactory();