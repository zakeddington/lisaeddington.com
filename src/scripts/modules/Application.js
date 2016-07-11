/**
 * @module       Application
 * @description  Defines our application
 * @author       Zak Eddington <zakeddington@gmail.com>
 */

import AppConfig             from 'config/AppConfig';
import AppEvents             from 'config/AppEvents';
import breakpointChange      from 'utilities/BreakpointChange';
import Portfolio             from 'views/Portfolio';

const Application = {

	/**
	 * Initializes the application
	 */
	initialize: function () {

		// Initialize custom events
		breakpointChange();

		new Portfolio( '.portfolio', {
			// options
		});
	}
};

export default Application;
