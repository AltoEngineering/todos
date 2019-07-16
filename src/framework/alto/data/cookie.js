import CoreObject from "../foundation/core_object";

// ==========================================================================
// Project: Alto.js - Web Application Architecture
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

const Cookie = CoreObject.extend({

    name: null,

    value: '',

    expries: null,

    path: null,

    domain: null,

    secure: '',

    isCookie: true,

    write: function () {
        var name = this.get('name'),
            value = this.get('value'),
            expires = this.get('expires'),
            path = this.get('path'),
            domain = this.get('domain'),
            secure = this.get('secure'),
            output = '',
            date;

        if (expires) {
            if (typeof expires === 'number' && expires > 0) {
                date = new Date();
                date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
            } else if (expires === 'expire') {
                date = new Date("January 01, 1900 01:15:00");
            } else if (expires.toUTCString && expires.toUTCString.apply) {
                date = expires;
            }

            if (date) output = "; expires=" + date.toUTCString();
        }

        if (path) output += '; path=' + path;
        if (domain) output += '; domain=' + domain;
        if (secure === true) output += '; secure';

        document.cookie = name + "=" + encodeURIComponent(value) + output;

        return this;
    },

    /**
     Finds a cookie that has been stored

     @param {String} name The name of the cookie
     @returns Alto.Cookie object containing name and value of cookie
     */
    find: function (name) {
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = String(cookies[i]).trim();
                if (cookie.substring(0, name.length + 1) === (name + "=")) {
                    return Cookie.create({
                        name: name,
                        value: decodeURIComponent(cookie.substring(name.length + 1))
                    });
                }
            }
        }
        return null;
    }

});

export default Cookie;
