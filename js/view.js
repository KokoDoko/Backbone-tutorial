// namespace
var app = {};

// model for a todo item
app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

// a collection holds model data and offers functions to manipulate the data
app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Store("backbone-todo")
});

// VIEWS
// There are 4 basic properties in a view: el, initialize, render, and events.
// je kan de properties (el, tagname, etc) ook meegeven in de constructor
// een view voor 1 todo item wordt in de LI tag gerenderd - let op er bestaat nu nog geen el/$el
app.TodoView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($('#item-template').html()),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this; // enable chained calls
    }
});


// **********************************************************************
// create our app using instances for model, collection and view
// renders the full list of todo items calling TodoView for each one.
// **********************************************************************

app.AppView = Backbone.View.extend({
  el: '#todoapp',
  initialize: function () {
    this.input = this.$('#new-todo');
    // when new elements are added to the collection render then with addOne
    app.todoList.on('add', this.addOne, this);
    app.todoList.on('reset', this.addAll, this);
    app.todoList.fetch(); // Loads list from local storage
  },
  events: {
    'keypress #new-todo': 'createTodoOnEnter'
  },
  createTodoOnEnter: function(e){
    if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
      return;
    }
    app.todoList.create(this.newAttributes());
    this.input.val(''); // clean input box
  },
  addOne: function(todo){
    var view = new app.TodoView({model: todo});
    $('#todo-list').append(view.render().el);
  },
  addAll: function(){
    this.$('#todo-list').html(''); // clean the todo list
    app.todoList.each(this.addOne, this);
  },
  newAttributes: function(){
    return {
      title: this.input.val().trim(),
      completed: false
    }
  }
});


//--------------
// Initializers
//--------------   

// just testing
/*
var myList = new app.TodoList()

var item1 = new app.Todo({title: 'Learn Models', completed: true});
var item2 = new app.Todo({title: 'And also collections', completed: false});
myList.add([item1, item2]);
*/

// let op: kleine letters is instance, hoofdletter is class
app.todoList = new app.TodoList();
app.appView = new app.AppView();

