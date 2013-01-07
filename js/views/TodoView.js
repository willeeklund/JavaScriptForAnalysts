define(
	['jquery', 'underscore',
	'text!templates/todo/item.html',
	'backbone'],
	function($, _, TemplateTodoItem) {

	var TodoView = Backbone.View.extend({
		el: '#todos',
		initialize: function() {
			//console.info("new todoView()", this.options);
			console.log("View model", this.model, this.collection)
			this.template = _.template(TemplateTodoItem);
			this.render();
		},
		events: {
			'change input:checkbox': function (ev) {
				var cid = $(ev.target).data('cid');
				//console.warn(ev, this, $(ev.target), cid);
				//console.log("TheCollection", this.collection, this.collection.get('c1'), this.collection.models[1])
				var currmodel = this.collection.get(cid)
				currmodel.toggle();
			}
		},
		render: function () {
			console.log("View:render()");
			var that = this;
			console.log("EL html", that.$el, $(that.$el), $(that.$el).html());
			$(that.$el).html('');
			this.collection.each(function(model) {
				that.$el.append(that.template($.extend(model.toJSON(), {cid: model.cid})));
				//console.log("model", model, model.cid, $.extend(model.toJSON(), {cid: model.cid}));
			});
			return this;
		}
	});

	return TodoView;
});