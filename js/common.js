$(function() {

	$(".menu-toggle").click(function() {
		$(this).parent().toggleClass("menu-open");
		if($(this).parent().hasClass("menu-open")) {
			$(".main-menu").addClass("menu-show").removeClass("menu-hide");
		} else {
			$(".main-menu").addClass("menu-hide").removeClass("menu-show");
		}
	});

	$(".sidebar-toggle").click(function() {
		$(".sidebar").addClass("active");
	});

	$(".sidebar .fa-times").click(function() {
		$(".sidebar").removeClass("active");
	});
	
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		speed: 1000,
		autoplay: 5000,
		loop: true,
		grabCursor: true,
		nextButton: ".slide-next",
		prevButton: ".slide-prev",
		onInit: fillSlideInfo,
		onSlideChangeStart: fillSlideInfo

    });

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).on("load", function(){
    $(".preloader").fadeOut();
});

function fillSlideInfo() {
	var slide = $(".swiper-slide-active .slide-content"),
		slideTitle = slide.data("title"),
		slideDescr = slide.data("descr");

	if(slideTitle != '') {
		$(".slide-header").text(slideTitle);
	}
	if(slideDescr != '') {
		$(".slide-descr").text(slideDescr);
	}
}