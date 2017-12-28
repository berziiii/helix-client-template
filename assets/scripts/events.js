'use strict';

let app =require('./app.js');
let api = require('./api.js');
let ui = require('./ui.js');
let Home = require('../components/Home/events.js');
let Example = require('../components/Example/events.js');

// *** USED TO UPDATE NAVIGO ROUTES FROM VIEWS THAT ARE DYNAMICALLY BUILT *** //
let updateViewLinks = function() {
  app.router.updatePageLinks();
};

let generateView = function(route) {
  let template = route.template;
  if (template === "Home") {
    Home.registerEvents();
    Home.renderTemplate();
  }
  if (template === "Example") {
    Example.registerEvents();
    Example.renderTemplate();
  }
  // *** Updates Page Links when new view is rendered *** //
  app.router.updatePageLinks();
};

let registerEventHandlers = function() {
};


module.exports = {
 registerEventHandlers,
 generateView,
};