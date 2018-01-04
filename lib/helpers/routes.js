'use strict';

const fs = require('fs');
const colors = require('colors');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const writeRoute = function (name) {
    return new Promise((resolve, reject) => {
        let fileName = `./app/routes.js`;
        let string = `    { name: '${name.toLowerCase()}', path: '/${name.toLowerCase()}' },`;
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) {
                console.log(`${name.toUpperCase()} COMPONENT ROUTE FAILED!!`.red.bold);
                reject(err);
            }
            let result = data.split('\n');
            // remove line at end of file if exists
            if (result[result.length - 1] == '') {
                result = result.splice(0, result.length - 1);
            };
            result.forEach((line, i) => {
                if (line === '];') {
                    result.splice(i, 0, string);
                };
            });
            // add line back to end of file
            result.push('');
            fs.writeFile(fileName, result.join('\n'), 'utf8', function (err) {
                if (err) return console.log(err);
                console.log(`${name.toUpperCase()} COMPONENT ROUTE SUCCESSFULLY ADDED....`.cyan.bold);
            });
            resolve(name);
        });
    });
};

const createComponentRoute = (req) => {
    let name = req.toLowerCase();
    writeRoute(name)
    .catch((err) => {
        console.error(err.red.bold);
    })
};

module.exports = {
    createComponentRoute,
};
