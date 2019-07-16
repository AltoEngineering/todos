import React from "react"
// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let ButtonView = ({
                      action = () => {},
                      className,
                      title,
                      isVisible = true
                  }) => {

    return (
        <button
            style={{ display: isVisible ? null : 'none' }}
            onClick={(event) => {event.stopPropagation(); action(event)}}
            className={className}>
            {title}
        </button>
    )
};

export default ButtonView;