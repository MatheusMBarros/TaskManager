// TaskFactory.js
class TaskFactory {
  createTask(title, description, dueDate, category) {
      return new TaskModel(title, description, dueDate, category);
  }
}

module.exports = new TaskFactory();