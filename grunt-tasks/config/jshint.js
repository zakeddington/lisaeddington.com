
/**
 * jshint
 * Validate files with JSHint.
 */

module.exports = function (grunt) {

	return {
		options: {
			curly: false,
			esnext: true,
			eqeqeq: true,
			immed: true,
			latedef: true,
			loopfunc: true,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			boss: true,
			eqnull: true,
			browser: true,
			globals: {
				'alert': true,
				'console': true,
				'document': true,
				'window': true,
				'module': true,
				'require': true,
				'Modernizr': true,
				'jQuery': true,
				'$': true,
				'_': true,
				'Backbone': true,
				'TweenMax': true,
				'TweenLite': true,
				'TimelineMax': true,
				'TimelineLite': true,
				'Linear': true,
				'Back': true,
				'Strong':true,
				'Cubic': true,
				'Sine': true, 
				'Quad': true,
				'Quart': true,
				'Quint': true,
				'Bounce': true,
				'Elastic': true,
				'Application': true,
				'imagesLoaded': true,
				'Handlebars': true,
				'HandlebarsHelpers': true,
				'YT': true,
				'ajax_object': true,
				'ga': true
			}
		},

		files: [
			'<%= sourceScripts %>/**/*.js'
		]
	};
};
