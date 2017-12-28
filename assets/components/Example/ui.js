'use strict';

let template = require('./template.hbs');

let renderExampleTemplate = function() {
    $('app-template').html('');
    $('app-template').html(template());
}
module.exports = {
    renderExampleTemplate,
}