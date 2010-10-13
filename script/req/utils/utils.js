console.log('loading utils');
require.def('req/utils/utils', [
	'req/begin',
	'req/config'
], function() {
	console.log('in the utils');
	var utils = {
		test:  function() {
			return ('utils ' + ip.config.test);
		}
	};
	return ip.utils = utils;
});
