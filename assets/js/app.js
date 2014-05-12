/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
    "use strict";

    //function
    var items, visibleHeight = $(document).height() - $(window).height();

    function updateHeight() {
        visibleHeight = $(document).height() - $(window).height();
    }

    function storeElements() {
        items = $('.portfolio-item:lt(3)').clone();
        // Strip the first class from selection
        items.removeClass('first');
    }


    function loadContent() {
        if ($(window).scrollTop() >= visibleHeight) {
            $(window).unbind('scroll');
            var loadingWrap = $('.loading-wrap');

            loadingWrap.fadeIn(function () {
                setTimeout(function () {
                    loadingWrap.before(items);
                    loadingWrap.hide(function () {
                        updateHeight();
                        storeElements();
                        $(window).on('scroll', function () { loadContent(); });
                    });
                }, 500);
            });
        }
    }
    // categories buttons
	$('.menus h3').on('click', function (event) {
		$(this).next('ul').toggleClass('open');
        updateHeight();
		event.preventDefault();
		/* Act on the event */
		return false;
	});

    // scroll trigers rotating icon


    storeElements();

    $(window).on('resize', function (e) {
        updateHeight();
    });
    $(window).on('scroll', function (e) {
        loadContent();
    });


});
