import { Request, Response, NextFunction } from 'express';

export function validateTaskInput(req: Request, res: Response, next: NextFunction): void {
    const { title } = req.body;
    if (!title) {
        res.status(400).json({ message: 'Title is required' });
        return;
    }
    next();
}