import React from 'react';

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let CellView = ({
                    action = () => {},
                    className,
                    children,
                    isVisible = true,
                    key
                }) => {

    return (
        <li
            key={key}
            style={{display: isVisible ? null : 'none'}}
            className={className}
            onClick={(event) => {action(event)}}
        >
            {children}
        </li>
    )
};

export default CellView;

