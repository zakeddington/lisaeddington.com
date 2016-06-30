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

		// new GridWall( '.grid-wall', {
		// 	// options
		// });


		$('.open').on('click', this._onOpenCloseClick);
		$('.close').on('click', this._onOpenCloseClick);
	},

	_onOpenCloseClick: function( event ) {
		event.preventDefault();

		var $curItem = $( event.currentTarget ).parent(),
			$overlay = $('.overlay');

		$curItem.toggleClass('active');
		$overlay.toggleClass('active');
	},

	_onCloseClick: function( event ) {
		event.preventDefault();

		var $curItem = $( event.currentTarget ).parent();

		$curItem.removeClass('active');
	}
};

export default Application;
