$(document).ready(function() {
	$('.sign').click(function() {
		if ( $(this).hasClass('current') ) {
			$(this).removeClass('current');
			$(this).children('scope').hide();
		}
		else {
			$('.sign').removeClass('current');
			$('.scope').hide();
			$(this).addClass('current');
			$(this).children('.scope').show();
		}
	)};
});
