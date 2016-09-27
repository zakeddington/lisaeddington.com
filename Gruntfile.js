
module.exports = function(grunt) {

	var path        = require('path');
	var cwd         = process.cwd();
	var pkg			= grunt.file.readJSON('package.json');

	/**
	 * Load Custom tasks
	 */
	grunt.loadTasks('grunt-tasks/');

	/**
	 * GRUNT INIT
	 *
	 * Using load-grunt-config and load-grunt-task to autoload task and run grunt init
	 * in the hope of making this more automated and easier to maintain
	 *
	 * See: README for info and links
	 */
	require('load-grunt-config')( grunt, {

		configPath : path.join(cwd,'grunt-tasks/config'),
		init       : true, //auto grunt.initConfig

		config: {
			// Pkg data
			pkg        : pkg,
			metaTitle  : pkg.title,
			pkgDesc    : pkg.description,
			assetName  : pkg.name,
			portNum    : pkg.portNumber,
			lrPortNum  : pkg.livereloadPortNum,

			// source file paths
			sourcePath          : './src',
			sourceAssets        : '<%= sourcePath %>/assets',
			sourceData          : '<%= sourcePath %>/data',
			sourceHTML          : '<%= sourcePath %>/html',
			sourceIncludes      : '<%= sourceHTML %>/_includes',
			sourceScripts       : '<%= sourcePath %>/scripts',
			sourceStyles        : '<%= sourcePath %>/styles',
			sourceTemplates     : '<%= sourcePath %>/templates',
			sourceVendor        : '<%= sourcePath %>/vendor',
			sourceImages        : '<%= sourceAssets %>/images',

			// local file paths
			localPath           : './_builds/local',
			localAssets         : '<%= localPath %>/assets',
			localData           : '<%= localAssets %>/data',
			localImages         : '<%= localAssets %>/img',
			localScripts        : '<%= localAssets %>/js',
			localStyles         : '<%= localAssets %>/css',
			localTemplates      : '<%= localAssets %>/templates',

			// public file paths
			publicPath          : './_builds/public',
			publicAssets        : '<%= publicPath %>/assets',
			publicData          : '<%= publicAssets %>/data',
			publicImages        : '<%= publicAssets %>/img',
			publicScripts       : '<%= publicAssets %>/js',
			publicStyles        : '<%= publicAssets %>/css',
			publicTemplates     : '<%= publicAssets %>/templates'
		},

		'loadGruntTasks': {
			scope    : 'devDependencies',
			pattern  : ['grunt-*' /*, 'specifictask or namespace-pattern'*/],
			package  : require('./package.json')
		}
	});

	/**
	 * Generate an optimized build
	 */
	grunt.registerTask('build', 'Generate a build', function(target) {
		var target = (target === 'dev') ? 'dev' : 'dist';
		var tasks = [
			'clean:' + target,
			'includereplace:' + target,
			//'imagemin:' + target,
			'copy:' + target,
			'jshint',
			'concat:vendor_' + target,
			'browserify:' + target,
			'sass:' + target,
			'autoprefixer:' + target
		];

		// Optimize js for dist build only
		if ( target === 'dist' ) {
			tasks.push('imagemin:dist');
			tasks.push('cssmin');
			tasks.push('uglify');
		}

		grunt.task.run(tasks);

	});

	/**
	 * Create a dev build and start a static server from the 'local' directory
	 */
	grunt.registerTask('run', ['build:dev', 'connect', 'watch']);
};
