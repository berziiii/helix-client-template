'use strict';

// Require's Bootstrap JS
require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js');
let router = require('../../lib/router.js');
let events = require('./events.js');

// Document Ready function
$(() => {
  router.Routing();
  events.registerEventHandlers();
});