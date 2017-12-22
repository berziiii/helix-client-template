'use strict';

let app = require('../../scripts/app.js');
let ui = require('./ui.js');

let renderNotFoundTemplate = () => {
    ui.renderNotFound();
};

let registerEvents = () => {

};

module.exports = {
    registerEvents,
    renderNotFoundTemplate,
}