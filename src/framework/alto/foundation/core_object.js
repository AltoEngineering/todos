import generateGuid from "framework/alto/foundation/guid.js";

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

class CoreObject {

    static create(...args) {
        let instance = new CoreObject();
        let mixin = {};

        [...args].forEach((obj) => {
            mixin = Object.assign({}, obj, mixin);
        });

        instance = Object.assign(instance, this, mixin);

        delete instance.create;
        delete instance.extend;
        instance.guid = generateGuid();

        instance.init();

        return instance;
    }

    static extend(...args) {
        const klass = new CoreObject();
        let mixin = {};

        [...args].forEach((obj) => {
            mixin = Object.assign({}, obj, mixin);
        });

        klass.create = this.create;
        klass.extend = this.extend;

        return Object.assign(klass, this, mixin);
    }

    init() {
    }

};

CoreObject = CoreObject.extend({

    toJSON: function () {
        let self = this;
        let json = {};

        Object.keys(self).forEach((key) => {
            if (key === 'set' || key === 'get' || key === 'guid' || this[key] instanceof Function) {return}

            json[key] = this[key];
        });

        return json;
    },

    set: function (key, value) {
        let self = this;

        if (self.get(key) === value) {
            return this;
        }

        // update self //
        if (self[`${key}WillChange`]) {
            self[`${key}WillChange`]()
        }


        if (key === 'data') {
            self = Object.assign({}, this, value);
        } else {
            self[key] = value;
        }

        if (self[`${key}DidChange`]) {
            self[`${key}DidChange`]()
        }

        return self;

    },

    get: function(key) {
        return this[key];
    }

});

export default CoreObject;
