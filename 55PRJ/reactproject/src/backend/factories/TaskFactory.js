const TaskModel = require("../models/TaskModel");

class TaskFactory {
  async createTask(title, description, dueDate, category) {
    const newTask = new TaskModel({ title, description, dueDate, category });
    await newTask.save();
    return newTask; // Corrigido para retornar a instância criada, não invocar a classe TaskModel diretamente
  }
}

module.exports = new TaskFactory();
