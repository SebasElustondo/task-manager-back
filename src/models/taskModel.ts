import { AppDataSource } from '../database/connection';
import { Task } from '../entities/task';
import { NotFoundError } from '../errors/NotFoundError';

export class TaskModel {
    private taskRepository = AppDataSource.getRepository(Task);

    async createTask(title: string, description: string): Promise<Task> {
        const newTask = this.taskRepository.create({ title, description, completed: false });
        return await this.taskRepository.save(newTask);
    }

    async findAllTasks(): Promise<Task[]> {
        return await this.taskRepository.find();
    }

    async updateTask(id: number, title?: string, description?: string, completed?: boolean): Promise<boolean> {
        const task = await this.taskRepository.findOne({ where: { id } });
        if (!task) throw new NotFoundError(`Task with ID ${id} not found`);
    
        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (completed !== undefined) task.completed = completed;
    
        await this.taskRepository.save(task);
        return true;
    }

    async removeTask(id: number): Promise<boolean> {
        const task = await this.taskRepository.findOne({ where: { id } });
        if (!task) throw new NotFoundError(`Task with ID ${id} not found`);

        const result = await this.taskRepository.delete(id);
        return result.affected !== 0;
    }
}