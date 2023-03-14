import { ICreateTask } from '../protocols/ICreateTask';
import { IResponseTask } from '../protocols/IResponseTask'

export interface ITasksUsecase {
    create: (createTask: ICreateTask) => IResponseTask;
}
