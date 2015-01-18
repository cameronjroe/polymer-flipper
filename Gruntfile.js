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
                    'polymer-flipper.css': 'scss/polymer-flipper.scss',
                    'css/demo.css': 'scss/demo.scss'
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
                files: 'scss/*.scss',
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