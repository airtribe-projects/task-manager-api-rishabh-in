const {
    fetchTasks,
    fetchTaskById,
    addTask,
    updateTaskById,
    patchTaskById,
    deleteTaskById
} = require("../services/task-manager.service");

const handleFetchTasks = (req, res, next) => {
    try {
        const tasks = fetchTasks();

        return res.status(200).json(tasks);

    } catch (error) {
        next(error);
    }
};

const handleFetchTaskById = (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const task = fetchTaskById(id);

        return res.status(200).json(task);

    } catch (error) {
        next(error);
    }
};

const handleAddTasks = (req, res, next) => {
    try {
        const newTask = req.body;
        const task = addTask(newTask);
        return res.status(201).json(task);

    } catch (error) {
        next(error);
    }
};

const handleUpdateTaskById = (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const updatedTask = req.body;

        const task = updateTaskById(updatedTask, id);

        return res.status(200).json(task);

    } catch (error) {
        next(error);
    }
};

const handlePatchTaskById = (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const patchTask = req.body;

        const task = patchTaskById(patchTask, id);

        return res.status(200).json(task);

    } catch (error) {
        next(error);
    }
};

const handleDeleteTaskById = (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const deletedTask = deleteTaskById(id);

        return res.status(200).json(deletedTask);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    handleFetchTasks,
    handleFetchTaskById,
    handleAddTasks,
    handleUpdateTaskById,
    handlePatchTaskById,
    handleDeleteTaskById
};
