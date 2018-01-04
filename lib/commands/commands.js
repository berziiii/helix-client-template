'use strict';

module.exports = [
    {
        name: 'help',
        aliases: ['h'],
        description: 'Shows a list of all the available commands.',
        command: 'helix help'
    },
    {
        name: 'generate',
        aliases: ['g'],
        description: 'Generates a new component from blueprints in the helpers directory.',
        command: 'helix generate <% NAME %>'
    },
    {
        name: 'destroy',
        aliases: ['d'],
        description: 'Destroys a component based on the components name.',
        command: 'helix destroy <% NAME %>'
    },
]