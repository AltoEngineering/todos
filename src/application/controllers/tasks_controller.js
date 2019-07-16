import ArrayController from "../../framework/alto/data/array_controller";
import SummaryController from "./summary_controller";
import generateGuid from "../../framework/alto/foundation/guid";

let TasksController = ArrayController({

    data: [{
        id: generateGuid(),
        description: "Build my first Alto applications",
        isDone: false
    }, {
        id: generateGuid(),
        description: "Build a really awesome Alto applications",
        isDone: false
    }, {
        id: generateGuid(),
        description: "Next, the world!",
        isDone: false
    }],

    addTask: () => {
        TasksController.add({
            id: generateGuid(),
            description: "New Tasks",
            isDone: false
        })
    },

    dataDidChange: () => {
        SummaryController.updateMessage(TasksController.get('data').length)
    }

});

export default TasksController;