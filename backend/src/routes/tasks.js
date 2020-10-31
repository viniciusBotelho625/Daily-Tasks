const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const TasksController = require('../controllers/tasks-controller');


router.get('/', login.mandatory, TasksController.getTasks);
router.get('/concluidos/', login.mandatory, TasksController.getConcluidTasks);
router.post('/', login.optional, TasksController.postTasks);
router.delete('/', login.mandatory, TasksController.deleteTasks);
router.put('/', login.mandatory, TasksController.putTasks);

// Contador de lembretes
// router.get('/', (rq, res, next) =>{
//     mysql.getConnection((error, conn) => {
//         if (error) { return res.status(500).send({ error: error })}
//         conn.query(
//             `SELECT count(*)
//             FROM lembretes AS L
//             JOIN usuarios AS U ON u.id = L.usuario_id
//             WHERE L.concluido = FALSE AND U.id = 1`
//         )
//     })
// });


module.exports = router;