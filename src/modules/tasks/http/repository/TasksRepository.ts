import { ICreateTask } from '../../protocols/ICreateTask';
import { IResponseTask } from '../../protocols/IResponseTask';
import { ITasksUsecase } from '../../usecases/TasksUsecase';
import { todoList } from '../../../../shared/data-source';

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
