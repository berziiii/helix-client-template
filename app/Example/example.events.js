
'use strict';

let app = require('../app.global.js');
let ui = require('./example.ui.js');
let api = require('./example.api.js');

let renderTemplate = () => {
    ui.renderExampleTemplate();
};

let getExamples = () => {
    api.getExamples()
    .then((data) => {
        ui.renderExamples(data);
    })
    .catch((err) => {
        console.error(err);
    })
};

let registerEvents = () => {
    getExamples();
};

module.exports = {
    registerEvents,
    renderTemplate,
}
