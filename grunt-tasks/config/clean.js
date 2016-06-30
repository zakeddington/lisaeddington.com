
/**
 * clean
 * Clean files and folders.
 */

module.exports = function (grunt) {

	return {
		// development directory
		dev: '<%= localPath %>',

		// distribution directory
		dist: '<%= publicPath %>'
	};
};