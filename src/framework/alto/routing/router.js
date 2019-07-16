import React from 'react';
import ReactDOM from 'react-dom';
import CoreObject from "../foundation/core_object";
import {default as router} from 'application/router/core.js';

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let Router = CoreObject.extend({

    init: () => {
        // listen for popstate event
        window.addEventListener("popstate", () => {router.routerRecievedRequest(router.route())}, true);
        router.routerRecievedRequest(router.route())
    },

    route: (path = window.location.pathname || "") => {

        if (path.charAt(0) === '#') {
            path = path.slice(1, path.length)
        }

        if (path.indexOf('?') > -1) {
            path = path.substr(0, path.indexOf('?'));
        }

        if (path.charAt(path.length - 1) === '/') {
            path = path.slice(0, path.length -1)
        }

        if (path === '/index' || path === '/') {
            path = ''
        }

        return path;
    },

    parseRoutePath: (path) => {
        let pathSplit = path.split('/');
        let routeObject = router.index || null;
        let count = 1;
        if (!routeObject) {throw new Error('All routes should be declared under an index route.  Add index: { *your routes* } to router.')}

        if (pathSplit[1] === 'index') {pathSplit.splice(1, 1)}

        // only when our path is more than '/' should we walk more
        while (count < pathSplit.length) {
            // (if) continue walking the route object path
            // (else if) route not found... but we did find a potential path... lets assume it is a unique_id being passed in
            if (routeObject[pathSplit[count]]) {
                routeObject = routeObject[pathSplit[count]];
            } else if (!router[pathSplit[count]] && !routeObject[pathSplit[count]] && routeObject['uniqueId']) {
                routeObject = routeObject['uniqueId'];
            } else {
                let location = router.route(path);
                throw new Error(`Route '${location}' not found`);
            }

            count++;
        }

        return routeObject;
    },

    routerRecievedRequest: (path) => {
        let routeObject = router.parseRoutePath(path);

        // handle secure route
        if (routeObject.isSecure) {
            return
        }

        // handle inverse route
        if (routeObject.isInverse) {
            return
        }

        // display component && invoke route method
        if (routeObject.component && routeObject.action) {
            return
        }

        // display component
        if (routeObject.component) {
            router.displayComponent(routeObject);
            return
        }

        // invoke route method
        if (routeObject.action) {
            router.invokeRouteAction(routeObject);
            return
        }

        throw new Error('Malformed route object found.  Routes requires one of the following: component, action');

    },

    displayComponent: (routeObject) => {
        ReactDOM.render(<routeObject.component/>, document.getElementById('root'));
    },

    invokeRouteAction: (routeObject) => {

    }

});

export default Router;