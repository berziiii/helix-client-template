'use strict';

let app = require('./app.global.js');
let Loading = require('./Loading/loading.events.js');
let notFound = require('./404/404.events.js');
let events = require('./app.events.js');
let Navigo = require('../node_modules/navigo/lib/navigo.js');
let ROUTES = require('./routes.js');
let root = app.hostUrl;
let router;

let getCurrentUrl = () => {
  return window.location.pathname;
};

let getInitialRoute = (route) => {
  router.navigate(route);
};

let routeViewBuildout = (template) => {
  Loading.renderLoadingTemplate();
  let route = {
    url: getCurrentUrl(),
    template: template.name
  };
  events.generateView(route);
};

let generateRoutes = (router) => {
  let routeObj = {}
  ROUTES.forEach((route) => {
    routeObj[`${route.path}`] = function() { routeViewBuildout({name: `${route.name}`}) };
  });
  router.on(routeObj).resolve();
}

let Routing = function() {
  router = new Navigo(root);
  app.router = router;
  generateRoutes(router);
  router.notFound(function () {notFound.renderNotFoundTemplate();});
  getInitialRoute(getCurrentUrl());
};

module.exports = {
  Routing,
};