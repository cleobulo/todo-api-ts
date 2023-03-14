import { created, serverError } from '../../../../shared/http/helpers/http-helpers'
import { HttpStatus } from '../../../../shared/http/helpers/http-status-helpers'
import tasksRepository from '../repository/TasksRepository';

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
            title: title,
            description: description
        }

        /**
         * Save data on static list
         */
        tasksRepository.create(insertTaskData);

        /**
         * Return operation status
         */
        return response.status(HttpStatus.created).json(created());
    }
}
