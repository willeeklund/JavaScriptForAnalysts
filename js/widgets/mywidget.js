define(['jquery', 'underscore', 'text!templates/name.tpl'], function ($, _, TemplateName) {
	// Internal variables
	var el, input1, input2;

	// Constructor method
	var mywidget =  function (field_el, field_1, field_2) {
		el = field_el;
		input1 = field_1;
		input2 = field_2;
		console.info("myWidget is loaded");
		var named = _.template(TemplateName, {name: 'Wilhelm'});
		console.log("TemplateName:", named);
		events();
	}

	// Registered event listeners
	events = function () {
		$(el).on('click', handlebutton);
	};

	var handlebutton = function (ev) {
		ev.preventDefault();
		$(input1).val("start date");
		$(input2).val("end date");
	}

	return mywidget;
});
