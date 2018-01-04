'use strict';

const fs = require('fs');
const colors = require('colors');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const writeComponentFile = function (name, data) {
    return new Promise((resolve, reject) => {
        let fileName = `./app/${name.capitalize()}/${name}.component.hbs`;
        fs.writeFile(fileName, data, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }

            resolve(name);
        });
    });
};

const createComponentFile = (req) => {
    let name = req.toLowerCase();
    let data = componentStarterCode(name);
    writeComponentFile(name, data)
    .then((name) => {
        console.log(`${name.toUpperCase()}.COMPONENT.HBS SUCCESSFULLY CREATED....`.cyan.bold);
    })
    .catch((err) => {
        console.error(err.red.bold);
    })
};


const componentStarterCode = (name) => {
let str = `
<div class="${name}-template-container">
    <h1>${name.capitalize()} Template</h1>
    <a href="/" data-navigo>
        <button class="btn btn-primary">Home</button>
    </a>
</div>
`
return str;
};

module.exports = {
    createComponentFile,
};
