'use strict';

let app = require('../assets/scripts/app.js');
let Loading = require('../assets/components/Loading/events.js');
let notFound = require('../assets/components/404/events.js');
let events = require('../assets/scripts/events.js');
let Navigo = require('../node_modules/navigo/lib/navigo.js');
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
    '/': function() { routeViewBuildout({name:'Home'}); },
    '/example': function() { routeViewBuildout({name:'Example'}); },
  })
  .resolve();
  router.notFound(function () {notFound.renderNotFoundTemplate();});
  getInitialRoute(getCurrentUrl());
};

module.exports = {
  Routing,
};