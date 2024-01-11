const TaskFactory = require('../factories/TaskFactory');
const TaskManagerSingleton = require('../singleton/TaskManagerSingleton');

class TaskController {
    createTask(title, description, dueDate, category) {
        try{
            const newTask = TaskFactory.createTask(title, description, dueDate, category);
            TaskManagerSingleton.addTask(newTask);
            res.status(201).json(newTask);
    }catch(e){
            console.error(e) 
    }
    }   

    getTask(id){
        return id;
    }

}

module.exports = new TaskController();


// Factory Method