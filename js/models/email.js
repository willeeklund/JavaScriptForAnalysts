define(['backbone'], function() {
	var Todo = Backbone.Model.extend({
		defaults: {
			title: '',
			text: '',
			unread: true,
			sender: 'UnknownSender',
			receiver: 'UnknownReceiver',
			date: new Date()
		}
	});
	return Todo;
});
