import { todoList } from '../../../../shared/data-source';
import { Request, Response } from 'express';

export default class TasksController {
    public async create(request: Request, response: Response): Promise<Response> {
        /**
         * Validate data
         */
        const requiredFields = ['title'];
        
        for (let field of requiredFields) {
            if (!request.body[field]) {
                return response.status(500).json({ message: `${field} is required.` });
            }
        }
        
        /**
         * Prepare data to save
         */
        const { title, description } = request.body;
        const insertTaskData = {
            id: todoList.length + 1,
            title: title,
            description: description
        }

        /**
         * Save data on static list
         */
        todoList.push(insertTaskData);

        /**
         * Return operation status
         */
        return response.status(201).json(insertTaskData);
    }
}
