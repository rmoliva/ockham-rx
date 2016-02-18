// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

module.exports = function(grunt) {
  grunt.config('uglify', {
    options: {
      mangle: {
        except: []
      },
      wrap: true,
      files: 'src/**/*.js',
    },
    min_build: {
      options: {
        report: 'gzip',
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> : minified */\n'
      },
      files: {
        'dist/ockham-rx.min.js': 'src/**/*.js'
      }
    },
    max_build: {
      options: {
        beautify: {
          indent_start: 0,
          indent_level: 2,
          //quote_keys: false,
          //space_colon: true,
          //ascii_only: false,
          //unescape_regexps: false,
          //inline_script: false,
          //width: 80,
          //max_line_len: 32000,
          beautify: true,
          // source_map: null,
          // bracketize: false,
          //semicolons: true,
          comments: true,
          preserve_line: true,
          //screw_ie8: false,
          //preamble: null
        },
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>*/\n'
      },
      files: {
        'dist/ockham-rx.max.js': 'src/**/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
