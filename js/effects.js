 $(function(){
  $(window).scroll(function(){
    if ($(document).scrollTop() >= 100) {
        $('header').addClass('scroll')
    } else {
       $('header').removeClass('scroll')
    }
})
            $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true,
        arrows : true,
        autoplay : true,			
        autoplaySpeed : 5000,
        dots : true,
        responsive: [
        { 
          breakpoint: 768,
          settings: {	
            dots : false
          } 
        }
      ]
      });
      
$('.center').slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll:3 ,
 responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 538,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});

$('#pop_up .close').click(function(){
  $('#pop_up').fadeOut(300);
});

var login_stat = 0
$('.login .login_btn').click(function(){
  $('.lang_menu').hide();
  $('#pop_up .pop_search').stop().animate({height: 0})
  $('#pop_up .search-box').hide();
  $('#pop_up .recent').hide();
  $('.x_btn').css('display','none');
  lang_stat = 0;
  nav_stat = 0;
  if(login_stat == 0) {
    $('#header .backg').stop().animate({height: 350});
    $('#header .login_form').stop().show();
    login_stat = 1;
} else{
  $('#header .backg').stop().animate({height: 0});
  $('#header .login_form').stop().fadeOut(200);
    login_stat = 0;
}
});
var lang_stat = 0
$('.language img').click(function(){
  $('#pop_up .pop_search').stop().animate({height: 0})
  $('#pop_up .search-box').hide();
  $('#pop_up .recent').hide();
  $('#header .backg').stop().animate({height: 0});
  $('#header .login_form').hide();
  $('.x_btn').css('display','none');
  login_stat = 0;
  nav_stat = 0;
  if(lang_stat == 0) {
    $('#header .language .lang_menu').stop().show();
    lang_stat = 1;
} else{
    $('#header .language .lang_menu').stop().hide();
    lang_stat = 0;
}
});
var nav_stat = 0
$('.search img').click(function(){
  $('.lang_menu').hide();
  $('#header .backg').stop().animate({height: 0});
  $('#header .login_form').hide();
  login_stat = 0;
  lang_stat = 0;
    if(nav_stat == 0) {
        $('#pop_up .pop_search').stop().animate({height: 250});
        $('#pop_up .search-box').stop().fadeIn(200);
        $('#pop_up .recent').stop().fadeIn(700);
        $('#pop_up .recent').css('display','flex');
        $('#pop_up .search-box').css('display','block');
        $('.x_btn').css('display','block');
        nav_stat = 1;
    } else{
        $('#pop_up .pop_search').stop().animate({height: 0});
        $('#pop_up .search-box').stop().fadeOut(400);
        $('#pop_up .recent').stop().fadeOut(100);
        $('.x_btn').fadeOut();
        nav_stat = 0;
    }
})
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 200 ) {
		$( '.quick_btn' ).fadeIn();
	} else {
		$( '.quick_btn'  ).fadeOut();
	}
} );

var btn_stat = 0
$('.quick_btn').click(function(){
    if(btn_stat == 0) {
        $(this).stop().addClass('active');
        btn_stat = 1;
    } else{
        $(this).stop().removeClass('active');
        btn_stat = 0;
    }
});
$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
  $('.quick_btn').stop().removeClass('active');
  btn_stat = 0;
	return false;
} );
$('.close-modal').click(function(e){
  e.preventDefault();
  $('#popupDiv').css('display','none')
})
});