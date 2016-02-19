/*
 * grunt-vegas-assets-prepare
 * https://github.com/maniolek/grunt-vegas-assets-prepare
 *
 * Copyright (c) 2016 Mateusz Aniolek
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var chalk = require("chalk");
    var _ = require("lodash");

    grunt.registerMultiTask('vegas-assets-prepare', 'Vegas CMF assets management', function () {

        this.files.forEach(function (f) {
            try {

                grunt.log.debug(f.src + ' ' + f.dest);

                var json = {};
                f.src.forEach(function (src) {

                    if (!grunt.file.exists(src)) {
                        throw "JSON source file \"" + chalk.red(src) + "\" not found.";
                    }

                    grunt.log.debug("reading JSON source file \"" + chalk.green(src) + "\"");

                    var fragment = grunt.file.readJSON(src);

                    json = _.merge(json, fragment, function (a, b) {
                        return _.isArray(a) ? _.uniq(a.concat(b)) : undefined;
                    });

                });

                grunt.log.debug("writing JSON destination file \"" + chalk.green(f.dest) + "\"");
                grunt.file.write(f.dest, JSON.stringify(json, null, '\t'));
                grunt.log.writeln("File \"" + chalk.green(f.dest) + "\" created.");
            }
            catch (e) {
                grunt.log.writeln(e.message);
            }
        });

    });

};
