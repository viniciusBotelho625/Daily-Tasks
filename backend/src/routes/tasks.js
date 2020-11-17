const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const TasksController = require('../controllers/tasks-controller');
const CounterTasks = require('../controllers/counter-tasks');

router.get('/', login.mandatory, TasksController.getTasks, CounterTasks.counterTasks);
router.get('/concluidos/', login.mandatory, TasksController.getConcluidTasks);
router.post('/', login.mandatory, TasksController.postTasks);
router.delete('/:id', login.mandatory, TasksController.deleteTasks);
router.put('/', login.mandatory, TasksController.putTasks);

module.exports = router;