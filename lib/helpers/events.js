'use strict';

const fs = require('fs');
const colors = require('colors');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const writeEventsFile = function (name, data) {
    return new Promise((resolve, reject) => {
        let fileName = `./app/${name.capitalize()}/${name}.events.js`;
        fs.writeFile(fileName, data, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }

            resolve(name);
        });
    });
};

const createEventsFile = (req) => {
    let name = req.toLowerCase();
    let data = eventsStarterCode(name);
    writeEventsFile(name, data)
    .then((name) => {
        console.log(`${name.toUpperCase()}.EVENTS.JS SUCCESSFULLY CREATED....`.cyan);
    })
    .catch((err) => {
        console.error(err);
    })
};


const eventsStarterCode = (name) => {
let str = `
'use strict';

let app = require('../app.global.js');
let ui = require('./${name}.ui.js');
let api = require('./${name}.api.js');

let renderTemplate = () => {
    ui.render${name.capitalize()}Template();
};

let registerEvents = () => {

};

module.exports = {
    registerEvents,
    renderTemplate,
}
`
return str;
};

module.exports = {
    createEventsFile,
};
