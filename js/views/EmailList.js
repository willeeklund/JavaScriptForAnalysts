define(
	['jquery',
	'underscore',
	'views/EmailItem',
	'backbone'],
	function($, _, EmailItemView) {

	var EmailItem = Backbone.View.extend({
		el: '#inbox',
		initialize: function() {
			//console.info("new todoView()", this.options);
			//console.log("EmailListView created", this.collection)
			var that=this;
			this.collection.on('add change reset', function() {
				that.render();
			});
			this.render();
		},
		events: {},
		render: function () {
			$(this.el).html('');
			this.collection.each(function(model) {
				new EmailItemView({
					model: model
				});
			});
			return this;
		}
	});

	return EmailItem;
});
