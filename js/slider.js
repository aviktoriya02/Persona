$(document).ready(function() {
						   
	var slides = $(".reviews-carousel .carousel-items").children(".carousel-block"); // Получаем массив всех слайдов
	var x = $(".reviews-carousel .carousel-wrapper").width(); // Получаем ширину видимой области
	width = x + 32;
	var i = slides.length; // Получаем количество слайдов
	var offset = width; // Задаем начальное смещение и ширину всех слайдов
	var cheki = i-1;
	y = Math.round(i / 2);
	
	for (j=0; j < y; j++) {
		if (j==0) {
			$(".reviews-carousel .pagination").append("<div class='dot active'></div>");
		}
		else {
			$(".reviews-carousel .pagination").append("<div class='dot'></div>");
		}
	}
	
	var dots = $(".reviews-carousel .pagination").children(".dot");
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	i = 0; // Обнуляем номер текущего слайда
	
	$(".reviews-carousel .pagination .dot").click(function(){
		$(".reviews-carousel .pagination .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$(".reviews-carousel .carousel-items").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
	
	
	$(".reviews-carousel .carousel-button-right").click(function(){
		if (offset < width * cheki) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".reviews-carousel .carousel-items").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
			$(".reviews-carousel .pagination .active").removeClass("active");	
			$(dots[++i]).addClass("active");
		}
	});


	$(".reviews-carousel .carousel-button-left").click(function(){
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущегоо слайда
			$(".reviews-carousel .carousel-items").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
			$(".reviews-carousel .pagination .active").removeClass("active");	
			$(dots[--i]).addClass("active");
		}
	});

});