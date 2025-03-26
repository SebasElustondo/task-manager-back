import { DataSource } from 'typeorm';
import { Task } from '../entities/task';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: process.env.DATABASE_TYPE as any,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    entities: [Task],
});

export const connectToDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
};