'use strict';
// Utilize Lo-Dash utility library
var _ = require('lodash'),
    fs = require('fs');
// Load configurations
// Set the node environment variable if not set before
process.env.NODE_ENV = ~fs.readdirSync('./server/config/env').map(function(file) {
    return file.slice(0, -3);
}).indexOf(process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';
// Extend the base configuration in all.js with environment
// specific configuration
module.exports = _.extend(require('./env/all'), require('./env/' + process.env.NODE_ENV) || {}, {
    facebook: {
        clientID: '785833591440723',
        clientSecret: '57f7bbd5a382de427b972556bf342c3c',
        callbackURL: 'http://basic-erp-5346.herokuapp.com/'
    }
});