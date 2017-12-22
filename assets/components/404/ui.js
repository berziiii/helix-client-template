'use strict';

let notFoundTemplate = require('./template.hbs');

let renderNotFound = () => {
    $('app-template').html('');
    $('app-template').html(notFoundTemplate());
}

module.exports = {
    renderNotFound,
}