define(
	['jquery', 'underscore', 'backbone'],
	function($, _) {
	var Todo = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false
		},
		initialize: function() {
			this.on('change', function () {
				console.info('Model changed!')
			})
		},
		toggle: function () {
			console.log("start state: ", this.get('completed'));
			this.set('completed', !this.get('completed'));
			console.log("state changed: ", this.get('completed'));

		},
		setListener: function(listeningView) {
			console.log("Model", this, "setListener()")
			this.on('change', function() {
				listeningView.render();
			});
		}
	});
	return Todo;
});