'use strict';

let loadingTemplate = require('./loading.component.hbs');

let renderLoading = () => {
    $('app-template').html('');
    $('app-template').html(loadingTemplate());
}

module.exports = {
    renderLoading,
}