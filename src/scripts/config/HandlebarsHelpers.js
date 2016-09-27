var Handlebars = require('handlebars/runtime')['default'];
// import Handlebars from 'handlebars/runtime';

const HandlebarsHelpers = function() {
/* jshint ignore:start */

	Handlebars.registerHelper('ifAnd', function(v1, v2, options) {
		if (v1 && v2) {
			return options.fn(this);
		}
		return options.inverse(this);
	});

	Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {

		var operators, result;

		if (arguments.length < 3) {
			throw new Error("Handlebars Helper 'compare' needs 2 parameters");
		}

		if (options === undefined) {
			options = rvalue;
			rvalue = operator;
			operator = "===";
		}

		operators = {
			'==': function (l, r) { return l == r; },
			'===': function (l, r) { return l === r; },
			'!=': function (l, r) { return l != r; },
			'!==': function (l, r) { return l !== r; },
			'<': function (l, r) { return l < r; },
			'>': function (l, r) { return l > r; },
			'<=': function (l, r) { return l <= r; },
			'>=': function (l, r) { return l >= r; },
			'typeof': function (l, r) { return typeof l == r; }
		};

		if (!operators[operator]) {
			throw new Error("Handlebars Helper 'compare' doesn't know the operator " + operator);
		}

		result = operators[operator](lvalue, rvalue);

		if (result) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}

	});


	Handlebars.registerHelper('each', function(context, startIndex, options) {

	  if( typeof startIndex !== "number" ) {
		options = startIndex;
		startIndex = 0;
	  }

	  var fn = options.fn, inverse = options.inverse;
	  var i = startIndex, ret = "", data;

	  if (options.data) {
		  data = Handlebars.createFrame(options.data);
	  }

	  if(context && typeof context === 'object') {
		  if(context instanceof Array){
			  for(var j = context.length, count = 2; i<j; i++) {
				  if (data) {
					  data.index = i;
					  data.number = i + 1;
					  data.total = context.length;
					  data.even = !Boolean(i%2);
					  data.odd = !data.even;
					  data.middle = Boolean(count == 3);
					  data.first = (i === startIndex);
					  data.last = (i === j-1);
				  }
				  count++;
				  if( count > 3 ) { count = 1; }
				  ret = ret + fn(context[i], {data: data});
			  }
		  } else {
			  for(var key in context) {
				  if(context.hasOwnProperty(key)) {
					  if(data) { data.key = key; }
					  ret = ret + fn(context[key], {data: data});
					  i++;
				  }
			  }
		  }
	  }

	  if(i === 0){
		  ret = inverse(this);
	  }

	  return ret;

	});

	Handlebars.registerHelper('slugify', function(value) {
		var arr = typeof value === 'string' ? value.split(/[\s\-]/) : [],
			ret = '';

		if (arr.length) {
			arr = arr.filter(function(s) { return s; }); // Strip out empty array entries.
			ret = arr.join('-').toLowerCase();
		}

		return ret;
	});

	Handlebars.registerHelper('toCamelCase', function(value) {
		var arr = typeof value === 'string' ? value.split(/[\s\-]/) : [],
			ret = '';

		if (arr.length) {
			arr[0] = arr[0].toLowerCase();
			ret = arr.join('');
		}

		return ret;
	});

	Handlebars.registerHelper('toLowerCase', function(value) {
		return (value && typeof value === 'string') ? value.toLowerCase() : '';
	});

	Handlebars.registerHelper('if_eq', function(a, b, opts) {
		if(a == b)
			return opts.fn(this);
		else
			return opts.inverse(this);
	});

/* jshint ignore:end */
};

export default HandlebarsHelpers;
