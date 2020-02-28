$(function(){

	/////////////nav-main***********************************
	var gnbA = $('#myNavbar>ul>li>a');
		var h = new Array();
		var sum =0;			
		$('body > section').each(function(index){
			h[index] = sum;
			sum+= $(this).innerHeight();
		});
		/*$(window).scroll(function(){
			$('body > section').each(function(index){
				if($(window).scrollTop() >= h[index]){
					gnbA.removeClass('on');
					gnbA.eq(index).addClass('on');
				}
			});
		});*/

		gnbA.click(function(){
			var target = $(this).attr('href');
				$('html,body').stop().animate({scrollTop:$(target).offset().top-$('section').offset().top},1500,'easeInOutExpo');

				/*if(gnbA.target){
				$(gnbA.target).removeClass('on');
				$(this).addClass('on');
			}else{
				$(this).addClass('on');
			}*/
			gnbA.target =this;
			return false;
		});

	/////////////nav-sub***********************************
		var gnbB = $('.drop-down>ul>li>a');
		var h2 = new Array();
		var sum2 =0;			
		$('#portfolio > div').each(function(index){
			h2[index] = sum2;
			sum2+= $(this).innerHeight();
		});
		/*$(window).scroll(function(){
			$('#portfolio > div').each(function(index){
				if($(window).scrollTop() >= h2[index]){
					gnbB.removeClass('on');
					gnbB.eq(index).addClass('on');
				}
			});
		});*/

		gnbB.click(function(){
			var target = $(this).attr('href');
				$('html,body').stop().animate({scrollTop:$(target).offset().top-$('section').offset().top},1500,'easeInOutExpo');

				/*if(gnbB.target){
				$(gnbB.target).removeClass('on');
				$(this).addClass('on');
			}else{
				$(this).addClass('on');
			}*/
			gnbB.target =this;
			return false;
		});

	/////////////sub-mobile***********************************
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	/////////////Up,Down button pc***********************************
	$('.icon-pc button.btn_up').click(function(){
		var up = $('html,body').scrollTop();
		$('html,body').stop().animate({scrollTop:up - 1000},1500,'easeInOutExpo');
	});

	$('.icon-pc button.btn_down').click(function(){
		var up = $('html,body').scrollTop();
		$('html,body').stop().animate({scrollTop:up + 1000},1500,'easeInOutExpo');
	});


	/////////////Up,Down button mobile***********************************
	$('.icon-mobile button.btn_up').click(function(){
		var up = $('html,body').scrollTop();
		$('html,body').stop().animate({scrollTop:up - 650},1500,'easeInOutExpo');
	});

	$('.icon-mobile button.btn_down').click(function(){
		var up = $('html,body').scrollTop();
		$('html,body').stop().animate({scrollTop:up + 650},1500,'easeInOutExpo');
	});





	/////////////to-top***********************************
	$('h1>a').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
		return false;
	});



	/////////////wheel***********************************
	$(".wheel").each(function () {
		$(this).on("mousewheel DOMMouseScroll", function (e) {
			e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
				delta = event.wheelDelta / 120;
				if (window.opera) delta = -delta;
			} else if (event.detail) delta = -event.detail / 3;
			var moveTop = null;

			if (delta < 0) {
			if ($(this).next() != undefined) {
				moveTop = $(this).next().offset().top;
			}

			} else {
				if ($(this).prev() != undefined) {
					moveTop = $(this).prev().offset().top;
				}
			}

			$("html,body").stop().animate({
				scrollTop: moveTop + 'px'
			}, {
				duration: 800, complete: function () {
				}
			});
		});
	});


});