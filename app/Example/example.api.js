
'use strict';

let app = require('../app.global.js');
    
let getExamples = function(data) {
    return $.ajax({
        method: "GET",
        url: app.apiUrl + '/examples',
        data,
    });
};

module.exports = {
    getExamples,
};
