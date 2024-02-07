/**
 * Interface para o observado.
 * @interface
 */
class Observable {
  /**
   * Método para registrar um observador.
   * @param {Observer} observer - O observador a ser registrado.
   */
  addObserver(observer) {}

  /**
   * Método para remover um observador.
   * @param {Observer} observer - O observador a ser removido.
   */
  removeObserver(observer) {}

  /**
   * Método para notificar todos os observadores sobre uma mudança de estado.
   */
  notifyObservers() {}
}

module.exports = Observable;
