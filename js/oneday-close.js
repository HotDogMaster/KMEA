$(document).ready(function(){
	var layer = $('.layerPop');
    var btnClose = $('.btn-close');
	var edate= new Date("2022/09/13 08:00:00"); 

	//닫기버튼 누를시 하루동안 열지않기
	cookiedata = document.cookie;

    if ( Date.now() <= edate && cookiedata.indexOf("layerCookie=done") < 0 ){     
		layer.show();
	}
    else {
    	layer.hide();
    }

	function setCookie( name, value, expiredays ) {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays ); 
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }

	btnClose.on("click", function(){
        //expiredays의 1은 하루를 의미한다, 일주일은 7, 1년은 365로 입력
		setCookie( "layerCookie", "done" , 1);
		layer.fadeOut('fast');
	})
});