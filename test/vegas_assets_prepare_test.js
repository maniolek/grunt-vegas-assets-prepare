'use strict';

var grunt = require('grunt');

exports.vegas_assets_prepare = {
  setUp: function(done) {
    done();
  },
  testUniqueConcatenation: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('tmp/default.json');
    var expected = grunt.file.readJSON('test/expected/default.json');
    test.equal(JSON.stringify(actual), JSON.stringify(expected));

    test.done();
  }

};
