'use strict';

const fs = require('fs');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const writeUIFile = function (name, data) {
    return new Promise((resolve, reject) => {
        let fileName = `./app/${name.capitalize()}/${name}.ui.js`;
        fs.writeFile(fileName, data, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }

            resolve(name);
        });
    });
};

const createUIFile = (req) => {
    let name = req.toLowerCase();
    let data = UIStarterCode(name);
    writeUIFile(name, data)
    .then((name) => {
        console.log(`${name.toUpperCase()}.UI.JS SUCCESSFULLY CREATED....`);
    })
    .catch((err) => {
        console.error(err);
    })
};


const UIStarterCode = (name) => {
let str = `
'use strict';

let template = require('./${name}.component.hbs');

let render${name.capitalize()}Template = function() {
    $('app-template').html('');
    $('app-template').html(template());
}
module.exports = {
    render${name.capitalize()}Template,
}
`
return str;
};

module.exports = {
    createUIFile,
};
