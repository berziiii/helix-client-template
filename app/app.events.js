'use strict';

let app =require('./app.global.js');
let api = require('./app.api.js');
let ui = require('./app.ui.js');
let Home = require('./Home/home.events.js');
let Example = require('./Example/example.events.js');

// *** USED TO UPDATE NAVIGO ROUTES FROM VIEWS THAT ARE DYNAMICALLY BUILT *** //
let updateViewLinks = () => {
  app.router.updatePageLinks();
};

let toggleNav = (route) => {
  $('.active-nav').removeClass('active-nav');
  $(`a[href='${route.path}']`).addClass('active-nav');
};

let renderHome = () => {
  Home.renderTemplate();
  Home.registerEvents();
};

let renderExample = () => {
  Example.renderTemplate();
  Example.registerEvents();
}

let generateView = function(route) {
  if (route.name === "Home") {
    renderHome();
  }
  if (route.name === "Example") {
    renderExample();
  }
  toggleNav(route);
  // *** Updates Page Links when new view is rendered *** //
  updateViewLinks();
};

let registerEventHandlers = () => {
  // Application Events
};


module.exports = {
 registerEventHandlers,
 generateView,
};