'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        browserify: {
            dist: {
                files: {
                    'dist/polymer-flipper.js': 'src/polymer-flipper.js'
                }
            },
            options: {
                transform: ['debowerify']
            }
        },

        sass: {
            dev: {
                options: {
                    includePaths: require('node-bourbon').includePaths
                },
                files: {
                    'dist/polymer-flipper.css': 'scss/polymer-flipper.scss',
                    'css/demo.css': 'scss/demo.scss'
                }
            }
        },

        copy: {
            flipper: {
                src: 'src/polymer-flipper.html',
                dest: 'dist/polymer-flipper.html'
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
            },
            js: {
                files: 'src/*.js',
                tasks: ['browserify']
            }
        }
    });

    grunt.registerTask('default', [
        'connect',
        'sass',
        'copy',
        'browserify',
        'watch'
    ]);

};