
/**
 * uglify
 * Minify files with UglifyJS.
 */

module.exports = function (grunt) {

	return {
		dist: {
			files: [
				{
					src: '<%= publicScripts %>/vendor.js',
					dest: '<%= publicScripts %>/vendor.js'
				},
				{
					src: '<%= publicScripts %>/<%= assetName %>.js',
					dest: '<%= publicScripts %>/<%= assetName %>.js'
				}
			]
		}
	};
};
