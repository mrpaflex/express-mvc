const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos');



router.get('/', todosController.getTodosMethod);
router.post('/createtodo', todosController.createTodoMethod)

module.exports = router