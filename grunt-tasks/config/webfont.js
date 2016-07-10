
/**
 * webfont
 * @see src/vector/README.md
 * Create a custom icon font
 */

module.exports = function (grunt) {

	return {
		icons: {
			engine: 'node',
			src: '<%= sourceWebfont %>/vectors/*.svg',
			dest: '<%= sourceFonts %>',
			destCss: '<%= sourceStyles %>/common',
			options: {
				engine: 'node',
				font: 'icons',
				stylesheet: 'scss',
				// reference fonts via sass variable defined in src/styles/utils/_config.scss
				// must use grunt-webfont version 0.5.3
				// later versions break relativeFontPath when using sass variable due to the hash
				relativeFontPath: '#{$font-path}',
				// start unicode characters later in sequence to prevent voice over conflicts in iOS
				startCodepoint: 0xF101,
				templateOptions: {
					baseClass: 'icons',
					baseMixin: 'icons',
					classPrefix: 'icons-',
					mixinPrefix: 'icons-'
				},
				template: '<%= sourceWebfont %>/template/template.css',
				// Set htmlDemo to false when using this in an actual project
				htmlDemo: true,
				htmlDemoTemplate: '<%= sourceWebfont %>/template/demo.html',
				destHtml: '<%= sourceHTML %>',
			}
		}
	};
};
