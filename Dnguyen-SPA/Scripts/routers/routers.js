//This is the entry point of the application

$(function () {

    var Router = Backbone.Router.extend({

        //  I Made this smart by dynamically building all of the routes. Here, we only build the home route.
        // example: http://localhost/ is the home route that will trigger a route called 'home'
        // example: http://localhost/#world will trigger a route called 'world'
        routes: {
            '': 'home'

            //'': 'home',
            //'world': 'world',
            //'business': 'business',
            //'sports': 'sports',
            //'fashion': 'fashion',
            //'video': 'video',
            //'opinion': 'opinion',
            //'travel': 'travel',
        }
    });

    // instaniate router
    var router = new Router();

    // define what to do when the user navigates to the home route
    // 'route' is a backbone namespace
    router.on('route:home', function () {
        //if you go to http://localhost/, you should see the message in the console
        //console.log('Yo.....home page loaded');

        var category_View = new CategoryView();
        var home_View = new HomeView();
        var banner_View = new BannerView();
    });

    // Get all the categories to build out the category routes
    $.ajax({
        type: 'GET',
        url: 'http://html5news.herokuapp.com/articles/categories',
        dataType: 'json',
        error: function (xhr, textStatus, errorThrown) {
            alert(xhr.status);
            alert(thrownError);
        },
        success: function (data) {
            $.each(data, function (key, value) {
                var shortName = value.shortName

                // dynamically add new routes to the router object
                router.route(shortName, shortName);
            });

            // loop again, but this time create the route function definitions
            $.each(data, function (key, value) {
                var shortName = value.shortName
                var id = value.id;
                var routeName = 'route:' + shortName;
                
                // dynamically add route functions
                router.on(routeName, function () {
                    var ContentCategory_View = new ContentCategoryView({ id: id });
                });
            });
        }
    });
    
    
    // Examle: This is how we originally added the route functions. 
    //          But we would have to do this for each category. 
    //          We would also have to manually add a new category route if a new one is added.
    //          But the app is now smart enough to not need that.

    //router.on('route:world', function () {
    //    //console.log('Yo.....you clicked on the world link');
    //    //var WorldCategory_View = new ContentCategoryView();
    //    var ContentCategory_View1 = new ContentCategoryView({ id: '1' });
    //});

    //router.on('route:business', function () {
    //    var ContentCategory_View2 = new ContentCategoryView({ id: '2' });
    //});

    // Need this to have bacbone start listening to the urls
    Backbone.history.start();

});