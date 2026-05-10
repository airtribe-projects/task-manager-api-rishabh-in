const { fetchTasks, fetchTaskById, addTask, updateTaskById, patchTaskById, deleteTaskById } = require("../services/task-manager.service");

const handleFetchTasks = (req, res) => {
    return res.send(fetchTasks())
}

const handleFetchTaskById = (req, res) => {
    const {id} = req?.params;
    return res.send(fetchTaskById(id));
}

const handleAddTasks = (req, res) => {
    const task = req.body;
    return res.send(addTask(task));
}

const handleUpdateTaskById = (req, res) => {
    const {updatedTask, id} = req.body;
    return res.send(updateTaskById(updatedTask));
}

const handlePatchTaskById = (req, res) => {
    const {patchTask, id} = req.body;
    return res.send(patchTaskById(patchTask))
}

const handleDeleteTaskById = (req, res) => {
    const {id} = req.params
    return res.send(deleteTaskById(id))
}

module.exports = {
    handleFetchTasks,
    handleFetchTaskById,
    handleAddTasks,
    handleUpdateTaskById,
    handlePatchTaskById,
    handleDeleteTaskById
}