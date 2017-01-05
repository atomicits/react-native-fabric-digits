'use strict';

var NativeModules = require("react-native").NativeModules;
var DigitsLoginButton = require('./DigitsLoginButton');
var DigitsLogoutButton = require('./DigitsLogoutButton');

module.exports.DigitsLoginButton = DigitsLoginButton;
module.exports.DigitsLogoutButton = DigitsLogoutButton;
module.exports.DigitsManager = NativeModules.DigitsManager;
