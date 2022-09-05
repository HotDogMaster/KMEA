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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

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
$('#pop_up .close').click(function(){
  $('#pop_up').fadeOut(300);
});

var search_stat = 0
$('.search img').click(function(){
  var img = $('.search').find('img')
        var src = img.attr('src')
        var src_on = src.replace('_off', '_on')
        var src_off = src.replace('_on', '_off')
       
    if(search_stat == 0) {
        $('#pop_up .pop_search').stop().animate({height: 95});
        $('#pop_up .search-box').stop().fadeIn(200);
        $('#pop_up .search-box').css('display','block');
        img.attr('src',src_on);
        search_stat = 1;
    } else{
        $('#pop_up .pop_search').stop().animate({height: 0});
        $('#pop_up .search-box').stop().fadeOut(400);
        img.attr('src',src_off);
        search_stat = 0;
    }
})
var nav_stat = 0
$('.search img').click(function(){
  var img = $('.search').find('img')
        var src = img.attr('src')
        var src_on = src.replace('_off', '_on')
        var src_off = src.replace('_on', '_off')
       
    if(nav_stat == 0) {
        $('#pop_up .pop_search').stop().animate({height: 200});
        $('#pop_up .search-box').stop().fadeIn(200);
        $('#pop_up .search-box').css('display','block');
        img.attr('src',src_on);
        nav_stat = 1;
    } else{
        $('#pop_up .pop_search').stop().animate({height: 0});
        $('#pop_up .search-box').stop().fadeOut(400);
        img.attr('src',src_off);
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
$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );
$('.close-modal').click(function(e){
  e.preventDefault();
  $('#popupDiv').css('display','none')
})
});