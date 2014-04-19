$(function () {

    // See CategoryModel.js for definition and URL to fetch data
    var categories = new CategoryCollectionModel();

    CategoryView = Backbone.View.extend({
        
        // We bind the view to an exisiting dom element that we define
        el: $("#categoryMenu-container"),

        // Compile the template using underscore
        template: _.template($('#categoryMenu-template').html()),

        initialize: function () {
            var self = this;
            categories.fetch({ success: function () { self.render(); } });
        },

        render: function () {
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(this.template({ fetched_categories: categories.toJSON() }));

            //or you can do it this way
            //var data = this.template({ fetched_categories: categories.toJSON()});
            //this.$el.html(data);

            return this;
        }
    });
});
