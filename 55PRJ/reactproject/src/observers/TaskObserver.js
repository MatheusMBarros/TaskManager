class TaskObserver  {
  static observers = [];

  static addObserver(observer) {
    TaskObserver.observers.push(observer);
    console.log('addObserver: ' + observer.constructor.name);
  }

  static removeObserver(observer) {
    const index = TaskObserver.observers.indexOf(observer);
    if (index !== -1) {
      TaskObserver.observers.splice(index, 1);
    }
  }

  static notifyAddition(task) {
    TaskObserver.observers.forEach(observer => {
      observer.updateAddition(task);
      console.log('Observer notificado;', observer.constructor.name);
    });
  }

  static updateAddition(task) {
    console.log(`E-mail enviado para os observadores sobre a adição da tarefa: ${task.title}`);
  }
}

module.exports = TaskObserver;
