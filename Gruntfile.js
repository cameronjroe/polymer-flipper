'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          includePaths: require('node-bourbon').includePaths
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          base: '.',
          port: 3000
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: 'scss/style.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', [
    'connect',
    'sass',
    'watch'
  ]);

};