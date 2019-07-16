import React from 'react';

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let View = ({
                action,
                className,
                children,
                isVisible = true
            }) => {

    return (
        action ?
            <div style={{ display: isVisible ? null : 'none' }} className={className} onClick={(event) => {action(event)}}>{children}</div>
            :
            <div style={{ display: isVisible ? null : 'none' }} className={className}>{children}</div>
    )
};

export default View;

