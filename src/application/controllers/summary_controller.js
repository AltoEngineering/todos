import ObjectController from "../../framework/alto/data/object_controller";

let SummaryController = ObjectController({

    data: {
        message: '3 tasks'
    },

    updateMessage: (count) => {
        if (count > 0) {
            SummaryController.set('message', `${count} tasks`);
        } else {
            SummaryController.set('message', `No tasks`);
        }
    }

});

export default SummaryController;