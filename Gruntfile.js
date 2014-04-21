module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			server: {
				options: {
					port: 3001,
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
			start: {
				command: './start.sh',
				options: {
					stdout: true,
					stderr: true,
					failOnError: true
				}
			},
			clean: {
				command: [
	                'rm -rf node_modules dist',
	                'npm cache clean',
	                'bower cache clean',
	                'npm install',
	                'bower install',
	                'grunt build'
	            ].join('&&'),
				options: {
					stdout: true,
					stderr: true,
					failOnError: true
				}
			},
			recess: {
				command: 'npm install git+https://github.com/wylie/recess.git -g',
				options: {
					stdout: true,
					stderr: true,
					failOnError: true
				}
			},
			check: {
				command: 'recess dist/css/master.min.css',
				options: {
					stdout: true,
					stderr: true,
					failOnError: true
				}
			},
			removecss: {
				command: 'rm dev/scss/*.css',
				options: {
					stdout: true,
					stderr: true,
					failOnError: true
				}
			}
		},

		watch: {
			scss: {
				files: ['dev/scss/*.scss'],
				tasks: ['sass']
			},
			js: {
				files: ['dev/js/*.js'],
				tasks: ['uglify:dev']
			},
			html: {
				files: ['dev/*.html'],
				tasks: ['htmlmin']
			}
		}

	});

	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('wrap', [
		'wrap:advanced'
	]);

	grunt.registerTask('start', [
		'shell:start'
	]);

	grunt.registerTask('clean', [
		'shell:clean'
	]);

	grunt.registerTask('build', [
		'sass:dist',
		'shell:check',
		'uglify',
		'htmlmin'
	]);

	grunt.registerTask('dist', [
		'sass:dist',
		'shell',
		'uglify:dist',
		'htmlmin'
	]);

	grunt.registerTask('server', [
		'express',
		'watch',
		'express-keepalive'
	]);

};
