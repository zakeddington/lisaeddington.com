
/**
 * browserify
 * Grunt task for node-browserify.
 */
 
var path = require('path');
var pathmodify = require('pathmodify');

module.exports = function (grunt) {

	var paths = [
		pathmodify.mod.dir('config', path.join(__dirname, '../../src/scripts/config')),
		pathmodify.mod.dir('modules', path.join(__dirname, '../../src/scripts/modules')),
		pathmodify.mod.dir('utilities', path.join(__dirname, '../../src/scripts/utilities')),
		pathmodify.mod.dir('views', path.join(__dirname, '../../src/scripts/views')),
		pathmodify.mod.dir('widgets', path.join(__dirname, '../../src/scripts/widgets')),
		pathmodify.mod.dir('templates', path.join(__dirname, '../../src/templates'))
	];

	return {

		options: {
			transform: ['browserify-handlebars', ['babelify', {presets: ['es2015']}]],
			configure: function(b) {
				b.plugin(pathmodify, {mods: paths});
			},
			browserifyOptions: {
				extensions: ['.hbs'],
				fullPaths: false
			}
		},

		dev: {
			src: '<%= sourceScripts %>/<%= assetName %>.js',
			dest: '<%= localScripts %>/<%= assetName %>.js',
			options: {
				debug: true
			}
		},

		dist: {
			src: '<%= sourceScripts %>/<%= assetName %>.js',
			dest: '<%= publicScripts %>/<%= assetName %>.js',
			options: {
				debug: false
			}
		}
	};
};