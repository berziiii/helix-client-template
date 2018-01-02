'use strict';

let app = require('../app.global.js');
let ui = require('./404.ui.js');

let renderNotFoundTemplate = () => {
    ui.renderNotFound();
};

let registerEvents = () => {

};

module.exports = {
    registerEvents,
    renderNotFoundTemplate,
}