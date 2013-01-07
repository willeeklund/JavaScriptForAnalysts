define(
	['jquery', 'underscore',
	'text!templates/email/read.html',
	'jquery_serializeObject',
	'backbone'],
	function($, _, TemplateReadEmail) {

	var ReadEmail = Backbone.View.extend({
		el: '#activeEmail',
		initialize: function() {
			//console.info("new todoView()", this.options);
			console.log("ReadEmailView model", this.model, this.collection, this.collection.get(0))
			this.template = _.template(TemplateReadEmail);
			//this.model = this.collection.get(0);
			//$(this.parentTarget).append($(this.el).html(this.template(this.model.toJSON())));
			console.log(this, this.$el, this.parentTarget);
			// Register global listener
			var that = this;
			$(document).on('active_email', function(ev, name) {
				console.log("Triggered: active_email", name);
				that.model = that.collection.get(name);
				that.render();
			})
		},
		events: {
			'click button.reply': function(ev) {
				ev.preventDefault();
				$(this.el).find('.reply-area').removeClass('is-hidden');
				$(ev.target).addClass('is-hidden');
			},
			'submit form#reply-email': function (ev) {
				ev.preventDefault();
				$(document).trigger('sent_email', $.extend( $(ev.target).serializeObject(), {date: new Date()} ));
				console.warn($.extend( $(ev.target).serializeObject(), {date: new Date()} ));
			}
		},
		render: function () {
			console.log("ReadEmailView:render()");
			//$(this.$el).html('');
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return ReadEmail;
});