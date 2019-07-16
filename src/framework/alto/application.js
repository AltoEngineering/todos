import CoreObject from "framework/alto/foundation/core_object.js";
import Console from "framework/alto/foundation/console.js";
import {default as router} from "application/router/core.js";
import Cookie from "framework/alto/data/cookie.js";

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let Application = CoreObject.extend({

    version: null,

    milestone: null,

    router: router,

    cookieName: null,

    cookieDomain: null,

    toString: function () {return 'Alto.Application'},

    init: function () {
        this.applicationWillLoad();
    },

    applicationWillLoad: function () {
        if(this.get('environment') === 'local' ) { Console.message('applicationWillLoad'); }
        this.verifyAuthentication();
    },

    verifyAuthentication: function () {
        this.verifyRouterIsPresent();
    },

    verifyRouterIsPresent: function () {
        if (this.get('router')) {
            this.set('router', this.get('router').create());
            this.fetchLocStrings();
        } else {
            this.malformedRouterProvided();
        }
    },

    malformedRouterProvided: function () {
        throw new Error('Malformed router provided.');
    },

    fetchLocStrings: function () {
        this.fetchLocStringsSuccess()
    },

    applicationDidLoad: function () {
        if(this.get('environment') === 'local' ) { Console.message('applicationDidLoad'); }
    },

    fetchLocStringsSuccess: function () {
        this.applicationDidLoad();
    },

    endSession: function () {
        var expirationDate = new Date(),
            cookie;

        expirationDate.setDate(expirationDate.getDate() - 30000);

        cookie = Cookie.create({
            name: this.get('cookieName'),
            value: '',
            domain: this.get('cookieDomain'),
            path: '/',
            expires: expirationDate,
            secure: false
        });
        cookie.write();

        window.location.reload();
    }


});

export default Application;