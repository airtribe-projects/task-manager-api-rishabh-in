const { Router } = require('express');
const { handleFetchTasks, handleFetchTaskById, handleAddTasks, handleUpdateTaskById, handleDeleteTaskById } = require('../controller/task-manager.controller');
const { validateAddOrUpdateTask } = require('../middleware/validation.middleware');
const router = Router();

router.get('/tasks', handleFetchTasks);
router.get('/tasks/:id',validateId, handleFetchTaskById);
router.post('/tasks',validateAddOrUpdateTask, handleAddTasks);
router.put('/tasks/:id',validateId, validateAddOrUpdateTask, handleUpdateTaskById);
router.delete('/tasks/:id',validateId, handleDeleteTaskById)


module.exports = router;