$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});

$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}
$(document).ready(function() {
var slides = $(".reviews .carousel .carousel-items").children(".carousel-block");
for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".reviews .carousel .pagination").append("<div class='dot active'></div>");
		}
		else {
			$(".reviews .carousel .pagination").append("<div class='dot'></div>");
		}
	}
	
	var dots = $(".reviews .carousel .pagination").children(".dot");
	var offset = 0;
	var i = 0; 
	$('.reviews .carousel .pagination .dot').click(function(){
		$(".reviews .carousel .pagination .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$(".reviews .carousel .carousel-items").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
});

$(function() {
	auto_right('.carousel-banner:first');
})

function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 4000)
}

$(document).on('mouseenter', '.carousel-banner', function(){$(this).addClass('hover')})

$(document).on('mouseleave', '.carousel-banner', function(){$(this).removeClass('hover')})