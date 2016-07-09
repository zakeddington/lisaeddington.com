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
			dataAPIs        : [
				{
					url     : "/assets/data/collages.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "/assets/data/drawings.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "/assets/data/lettering.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "/assets/data/nature.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "/assets/data/paintings.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "/assets/data/sketches.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				}
			],
			template        : tplGrid,              // Handlebars template for grid wall
			errorMsg        : '<p>Oops. Something went wrong. Please refresh the browser to try again.</p>',
			selectorItem    : '.item-container',    // selector for each grid item
			selectorFilters : '.nav-filter a',      // selector for category filters
			classHidden     : 'hidden',             // class for setting hidden states
			animSpeed       : 0.5,                  // (s) TweenMax animation speed
			animEase        : 'Quad.easeOut',       // TweenMax animation ease
			animDelay       : 0.1,                  // (s) animation delay between items
		}, objOptions || {});

		/**
		 * UI elements
		 */
		this.ui = {
			document          : $(document),
			window            : $(window),
			body              : $('body'),
			container         : null,
			filters           : null
		};

		/**
		 * Values specific to current grid wall
		 */
		this.instance = $.extend({
			contentLoader  : null,                  // placeholder for global loading icon utility
			dataAll        : {
				"category" : "all",
				"intro"    : "",
				"items"    : []
			},
			dataCategories : []
		}, this.instance || {});

		/**
		 * Widget states
		 */
		this.state = {
			hash : window.location.hash
		};

		this._initialize( containerSelector );
		this._addEventListeners();
	}

	/**
	 * Initializes the widget
	 */
	_initialize( containerSelector ) {
		this.ui.container = $( containerSelector );
		this.ui.filters   = $( this.options.selectorFilters );

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
		var modal = new ModalMedia( '.modal-photo-trigger', {
				// options
			});
	}

	/**
	 * Get all our data from API calls
	 * Combine photos/videos into one array
	 * Then randomize each array and display initial grid items
	 */
	_getContent() {
		var self          = this,
			arrayPromises = [];

		for ( let dataAPI of this.options.dataAPIs ) {
			arrayPromises.push(
				dataAPI.apiUtil( dataAPI.url, dataAPI.type )
			);
		}

		this._deferPromises( arrayPromises ).then( function( results ) {
			for ( let result of results ) {
				self.instance.dataAll.items  = self.instance.dataAll.items.concat( result.items );
				self.instance.dataCategories.push( result );
			}

			self._shuffleData( self.instance.dataAll.items );
			self._setInitialResults();
		});
	}

	/**
	 * Defer promises utility
	 * Process all the requests while skipping over any that fail
	 * @param  {Array} arrPromises - array of promises to resolve
	 * @return {Object} promise of all the data returned
	 */
	_deferPromises( arrPromises ) {
		var deferred  = $.Deferred(),
			results   = [],
			remaining = arrPromises.length;

		for ( let i in arrPromises ) {
			arrPromises[i]
				.then( function( response ) {
					// on success, add to results
					results.push( response );
				})
				.always( function( response ) {
					// always mark as finished
					remaining--;
					// call it a day, when no more promises are left
					if ( !remaining ) {
						deferred.resolve( results );
					}
				});
		}
		// return a promise on the remaining values
		return deferred.promise();
	}

	/**
	 * Randomize the combined data array
	 * Then display the content
	 */
	_shuffleData( data ) {
		var arrData    = data,
			curIndex   = arrData.length,
			tempValue,
			ranIndex;

		// While there remain elements to shuffle...
		while ( 0 !== curIndex ) {
			// Pick a remaining element...
			ranIndex  = Math.floor( Math.random() * curIndex );
			curIndex -= 1;

			// And swap it with the current element.
			tempValue         = arrData[curIndex];
			arrData[curIndex] = arrData[ranIndex];
			arrData[ranIndex] = tempValue;
		}
	}

	_setInitialResults() {
		this._displayContent( this.instance.dataAll );
	}

	/**
	 * Display set of results
	 */
	_displayContent( dataObj ) {
		var self          = this,
			content       = dataObj,
			completeCount = 0,
			html, $html, $items;

		if ( this.options.template ) {
			html   = this.options.template( content );
			$html  = $(html);
			$items = $html.filter( this.options.selectorItem ).addClass( this.options.classHidden );
		}

		this.instance.contentLoader.removeLoader();

		this.ui.container.prepend( $html ).imagesLoaded( { background: this.options.selectorItem }, function() {
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

	_removeContent() {
		this.ui.container.empty();
	}

	_onFilterClick( event ) {
		event.preventDefault();

		var $curFilter  = $( event.currentTarget ),
			curHash     = $curFilter.attr('href'),
			curCategory = curHash.substring(1);

		window.location.hash = curCategory;

		this._removeContent();

		if ( curCategory === 'all' ) {
			this._displayContent( this.instance.dataAll );
		} else {
			for ( let data of this.instance.dataCategories ) {
				if ( data.category === curCategory ) {
					this._displayContent( data );
				}
			}
		}
	}

	_addEventListeners() {
		this.ui.filters.on('click', $.proxy(this._onFilterClick, this));
	}
}

export default GridWall;
