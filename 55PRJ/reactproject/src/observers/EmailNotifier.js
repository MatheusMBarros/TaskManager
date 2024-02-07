const Observer = require('./Observer');

class EmailNotifier extends Observer {
  updateAddition(task) {
    console.log(`E-mail enviado para os observadores sobre a adição da tarefa: ${task.title}`);
  }
}

module.exports = EmailNotifier;
