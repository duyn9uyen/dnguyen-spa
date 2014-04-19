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
