'use strict';

let app = require('./app.global.js');

let exampleApi = function(data) {
  return $.ajax({
    method: "POST",
    url: app.apiUrl + '/examples',
    data,
  });
};

module.exports = {
  exampleApi,
};