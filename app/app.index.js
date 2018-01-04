'use strict';

// Require's Bootstrap JS
require('../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js');
let router = require('./app.router.js');
let events = require('./app.events.js');
let app = require('./app.ui.js');

// Document Ready function
$(() => {
  // Render Application Component
  app.renderApplicationTemplate();
  // Initiate Router
  router.Routing();
  // Application Event Handlers
  events.registerEventHandlers();
});