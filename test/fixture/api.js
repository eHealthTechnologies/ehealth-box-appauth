"use strict";

var Path = require('path');
var appAuth = require('../../lib');

// Auth info for Box that every test will need.
//
var auth = require(Path.resolve('.credentials.js'));

module.exports = appAuth(auth);