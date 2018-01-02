'use strict';

let template = require('./home.component.hbs');

let renderHomeTemplate = function() {
    $('app-template').html('');
    $('app-template').html(template());
}
module.exports = {
    renderHomeTemplate,
}