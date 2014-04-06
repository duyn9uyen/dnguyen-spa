Technology Stack:

MVC 5
EF 6
Bootstrap 3

jQuery Validation Unobtrusive Native
http://jqueryvalidationunobtrusivenative.azurewebsites.net/Home/GettingStarted
	* No longer need to serve up the jquery.validate.unobtrusive.js on a screen where you are using jQuery Validation Unobtrusive 

jQuery 2.0 Released
http://blog.jquery.com/2013/04/18/jquery-2-0-released/
	* jQuery 2.0 is intended for the modern web browsers
 	* Does not support Internet Explorer 6, 7, and 8 browsers
	* jQuery 1.9 API equivalence: jQuery 2.0 is API-compatible with 1.9


Backbone Notes:


Routes - Is used to manage the URL so that the user knows where they are and they can 
	use the back and forard button as the urls are retained in the navigation history

With Single Page Applications -  urls start with #/
<a href="#/"></a>

_site.js
	Creates new CategoryView();
		--> calls CategoryView.js
			- CategoryView.js creates a new CategoryCollectionModel() defined in CategoryModel.js
				- CategoryModel.js defines CategoryModel
			- CategoryView.js creates a CategoryView
				- View defines the html template to use
					- html template contains logic on how to display the data
				- on init: fetches data from the url specified on the CategoryCollectionModel
				- on render: loads the compiled HTML into the backbone "el" aka the DOM.