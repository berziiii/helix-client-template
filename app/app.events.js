'use strict';
const Home = require('./Home/home.events.js');
const Example = require('./Example/example.events.js');
const app =require('./app.global.js');
const api = require('./app.api.js');
const ui = require('./app.ui.js');

// *** USED TO UPDATE NAVIGO ROUTES FROM VIEWS THAT ARE DYNAMICALLY BUILT *** //
const updateViewLinks = () => {
  app.router.updatePageLinks();
};

const toggleNav = (route) => {
  $('.active-nav').removeClass('active-nav');
  $(`a[href='${route.path}']`).addClass('active-nav');
};

const generateView = function(route) {
  // Renders the view by Route Name
  eval(`${route.name}.renderTemplate()`);
  eval(`${route.name}.registerEvents()`);
  // Highlights Navigation if present with correct option
  toggleNav(route);
  // *** Updates Page Links when new view is rendered *** //
  updateViewLinks();
};

const registerEventHandlers = () => {
  // Application Events
};

module.exports = {
 registerEventHandlers,
 generateView,
};


