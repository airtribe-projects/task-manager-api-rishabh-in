const { tasks } = require("../../task.json");

const taskRecords = tasks.map(task => ({ ...task }));
let nextId = Math.max(...taskRecords.map(task => task.id), 0) + 1;

const fetchTasks = () => {
    return taskRecords;
};

const fetchTaskById = (id) => {
    const task = taskRecords.find(task => task.id === id);

    if (!task) {
        const error = new Error("Task not found");
        error.statusCode = 404;

        throw error;
    }

    return task;
};

const addTask = (record) => {
    const newRecord = { id: nextId, ...record };
    taskRecords.push(newRecord);
    nextId++;

    return newRecord;
};

const updateTaskById = (newRecord, id) => {
    const task = taskRecords.find(task => task.id === id);

    if (!task) {
        const error = new Error("Task not found");
        error.statusCode = 404;

        throw error;
    }

    task.title = newRecord.title;
    task.description = newRecord.description;
    task.completed = newRecord.completed;

    return task;
};

const patchTaskById = (newProps, id) => {
    const task = taskRecords.find(task => task.id === id);

    if (!task) {
        const error = new Error("Task not found");
        error.statusCode = 404;

        throw error;
    }

    Object.assign(task, newProps);

    return task;
};

const deleteTaskById = (id) => {
    const index = taskRecords.findIndex(
        task => task.id === id
    );

    if (index === -1) {
        const error = new Error("Task not found");
        error.statusCode = 404;

        throw error;
    }

    const deletedRecord = taskRecords.splice(index, 1);

    return deletedRecord[0];
};

module.exports = {
    fetchTasks,
    fetchTaskById,
    addTask,
    updateTaskById,
    patchTaskById,
    deleteTaskById
};
