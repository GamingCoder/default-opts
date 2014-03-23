var Q = require('q');
var _ = require('underscore');

function defOpts () {}

defOpts.prototype.opts = function(opts, defaults, cb) {
	var deffered = Q.defer();



	return deffered.promise.nodeify(cb);
};


//  export defOpts class
exports = module.exports = new defOpts();