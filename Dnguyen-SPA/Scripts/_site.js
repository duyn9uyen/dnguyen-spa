//This script is for the expandable banner. We use css3 classes to expand.

$(function () {
    var clickArea = $('#banner-container');
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
});