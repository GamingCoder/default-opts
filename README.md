# default-opts
Set default values for opts.
# Functions
Please note that this is directly from `test/basic.js`
```js
var test = require('tape');
var defOpts = require('default-opts');

var opts = {"boolean":true,"number":123,"string":"Hello World"};
var defaults = {"boolean":false,"number":321,"string":"Goodbye World","default":"default"};

test('sync', function(t) {
	t.plan(1);
	var syncResult = defOpts.optsSync(opts, defaults);
	t.equal(syncResult, {"boolean":true,"number":123,"string":"Hello World","default":"default"});
});

test('async', function(t) {
	t.plan(1);
	defOpts.opts(opts, defaults, function(err, result) {
		t.equal(result, {"boolean":true,"number":123,"string":"Hello World","default":"default"});
});

test('promise', function(t) {
	t.plan(1);
	defOpts.opts(opts, defaults).then(function(result) {
		t.equal(result, {"boolean":true,"number":123,"string":"Hello World","default":"default"});
	});
});
```
# License
MIT