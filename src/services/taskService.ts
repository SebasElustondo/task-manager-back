import { TaskModel } from '../models/taskModel';
import { TaskInput } from '../types';
import { validateTaskData } from '../utils/validation';

export class TaskService {
    private taskModel: TaskModel;

    constructor() {
        this.taskModel = new TaskModel();
    }

    public async addTask(taskInput: TaskInput) {
        validateTaskData(taskInput);
        return await this.taskModel.createTask(taskInput.title, taskInput.description!, taskInput.completed!);
    }

    public async getTasks() {
        return await this.taskModel.findAllTasks();
    }

    public async findTaskById(id: string) {
        const taskId = Number(id);
        if (isNaN(taskId)) {
            throw new Error('Invalid task ID');
        }
        return await this.taskModel.findTaskById(taskId);
    }

    public async editTask(id: string, taskInput: TaskInput) {
        validateTaskData(taskInput);
        const { title, description, completed } = taskInput;
        return await this.taskModel.updateTask(Number(id), title, description, completed);
    }
    
    public async deleteTask(id: string) {
        return await this.taskModel.removeTask(Number(id));
    }
}