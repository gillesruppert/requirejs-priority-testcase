console.log('loading config');
require.def('req/config', [
	'req/begin'
], function() {
	console.log('in the config');
	var config = {
		test: 'Hello require',
		state: 'alpha'
	};
	return ip.config = config;
});
