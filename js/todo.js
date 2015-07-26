// data wordt bijgehouden in een model

// namespace
var app = {};


// model for a todo item
app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});


// demo : create one model and use get and set
/*
var todo = new app.Todo({title: 'Learn Backbone.js', completed: false}); 
todo.get('title');
todo.get('completed');
todo.set('created_at', Date());
*/


// a collection holds model data and offers functions to manipulate the data
// let op 1 : de localstorage plugin wordt hier gebruikt om data lokaal op te slaan
// let op 2 : je geeft ook aan welk model hier in gaat komen
app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Store("backbone-todo")
});

// instance of the Collection
// app.todoList = new app.TodoList();


// instance
var myList = new app.TodoList()
// tip: 'create' is een shortcut voor 'create model + add model' van het type dat je boven hebt aangegeven
// myList.create({title: 'Learn Backbone Collection'});

var item1 = new app.Todo({title: 'Learn Models', completed: true});
var item2 = new app.Todo({title: 'And also collections', completed: false});
myList.add([item1, item2]);

// pluck geeft een array met alleen 1 gekozen attribute (title)
var myTitles = myList.pluck('title');
console.log(myTitles);
console.log(myList.pluck('completed')[0]);

