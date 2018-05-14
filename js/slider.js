$(document).ready(function() {
						   
	var slides = $(".carousel_reviews .carousel__items_reviews").children(".carousel__block_reviews"); // Получаем массив всех слайдов
	var x = $(".carousel_reviews .carousel__wrapper_reviews").width(); // Получаем ширину видимой области
	var width = 0;
	var i = slides.length; // Получаем количество слайдов
	if(window.matchMedia('(max-width: 1024px)').matches) { 
		width = x + 150;
		for (j=0; j < i; j++) {
		if (j==0) {
			$(".carousel_reviews .pagination").append("<div class='pagination__dot pagination__dot_active'></div>");
		}
		else {
			$(".carousel_reviews .pagination").append("<div class='pagination__dot'></div>");
		}
	}
	}
	else {
		width = x + 32;
		y = Math.round(i / 2);
		for (j=0; j < y; j++) {
		if (j==0) {
			$(".carousel_reviews .pagination").append("<div class='pagination__dot pagination__dot_active'></div>");
		}
		else {
			$(".carousel_reviews .pagination").append("<div class='pagination__dot'></div>");
		}
	}
	}
	var offset = width; // Задаем начальное смещение и ширину всех слайдов
	var cheki = i-1;
	
	var dots = $(".carousel_reviews .pagination").children(".pagination__dot");
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	i = 0; // Обнуляем номер текущего слайда
	
	$(".carousel_reviews .pagination .pagination__dot").click(function(){
		$(".carousel_reviews .pagination .pagination__dot_active").removeClass("pagination__dot_active");								  
		$(this).addClass("pagination__dot_active");
		i = $(this).index();
		offset = i * width;
		$(".carousel_reviews .carousel__items_reviews").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
	
	
	$(".carousel_reviews .carousel__button_right").click(function(){
		if (offset < width * cheki) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".carousel_reviews .carousel__items_reviews").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
			$(".carousel_reviews .pagination .pagination__dot_active").removeClass("pagination__dot_active");	
			$(dots[++i]).addClass("pagination__dot_active");
		}
	});


	$(".carousel_reviews .carousel__button_left").click(function(){
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущегоо слайда
			$(".carousel_reviews .carousel__items_reviews").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
			$(".carousel_reviews .pagination .pagination__dot_active").removeClass("pagination__dot_active");	
			$(dots[--i]).addClass("pagination__dot_active");
		}
	});

});