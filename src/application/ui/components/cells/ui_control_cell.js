import React from "react";
import CellView from "../../../../framework/alto/ui/cell_view";
import LabelView from "../../../../framework/alto/ui/label_view";
import View from "../../../../framework/alto/ui/view";
import css from "./ui_control_cell.module.css";

let UIControlCell = ({
                    data
                }) => {

    return (
        <CellView className={css.cell}>

            <LabelView
                title={data.name}
            />

            <View
                className={css.borderBottom}
            />

        </CellView>
    )

};

export default UIControlCell;