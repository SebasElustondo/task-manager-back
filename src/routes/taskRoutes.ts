import { Router, Express } from 'express';
import TaskController from '../controllers/taskController';
import { validateTaskInput } from '../middleware/validateTaskInput';

const router = Router();
const taskController = new TaskController();

export function setRoutes(app: Express) { 
    app.use('/tasks', router);
    router.post('/', validateTaskInput, taskController.addTask.bind(taskController));
    router.get('/', taskController.getTasks.bind(taskController));
    router.get('/:id', taskController.findTaskById.bind(taskController));
    router.put('/:id', taskController.editTask.bind(taskController));
    router.delete('/:id', taskController.deleteTask.bind(taskController));
}