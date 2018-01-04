'use strict';

let app = require('./app.global.js');
let Loading = require('./loading/loading.events.js');
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

// let routeViewBuildout = (template) => {
let routeViewBuildout = (route) => {
  Loading.renderLoadingTemplate();
  events.generateView(route);
};

let generateRoutes = (router) => {
  let routeObj = {}
  ROUTES.forEach((route) => {
    routeObj[`${route.path}`] = function() { routeViewBuildout(route) };
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