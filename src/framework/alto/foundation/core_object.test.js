import CoreObject from "./core_object";

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

describe('CoreObject Tests', () => {

    test('CoreObject Class should have the following enumerable keys', () => {
        let Klass = CoreObject.extend();
        let keys = Object.keys(Klass);

        expect(keys).toEqual(["create", "extend", "toJSON", "set", "get"]);
    });

    test('CoreObject instance should have the following enumerable keys', () => {
        let instance = CoreObject.create();
        let keys = Object.keys(instance);

        expect(keys).toEqual(["toJSON", "set", "get", "guid"]);
    });

    test('CoreObject instance should instantiate w/ default values', () => {
        let pet = CoreObject.create({
            firstName: 'Remy',
            lastName: 'Eubanks',
            type: 'dog',
            age: null
        });

        expect(pet.get('firstName')).toEqual("Remy");
    });

    test('CoreObject instance set() should update a property', () => {
        let pet = CoreObject.create({
            firstName: 'Remy',
            lastName: 'Eubanks',
            type: 'dog',
            age: null
        });

        pet.set('age', 5);

        expect(pet.get('age')).toEqual(5);
    });

    test('CoreObject instance set() should update multiple properties w/o changing non-touched values', () => {
        let pet = CoreObject.create({
            firstName: 'Remy',
            lastName: 'Eubanks',
            type: 'dog',
            age: null,
            isFast: false
        });

        pet = pet.set('data', {age: 5, isFast: true});
        expect(pet.get('firstName')).toEqual('Remy');
        expect(pet.get('lastName')).toEqual('Eubanks');
        expect(pet.get('type')).toEqual('dog');
        expect(pet.get('age')).toEqual(5);
        expect(pet.get('isFast')).toEqual(true);
    });

    test('CoreObject instance toJSON() should return a serialized hash identical to the current state', () => {
        let pet = CoreObject.create({
            firstName: 'Remy',
            lastName: 'Eubanks',
            type: 'dog',
            age: null,
            isFast: false
        });

        let expectations = {
            firstName: 'Remy',
            lastName: 'Eubanks',
            type: 'dog',
            age: 5,
            isFast: true
        };

        pet = pet.set('data', {age: 5, isFast: true});
        expect(pet.toJSON()).toEqual(expectations);
    });

});