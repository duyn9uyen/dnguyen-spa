$(function () {

    var id = 1;
    var articlesByCat = new ArticlesByCategoryModel(id);

    WorldCategoryView = Backbone.View.extend({

        el: $("#content-container"),

        template: _.template($('#content-template').html()),

        initialize: function () {
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
