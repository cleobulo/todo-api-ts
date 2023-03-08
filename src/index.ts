import TasksController from "./modules/tasks/http/controllers/TasksController";

/**
 * Fake data for test
 */

const fakeRequestDataList = [
    {
        body: {
            title: 'any_title',
            description: 'any_description'
        }
    },
    {
        body: {
            title: 'any_title_other',
            description: 'any_description_other'
        }
    }
]

/**
 * Data handle
 */

for (let fakeDataItem of fakeRequestDataList) {
    const tasksController = new TasksController();
    const { status, message } = tasksController.create(fakeDataItem);
    console.log(`status: ${status}; message: ${message}`);
}
