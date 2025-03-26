import { Request, Response } from 'express';
import { TaskService } from '../services/taskService';
import { NotFoundError } from '../errors/NotFoundError';

class TaskController {
    private taskService: TaskService;

    constructor() {
        this.taskService = new TaskService();
    }

    public addTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const taskData = req.body;
            const newTask = await this.taskService.addTask(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: 'Error adding task', error });
        }
    };

    public getTasks = async (req: Request, res: Response): Promise<void> => {
        try {
            const tasks = await this.taskService.getTasks();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tasks', error });
        }
    };

    public findTaskById = async (req: Request, res: Response): Promise<void> => {
        try {
            const taskId = req.params.id;
            const updatedTask = await this.taskService.findTaskById(taskId);
            res.status(200).json(updatedTask);
        } catch (error) {
            if (error instanceof NotFoundError) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error', error });
            }
        }
    }

    public editTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const taskId = req.params.id;
            const taskData = req.body;
            const updatedTask = await this.taskService.editTask(taskId, taskData);
            res.status(200).json(updatedTask);
        } catch (error) {
            if (error instanceof NotFoundError) {
                res.status(404).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error', error });
            }
        }
    };

    public deleteTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const taskId = req.params.id;
            await this.taskService.deleteTask(taskId);
            res.status(204).send();
        } catch (error) {
            if (error instanceof NotFoundError) {
                res.status(404).json({ message: error.message });
            } else {
            res.status(500).json({ message: 'Error deleting task', error });
            }
        }
    };
}

export default TaskController;