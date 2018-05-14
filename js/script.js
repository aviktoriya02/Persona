$(document).ready(function() {
	$('.quantity__minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.quantity__plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});

$(function(){
    $(".preview__size-button").click(function() {
		$(this).addClass("preview__size-button_active");
		$(this).children().addClass("preview__size-text_active");
		$(this).siblings().removeClass("preview__size-button_active");
		$(this).siblings().children().removeClass("preview__size-text_active");
		}
    );
});

$(function() {
		var nice = $(".addresses__list").niceScroll(); 
}); 