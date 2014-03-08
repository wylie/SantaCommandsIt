module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			server: {
				options: {
					port: 3000,
					bases: 'dist/'
				}
			}
		},

		sass: {
			dist: {
				files: {
					'dist/css/master.min.css': 'dev/scss/master.scss'
				},
				options: {
					style: 'compressed'
				}
			}
		},

		uglify: {
			dist: {
				options: {
					mangle: false,
					report: 'gzip',
					preserveComments: 'false'
				},
				files: {
					'dist/js/script.min.js': 'dev/js/script.js'
				}
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: false,
					removeEmptyAttributes: true,
					collapseBooleanAttributes: true,
					removeRedundantAttributes: true
				},
				files: {
					'dist/index.html': 'dev/index.html',
				}
			}
		},

		shell: {
			recess: {
				command: [
					'npm install git+https://github.com/wylie/recess.git -g'
				]
			},
			startup: {
				command: [
					'npm install git+https://github.com/wylie/recess.git -g',
					'bower install',
					'grunt build'
				].join('&&')
			},
			check: {
				command: 'recess dist/css/master.min.css',
				options: {
					stdout: true
				}
			},
			removecss: {
				command: 'rm dev/scss/*.css',
				options: {
					stdout: true
				}
			}
		},

		watch: {
			scss: {
				files: ['dev/scss/*.scss'],
				tasks: ['sass:dev', 'shell']
			},
			js: {
				files: ['dev/js/*.js'],
				tasks: ['uglify:dev']
			},
			html: {
				files: ['dev/*.html'],
				tasks: ['htmlmin:dev']
			}
		}

	});

	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('start', [
		'shell:startup',
	]);

	grunt.registerTask('build', [
		'sass:dist',
		'shell:check',
		'uglify',
		'htmlmin:dist'
	]);

	grunt.registerTask('dist', [
		'sass:dist',
		'shell',
		'uglify:dist',
		'htmlmin:dist'
	]);

	grunt.registerTask('server', [
		'express',
		'watch',
		'express-keepalive'
	]);

};
