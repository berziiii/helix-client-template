'use strict';

let app = require('../../scripts/app.js');

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