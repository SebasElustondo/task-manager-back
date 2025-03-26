export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface TaskInput {
    title: string;
    description?: string;
    completed?: boolean;
}