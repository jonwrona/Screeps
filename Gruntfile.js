module.exports = (grunt) => {

  var config = require('./config.js');

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    screeps: {
      options: {
        email: config.SCREEPS_EMAIL,
        password: config.SCREEPS_PASSWORD,
        branch: 'default',
        ptr: false
      },
      dist: {
        src: ['dist/*.js']
      }
    },
    babel: {
      options: {
        sourceMap: false,
        minified: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: "build/",
          src: ["**/*.js"],
          dest: "dist/",
          ext: ".js"
        }]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/main.js', 'src/**/*.js'],
        dest: 'build/main.js'
      }
    }
  });

  grunt.registerTask('default', ['concat', 'babel', 'screeps']);
  grunt.registerTask('build', ['concat', 'babel']);

}
