import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database/connection';
import { setRoutes } from './routes/taskRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); 

connectToDatabase().then(() => {
    setRoutes(app);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
});