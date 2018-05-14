$(function() {
	auto_right_banner('.carousel_banner:first');
})

function auto_right_banner(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel_banner(carusel);
	}, 5000)
}

function right_carusel_banner(carusel){
   var block_width = $(carusel).find('.carousel__block_banner').outerWidth();
   $(carusel).find(".carousel__items_banner").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel__items_banner .carousel__block_banner").eq(0).clone().appendTo($(carusel).find(".carousel__items_banner")); 
      $(carusel).find(".carousel__items_banner .carousel__block_banner").eq(0).remove(); 
      $(carusel).find(".carousel__items_banner").css({"left":"0px"}); 
   }); 
}

$(document).on('mouseenter', '.carousel_banner', function(){$(this).addClass('hover')})

$(document).on('mouseleave', '.carousel_banner', function(){$(this).removeClass('hover')})