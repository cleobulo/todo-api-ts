import { ControllerUsecase, ok, HttpStatus } from '../../../../shared';
import tasksRepository from '../repository/TasksRepository';

import { Request, Response } from 'express';

export class TasksListController implements ControllerUsecase {
    async handle(_: Request, response: Response): Promise<Response> {
        const tasksList = tasksRepository.list();
        return response.status(HttpStatus.ok).json(ok(tasksList));
    }
}
