'use strict';

const fs = require('fs');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const writeAPIFile = function (name, data) {
    return new Promise((resolve, reject) => {
        let fileName = `./app/${name.capitalize()}/${name}.api.js`;
        fs.writeFile(fileName, data, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }

            resolve(name);
        });
    });
};

const createAPIFile = (req) => {
    let name = req.toLowerCase();
    let data = apiStarterCode(name);
    writeAPIFile(name, data)
    .then((name) => {
        console.log(`${name.toUpperCase()}.API.JS SUCCESSFULLY CREATED....`);
    })
    .catch((err) => {
        console.error(err);
    })
};


const apiStarterCode = (name) => {
let str = `
'use strict';

let app = require('../app.global.js');
    
let ${name}TemplateApi = function(data) {
    return $.ajax({
        method: "POST",
        url: app.apiUrl + '/${name}',
        data,
    });
};

module.exports = {
    ${name}TemplateApi,
};
`
return str;
};

module.exports = {
    createAPIFile,
};
