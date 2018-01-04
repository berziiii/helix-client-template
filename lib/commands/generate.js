'use strict';

const fs = require('fs');
const api = require('../helpers/api.js');
const events = require('../helpers/events.js');
const component = require('../helpers/component.js');
const ui = require('../helpers/ui.js');
const styles = require('../helpers/styles.js');
const routes = require('../helpers/routes.js');
const view = require('../helpers/view.js');
const color = require('colors');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const makeDirectory = (name) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(`./app/${name.capitalize()}`, (err, data) => {
            if (err) {
                reject(err.red.bold);
            }
            console.log(`${name.toUpperCase()} DIRECTORY SUCCESSFULLY CREATED....`.cyan.bold)
            resolve(name);
        });
    });
};

const checkComponentPresence = (name) => {
    if (fs.existsSync(`./app/${name.capitalize()}`)) {
        return true;
    } else {
        return false;
    }
}

const run = (name) => {
    if (checkComponentPresence(name)) {
        console.error(`${name.toUpperCase()} COMPONENT ALREADY EXISTS!!`.yellow.bold);
    } else {
        scaffoldComponent(name);
    }
};

const scaffoldComponent = (name) => {
    makeDirectory(name)
    .then(api.createAPIFile(name))
    .then(events.createEventsFile(name))
    .then(component.createComponentFile(name))
    .then(ui.createUIFile(name))
    .then(styles.createStylesFile(name))
    .then(routes.createComponentRoute(name))
    .then(view.addViewLogic(name))
    .catch((err) => {
        console.error(err);
    })
};

module.exports = {
    run
};
