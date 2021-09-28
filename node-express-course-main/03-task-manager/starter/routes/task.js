const express = require('express');

const router = express.Router();


//Importation des fonctions du controller
const{getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask} = require('../controllers/task')


router.route('/').get(getAllTasks).post(createTask);
router.route(':/id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router