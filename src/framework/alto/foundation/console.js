import CoreObject from './core_object.js';

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================


let Console = CoreObject.create({

    warnColor: '#FFA500',

    errorColor: '#ff0000',

    messageColor: '#0099FF',

    log: function (msg, color) {
        console.log("%c" + msg, "color:" + color + ";");
    },


    message: function (msg) {
        console.log("%c" + msg, "color:" + this.get('messageColor') + ";");
    },

    error: function(msg) {
        throw Error.call(this, msg);
    }

});

export default Console;