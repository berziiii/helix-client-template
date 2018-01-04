'use strict';

const options = require('./commands.js');

const run = (name) => {
    options.forEach((option) => {
        let str = `
            Command Name: ${option.name}
            Aliases: ${option.aliases}
            Command Description: ${option.description}
            Useage: '${option.command}'
        `;
        console.log(str);
    });
};

module.exports = {run};