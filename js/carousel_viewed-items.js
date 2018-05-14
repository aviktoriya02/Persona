$(document).on('click', ".viewed-items__button_right",function(){ 
	var carusel = $(this).parents('.carousel_viewed-items');
	right_carusel_viewed(carusel);
	return false;
});

$(document).on('click',".viewed-items__button_left",function(){ 
	var carusel = $(this).parents('.carousel_viewed-items');
	left_carusel_viewed(carusel);
	return false;
});
function left_carusel_viewed(carusel){
   var block_width = $(carusel).find('.carousel__block_viewed-items').outerWidth();
   $(carusel).find(".carousel__items_viewed-items .carousel__block_viewed-items").eq(-1).clone().prependTo($(carusel).find(".carousel__items_viewed-items")); 
   $(carusel).find(".carousel__items_viewed-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel__items_viewed-items .carousel__block_viewed-items").eq(-1).remove();    
   $(carusel).find(".carousel__items_viewed-items").animate({left: "0px"}, 200); 
   
}
function right_carusel_viewed(carusel){
   var block_width = $(carusel).find('.carousel__block_viewed-items').outerWidth();
   $(carusel).find(".carousel__items_viewed-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel__items_viewed-items .carousel__block_viewed-items").eq(0).clone().appendTo($(carusel).find(".carousel__items_viewed-items")); 
      $(carusel).find(".carousel__items_viewed-items .carousel__block_viewed-items").eq(0).remove(); 
      $(carusel).find(".carousel__items_viewed-items").css({"left":"0px"}); 
   }); 
}