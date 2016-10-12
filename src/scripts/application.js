/**
 * @module       Application Initializer
 * @description  Defines load sequence for main module
 * @author       Zak Eddington <zakeddington@gmail.com>
 */

import 'babel-polyfill';
import AppController     from 'modules/Application.js';
import HandlebarsHelpers from 'utilities/HandlebarsHelpers.js';
import svg4everybody     from 'svg4everybody';

$(function() {
	new HandlebarsHelpers();
	svg4everybody();

	// Initialize Application
	AppController.initialize();
});
