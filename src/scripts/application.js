/**
 * @module       Application Initializer
 * @description  Defines load sequence for main module
 * @author       Zak Eddington <zakeddington@gmail.com>
 */

import AppController     from 'modules/Application.js';
import HandlebarsHelpers from 'config/HandlebarsHelpers.js';

$(function() {
	new HandlebarsHelpers();

	// Initialize Application
	AppController.initialize();
});