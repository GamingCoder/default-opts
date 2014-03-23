var test = require('tape');
var defOpts = require('../index.js');

var opts = {"boolean":true,"number":123,"string":"Hello World"};
var defaults = {"boolean":false,"number":321,"string":"Goodbye World","default":"default"};

test('sync', function(t) {
	t.plan(1);
	var syncResult = defOpts.optsSync(opts, defaults);
	t.deepEqual(syncResult, { boolean: true, default: 'default', number: 123, string: 'Hello World' }
);
});

test('async', function(t) {
	defOpts.opts(opts, defaults, function(err, result) {
		t.deepEqual(result, {"boolean":true,"number":123,"string":"Hello World","default":"default"});
		t.end();
	});
});

test('promise', function(t) {
	t.plan(1);
	defOpts.opts(opts, defaults).then(function(result) {
		t.deepEqual(result, {"boolean":true,"number":123,"string":"Hello World","default":"default"});
	});
});