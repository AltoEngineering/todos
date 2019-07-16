import React from 'react';
import css from './ui_controls_view.module.css';
import View from "../../../framework/alto/ui/view";
import LabelView from "../../../framework/alto/ui/label_view";
import UIControlCell from "../components/cells/ui_control_cell";
import ListView from "../../../framework/alto/ui/list_view";
import UIControlsController from "../../controllers/ui_controls_controller";

let UIControlsView = () => {

    return (
        <View
            className={css.base}>

            <View
                className={css.masterView}>

                <View
                    className={css.toolbar}>

                    <LabelView
                        className={css.toolbarTitle}
                        title={'UI Controls'}
                        isEditable={true}
                    />

                </View>

                <View
                    className={css.middleView}>

                    <ListView
                        dataBinding={{controller: UIControlsController}}>

                        <UIControlCell />

                    </ListView>

                </View>

                <View
                    className={css.bottomToolbar} />

            </View>

        </View>
    )

};

export default UIControlsView;