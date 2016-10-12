/**
 * Portfolio View
 *
 * @description
 * - Display images in a grid with filtering by category
 * - Open detail view of each item in a modal
 *
 * @requires jQuery
 * @requires TweenMax
 *
 * @example
 * new Porfolio('.portfolio', {options})
 *
 * @constructor
 * @author     Zak Eddington <zakeddington@gmail.com>
 *
 * @param {String} containerSelector  - container element (e.g. '.portfolio')
 * @param {Object} objOptions         - Optional object of properties to mixin to the instance
 *
 */

import AjaxGet    from 'utilities/AjaxGet';
import Loader     from 'utilities/Loader';
import ModalMedia from 'widgets/ModalMedia';
import tplGrid    from 'templates/grid.hbs';

class Porfolio {

	constructor(containerSelector, objOptions) {
		this.initialize(containerSelector, objOptions);
	}

	initialize(containerSelector, objOptions) {
		/**
		 * Default configuration for component
		 */
		this.options = $.extend({
			dataAPIs : [
				{
					url     : "assets/data/drawing.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "assets/data/collage.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "assets/data/lettering.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "assets/data/painting.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "assets/data/sketch-book.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "assets/data/mugs.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "assets/data/floral-art.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				},
				{
					url     : "assets/data/deconstructed-mandalas.json",
					type    : 'JSON',
					apiUtil : AjaxGet
				}
			],
			template               : tplGrid,              // Handlebars template for grid layout
			errorMsg               : '<p>Oops. Something went wrong. Please refresh the browser to try again.</p>',
			selectorIntro          : '.intro',             // selector for the category description
			selectorItem           : '.item-container',    // selector for each grid item
			selectorFilterAnchors : '.nav-filter a',      // selector for desktop category filters
			selectorFilterSelects  : '.nav-filter select', // selector for mobile category filters
			selectorBottom         : '.nav-bottom',        // selector for the filters at bottom of page
			classActive            : 'active',             // class for setting active states
			classHidden            : 'hidden',             // class for setting hidden states
			animSpeed              : 0.5,                  // (s) TweenMax animation speed
			animEase               : 'Quad.easeOut',       // TweenMax animation ease
			animDelay              : 0.1,                  // (s) animation delay between items
		}, objOptions || {});

		/**
		 * UI elements
		 */
		this.ui = {
			container      : null, // container for portfolio
			filterAnchors  : null, // category nav anchors (desktop)
			filterSelects  : null, // category nav select (tablet/mobile)
			filterOptions  : null  // category nav options (tablet/mobile)
		};

		/**
		 * Values specific to current grid wall
		 */
		this.instance = $.extend({
			contentLoader  : null, // placeholder for global loading icon utility
			dataCategories : []    // placeholder for JSON data
		}, this.instance || {});

		/**
		 * Widget states
		 */
		this.state = {
			hash : window.location.hash
		};

		this._initialize(containerSelector);
		this._addEventListeners();
	}

	/**
	 * Initializes the widget
	 */
	_initialize(containerSelector) {
		this.ui.container      = $(containerSelector);
		this.ui.filterAnchors  = $(this.options.selectorFilterAnchors);
		this.ui.filterSelects  = $(this.options.selectorFilterSelects);
		this.ui.filterOptions  = this.ui.filterSelects.find('option');

		// set global loader utility
		this.instance.contentLoader = new Loader(this.ui.container);
		this.instance.contentLoader.addLoader();

		this._getContent();
		this._initModals();
	}

	/**
	 * Create our modal widgets for each type of content
	 */
	_initModals() {
		let modal = new ModalMedia('.modal-photo-trigger', {
				// options
			});
	}

	/**
	 * Get all our data from API calls
	 * Then init the layout
	 */
	_getContent() {
		let	arrayPromises = [];

		for (let dataAPI of this.options.dataAPIs) {
			arrayPromises.push(
				dataAPI.apiUtil(dataAPI.url, dataAPI.type)
			);
		}

		this._deferPromises(arrayPromises).then( function(results) {
			for (let result of results) {
				this.instance.dataCategories.push(result);
			}

			this._setInitialResults();
		}.bind(this));
	}

	/**
	 * Defer promises utility
	 * Process all the requests while skipping over any that fail
	 * @param  {Array} arrPromises - array of promises to resolve
	 * @return {Object} promise of all the data returned
	 */
	_deferPromises(arrPromises) {
		let deferred  = $.Deferred();
		let	results   = [];
		let	remaining = arrPromises.length;

		for (let i in arrPromises) {
			arrPromises[i]
				.then( function(response) {
					// on success, add to results
					results.push(response);
				})
				.always( function(response) {
					// always mark as finished
					remaining--;
					// call it a day, when no more promises are left
					if (!remaining) {
						deferred.resolve(results);
					}
				});
		}
		// return a promise on the remaining values
		return deferred.promise();
	}

	/**
	 * Set initial category to display based on hash or default to all
	 */
	_setInitialResults() {
		let curCategory = this.state.hash;

		if (curCategory) {
			curCategory = curCategory.substring(1);
		} else {
			curCategory = this._getRandomCategory();
		}

		this._setCurCategory(curCategory);
	}

	/**
	 * Randomly select a category
	 */
	_getRandomCategory() {
		let ranIndex = Math.floor(Math.random() * this.instance.dataCategories.length);

		return this.instance.dataCategories[ranIndex].category;
	}

	/**
	 * Set the active state of filters and display content
	 * @param {String} strCategory - category name ('drawings', etc)
	 */
	_setCurCategory(strCategory) {
		let self = this;
		let	curCategory = strCategory;
		let $options = this.ui.filterOptions;

		this.ui.filterAnchors.removeClass(this.options.classActive);

		$.each(this.ui.filterAnchors, function() {
			let $curFilter = $(this);
			let $curParent = $curFilter.parents('li').find('.category-parent');

			if ($curFilter.attr('href') === '#' + curCategory) {
				$curFilter.addClass(self.options.classActive);

				if ($curParent.length) {
					$curParent.addClass(self.options.classActive);
				}
			}
		});

		$.each($options, function() {
			let $curFilter = $(this);

			if ($curFilter.attr('value') === '#' + curCategory) {
				$curFilter.prop('selected', true);
			}
		});

		for (let data of this.instance.dataCategories) {
			if (data.category === curCategory) {
				this._displayContent(data);
			}
		}
	}

	/**
	 * Display set of results
	 * @param {Object} dataObj - JSON data for category
	 */
	_displayContent(dataObj) {
		let self    = this;
		let	content = dataObj;
		let	html    = this.options.template(content);
		let	$html   = $(html);
		let	$items  = $html.find(this.options.selectorItem).addClass(this.options.classHidden);
		let	$intro  = $html.filter(this.options.selectorIntro).addClass(this.options.classHidden);

		this.instance.contentLoader.removeLoader();

		this.ui.container.prepend($html).imagesLoaded({ background: this.options.selectorItem }, function() {

			// Fade in, slide down the intro
			TweenMax.fromTo($intro, self.options.animSpeed, {
				opacity    : 0,
				y          : -30
			}, {
				opacity    : 1,
				y          : 0,
				ease       : self.options.animEase,
				onComplete :function() {
					$intro.removeAttr('style');
				}
			});

			$intro.removeClass(self.options.classHidden);

			// Fade in each item
			$.each($items, function(index) {
				let $curItem    = $(this);
				let	$curTrigger = $curItem.find('a');

				// Animate item into view
				TweenMax.fromTo($curItem, self.options.animSpeed, {
					opacity    : 0
				}, {
					opacity    : 1,
					delay      : self.options.animDelay * index,
					ease       : self.options.animEase,
					onComplete :function() {
						$curItem.removeAttr('style');
					}
				});

				$curItem.removeClass(self.options.classHidden);
			});
		});
	}

	_removeContent() {
		this.ui.container.empty();
	}

	// Update hash and display new content
	_onFilterAction(event) {
		event.preventDefault();

		let $curFilter  = $(event.currentTarget);

		if (event.type === 'click') {
			let	curHash     = $curFilter.attr('href');
			let	curCategory = curHash.substring(1);

			if (!$curFilter.hasClass(this.options.classActive)) {
				window.location.hash = curCategory;

				this._removeContent();

				this._setCurCategory(curCategory);
			}
		}

		if (event.type === 'change') {
			let	curHash     = $curFilter.val();
			let	curCategory = curHash.substring(1);

			window.location.hash = curCategory;
			window.scrollTo(0,0);

			this._removeContent();

			this._setCurCategory(curCategory);
		}
	}

	_addEventListeners() {
		this.ui.filterAnchors.on('click', $.proxy(this._onFilterAction, this));
		this.ui.filterSelects.on('change', $.proxy(this._onFilterAction, this));
	}
}

export default Porfolio;
