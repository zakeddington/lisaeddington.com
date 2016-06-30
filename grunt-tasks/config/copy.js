
/**
 * copy
 * Copy files and folders.
 */

module.exports = function (grunt) {

	return {
		dev: {
			files: [
				{
					cwd: '<%= sourceData %>',
					src: '**/*.*',
					dest: '<%= localData %>',
					expand: true
				},
				{
					cwd: '<%= sourceImages %>',
					src: '**/*.*',
					dest: '<%= localImages %>',
					expand: true
				}
			]
		},

		dist: {
			files: [
				{
					cwd: '<%= sourceData %>',
					src: '**/*.*',
					dest: '<%= publicData %>',
					expand: true
				}
			]
		}
	};
};
