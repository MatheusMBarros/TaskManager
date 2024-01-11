const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const CategoryController = require('../controllers/CategoryController'); // Importe antes do uso


// Rotas para Category
router.get('/categories', CategoryController.listCategory);
router.post('/categories', CategoryController.createCategory);
router.get('/categories/:categoryId', CategoryController.getCategory);

// Rotas para Task
router.post('/tasks', TaskController.createTask);
router.get('/tasks/:taskId', TaskController.getTask);

module.exports = router;
