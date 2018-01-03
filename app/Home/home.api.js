'use strict';

let app = require('../app.global.js');

let homeTemplateApi = function(data) {
  return $.ajax({
    method: "POST",
    url: app.apiUrl + '/api/home',
    data,
  });
};

module.exports = {
  homeTemplateApi,
};