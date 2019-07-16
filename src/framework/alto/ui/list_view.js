import React from 'react';
import useController from "../data/use_controller";

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

const ListView = React.forwardRef(({
                                       children,
                                       data,
                                       dataBinding,
                                       className,
                                       id = 'id'
                                   }, ref) => {
    if (!data && !dataBinding) {
        return (
            <ul className={className} ref={ref}></ul>
        )
    }

    if (dataBinding) {
        let [get] = useController(dataBinding.controller);

        return (
            <ul className={className} ref={ref}>
                {get.data.map(hash =>
                    (React.cloneElement(children, {data: hash, key: hash[id]}))
                )}
            </ul>
        )
    }

    return (
        <ul className={className} ref={ref}>
            {data.map(hash =>
                (React.cloneElement(children, {data: hash, key: hash[id]}))
            )}
        </ul>
    )
});

export default ListView;

