const TaskManagerSingleton = require('../singleton/TaskManagerSingleton');
const TaskFactory = require('../factories/TaskFactory')

class TaskController {
    createTask(req,res) {
        try{
            const task = req.body
            const newTask = TaskFactory.createTask(task);
            TaskManagerSingleton.addTask(newTask);
            Ta
            res.status(201).json(newTask);
    }catch(e){
            console.error(e) 
    }
    }   

    listTasks(req,res) {
       let tasks = TaskManagerSingleton.listTasks();
       res.status(200).json(tasks);

    }


}

module.exports = new TaskController();
