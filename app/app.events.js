'use strict';

let app =require('./app.global.js');
let api = require('./app.api.js');
let ui = require('./app.ui.js');
let Home = require('./Home/home.events.js');
let Example = require('./Example/example.events.js');

// *** USED TO UPDATE NAVIGO ROUTES FROM VIEWS THAT ARE DYNAMICALLY BUILT *** //
let updateViewLinks = function() {
  app.router.updatePageLinks();
};

let toggleNav = (route) => {
  $('.active-nav').removeClass('active-nav');
  $(`a[href='${route.url}']`).addClass('active-nav');
};

let generateView = function(route) {
  let template = route.template;
  if (template === "Home") {
    Home.renderTemplate();
    Home.registerEvents();
  }
  if (template === "Example") {
    Example.renderTemplate();
    Example.registerEvents();
  }
  toggleNav(route);
  // *** Updates Page Links when new view is rendered *** //
  app.router.updatePageLinks();
};

let registerEventHandlers = function() {
};


module.exports = {
 registerEventHandlers,
 generateView,
};