var Q = require('q');
var _ = require('underscore');

function defOpts () {}

defOpts.prototype.opts = function(opts, defaults, cb) {
	var deffered = Q.defer();

	deffered.resolve(_.defaults(opts, defaults));

	return deffered.promise.nodeify(cb);
};

defOpts.prototype.optsSync = function(opts, defaults) {
	return _.defaults(opts, defaults);
}

//  export defOpts class
exports = module.exports = new defOpts();