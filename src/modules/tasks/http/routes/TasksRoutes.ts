import { Router } from 'express';

import TaskCreateController from '../controllers/TaskCreateController';

const tasksRouter = Router();

/**
 * Declare controllers
 */

const taskCreateController = new TaskCreateController();

/**
 * Define routers
 */

tasksRouter.post('/', taskCreateController.handle);

// export tasksRouter
export default tasksRouter;
