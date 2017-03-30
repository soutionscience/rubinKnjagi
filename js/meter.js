jQuery(document).ready(function($) {
	$(".barBackground").hide(); //hide meter when page loads
	$(".words1").hide();

	$(".barBackground2").hide(); //hide meter when page loads
	$(".words2").hide();

	$(".barBackground").animate({width:'toggle'}, 2000);
	$(".words1").fadeIn(3000);


	$(".barBackground2").animate({width:'toggle'}, 3000);
	$(".words2").fadeIn(4000);







});