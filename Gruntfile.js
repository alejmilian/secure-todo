module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      target: [
        'app.js',
        'router/**/*.js',
        'lib/**/*.js',
        'bin/www'
      ]
    }
  })

  grunt.loadNpmTasks('grunt-eslint')

  // Default task(s).
  grunt.registerTask('default', ['eslint'])
}
