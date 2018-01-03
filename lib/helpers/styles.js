'use strict';

const fs = require('fs');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const writeStylesFile = function (name, data) {
    return new Promise((resolve, reject) => {
        let fileName = `./app/${name.capitalize()}/${name}.styles.scss`;
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
    let data = `@import '../../app/${name.capitalize()}/${name}.styles';`
    fs.appendFile(fileName, data, function (err) {
        if (err) throw err;
        console.log(`${name.toUpperCase()}.STYLES.SCSS SUCCESSFULLY ADDED TO STYLES MANIFEST....`);
    });
    return name;
};

const createStylesFile = (req) => {
    let name = req.toLowerCase();
    let data = stylesStarterCode(name);
    writeStylesFile(name, data)
    .then((name) => {
        console.log(`${name.toUpperCase()}.STYLES.SCSS SUCCESSFULLY CREATED....`);
        return name;
    })
    .then(addStyleComponent(name))
    .catch((err) => {
        console.error(err);
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
