import React, {useEffect, useState} from 'react';
import useController from "framework/alto/data/use_controller.js";
import View from "framework/alto/ui/view.js";

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let LabelView = ({
                     action,
                     className,
                     children,
                     doubleClick,
                     isEditable = false,
                     isEditMode = false,
                     isVisible = true,
                     title,
                     titleBinding,
                     titleDidChange = () => {
                     }
                 }) => {
    let [state, setState] = useState({
        isEditable,
        isEditMode
    });
    let ref = React.createRef();

    useEffect(() => {
        if (state.isEditMode) {
            ref.current.focus();
        }
    }, [state.isEditMode])

    if (titleBinding) {
        let [get] = useController(titleBinding.controller);

        return (
            <View
                className={className}
                action={action}
                isVisible={isVisible}>

            <span
                ref={ref}
                suppressContentEditableWarning={true}
                contentEditable={state.isEditMode}

                onBlur={isEditable ? () => {
                    setState({
                        isEditMode: false
                    });

                    titleBinding.controller.set(titleBinding.key, ref.current.innerHTML);
                } : null}

                onDoubleClick={isEditable ? () => {
                    setState({
                        isEditMode: true
                    });
                } : null}>

                {get.data[titleBinding.key]}

            </span>

                {children}

            </View>
        )
    }

    return (
        <View
            className={className}
            action={action}
            isVisible={isVisible}>

            <span
                ref={ref}
                suppressContentEditableWarning={true}
                contentEditable={state.isEditMode}

                onBlur={isEditable ? () => {
                    setState({
                        isEditMode: false
                    });

                    titleDidChange(ref.current.innerHTML)
                } : null}

                onDoubleClick={isEditable ? () => {
                    setState({
                        isEditMode: true
                    });
                } : null}>

                {title}

            </span>

            {children}

        </View>
    )
};

export default LabelView;