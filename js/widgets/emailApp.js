/**
 * Common config part for all pages
 */
requirejs.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		jquery_serializeObject: 'lib/jquery.serializeObject'
	},
	shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'jquery_serializeObject': {
        	deps: ['jquery']
        }
    }
});

/**
 * Start JS for this specific page
 */
requirejs(
	['jquery',
	'underscore',
	'collections/emails',
	'models/email',
	'views/EmailList',
	'views/EmailItem',
	'views/ReadEmail',
	// Unnamed
	'backbone'],
	function ($, _, EmailCollection, EmailModel, EmailListView, EmailItemView, ReadEmailView) {
	// Run when ready
	$(function () {
		console.info("Starting EmailApp.js");

		_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

		var emailCollection = new EmailCollection();
		emailCollection.add(new EmailModel({
			title: 'Köp mjölk!',
			text: 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.'+
			'Maecenas sed diam eget risus varius blandit sit amet non magna.',
			sender: 'Cissi',
			receiver: 'Wille'
		}));
		emailCollection.add(new EmailModel({
			title: 'Fanns ingen mjölk...',
			text: 'Nullam id dolor id nibh ultricies vehicula ut id elit.'+
			'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'+
			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'+
			'Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
			sender: 'Cissi',
			receiver: 'Wille'
		}));
		console.log("emailCollection", emailCollection.toJSON());

		var emailListView = new EmailListView({
			collection: emailCollection
		});

		// @todo skicka in en email model
		var activeEmail = new ReadEmailView({
			collection: emailCollection
		});


	});
});
