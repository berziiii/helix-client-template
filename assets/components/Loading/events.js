'use strict';

let app = require('../../scripts/app.js');
let ui = require('./ui.js');

let renderLoadingTemplate = () => {
    ui.renderLoading();
};

let registerEvents = () => {

};

module.exports = {
    registerEvents,
    renderLoadingTemplate,
}