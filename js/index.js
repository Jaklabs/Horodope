$(document).ready(function() {
	$('.sign').click(function() {
		if ( $(this).hasClass('current') ) {
			//console.log("Should happen");
			$('.sign').removeClass('current');
			$('.scope').hide();
		}
		else {
			//console.log("Shouldn't happen");
			$('.sign').removeClass('current');
			$('.scope').hide();
			$(this).addClass('current');
			$(this).children('.scope').show();
		}
	});
});
