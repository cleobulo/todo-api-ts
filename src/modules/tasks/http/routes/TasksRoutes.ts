import { Router } from 'express';
import TasksController from '../controllers/TasksController';

const tasksRouter = Router();

/**
 * Declare controllers
 */

const tasksController = new TasksController();

/**
 * Define routers
 */

tasksRouter.post('/', tasksController.create);

// export tasksRouter
export default tasksRouter;
