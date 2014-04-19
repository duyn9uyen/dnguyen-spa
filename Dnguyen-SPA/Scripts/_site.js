//This script is for the expandable banner. We use css3 classes to expand.

$(function () {
    
    // We have to wait 1 second because we are using underscore html templates to render the content. If we don't wait,
    // this script will execute before the css class has been written to the dom so it won't work.
    setTimeout(function () {
        var clickArea = $('.clickExpandArea');
        clickArea.on('click', function () {
            var $div = $('.expandableDiv');
            var expand = 'expandableDiv-expand';
            var collapse = 'expandableDiv-collapse';

            // collapse
            if ($div.hasClass(expand)) {
                $div.removeClass(expand);
                $div.addClass(collapse);
                $('.makeHidden').hide(0);
            }
            else { //expand
                $div.removeClass(collapse);
                $div.addClass(expand);
                $('.makeHidden').delay(500).show(0);
            }
        });
    }, 1000);
    
});