$(document).ready(function(){

	function PopUpDisplay(){
		$("#pop_up")
			.css({"opacity":"0"})
			.removeClass('re')
			.animate({"opacity":"1"}, 300);
		$("#blur").addClass('blur');
		$("body").css({"overflow" : "hidden"});
		$("#pop_up, #pop_up_comments").scrollTop(0);
		$("#pop_up_img").css({"background-image" : "url(https://sergey.today/performance/027/img/"+$(this).closest('.grid_el').attr('attr_img_url')+".jpg)"});
	}

	function PopUpClose(){
		$("#pop_up").animate({"opacity":"0"}, 300);
		setTimeout(function(){
			$("#blur").removeClass('blur');
			$("#pop_up").addClass('re');
			$("body").css({"overflow" : "auto"});
		}, 300);
	}

	$(document).on('click', '.grid_el_img', PopUpDisplay);
	$(document).on('click', '#pop_up, #pop_up_close', PopUpClose);
	$(document).on('click', '#pop_up_content', function(event){ event.stopPropagation(); });	

	if(navigator.platform.match('Mac') !== null) {
		$("#pop_up_comments").css({"padding-right" : "3.2em"});
	}

	function CssCorrection(width_correct, height_correct) {
		$("body").width(window_width);	
	}

	window_height = $(window).height();
	window_width = $(window).width();
	CssCorrection(window_width, window_height);

	$(window).resize(function(){
		window_height = $(window).height();
		window_width = $(window).width();
		CssCorrection(window_width, window_height);
	});

	for (i = $(".grid_el_img").length ; i >= 0; i--) {
		$(".grid_el_img:eq("+i+")").css({"background-image" : "url(https://sergey.today/performance/027/img/"+$(".grid_el_img:eq("+i+")").attr('attr_img_url')+".jpg)"});
	}

});
