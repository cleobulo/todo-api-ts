import { created } from '../../../../shared/http/helpers/http-helpers';
import { todoList } from '../../../../shared/data-source';

export default class TasksController {
    public create(request: any) {
        /**
         * Define data to save
         */
        const { title, description } = request.body;
        const insertTaskData = {
            id: todoList.length + 1,
            title: title,
            description: description
        }

        /**
         * Save data on static list
         */
        todoList.push(insertTaskData);

        /**
         * Return operation status
         */
        return created();
    }
}
