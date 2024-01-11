const TaskObserver = require('../observers/TaskObserver');


class TaskManagerSingleton {
  constructor() {
      if (!TaskManagerSingleton.instance) {
          this.tasks = [];
          TaskManagerSingleton.instance = this;
      }
      return TaskManagerSingleton.instance;
  }

  addTask(task) {
      this.tasks.push(task);
      TaskObserver.notifyAddition(task);
      console.log("Task added successfully for " + task + ".");
  }

  listTasks() {
   return this.tasks
  }

}

const taskManager = new TaskManagerSingleton();
Object.freeze(taskManager);

module.exports = taskManager;
