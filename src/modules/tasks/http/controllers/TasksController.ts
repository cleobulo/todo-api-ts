import { created } from '../../../../shared/http/helpers/http-helpers';
import { todoList } from '../../../../shared/data-source';

export default class TasksController {
    public create(request: any) {
        const { title, description } = request.body;
        const insertTaskData = {
            id: todoList.length + 1,
            title: title,
            description: description
        }
        todoList.push(insertTaskData);
        return created();
    }
}
