$(function () {

    var allArticles = new ArticleCollectionModel();

    // top-level piece of UI
    HomeView = Backbone.View.extend({

        el: $("#content-container"),

        template: _.template($('#home-template').html()),

        initialize: function () {
            var self = this;
            allArticles.fetch({ success: function () { self.render(); } });
        },

        render: function () {
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(this.template({ fetched_content: allArticles.toJSON() }));
            return this;
        }

    });
});