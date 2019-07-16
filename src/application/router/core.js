import Router from "framework/alto/routing/router.js";
import TodosView from "application/ui/views/todos_view.js";
import UIControlsView from "application/ui/views/ui_controls_view.js";

let Routes = Router.extend({

    index: {
        component: TodosView,

        'ui-controls': {
            component: UIControlsView
        }

    }

});

export default Routes;