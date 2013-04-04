
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        es5: true,
        expr: true
      },
      files: ['Gruntfile.js', 'index.js', 'karma.conf.js', 'test/test.js']
    },
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      dev: {
        browsers: ['Chrome']
      },
      travis: {
        browsers: ['PhantomJS'],
        singleRun: true
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  // register tasks
  grunt.registerTask('hint', ['jshint']);
  grunt.registerTask('ng', ['karma:dev']);
  grunt.registerTask('travis', ['karma:travis']);

};