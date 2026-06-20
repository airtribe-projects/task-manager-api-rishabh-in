const { Router } = require('express');
const { handleFetchTasks, handleFetchTaskById, handleAddTasks, handleUpdateTaskById, handlePatchTaskById, handleDeleteTaskById } = require('../controller/task-manager.controller');
const { validateAddOrUpdateTask } = require('../middleware/validation.middleware');
const router = Router();

router.get('/tasks', handleFetchTasks);
router.get('/tasks/:id', handleFetchTaskById);
router.post('/tasks',validateAddOrUpdateTask, handleAddTasks);
router.put('/tasks/:id', validateAddOrUpdateTask, handleUpdateTaskById);
router.patch('/tasks/:id', handlePatchTaskById)
router.delete('/tasks/:id', handleDeleteTaskById)


module.exports = router;