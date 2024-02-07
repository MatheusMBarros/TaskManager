/**
 * Interface para os observadores.
 * @interface
 */
class Observer {
  /**
   * Método chamado quando o observado notifica uma adição.
   * @param {Object} task - A nova tarefa adicionada.
   */
  updateAddition(task) {}
}

module.exports = Observer;
