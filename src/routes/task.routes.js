const express = require("express");
const { validationText } = require('../middlewares/task.validation');

const router = express.Router();

const {
  getTask,
  getTasks,
  createOneTask,
  patchTaskText,
  patchTaskCompleted,
  deleteTask,
  deleteTasks
} = require('../controllers/task.controller');

router.get('/tasks/:id', getTask);
router.get('/tasks', getTasks);
router.post('/tasks', validationText, createOneTask);
router.patch('/tasks/text/:id', validationText, patchTaskText);
router.patch('/tasks/completed/:id', patchTaskCompleted);
router.delete('/tasks/:id', deleteTask);
router.delete('/tasks', deleteTasks);

module.exports = router;