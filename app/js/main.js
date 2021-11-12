// let videoBlock = document.getElementById('video1');
// let video1 = document.getElementsByClassName('video-video');
// function playVideo(){
// 	videoBlock.style.display = 'flex';
// }
// function closeVideo() {
// 	videoBlock.style.display = 'none'
// 	video1[0].pause();
// }
//
//
// let playButton = document.getElementById('play1');
// playButton.addEventListener('click', playVideo)
// let closeButton = document.getElementById('close-video1');
// closeButton.addEventListener('click', closeVideo);

$(document).ready(function (){
	let video1 = $('#home-video1')[0];
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