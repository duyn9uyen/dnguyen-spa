$(function () {

    ArticleModel = Backbone.Model.extend({
        //urlRoot: 'http://html5news.herokuapp.com/articles/',
        url:    'http://html5news.herokuapp.com/articles/',
        defaults: function () {
            return {
                id: -1,
                headLine: null,
                snippet: null,
                fullStory: null,
                location: null,
                nsfw: null,
                category: null,
                relatedArticles: null
            }
        },
        initialize: function (id) {
            if (id) {
                this.url += id;
            }
        }
    });

    ArticleCollectionModel = Backbone.Collection.extend({
        url: "http://html5news.herokuapp.com/articles/all",
        model: ArticleModel
    });


    ArticlesByCategoryModel = Backbone.Collection.extend({
        url: "http://html5news.herokuapp.com/category/",
        model: ArticleModel,
        defaults: function () {
            return {
                main: null,
                aside: null,
            }
        },
        initialize: function (id) {
            if (id) {
                this.url += id;
            }
        }
    });
});
