module.exports = function(grunt) {
  grunt.config('jasmine', {
    generic: {
      src: ['src/**/*.js'],
      options: {
        specs: 'spec/jasmine/**/*Spec.js',
        helpers: 'spec/jasmine/helpers*Helper.js',
        vendor: [
          'https://cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.8/rx.all.js'
        ],
        display: 'full',

        // template: require('grunt-template-jasmine-istanbul'),
        /* templateOptions: {
          coverage: 'coverage/coverage.json',
          report: [{
            type: 'lcov',
            options: {
              dir: 'coverage/lcov',
            }
          }, {
            type: 'text-summary',
          }]
        }*/
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
};
