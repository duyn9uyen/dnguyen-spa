/// <reference path="/backbone.js" />
/// <reference path="/jquery-1.10.2.js" />
/// <reference path="/underscore.js" />

$(function () {
    FeaturedArticlesModel = Backbone.Model.extend({
        defaults: function () {
            return {
                aside: [],
                main: [],
                opinion: [],
                travel: []
            }
        },

        url: "http://html5news.herokuapp.com/articles/featured",

        parse: function (res) {
            if (res.aside) {
                res.aside = new ArticleCollectionModel(res.aside);
            }

            if (res.main) {
                res.main = new ArticleCollectionModel(res.main);
            }

            if (res.opinion) {
                res.opinion = new ArticleCollectionModel(res.opinion);
            }

            if (res.travel) {
                res.travel = new ArticleCollectionModel(res.travel);
            }

            return res;
        },

        initialize: function () {
        }

    });

});
