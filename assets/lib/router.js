'use strict';

let app = require('../scripts/app.js');
let Loading = require('../components/Loading/events.js');
let notFound = require('../components/404/events.js');
let events = require('../scripts/events.js');
let Navigo = require('../../node_modules/navigo/lib/navigo.js');
let root = app.hostUrl;
let router;

let getCurrentUrl = function() {
  return window.location.pathname;
};

let getInitialRoute = function(route) {
  router.navigate(route);
};

let routeViewBuildout = function(template) {
  Loading.renderLoadingTemplate();
  let route = {
    url: getCurrentUrl(),
    template: template.name
  };
  events.generateView(route);
};

let Routing = function() {
  router = new Navigo(root);
  app.router = router;
  router.on({
    '/': function() { routeViewBuildout({name:'Index'}); },
  })
  .resolve();
  router.notFound(function () {notFound.renderNotFoundTemplate();});
  getInitialRoute(getCurrentUrl());
};

module.exports = {
  Routing,
};