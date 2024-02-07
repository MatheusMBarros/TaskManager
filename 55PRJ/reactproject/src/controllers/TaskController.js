const TaskModel = require('../models/TaskModel');
const TaskPrototype = require('../prototype/TaskPrototype');
const TaskObserver = require('../observers/TaskObserver')
const EmailNotifier = require('../observers/EmailNotifier'); // Supondo que EmailNotifier seja um observador de e-mail

class TaskController {
  constructor() {
    TaskObserver.addObserver(new EmailNotifier());
  }

  async createTask(req, res) {
    try {
      const { title, dueDate, description, category } = req.body;
      const newTask = new TaskModel(title, description, dueDate, category);
      
      TaskObserver.notifyAddition(newTask);

      res.status(201).json(newTask);
    } catch (e) {
      console.error(e);
      res.status(500).send("Erro interno no servidor");
    }
  }
  

  async listTasks(req, res) {
    try {
      const tasks = await TaskModel.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createTaskCopy(req, res) {
    try {
      const {taskId, modifications } = req.body;

      // Encontre a tarefa existente pelo ID
      const existingTask = await TaskModel.findById(taskId);

      if (!existingTask) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      // Crie uma cópia da tarefa existente com as modificações fornecidas
      const taskPrototype = new TaskPrototype();
      const newTask = taskPrototype.createTaskCopy(existingTask.toJSON(), modifications);

      // Não é necessário notificar os observadores ao criar uma cópia, pois isso já é feito ao criar uma nova tarefa

      res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  async deleteTask(req, res) {
    try {
      const taskId = req.params._id;
      await TaskModel.deleteOne(taskId);;

      res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}

module.exports = new TaskController();
