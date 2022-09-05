$(function(){
	$(document).scroll(function(){
		if ($(this).scrollTop() >= $('#sect2').position().top - 800) {
    		$('#sect2').removeClass('show-animation');
		    $('#sect2').addClass('show-animation');
		}

		else{
			$('#sect2').removeClass('show-animation');
		}
	});

	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('#sect3').position().top - 800) {
    		$('#sect3').removeClass('show-animation');
		    $('#sect3').addClass('show-animation');
		}
		else{
			$('#sect3').removeClass('show-animation');
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('#sect4').position().top - 800) {
    		$('#sect4').removeClass('show-animation');
		    $('#sect4').addClass('show-animation');
		}
		else{
			$('#sect4').removeClass('show-animation');
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('#sect5').position().top - 800) {
    		$('#sect5').removeClass('show-animation');
		    $('#sect5').addClass('show-animation');
		}
		else{
			$('#sect5').removeClass('show-animation');
		}
	});
	$(document).scroll(function(){
		
		if ($(this).scrollTop() >= $('#sect6').position().top - 800) {
    		$('#sect6').removeClass('show-animation');
		    $('#sect6').addClass('show-animation');
		}
		else{
			$('#sect6').removeClass('show-animation');
		}
	});
	$(window).resize(function () {
		var width = $(window).width();
		if (width>=768) {
			$('#sect2').addClass('show-animation');
		}
	});
})
