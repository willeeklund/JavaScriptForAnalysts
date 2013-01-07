/**
 * Common config part for all pages
 */
requirejs.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone'
	},
	shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }
    }
});

/**
 * Start JS for this specific page
 */
requirejs(
	['jquery',
	'underscore',
	'views/TodoView',
	'models/todo',
	// Unnamed
	'backbone'],
	function ($, _, TodoView, Todo) {
	// Run when ready
	$(function () {
		console.info("Running from inside the main program: todotest1.js");
		console.log("_", _);
		console.log("Backbone", Backbone);

		_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };



	var TodoCollection = Backbone.Collection.extend({
		model: Todo,
		//url: '/todos'
		setListener: function(listeningView) {
			console.log("Collection:setListener", listeningView);
			this.each(function(model) {
				console.log("Model? ", model, this);
				model.setListener(listeningView);
			})

		}
	});


	var myTodo = new Todo({
		title: 'Create todo item',
		completed: true
	});
	myTodo.set('title', 'Just change first todo item to Done');
	var todoList = new TodoCollection([myTodo]);
	todoList.add(new Todo({title: 'Test another code example'}));

	console.log("My Todo List", todoList, todoList.length);

	var myView = new TodoView({
		collection: todoList
	});
	// Set the View to listen to changes in the Collection
	todoList.setListener(myView);

	console.log("Get special model:", todoList.get('c2'));

	});
});
