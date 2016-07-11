/**
 * Photo/Video Modal Window
 *
 * @description
 * - Display Photo/Video in a modal window
 * - Photo/Video is referenced via data attr on trigger
 *
 * @requires ModalWindow (base class)
 * @requires jQuery imagesLoaded plugin
 *
 * @example
 * new ModalWindow($('.modal-photo-trigger'), {options})
 *
 * @constructor
 * @author     Zak Eddington <zakeddington@gmail.com>
 *
 * @param {String} triggerSelector  - trigger element (e.g. ".modal-photo-trigger")
 * @param {Object} objOptions       - Optional object of properties to mixin to the instance
 *
 */

import ModalWindow   from 'widgets/ModalWindow';

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
			$cloneContent = this.ui.curTrigger.children().clone(),
			bgImage       = this.ui.curTrigger.css('background-image');

		// Create modal content container
		this.ui.content = $('<div/>', {
			'class': this.options.contentClass
		}).appendTo( this.ui.modal );


		this.ui.image = $('<div/>', {
			'class' : 'item-image',
			'title' : 'click to close'
		}).css('background-image', bgImage).appendTo( this.ui.content );

		this.ui.content.append( $cloneContent );

		this.ui.content.appendTo( this.ui.modal );

		this.ui.image.on('click.' + this.instance.namespace, function() {
			if ( self.state.isOpen ) {
				self._closeModal();
			}
		});
	}
}

export default ModalMedia;
