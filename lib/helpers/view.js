'use strict';

const fs = require('fs');
const colors = require('colors');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const writeViewLogic = function (name) {
    return new Promise((resolve, reject) => {
        let fileName = `./app/app.events.js`;
        let string = `const ${name.toLowerCase()} = require('./${name.toLowerCase()}/${name}.events.js');`;
        let present = false;
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
                if (line === "'use strict';") {
                    result.splice((i+1), 0, string);
                };
            });
            // add line back to end of file
            result.push('');
            fs.writeFile(fileName, result.join('\n'), 'utf8', function (err) {
                if (err) return console.log(err);
                console.log(`${name.toUpperCase()} COMPONENT VIEW LOGIC ADDED SUCCESSFULLY....`.cyan.bold);
            });
            resolve(name);
        });
    });
};

const addViewLogic = (req) => {
    let name = req.toLowerCase();
    writeViewLogic(name)
    .catch((err) => {
        console.error(err.red.bold);
    })
};

module.exports = {
    addViewLogic,
};
