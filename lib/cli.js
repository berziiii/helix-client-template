#! /usr/bin/env node

'use strict';

const fs = require('fs');
const generate = require('./commands/generate.js');
const destroy = require('./commands/destroy.js');
const help = require('./commands/help.js');
const options = require('./commands/commands.js');
const colors = require('colors');

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
    if (command) {
        if (validateCommand(command).v) {
            let cmd = validateCommand(command).o.name;
            if (cmd == 'help') {
                help.run();
            } else {
                if (name) {
                    eval(`${cmd}.run(name)`);
                } else {
                    console.log (`helix ${cmd} used incorrectly. Use task 'helix help' for more detail on ${cmd}`.toUpperCase().yellow.bold)
                }
            }
        } else {
            console.log (`${command} is not a valid Helix command. Please reference the commands list by 'Helix help' to see a full list of commands and aliases`.toUpperCase().red.bold)
        }
    } else {
        console.log (`
                                        WELCOME TO HELIX!                                                                                                                                                                                                                                                   
                                                                     
                    INSIGHT STUDIO'S COMMAND LINE INTERFACE FOR CLIENT TEMPLATES.
                                                                     
                                             ENJOY!                                                       
                                                                     `.cyan.bold)
    }
}

cli();