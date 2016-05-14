$(document).ready(function() {
	$('.sign').click(function() {
		$('.sign').removeClass('current');
		$('.scope').hide();
		$(this).addClass('current');
		$(this).children('.scope').show();
	});
});