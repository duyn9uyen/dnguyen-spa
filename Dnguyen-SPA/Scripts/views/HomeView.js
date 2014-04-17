$(function () {

    //var allArticles = new ArticleCollectionModel();
    var featuredArticles = new FeaturedArticlesModel();

    // top-level piece of UI
    HomeView = Backbone.View.extend({

        el: $("#content-container"),

        template: _.template($('#home-template').html()),

        initialize: function () {
            var self = this;
            //allArticles.fetch({ success: function () { self.render(); } });
            featuredArticles.fetch({ success: function () { self.render(); } });
        },

        render: function () {
            // Load the compiled HTML into the Backbone "el"
            //this.$el.html(this.template({ fetched_content: allArticles.toJSON() }));

            this.$el.html(this.template({
                aside: featuredArticles.get("aside").toJSON(),
                main: featuredArticles.get("main").toJSON(),
                opinion: featuredArticles.get("opinion").toJSON(),
                travel: featuredArticles.get("travel").toJSON()
            }));
            return this;
        }

    });
});