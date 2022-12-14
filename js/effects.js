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
$('.slick-slide').each(function(){ 
    if($(window).width() < 769){ 
      var img = $(this).find('img');
      var img_pc = img.attr('src'); 
      var img_mo = img_pc.replace('_pc','_mo')
      img.attr('src',img_mo);
   }else{
      var img = $(this).find('img');
      var img_mo = img.attr('src'); 
      var img_pc = img_mo.replace('_mo','_pc')
        img.attr('src',img_pc);
      }
 })  
  $(window).resize(function(){
  $('.slick-slide').each(function(){ 
    if($(window).width() < 769){ 
      var img = $(this).find('img');
      var img_pc = img.attr('src'); 
      var img_mo = img_pc.replace('_pc','_mo')
      img.attr('src',img_mo);
   }else{
      var img = $(this).find('img');
      var img_mo = img.attr('src'); 
      var img_pc = img_mo.replace('_mo','_pc')
        img.attr('src',img_pc);
      }
  })  
})

$('#pop_up .close').click(function(){
  $('#pop_up').fadeOut(300);
});

var login_stat = 0
$('.login .login_btn').click(function(){
  $('.lang_menu').hide();
  $('#pop_up .pop_search').stop().animate({height: 0})
  $('#pop_up .search-box').hide();
  $('#pop_up .recent').hide();
  $('#header .language .lang_menu').removeClass('z-on');
  $('.x_btn').css('display','none');
  lang_stat = 0;
  nav_stat = 0;
  if(login_stat == 0) {
    $('#header .backg').addClass('z-on');
    $('#pop_up .pop_search').removeClass('z-on');
    $('#header .backg').stop().animate({height: 350});
    $('#header .login_form').stop().show();
    login_stat = 1;
} else{
  $('#header .backg').removeClass('z-on');
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
  $('#pop_up .pop_search').removeClass('z-on');
  $('#header .backg').removeClass('z-on');
  login_stat = 0;
  nav_stat = 0;
  if(lang_stat == 0) {
    $('#header .language .lang_menu').addClass('z-on');
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
  $('#header .language .lang_menu').removeClass('z-on');
  $('#header .login_form').hide();
  login_stat = 0;
  lang_stat = 0;
    if(nav_stat == 0) {
        $('#pop_up .pop_search').addClass('z-on');
        $('#pop_up .pop_search').stop().animate({height: 250});
        $('#pop_up .search-box').stop().fadeIn(200);
        $('#pop_up .recent').stop().fadeIn(700);
        $('#pop_up .recent').css('display','flex');
        $('#pop_up .search-box').css('display','block');
        $('.x_btn').css('display','block');
        nav_stat = 1;
    } else{
        $('#pop_up .pop_search').removeClass('z-on');
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