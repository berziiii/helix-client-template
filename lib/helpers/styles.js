'use strict';

const fs = require('fs');
const colors = require('colors');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const writeStylesFile = function (name, data) {
    return new Promise((resolve, reject) => {
        let fileName = `./app/${name.toLowerCase()}/${name}.styles.scss`;
        fs.writeFile(fileName, data, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }

            resolve(name);
        });
    });
};

const addStyleComponent = (name) => {
    let fileName = `./assets/styles/components.scss`;
    let string = `@import '../../app/${name.toLowerCase()}/${name}.styles';`
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let result = data.split('\n');
        // remove line at end of file if exists
        if (result[result.length - 1] == '') {
            result = result.splice(0, result.length - 1);
        };
        result.push(string);
        // add line back to end of file
        result.push('');
        // re-write file with new component style added
        fs.writeFile(fileName, result.join('\n'), 'utf8', function (err) {
            if (err) return console.log(err);
            console.log(`${name.toUpperCase()}.STYLES.SCSS SUCCESSFULLY ADDED TO STYLES MANIFEST....`.cyan.bold);
        });
    });
    return name;
};

const createStylesFile = (req) => {
    let name = req.toLowerCase();
    let data = stylesStarterCode(name);
    writeStylesFile(name, data)
    .then((name) => {
        console.log(`${name.toUpperCase()}.STYLES.SCSS SUCCESSFULLY CREATED....`.cyan.bold);
        return name;
    })
    .then(addStyleComponent(name))
    .catch((err) => {
        console.error(err.red.bold);
    })
};


const stylesStarterCode = (name) => {
let str = `
.${name}-template-container {
    text-align: center;
    width: 100%;
    min-height: 1px;
    height: auto;
    background: $white;
}
`
return str;
};

module.exports = {
    createStylesFile,
};
