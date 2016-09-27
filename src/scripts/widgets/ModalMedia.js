/**
 * Photo Modal Window
 *
 * @description
 * - Display photo in a modal window
 * - Photo is cloned content from within the trigger element
 *
 * @requires jQuery
 * @requires ModalWindow (base class)
 *
 * @example
 * new ModalWindow('.modal-photo-trigger', {options})
 *
 * @constructor
 * @author     Zak Eddington <zakeddington@gmail.com>
 *
 * @param {String} triggerSelector  - trigger element (e.g. '.modal-photo-trigger')
 * @param {Object} objOptions       - Optional object of properties to mixin to the instance
 *
 */

import ModalWindow from 'widgets/ModalWindow';

class ModalMedia extends ModalWindow {

	initialize( selectorTrigger, objOptions ) {
		/**
		 * Default configuration for component
		 */
		this.options = $.extend({
			modalID         : 'modal-media'
		}, objOptions || {});

		super.initialize( selectorTrigger, this.options );
	}

	_getContent() {
		this._setContent();
	}

	/**
	 * Fired from _openModal
	 * Display the content in the modal window
	 */
	_setContent() {
		var self          = this,
			$cloneContent = this.ui.curTrigger.children().clone();

		// Create modal content container
		this.ui.content = $('<div/>', {
			'class': this.options.contentClass
		}).appendTo( this.ui.modal );

		this.ui.content.append( $cloneContent );

		this.ui.content.appendTo( this.ui.modal );

		this.ui.content.on('click.' + this.instance.namespace, function() {
			if ( self.state.isOpen ) {
				self._closeModal();
			}
		});
	}
}

export default ModalMedia;
