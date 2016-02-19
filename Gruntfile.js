/*
 * grunt-vegas-assets-prepare
 * https://github.com/maniolek/grunt-vegas-assets-prepare
 *
 * Copyright (c) 2016 Mateusz Aniolek
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    vegas_assets_prepare: {
      default: {
        files: {
          'tmp/default.json': ['test/fixtures/test1.json', 'test/fixtures/test2.json']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'vegas_assets_prepare', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);

};
