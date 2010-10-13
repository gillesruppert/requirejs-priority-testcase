console.log('loading begin');
require.def('req/begin', function() {
	console.log('in the begin');
	window.ip = {
		begin: 'begin',
		controllers: {},
		models: {},
		views: {},
		utils: {},
		config: {}
	};
});
