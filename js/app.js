// de app view

var AppView = Backbone.View.extend({
    // el - Every view has a element in which HTML content will be rendered.
    el: '#container',
    // template from underscore.js, which has the placeholder 'who' to be substitute later
    template: _.template("<h3>Hello <%= who %></h3>"),
    // It's the first function called when this view is instantiated.
    initialize: function(){
      this.render();
    },
    // $el - it's a cached jQuery object (el), in which you can use jQuery functions
    //       to push content. Like the Hello World in this case.
    render: function(){
      // underscore template renderen met variabele
      this.$el.html(this.template({who: 'eerk!'}));
      // rechtstreeks de html setten
      // this.$el.html("Hello World");
    }
});

// instance maken

var appView = new AppView();