// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let ArrayController = function (data) {

    // generate an instance of the controller //
    let arrayController = {

        data,

        connections: [],

        reducer: (controller, payload) => {
            if (!payload.data) {payload = {data: payload}};

            // now update the current state of controller.data w/ the merged data
            return Object.assign({}, controller, {data: payload.data});
        },

        set(key, value) {
            // update self //
            if (this[`${key}WillChange`]) {
                this[`${key}WillChange`]()
            }

            this.data = this.reducer(this.data, {data :  value})

            if (this[`${key}DidChange`]) {
                this[`${key}DidChange`]()
            }

            // update connections //
            this.connections.forEach(connection => connection(this.data));

            return this.data.data;
        },

        get() {
            return this.data.data;
        },

        add(record) {
            let data = this.get();

            data.push(record);

            return this.set('data', data);
        }

    };

    // move all keys from controller.data except data and guid up one level in the chain //
    let controllerKeys = Object.keys(arrayController.data);

    controllerKeys.forEach((key) => {
        if (key === 'data' || key === 'guid') {return}

        arrayController[key] = arrayController.data[key];
        delete arrayController.data[key];
    });

    return arrayController;
};

export default ArrayController;