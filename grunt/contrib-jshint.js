// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

module.exports = function(grunt) {
  grunt.config('jshint', {
    all: [
      'Gruntfile.js',
      'src/**/*.js'
    ],
    options: {
      curly: true,
      eqeqeq: true,
      immed: true,
      latedef: true,
      newcap: true,
      noarg: true,
      sub: true,
      undef: true,
      boss: true,
      eqnull: true,
      node: true,
      strict: false,
      debug: true,
      globals: {
      }
    },
    with_debug: {
      options: {
        debug: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};
