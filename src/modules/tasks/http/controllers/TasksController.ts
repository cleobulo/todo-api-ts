import { todoList } from '../../../../shared/data-source';
import { created, serverError } from '../../../../shared/http/helpers/http-helpers'
import { HttpStatus } from '../../../../shared/http/helpers/http-status-helpers'

import { Request, Response } from 'express';

export default class TasksController {
    public async create(request: Request, response: Response): Promise<Response> {
        /**
         * Validate data
         */
        const requiredFields = ['title'];
        
        for (let field of requiredFields) {
            if (!request.body[field]) {
                return response.status(HttpStatus.serverError).json(serverError(`${field} is required.`));
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
        return response.status(HttpStatus.created).json(created());
    }
}
