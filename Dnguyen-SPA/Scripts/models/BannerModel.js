/// <reference path="/backbone.js" />
/// <reference path="/jquery-1.10.2.js" />
/// <reference path="/underscore.js" />

$(function () {
    BannerModel = Backbone.Model.extend({
        defaults: function () {
            return {
                id: -1,
                message: null
            }
        },
        initialize: function () {
        }
    });

    BannerCollectionModel = Backbone.Collection.extend({
        model: BannerModel,
        url: "http://html5news.herokuapp.com/banners"
    });

});
