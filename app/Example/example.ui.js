'use strict';

let template = require('./example.component.hbs');

let renderExampleTemplate = function() {
    $('app-template').html('');
    $('app-template').html(template());
}
module.exports = {
    renderExampleTemplate,
}