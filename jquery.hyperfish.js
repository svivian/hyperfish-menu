
/* jQuery Hyperfish helper */

(function ($) {
	$.fn.hyperfish = function () {
		return this.each(function () {
			var menuTimer = null;
			var $menuUL = $(this);
			var $menuLI = $menuUL.find('>li');

			$menuUL.hover(
				function() {
					var $ul = $(this);
					menuTimer = setTimeout(function() {
						$ul.addClass('immediate');
					}, 400);
				},
				function() {
					clearTimeout(menuTimer);
					$(this).removeClass('immediate');
				}
			);

			$menuLI.hover(
				function() {
					$(this).addClass('hfHover');
				},
				function() {
					$(this).removeClass('hfHover');
				}
			);
		});
	};
})(jQuery);


jQuery(function($){
	$('.hyperfish-list').hyperfish();
});
