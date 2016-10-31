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

    //gallery
    $('.grid').masonry({
    	// options
    	itemSelector: '.grid-item'
    });

	//popup
	$('.popup-gallery').magnificPopup({
		delegate: '.popup-slide',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Anna Ptah</small>';
			}
		},
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out' // CSS transition easing functio
		}
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