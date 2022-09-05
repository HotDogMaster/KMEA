$(function(){
    $(".tabs li").click(function() {
        var idx = $(this).index();
        $(".tabs li").removeClass("on");
        $(".tabs li").eq(idx).addClass("on");
        $(".panel").hide();
        $(".panel").eq(idx).show();
      })
      $(".tabs li").click(function() {
        $(".tabs li").removeClass("off");
        $(".tabs li").not(".tabs li.on").addClass("off");
      })
})