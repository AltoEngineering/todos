import ObjectController from "framework/alto/data/object_controller";

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

describe('ObjectController Tests', () => {

    test('ObjectController should have the following enumerable keys', () => {
        let instance = ObjectController({});
        let keys = Object.keys(instance);

        expect(keys).toEqual(["data", "connections", "reducer", "set", "get"]);
    });

    test('ObjectController should instantiate w/ default values', () => {
        let pet = ObjectController({

            data: {
                firstName: 'Remy',
                lastName: 'Eubanks',
                type: 'dog',
                age: null
            }

        });

        expect(pet.get('firstName')).toEqual("Remy");
    });

    test('CoreObject instance set() should update a property', () => {
        let pet = ObjectController({

            data: {
                firstName: 'Remy',
                lastName: 'Eubanks',
                type: 'dog',
                age: null
            }

        });

        pet.set('age', 5);

        expect(pet.get('age')).toEqual(5);
    });

    test('CoreObject instance set() should update multiple properties w/o changing non-touched values', () => {
        let pet = ObjectController({

            data: {
                firstName: 'Remy',
                lastName: 'Eubanks',
                type: 'dog',
                age: null,
                isFast: false
            }

        });

        pet.set('data', {age: 5, isFast: true});

        expect(pet.get('firstName')).toEqual('Remy');
        expect(pet.get('lastName')).toEqual('Eubanks');
        expect(pet.get('type')).toEqual('dog');
        expect(pet.get('age')).toEqual(5);
        expect(pet.get('isFast')).toEqual(true);
    });

});