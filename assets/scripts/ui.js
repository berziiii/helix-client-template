'use strict';

let notFoundTemplate = require('../components/404/template.hbs');
let loadingTemplate = require('../components/Loading/template.hbs');
let indexTemplate = require('../components/Index/template.hbs');

let renderNotFound = function() {
  $('app-template').html(' ');
  $('app-template').html(notFoundTemplate());
};

let renderLoading = function() {
  $('app-template').html(' ');
  $('app-template').html(loadingTemplate());
};

module.exports = {
  renderNotFound,
  renderLoading,
};