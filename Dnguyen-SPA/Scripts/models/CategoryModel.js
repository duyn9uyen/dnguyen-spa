$(function () {

    CategoryModel = Backbone.Model.extend({
        defaults: function () {
            return {
                id: -1,
                shortName: null,
                displayName: null
            }
        },
        initialize: function () {
            //alert("Welcome to this world");
        }
    });

    CategoryCollectionModel = Backbone.Collection.extend({
        url: "http://html5news.herokuapp.com/articles/categories",
        model: CategoryModel
        
    });

});
