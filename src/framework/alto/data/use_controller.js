import {useEffect, useState} from 'react';

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

function useController(controller) {
    const [ state, set ] = useState(controller.data);

    useEffect(() => () => {
        controller.connections = controller.connections.filter(connection => connection !== set)
    }, []);

    if (!controller.connections.includes(set)) {
        controller.connections.push(set);
    }

    return [ state, controller.set ];
};

export default useController;
