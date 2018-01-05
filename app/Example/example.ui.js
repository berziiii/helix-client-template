
'use strict';

let template = require('./example.component.hbs');
let examplesTemplate = require('./partials/examplesList.hbs');

let renderExampleTemplate = () => {
    $('app-template').html('');
    $('app-template').html(template());
}

let renderExamples = (data) => {
    $('#examples').html('').html(examplesTemplate({examples: data}))
};

module.exports = {
    renderExampleTemplate,
    renderExamples,
}
