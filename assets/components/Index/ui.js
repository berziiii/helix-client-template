'use strict';

let template = require('./template.hbs');

let renderIndexTemplate = function() {
    debugger;
    $('app-template').html('');
    $('app-template').html(template());
}
module.exports = {
    renderIndexTemplate,
}