'use strict';

const fs = require('fs');
const api = require('../helpers/api.js');
const events = require('../helpers/events.js');
const component = require('../helpers/component.js');
const ui = require('../helpers/ui.js');
const styles = require('../helpers/styles.js');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const makeDirectory = (name) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(`./app/${name.capitalize()}`, (err, data) => {
            if (err) {
                reject(err);
            }
            console.log(`${name.toUpperCase()} DIRECTORY SUCCESSFULLY CREATED....`)
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
        console.error(`${name.toUpperCase()} COMPONENT ALREADY EXISTS!!`);
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
    .catch((err) => {
        console.error(err);
    })
};

module.exports = {
    run
};


//   const promiseReadFile = function (fileName, options) {
//     return new Promise((resolve, reject) => {
//       fs.readFile(fileName, options, (error, data) => {
//         if (error) {
//           reject(error);
//         }

//         resolve(data);
//       });
//     });
//   };

//   promiseReadFile(inFile, { encoding: 'utf8' })
//     .then(JSON.parse)
//     .then(pojo => pojo)
//     .then(pojo => JSON.stringify(pojo, null, 2))
//     .then(json => promiseWriteFile(outFile, json, { flag: outFileFlag }))
//     .then(() => console.log('\ncopied!'))
//     .catch(err => console.error(err));


