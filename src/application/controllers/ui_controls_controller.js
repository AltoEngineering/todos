import ArrayController from "../../framework/alto/data/array_controller";
import generateGuid from "../../framework/alto/foundation/guid";

let UIControlsController = ArrayController({

    data: [{
        id: generateGuid(),
        name: "ButtonView"
    }, {
        id: generateGuid(),
        name: "CellView"
    }, {
        id: generateGuid(),
        name: "LabelView"
    }, {
        id: generateGuid(),
        name: "ListView"
    }, {
        id: generateGuid(),
        name: "View"
    }]

});

export default UIControlsController;