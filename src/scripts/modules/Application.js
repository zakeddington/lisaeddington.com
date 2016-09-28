/**
 * @module       Application
 * @description  Defines our application
 * @author       Zak Eddington <zakeddington@gmail.com>
 */

import ModalWindow from 'widgets/ModalWindow';
import Portfolio   from 'views/Portfolio';

const Application = {

	/**
	 * Initializes the application
	 */
	initialize: function () {

		new Portfolio('.portfolio', {
			// options
		});

		new ModalWindow('.modal-trigger', {
			// options
		});
	}
};

export default Application;
