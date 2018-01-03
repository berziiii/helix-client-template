'use strict';

const fs = require('fs-extra');

const destroyDirectory = (name) => {
    return new Promise((resolve, reject) => {
        fs.remove(`./app/${name.capitalize()}`, (err, data) => {
            if (err) {
                reject(err);
            }
            console.log(`${name.toUpperCase()} DIRECTORY SUCCESSFULLY DESTROYED....`)
            resolve(name);
        });
    });
};

const removeStylesComponent = (name) => {
    let fileName = `./assets/styles/components.scss`;
    let string = `@import '../../app/${name.capitalize()}/${name.toLowerCase()}.styles';`;
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        let array = data.split('\n');
         array.forEach((line, i) => {
            if (line == string) {
                array.splice(i, 1);
            };
        });
        array.join('');
        fs.writeFile(fileName, result, 'utf8', function (err) {
            if (err) return console.log(err);
            console.log(`${name.toUpperCase()} STYLES REMOVED....`)
        });
    });
};

const checkComponentPresence = (name) => {
    if (fs.existsSync(`./app/${name.capitalize()}`)) {
        return true;
    } else {
        return false;
    }
}

const run = (name) => {
    if (checkComponentPresence(name)) {
        destroyDirectory(name)
        .then(removeStylesComponent(name))
        .catch((err) => {
            console.error(`WHOOPS, SOMETHING WENT WRONG. ${name.toUpperCase()} COMPONENT WAS NOT SUCCESSFULLY DESTROYED. TRY AGAIN.`);
        })
        // fs.removeSync(`./app/${name.capitalize()}`);
        // console.log(`${name.toUpperCase()} COMPONENT SUCCESSFULLY REMOVED.`);
    } else {
        console.error(`${name.toUpperCase()} COMPONENT DOES NOT EXIST. NOTHING TO REMOVE.`);
    }
};

module.exports = {
    run
};
