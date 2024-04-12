$(document).ready(function () {
	// hamburger
	$(".hamburger_menu").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").addClass("active");
		$(".gray_bg").addClass("active");
		$("body").addClass("active");
	});

	$(".close").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").removeClass("active");
		$(".gray_bg").removeClass("active");
		$("body").removeClass("active");
	});

	// header navs
	$(".header_menus li a").on("click", function (e) {
		e.preventDefault();
		$(".header_menus li a").removeClass("active");
		$(this).addClass("active");
	});
	// footer navs
	$(".footer_navs li a ").on("click", function (e) {
		e.preventDefault();
		$(".footer_navs li a").removeClass("active");
		$(this).addClass("active");
	});

	// pagination
	$(".page_numbers").on("click", function (e) {
		e.preventDefault();
		$(".page_numbers").removeClass("active");
		$(this).addClass("active");
	});
	$(".next , .prev").on("click", function (e) {
		e.preventDefault();
	});

	// hero swiper
	if ($(".hero_swiper").length > 0) {
		const hero_swiper = new Swiper(".hero_swiper", {
			// Default parameters
			slidesPerView: 1,
			loop: true,
			// Default parameters
			pagination: {
				el: ".hero_swiper_pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".hero_right_btn",
				prevEl: ".hero_left_btn",
			},
			// breakpoints: {
			// 	0: {
			// 		slidesPerView: 1,
			// 		spaceBetween: 20,
			// 	},

			// },
		});
	}

	// custom select mobile
	$(".select-items").hide();

	$(".select-selected , .types_button").click(function (event) {
		event.stopPropagation();
		$(".select-items").toggle();
	});

	$(".select-items div").click(function () {
		var selectedText = $(this).text();
		$(".select-selected").text(selectedText);
		$("#selected-value").val(selectedText);
		$(".select-items").hide();
	});
});
