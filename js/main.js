$(document).ready(function(){
	$('.icon-menu').click(function(event){
		$(this).toggleClass('active');
		$('.aside').toggleClass('active');
		$('.body').toggleClass('lock');
	});	
});
