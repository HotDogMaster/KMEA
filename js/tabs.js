$(function(){
    $('.tabSet').each(function(){
        var anchor = $(this).find('.tabs a');
        var this_panel = $(this).find('.panel');
        var anchor_on = $(this).find('.tabs a.on');
        var  href_on = anchor_on.attr('href');
        $(href_on).show();
    anchor.each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var href = $(this).attr('href');
            anchor.removeClass('on');
            $(this).addClass('on');
            this_panel.hide();
            $(href).show(); 
    });
    });
    });
})