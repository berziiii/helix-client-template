'use strict';

let appTemplate = require('./app.component.hbs');

let renderApplicationTemplate = () => {
  $('main').html(appTemplate());
};

module.exports = {
  renderApplicationTemplate,
};