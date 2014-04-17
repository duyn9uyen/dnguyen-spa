$(function () {

    var categoryId;

    //var articlesByCat = new ArticlesByCategoryModel(1);
    var articlesByCat;

    ContentCategoryView = Backbone.View.extend({

        el: $("#content-container"),

        template: _.template($('#content-template').html()),

        initialize: function (options) {
            //get the categoryId
            categoryId = options.id;

            //dynamically get the collection of articles
            articlesByCat = new ArticlesByCategoryModel(categoryId);

            var self = this;
            articlesByCat.fetch({ success: function () { self.render(); } });
        },

        render: function () {
            // Load the compiled HTML into the Backbone "el"
            this.$el.html(this.template({ fetched_content: articlesByCat.toJSON() }));
            return this;
        }

    });

});
