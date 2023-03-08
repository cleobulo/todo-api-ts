import { created, serverError } from '../../../../shared/http/helpers/http-helpers';
import { todoList } from '../../../../shared/data-source';
import { HttpRequest } from '../../../../shared/http/protocols/request'
import { HttpResponse } from '../../../../shared/http/protocols/response'

export default class TasksController {
    public create(request: HttpRequest): HttpResponse {
        /**
         * Validate data
         */
        const requiredFields = ['title'];
        
        for (let field of requiredFields) {
            if (!request.body[field]) {
                return serverError(`${field} is required`);
            }
        }
        
        /**
         * Prepare data to save
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
