const handleFetchTasks = (req, res) => {
    return fetchTasks()
}

const handleFetchTaskById = (req, res) => {
    const {id} = req?.params;
    return fetchTaskById(id);
}

const handleAddTasks = (req, res) => {
    const task = req.body;
    return addTask(task);
}

const handleUpdateTaskById = (req, res) => {
    const {updatedTask, id} = req.body;
    return updateTaskById(updatedTask)
}

const handlePatchTaskById = (req, res) => {
    const {patchTask, id} = req.body;
    return patchTaskById(patchTask)
}

const handleDeleteTaskById = (req, res) => {
    const {id} = req.params
    return deleteTaskById(id)
}