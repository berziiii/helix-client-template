
'use strict';

let app = require('../app.global.js');
let ui = require('./example.ui.js');
let api = require('./example.api.js');

let renderTemplate = () => {
    ui.renderExampleTemplate();
};

let registerEvents = () => {

};

module.exports = {
    registerEvents,
    renderTemplate,
}
