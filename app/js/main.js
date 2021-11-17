$(document).ready(function (){
	let video1 = $('#homePage-video1')[0];
	let videoFile = $('.video-file');
	let videoContent = $(".video-content");
	let background = $(".video-background");
	$("#play1").click(function (){
		videoContent.animate({
			opacity: 0
		},500);
		background.animate({
			opacity: 0
		},500);
		videoFile.css('z-index', 1);
		videoFile.animate({
			opacity: 1,
		},500);
		$('.video-close').animate({
			opacity: 0.7,
		}, 500);
		video1.play();
		$("#close-video1").animate(function (){
		})
	})

	$(".video-close").click(function (){
		videoContent.animate({
			opacity: 1
		},500);
		background.animate({
			opacity: 1
		},500);
		videoFile.css('z-index', -1);
		videoFile.animate({
			opacity: 0,
		},500);
		$('.video-close').animate({
			opacity: 0,
		}, 500);
		video1.pause();
	})

	$(".header-burger").click(function (){
		$(".header-sidebar").animate({
			width: '220px',
		}, 750)

	})

	$(".header-closeSidebar").click(function (){
		$(".header-sidebar").animate({
			width: '0px',
		}, 750)
	})

	$(".header-sidebarSearch").click(function (){
		$(".header-absoluteSearch").animate({
			opacity: 1,
			height: "60px",
		}, 750)
		$(".header-sidebar").animate({
			width: '0px',
		}, 400)
	})

	$('.absolute-searchClose').click(function (){
		$(".header-absoluteSearch").animate({
			opacity: 0,
			height: "0px",
		}, 750)
	})

})