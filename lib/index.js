'use strict';
var path = require('path');
var preprocessor = require('suitcss-preprocessor');
var minimatch = require('minimatch');


/**
 * Metalsmith plugin to run files through any template in a template `dir`.
 *
 * @param {String or Object} options
 *   @property {String} files (optional)
 * @return {Function}
 */

function plugin (options) {
	options = options || {};

	return function (files, metalsmith, done) {
		options.files = options.files || '*.css';

		Object.keys(files).forEach(function (file) {
			if (!minimatch(file, options.files)) {
				return;
			}

			options.source = path.join(metalsmith.source(), file);

			var css = preprocessor(files[file].contents.toString(), options);

			files[file].contents = new Buffer(css);
		});


		done();
	};
}

module.exports = plugin;
