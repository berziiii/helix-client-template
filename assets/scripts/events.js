'use strict';

let app =require('./app.js');
let api = require('./api.js');
let ui = require('./ui.js');
let Index = require('../components/Index/events.js');

// *** USED TO UPDATE NAVIGO ROUTES FROM VIEWS THAT ARE DYNAMICALLY BUILT *** //
let updateViewLinks = function() {
  app.router.updatePageLinks();
};

let generateView = function(route) {
  let template = route.template;
  debugger;
  if (template === "Index") {
    Index.registerEvents();
    Index.renderTemplate();
  }
};

let registerEventHandlers = function() {
};


module.exports = {
 registerEventHandlers,
 generateView,
};