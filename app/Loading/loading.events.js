'use strict';

let app = require('../app.global.js');
let ui = require('./loading.ui.js');

let renderLoadingTemplate = () => {
    ui.renderLoading();
};

let registerEvents = () => {

};

module.exports = {
    registerEvents,
    renderLoadingTemplate,
}