/**
 * Common config part for all pages
 */
requirejs.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min',
		underscore: 'lib/underscore'
	}
});

/**
 * Start JS for this specific page
 */
requirejs(
	['jquery', 'widgets/mywidget'],
	function ($, MyWidget) {
	// Run when ready
	$(function () {
		console.info("Running from inside the main program: buttonclicker.js");
		//$('body').append("<span style='color:#48AF5E'>Running from inside the function.</span>");
		var myWidget = new MyWidget('.menu button', '#date_start', '#date_end');
		console.log("myWidget:", myWidget);
	});
});
