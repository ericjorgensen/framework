'use strict';
module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'js/*.js',
        '!js/scripts.min.js'
      ]
    },
    sass: {
        dist: {
            options: {
              outputStyle: 'compressed',
            },
            files: {
                'css/styles.css' : 'css/scss/styles.scss'
            },
        }
    },
    uglify: {
      dist: {
        files: {
          'js/scripts.min.js': [
            'js/plugins/bootstrap.js',
            'js/app.js',
            'js/plugins/*.js',
            'js/_*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'assets/js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/assets/js/scripts.min.js.map'
        }
      }
    },
    version: {
      options: {
        file: '../wp/wp-content/themes/ep/lib/scripts.php',
        css: 'css/styles.css',
        js: 'js/scripts.min.js',
        jsHandle: 'is_scripts',
        cssHandle: 'is_main'
      }
    },
    watch: {
      sass: {
          files: ['css/scss/**/*.{scss, sass}', 'css/scss/_partials/**/*.{scss, sass}'],
          tasks: ['sass:dist', 'version']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify', 'version']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'css/main.min.css',
          'js/scripts.min.js'
        ]
      }
    },
    clean: {
      dist: [
        'css/styles.css',
        'js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'sass-dist',
    'uglify',
    'version'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
