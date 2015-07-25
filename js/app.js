// de app view

var AppView = Backbone.View.extend({
    // el - Every view has a element in which HTML content will be rendered.
    el: '#container',
    // It's the first function called when this view is instantiated.
    initialize: function(){
      this.render();
    },
    // $el - it's a cached jQuery object (el), in which you can use jQuery functions
    //       to push content. Like the Hello World in this case.
    render: function(){
      this.$el.html("Hello World");
    }
});

// instance maken

var appView = new AppView();