module.exports = function(grunt) {
  grunt.config('watch', {
    scripts: {
      files: ['src/**/*.js'],
      tasks: ['clean:dist', 'jshint:with_debug'],
      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
