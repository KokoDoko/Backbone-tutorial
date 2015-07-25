// data wordt bijgehouden in een model

var app = {}; // create namespace for our app

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});