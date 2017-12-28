'use strict';

let app = require('../../scripts/app.js');
let ui = require('./ui.js');
let api = require('./api.js');

let renderTemplate = () => {
    ui.renderHomeTemplate();
};

let registerEvents = () => {

};

module.exports = {
    registerEvents,
    renderTemplate,
}