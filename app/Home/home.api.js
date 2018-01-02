'use strict';

let app = require('../app.global.js');

let exampleTemplateApi = function(data) {
  return $.ajax({
    method: "POST",
    url: app.apiUrl + '/examples',
    data,
  });
};

module.exports = {
  exampleTemplateApi,
};