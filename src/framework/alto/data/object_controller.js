// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let ObjectController = function (data) {

    // generate an instance of the controller //
    let objectController = {

        data,

        connections: [],

        reducer: (controller, payload) => {
            if (!payload.data) {payload = {data: {...payload}}};

            // merge the current state of controller.data w/ payload.data //
            let mergedData = Object.assign({}, controller.data, payload.data);

            // now update the current state of controller.data w/ the merged data
            return Object.assign({}, controller, {data: mergedData});
        },

        set(key, value) {
            if (!this) {return}

            // update self //
            if (this[`${key}WillChange`]) {
                this[`${key}WillChange`]()
            }

            this.data = this.reducer(this.data, {[key] : value});

            if (this[`${key}DidChange`]) {
                this[`${key}DidChange`]()
            }

            // update connections //
            this.connections.forEach(connection => connection(this.data));

            return this.data.data;
        },

        get(key = 'data') {
            if (key === 'data') {return this.data.data;}

            return this.data.data[key];
        }

    };

    // move all keys from controller.data except data and guid up one level in the chain //
    let controllerKeys = Object.keys(objectController.data);

    controllerKeys.forEach((key) => {
        if (key === 'data' || key === 'guid') {return}

        objectController[key] = objectController.data[key];
        delete objectController.data[key];
    });

    return objectController;
};

export default ObjectController;
