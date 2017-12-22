'use strict';

let loadingTemplate = require('./template.hbs');

let renderLoading = () => {
    $('app-template').html('');
    $('app-template').html(loadingTemplate());
}

module.exports = {
    renderLoading,
}