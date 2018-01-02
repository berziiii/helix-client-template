'use strict';

let app = require('../app.global.js');
let ui = require('./home.ui.js');
let api = require('./home.api.js');

let renderTemplate = () => {
    ui.renderHomeTemplate();
};

let registerEvents = () => {
};

module.exports = {
    registerEvents,
    renderTemplate,
}