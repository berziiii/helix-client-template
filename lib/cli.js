#! /usr/bin/env node

'use strict';

const fs = require('fs');
const generate = require('./commands/generate.js');
const destroy = require('./commands/destroy.js');
const help = require('./commands/help.js');
const options = require('./commands/commands.js');

const validateCommand = (command) => {
    let r = {
        v: false,
        o: {},
    };
    command = command.toLowerCase();
    options.forEach((option) => {
        if (command === option.name) {
            r.v = true;
            r.o = option;
        }
        option.aliases.forEach((alias) => {
            if (command === alias) {
                r.v = true;
                r.o = option;
            }
        });
    });
    return r;
};

const cli = () => {
    let command = process.argv[2];
    let name = process.argv[3];
    if (validateCommand(command).v) {
        let cmd = validateCommand(command).o.name;
        if (cmd == 'help') {
            help.run();
        }
        if (cmd == 'generate') {
            generate.run(name);
        }
        if (cmd == 'destroy') {
            destroy.run(name)
        }
    } else {
        console.log (`${command} is not a valid Quasar command. Please reference the commands list by 'quasar help' to see a full list of commands and aliases`)
    }
}

cli();