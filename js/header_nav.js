$(function(){
    $('#nav_btn').click(function(){
        $('.nav_pop').fadeIn()
        // $('.nav_pop').animate({right : '0'},500);
        $('.nav_pop #nav').css({'transform': 'translateX(0px)'});
    })
    $('.nav_pop #nav .close_btn').click(function(){
        $('.nav_pop').fadeOut()
        $('.nav_pop #nav').css({'transform': 'translateX(300px)'});
        // $('.nav_pop').animate({right:'-100%'}, 500)    
    })
    $(document).on("click", function(e){  
        if( $(".nav_pop").is(e.target)) {
         $(".nav_pop").fadeOut()
         $('.nav_pop #nav').css({'transform': 'translateX(300px)'});
    }
  });
    $('#btn1 > li.link_on .sub').show();
    $('#btn1 > li').each(function(){
        $(this).click(function(){
            var sub = $(this).find('.sub')
            $('#btn1 > li').removeClass('link_on');
            $(this).addClass('link_on');
            $('.sub').stop().slideUp();
            $(sub).stop().slideToggle();
        })
    })
})