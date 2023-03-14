import { ICreateTask, IResponseTask } from '../../protocols';
import { ITasksUsecase } from '../../usecases';
import { todoList } from '../../../../shared';

export class TasksRepository implements ITasksUsecase {
    create (createTask: ICreateTask): IResponseTask {
        todoList.push(createTask);
        return {
            id: todoList.indexOf(createTask) + 1,
            title: createTask.title,
            description: createTask.description
        }
    };
}

const tasksRepository = new TasksRepository();

export default tasksRepository;
