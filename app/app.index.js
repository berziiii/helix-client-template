'use strict';

// Require's Bootstrap JS
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js');
let router = require('./app.router.js');
let events = require('./app.events.js');

// Document Ready function
$(() => {
  router.Routing();
  events.registerEventHandlers();
});