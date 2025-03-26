import { TaskInput } from '../types';

export function validateTaskData(taskInput: TaskInput) {
    if (!taskInput.title) {
        throw new Error('Title is required');
    }
}