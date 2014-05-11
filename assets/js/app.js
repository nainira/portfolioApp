/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
    "use strict";
	$('.menus h3').on('click', function (event) {
		$(this).next('ul').toggleClass('open');
		event.preventDefault();
		/* Act on the event */
		return false;
	});
});
