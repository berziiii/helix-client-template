'use strict';

let notFoundTemplate = require('./404/404.component.hbs');
let loadingTemplate = require('./Loading/loading.component.hbs');

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