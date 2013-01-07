define(
	['jquery', 'underscore',
	'text!templates/email/list-item.html',
	'backbone'],
	function($, _, TemplateEmailItem) {

	var EmailItem = Backbone.View.extend({
		tagName: 'div',
		parentTarget: '#inbox',
		initialize: function() {
			//console.info("new todoView()", this.options);
			//console.log("View model", this.model, this.collection)
			this.template = _.template(TemplateEmailItem);
			$(this.parentTarget).append($(this.el).html(this.template(this.model.toJSON())));
			//console.log(this, this.$el, this.parentTarget);
		},
		events: {
			'click': function(ev) {
				//console.log("click event!", ev, ev.target, this.el);
				//console.log(this.model.toJSON())
				this.model.set('unread', false);
				this.render();
				$(document).trigger('active_email', [this.model.cid]);
				//console.log(this.model.toJSON(), this.model.cid);
			}
		},
		render: function () {
			//console.log("EmailItemView:render()");
			//$(this.$el).html('');
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return EmailItem;
});