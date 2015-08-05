module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    httpPath: '/',
                    cssPath: 'assets/css',
                    sassPath: 'src/scss',
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            main: {
                files: {
                    'assets/js/main.min.js': 'src/js/*.js'
                }

            }
        },
        watch: {
            css: {
                files: 'src/scss/*.scss',
                tasks: ['compass']
            },
            js: {
                files: 'src/js/*.js',
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['compass', 'uglify']);
    grunt.registerTask('watch',['watch']);
}