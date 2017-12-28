'use strict';

let template = require('./template.hbs');

let renderHomeTemplate = function() {
    $('app-template').html('');
    $('app-template').html(template());
}
module.exports = {
    renderHomeTemplate,
}