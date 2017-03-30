//var app= angular.module('store', []);  

$("document").ready(function(){
	// hide elements before page load
	$(".skills").hide();
	//$(".customers").hide();
	$(".skills").animate({width:'toggle'},500);

  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      
      $(".customers").fadeIn(1000);
    } else {
      
      $(".customers").fadeOut(1000);
    }
  });
});
