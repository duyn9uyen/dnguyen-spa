$(function () {

    // See CategoryModel.js for definition and URL to fetch data
    var categories = new CategoryCollectionModel();

    CategoryView = Backbone.View.extend({
        
        // We bind the view to an exisiting dom element
        el: $("#categorty-container"),

        // Compile the template using underscore
        template: _.template($('#category-template').html()),

        initialize: function () {
            var self = this;
            categories.fetch({ success: function () { self.render(); } });
        },

        render: function () {
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(this.template({ fetched_categories: categories.toJSON() }));
            return this;
        }
    });
});
