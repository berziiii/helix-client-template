'use strict';

let notFoundTemplate = require('./404.component.hbs');

let renderNotFound = () => {
    $('app-template').html('');
    $('app-template').html(notFoundTemplate());
}

module.exports = {
    renderNotFound,
}