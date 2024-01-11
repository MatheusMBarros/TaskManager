
class TaskView {
  displayTask(task) {
      console.log(`Tarefa: ${task.title} - Descrição: ${task.description} - Categoria: ${task.category}`);
  }
}

module.exports = TaskView;