/**
 * @module       Application Initializer
 * @description  Defines load sequence for main module
 * @author       Zak Eddington <zak.eddington@wearepop.com>
 */

import AppController     from 'modules/Application.js';
import HandlebarsHelpers from 'config/HandlebarsHelpers.js';

$(function() {
	new HandlebarsHelpers();

	// Initialize Application
	AppController.initialize();
});