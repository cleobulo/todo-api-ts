import { Router } from 'express';

import tasksRouter from '../../../modules/tasks/http/routes/TasksRoutes';

const routes = Router();

routes.use('/tasks', tasksRouter);

export default routes;
