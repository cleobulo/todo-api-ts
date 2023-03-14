import { Router } from 'express';

import { TaskCreateController, TasksListController } from '../controllers';

const tasksRouter = Router();

/**
 * Declare controllers
 */

const taskCreateController = new TaskCreateController();
const tasksListController = new TasksListController();

/**
 * Define routers
 */

tasksRouter.post('/', taskCreateController.handle);
tasksRouter.get('/', tasksListController.handle);

// export tasksRouter
export default tasksRouter;
