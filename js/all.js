jQuery(document).ready(function($) {
	$(".showmenu").click(function(event) {
		event.preventDefault();
		$("body").toggleClass("menushow");
	});
	
	$(".shop_list a").click(function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().siblings().find("a").removeClass("active");
	});

	/* Cart 愛心切換 */
	$(".heart1").click(function(event) {
		event.preventDefault();
		$(".heart1").toggleClass("fas");
		$(".heart1").toggleClass("far");
	});

	$(".heart2").click(function(event) {
		event.preventDefault();
		$(".heart2").toggleClass("fas");
		$(".heart2").toggleClass("far");
	});

	$(".heart3").click(function(event) {
		event.preventDefault();
		$(".heart3").toggleClass("fas");
		$(".heart3").toggleClass("far");
	});

	$(".heart4").click(function(event) {
		event.preventDefault();
		$(".heart4").toggleClass("fas");
		$(".heart4").toggleClass("far");
	});

});