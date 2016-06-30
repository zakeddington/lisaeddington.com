
/**
 * connect
 * Start a connect web server.
 */

module.exports = function (grunt) {

	return {
		localhost: {
			options: {
				hostname: '*',
				base: '<%= localPath %>',
				port: '<%= portNum %>',
				livereload: '<%= lrPortNum %>',
				// Enable CORS
				middleware: function(connect, options, middlewares) {
					middlewares.unshift(function(req, res, next) {
						res.setHeader('Access-Control-Allow-Origin', '*');
						res.setHeader('Access-Control-Allow-Methods', '*');
						next();
					});

					return middlewares;
				}
			}
		}
	};
};