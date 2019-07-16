import React from 'react';
import View from "framework/alto/ui/view.js";
import css from "./todos_view.module.css";
import LabelView from "../../../framework/alto/ui/label_view";
import ButtonView from "../../../framework/alto/ui/button_view";
import ListView from "../../../framework/alto/ui/list_view";
import TasksController from "../../controllers/tasks_controller";
import TaskCell from "../components/cells/task_cell";
import SummaryController from "../../controllers/summary_controller";

let TodosView = () => {

    return(
        <View
            className={css.base}>

            <View
                className={css.toolbar}>

                <LabelView
                    className={css.toolbarTitle}
                    title={'Tasks'}
                />

                <ButtonView
                    className={css.toolbarAddButton}
                    title={'Add Item'}
                    action={TasksController.addTask}
                />

            </View>

            <View
                className={css.middleView}>

                <ListView
                    dataBinding={{controller: TasksController}}>

                    <TaskCell/>

                </ListView>

            </View>

            <View
                className={css.bottomToolbar}>

                <LabelView
                    className={css.bottomTitle}
                    titleBinding={{controller: SummaryController, key: 'message'}}
                />

            </View>

        </View>
    )

};

export default TodosView;