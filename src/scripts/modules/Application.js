/**
 * @module       Application
 * @description  Defines our application
 * @author       Zak Eddington <zak.eddington@wearepop.com>
 */

import AppConfig             from 'config/AppConfig';
import AppEvents             from 'config/AppEvents';
import breakpointChange      from 'utilities/BreakpointChange';
import GridWall              from 'widgets/GridWall';

const Application = {

	/**
	 * Initializes the application
	 */
	initialize: function () {

		// Initialize custom events
		breakpointChange();

		new GridWall( '.grid-wall', {
			// options
		});
	}
};

export default Application;
