import React from "react";
import CellView from "../../../../framework/alto/ui/cell_view";
import LabelView from "../../../../framework/alto/ui/label_view";
import css from "./task_cell.module.css";

let TaskCell = ({
    data
                }) => {

    return (
        <CellView className={css.cell} action={() => {}}>

            <LabelView
                title={data.description}
                isEditable={true}
            />

        </CellView>
    )

};

export default TaskCell;