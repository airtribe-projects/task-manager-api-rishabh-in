const {Router} = require('express')
const router = Router();

router.get('/tasks', handleFetchTasks);
router.get('/tasks/:id', handleFetchTaskById);
router.post('tasks', handleAddTasks);
router.put('/tasks/:id', handleUpdateTaskById);
router.patch('/tasks/:id', handlePatchTaskById)
router.delete('/tasks/:id', handleDeleteTaskById)


module.exports = router;