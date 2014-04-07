$(function () {

    var banners = new BannerCollectionModel();

    BannerView = Backbone.View.extend({

        // We bind the view to an exisiting dom element that we define
        el: $("#banner-container"),

        // Compile the template using underscore
        template: _.template($('#banner-template').html()),

        initialize: function () {
            var self = this;
            banners.fetch({ success: function () { self.render(); } });
        },

        render: function () {
            // Load the compiled HTML into the Backbone "el"

            this.$el.html(this.template({ fetched_banners: banners.toJSON() }));

            //Just getting 1 banner
            //this.$el.html(this.template({ fetched_banners: banners.get(1).toJSON() }));

            return this;
        }
    });
});
