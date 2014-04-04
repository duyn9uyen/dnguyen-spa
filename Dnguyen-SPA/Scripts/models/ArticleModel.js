$(function () {

    ArticleModel = Backbone.Model.extend({
        urlRoot: 'http://html5news.herokuapp.com/articles',
        defaults: function () {
            return {
                id: -1,
                headline: null,
                snippet: null,
                fullStory: null,
                location: null,
                nsfw: null,
                category: null,
                relatedArticles: null
            }
        },
        initialize: function () {
            //alert("Welcome to articles");
        }
    });

    ArticleCollectionModel = Backbone.Collection.extend({
        url: "http://html5news.herokuapp.com/articles/all",
        model: ArticleModel
    });

});
