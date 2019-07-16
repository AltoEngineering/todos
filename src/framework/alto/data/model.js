class Model {

    static toString() {
        return `Alto.Model`
    }

    static create(...args) {
        let instance = new Model();
        let mixin = {};

        [...args].forEach((obj) => {
            mixin = Object.assign({}, obj, mixin);
        });

        instance = Object.assign(instance, this, mixin);

        delete instance.create;
        delete instance.extend;

        instance.init();

        return instance;
    }

    static extend(...args) {
        const klass = new Model();
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

export default Model;