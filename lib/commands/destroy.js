'use strict';

const fs = require('fs-extra');

const destroyDirectory = (name) => {
    return new Promise((resolve, reject) => {
        fs.remove(`./app/${name.capitalize()}`, (err, data) => {
            if (err) {
                reject(err);
            }
            console.log(`${name.toUpperCase()} DIRECTORY SUCCESSFULLY DESTROYED....`.magenta)
            resolve(name);
        });
    });
};

const removeStylesComponent = (name) => {
    let fileName = `./assets/styles/components.scss`;
    let string = `@import '../../app/${name.capitalize()}/${name.toLowerCase()}.styles';`;
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let result = data.split('\n');
        // remove line at end of file if exists
        if (result[result.length - 1] == '') {
            result = result.splice(0, result.length - 1);
        };
         result.forEach((line, i) => {
            if (line == string) {
                result.splice(i, 1);
            };
        });
        // add line back to end of file
        result.push('');
        fs.writeFile(fileName, result.join('\n'), 'utf8', function (err) {
            if (err) return console.log(err);
            console.log(`${name.toUpperCase()} STYLES REMOVED....`.magenta)
        });
        return name;
    });
};

const removeComponentRoute = (name) => {
    let fileName = `./app/routes.js`;
    let string = `{ name: '${name.capitalize()}', path: '/${name.toLowerCase()}' },`;
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let result = data.split('\n');
        // remove line at end of file if exists
        if (result[result.length - 1] == '') {
            result = result.splice(0, result.length - 1);
        };
        result.forEach((line, i) => {
            if (line.trim() == string.trim()) {
                result.splice(i, 1);
            };
        });
        // add line back to end of file
        result.push('');
        fs.writeFile(fileName, result.join('\n'), 'utf8', function (err) {
            if (err) return console.log(err);
            console.log(`${name.toUpperCase()} COMPONENT ROUTE REMOVED....`.magenta)
        });
        return name;
    });
};

const removeViewLogic = (name) => {
    let fileName = `./app/app.events.js`;
    let string = `const ${name.capitalize()} = require('./${name.capitalize()}/${name.toLowerCase()}.events.js');`;
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let result = data.split('\n');
        // remove line at end of file if exists
        if (result[result.length - 1] == '') {
            result = result.splice(0, result.length - 1);
        };
         result.forEach((line, i) => {
            if (line === string) {
                result.splice(i, 1);
            };
        });
        // add line back to end of file
        result.push('');
        fs.writeFile(fileName, result.join('\n'), 'utf8', function (err) {
            if (err) return console.log(err);
            console.log(`${name.toUpperCase()} COMPONENT VIEW LOGIC REMOVED....`.magenta)
        });
        return name;
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
        destroyDirectory(name)
        .then(removeStylesComponent(name))
        .then(removeComponentRoute(name))
        .then(removeViewLogic(name))
        .catch((err) => {
            console.error(`WHOOPS, SOMETHING WENT WRONG. ${name.toUpperCase()} COMPONENT WAS NOT SUCCESSFULLY DESTROYED. TRY AGAIN.`.red);
        });
    } else {
        console.error(`${name.toUpperCase()} COMPONENT DOES NOT EXIST. NOTHING TO REMOVE.`.yellow);
    }
};

module.exports = {
    run
};
