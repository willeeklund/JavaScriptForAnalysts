define(['models/email', 'backbone'], function(EmailModel) {
	var EmailCollection = Backbone.Collection.extend({
		model: EmailModel,
		initialize: function () {
			console.info("EmailCollection CREATED");
			var that=this;
			$(document).on('sent_email', function(ev, data) {
				console.log("Triggered: sent_email", data);
				that.add(new EmailModel(data));
				console.log("collection data", that.toJSON())
			});
		}
	});
	return EmailCollection;
});