module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['src/js/own/app.js'],
        dest: 'dist/assets/js/scripts.js',
      },
      less: {
        src: ['src/less/colors.less', 'src/less/sizes.less', 'src/less/mixins.less', 'src/less/main.less'],
        dest: 'dist/assets/css/styles.less',
      },
    },
    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'src/', src: ['favicon.ico'], dest: 'dist/'},
          {expand: true, cwd: 'src/images/', src: ['**'], dest: 'dist/assets/images/'},
          {expand: true, cwd: 'src/css/', src: ['**'], dest: 'dist/assets/css/'},
          {expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'dist/assets/fonts/'},
          {expand: true, cwd: 'src/js/vendor/', src: ['**'], dest: 'dist/assets/js/'},
          {expand: true, cwd: 'src/', src: ['robots.txt'], dest: 'dist/'},
          {expand: true, cwd: 'src/', src: ['dossier.pdf'], dest: 'dist/'},
        ],
      },
    },
    less: {
      dist: {
        options: {
          plugins: [
            
          ],
          modifyVars: {}
        },
        files: {
          "dist/assets/css/styles.css": "dist/assets/css/styles.less"
        },
      },
    },
    ejs_static: {
      dist: {
        options: {
          dest: 'dist',
          path_to_data: 'src/data/routes.json',
          path_to_layouts: 'src/layouts',
          index_page: 'home',
          parent_dirs: true,
          underscores_to_dashes: true,
          file_extension: '.html'
        }
      }
    },
    xml_sitemap: {
      default_options: {
        options: {
          dest: 'dist/',
          siteRoot: 'http://enreda.coop/'
        },
        files: [
          {
          expand: false,
          cwd: 'dist/',
          src: [
            '**/*.html'
          ]
          }
        ]
      }
    },
    clean: ["dist/assets/css/styles.less"],
    uglify: {
      dist: {
        files: {
          'dist/assets/js/scripts.js': ['dist/assets/js/scripts.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/assets/css/styles.css': ['dist/assets/css/styles.css']
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/own/**/*.js'],
        tasks: ['concat:js'],
      },
      less: {
        files: ['src/less/**/*.less'],
        tasks: ['concat:less', 'less:dist', 'clean'],
      },
      data: {
        files: ['src/data/**/*.json', 'src/layouts/**/*.ejs'],
        tasks: ['ejs_static:dist'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-ejs-static');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-xml-sitemap');

  grunt.registerTask('default', ['concat', 'less', 'copy', 'ejs_static', 'watch']);
  grunt.registerTask('build', ['concat', 'less', 'copy', 'ejs_static', 'xml_sitemap', 'uglify', 'cssmin', 'clean']);

}
