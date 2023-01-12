const {
  getTaskById,
  getAllTasks,
  createTask,
  updateTaskText,
  updateTaskCompleted,
  deleteTaskById,
  deleteAllTasks
} = require('../services/task.services');

const getTask = async (req, res) => {
  try {
    const task = await getTaskById(req.params.id);

    res.status(201).send(task);
  } catch (error) {
    res.status(404).send('Failed to find task');
  }
};

const getTasks = async (req, res) => {
  try {
    const allTasks = await getAllTasks();

    res.status(201).send(allTasks);
  } catch (error) {
    res.status(404).send('Failed to find tasks');
  }
};

const createOneTask = async (req, res) => {
  try {
    const task = await createTask(req.body);

    res.status(201).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const patchTaskText = async (req, res) => {
  try {
    const result = await updateTaskText(req.params.id, req.body.text);

    res.status(202).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const patchTaskCompleted = async (req, res) => {
  try {
    const result = await updateTaskCompleted(req.params.id)

    res.status(202).send(result);
  } catch (error) {
    res.status(500).send('Failed to patch task completed field');
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await deleteTaskById(req.params.id);

    res.status(202).send(result);
  } catch (error) {
    res.status(404).send('Task to delete not found');
  }
};

const deleteTasks = async (req, res) => {
  try {
    const result = await deleteAllTasks();

    res.status(202).send(result);
  } catch (error) {
    res.status(500).send('Failed to delete all tasks');
  }
};

module.exports = {
  getTask,
  getTasks,
  createOneTask,
  patchTaskText,
  patchTaskCompleted,
  deleteTask,
  deleteTasks
};
