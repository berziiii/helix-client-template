'use strict';

const options = require('./commands.js');
const colors = require('colors');
const run = (name) => {
    options.forEach((option) => {
        let str = `
            Command Name: ${option.name}
            Aliases: ${option.aliases}
            Command Description: ${option.description}
            Useage: '${option.command}'
        `;
        console.log(str.cyan.bold);
    });
};

module.exports = {run};