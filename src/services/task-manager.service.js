const taskRecords = [];

const fetchTasks = () => {
    return taskRecords;
}

const fetchTaskById = (id) => {
    return taskRecords.find((task) => task.id === id);
}

const addTask = (record) => {
    taskRecords.push(record);
}

const updateTaskById = (newRecord, id) => {
    let task = taskRecords.find((task) => task.id === id);
    if (task) {
        task.title = newRecord.title;
        task.description = newRecord.description;
        task.completed = newRecord.completed

        //or
        // Object.assign(task, newRecord)
    }
    return task
}

const patchTaskById = (newProps, id) => {
    let task = taskRecords.find((task) => task.id === id);
    if (task) {
        Object.assign(task, ...newProps)
    }
    return task
}


const deleteTaskById = (id) => {
    const index = taskRecords.findIndex((task) => task.id === id);
    let deletedRecord;
    if(index) {
        deletedRecord = taskRecords.splice(index, 1);
    }
    return deletedRecord
}

module.exports = {
    fetchTasks,
    fetchTaskById,
    addTask,
    updateTaskById,
    patchTaskById,
    deleteTaskById
}
