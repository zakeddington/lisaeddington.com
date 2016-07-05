/**
 * Grid Wall
 *
 * @description
 * - Display wall of images, videos, tweets and POPstars
 * - Open detail view of each item in a modal
 *
 * @requires jQuery
 * @requires AppConfig
 * @requires AppEvents
 *
 * @example
 * new GridWall($('.grid-wall'), {options})
 *
 * @constructor
 * @author     Zak Eddington <zak.eddington@wearepop.com>
 *
 * @param {String} containerSelector  - container element (e.g. ".grid-wall")
 * @param {Object} objOptions         - Optional object of properties to mixin to the instance
 *
 */

import AppConfig  from 'config/AppConfig';
import AppEvents  from 'config/AppEvents';
import AjaxGet    from 'utilities/AjaxGet';
import AjaxPost   from 'utilities/AjaxPost';
import Loader     from 'utilities/Loader';
import ModalMedia from 'widgets/ModalMedia';
import tplGrid    from 'templates/grid.hbs';

class GridWall {

	constructor( containerSelector, objOptions ) {
		this.initialize( containerSelector, objOptions );
	}

	initialize( containerSelector, objOptions ) {
		/**
		 * Default configuration for component
		 */
		this.options = $.extend({
			dataURL           : '/assets/data/photos.json',
			dataType          : 'JSON',
			ajaxUtil          : AjaxGet,
			template          : tplGrid,              // Handlebars template for grid wall
			errorMsg          : '<p>Oops. Something went wrong. Please refresh the browser to try again.</p>',
			selectorItem      : '.item-container',    // selector for each grid item
			classHidden       : 'is-hidden',          // class for setting hidden states
			animSpeed         : 0.5,                  // (s) TweenMax animation speed
			animEase          : 'Quad.easeOut',       // TweenMax animation ease
			animDelay         : 0.1,                  // (s) animation delay between items
		}, objOptions || {});

		/**
		 * UI elements
		 */
		this.ui = {
			document          : $(document),
			window            : $(window),
			body              : $('body'),
			container         : null
		};

		/**
		 * Values specific to current grid wall
		 */
		this.instance = $.extend({
			contentLoader     : null,                  // placeholder for global loading icon utility
			data              : {
									allItems   : [],  // initial data to display
									filter1    : [],  // all photo/video data items
									filter2    : [],  // all tweet data items
									filter3    : []   // all popstar data items
								}
		}, this.instance || {});

		/**
		 * Widget states
		 */
		this.state = {

		};

		this._initialize( containerSelector );
		this._addEventListeners();
	}

	/**
	 * Initializes the widget
	 */
	_initialize( containerSelector ) {
		this.ui.container = $( containerSelector );

		// set global loader utility
		this.instance.contentLoader = new Loader( this.ui.container );
		this.instance.contentLoader.addLoader();

		this._getContent();
		this._initModals();
	}

	/**
	 * Create our modal widgets for each type of content
	 */
	_initModals() {
		var modal = new ModalMedia( '.modal-trigger', {
				type       : 'photo',
				modalClass : 'modal-window'
			});
	}

	/**
	 * Get all our data from API calls
	 * Combine photos/videos into one array
	 * Then randomize each array and display initial grid items
	 */
	_getContent() {
		var self = this;

		$.when( this.options.ajaxUtil( this.options.dataURL, this.options.dataType )).done( function( response ) {

			// If we're caching the response, do it
			self.instance.data.allItems = response;

			// Display the content
			self._setContent( response );
			self._displayContent( response );

		}).fail(function() {
			// If the call failed, show error message
			self.ui.container.html( self.options.errorMsg );
		});
	}

	_setContent( dataObj ) {
		for ( let item of dataObj ) {
			switch( item.filter ) {
				case 'filter1' :
					this.instance.data.filter1.push( item );
					break;
				case 'filter2' :
					this.instance.data.filter2.push( item );
					break;
				case 'filter3' :
					this.instance.data.filter3.push( item );
					break;
			}
		}
	}

	/**
	 * Display the initial set of content
	 */
	_displayContent( dataObj ) {
		var self          = this,
			content       = dataObj,
			completeCount = 0,
			html, $items;

		if ( this.options.template ) {
			html   = this.options.template({ items:content });
			$items = $(html).filter( this.options.selectorItem ).addClass( this.options.classHidden );
		}

		this.instance.contentLoader.removeLoader();

		this.ui.container.prepend( $items ).imagesLoaded( { background: this.options.selectorItem }, function() {
			$.each( $items, function( index ) {
				var $curItem    = $(this),
					$curTrigger = $curItem.find('a');

				// Animate item into view
				TweenMax.fromTo( $curItem, self.options.animSpeed, {
					autoAlpha  : 0
				}, {
					autoAlpha  : 1,
					delay      : self.options.animDelay * index,
					ease       : self.options.animEase,
					onComplete :function() {
						completeCount++;

						// Initialize the random rotation of items after grid has rendered
						if ( completeCount === $items.length ) {
							
						}
					}
				});

				$curItem.removeClass( self.options.classHidden );
			});
		});
	}

	_addEventListeners() {

	}
}

export default GridWall;
