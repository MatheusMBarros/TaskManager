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
      // Notificar observadores sobre a adição de uma nova tarefa
      TaskObserver.notifyAddition(task);
      console.log("Task added successfully for " + task + ".");
  }

}

const taskManager = new TaskManagerSingleton();
Object.freeze(taskManager);

module.exports = taskManager;
