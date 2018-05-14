$(document).on('click', ".carousel__button_right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});

$(document).on('click',".carousel__button_left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel__block').outerWidth();
   $(carusel).find(".carousel__items .carousel__block").eq(-1).clone().prependTo($(carusel).find(".carousel__items")); 
   $(carusel).find(".carousel__items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel__items .carousel__block").eq(-1).remove();    
   $(carusel).find(".carousel__items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel__block').outerWidth();
   $(carusel).find(".carousel__items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel__items .carousel__block").eq(0).clone().appendTo($(carusel).find(".carousel__items")); 
      $(carusel).find(".carousel__items .carousel__block").eq(0).remove(); 
      $(carusel).find(".carousel__items").css({"left":"0px"}); 
   }); 
}


$(function() {
	auto_right('.carousel_banner:first');
})

function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 4000)
}

$(document).on('mouseenter', '.carousel_banner', function(){$(this).addClass('hover')})

$(document).on('mouseleave', '.carousel_banner', function(){$(this).removeClass('hover')})