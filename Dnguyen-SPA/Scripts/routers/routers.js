$(function () {

    var Router = Backbone.Router.extend({
        
        routes: {
            // http://localhost/ is the home route that will trigger a route called 'home'
            '': 'home',
            // http://localhost/#world will trigger a route called 'world'
            'world': 'world'
        }
    });

    var router = new Router();

    //route is a backbone namespace
    router.on('route:home', function () {
        //if you go to http://localhost/, you should see the message in the console
        //console.log('Yo.....home page loaded');

        var category_View = new CategoryView();
        var home_View = new HomeView();
        var banner_View = new BannerView();
    });

    router.on('route:world', function () {
        //console.log('Yo.....you clicked on the world link');
        var WorldCategory_View = new WorldCategoryView();
    });

    // need to have bacbone start listening to the urls
    Backbone.history.start();

});