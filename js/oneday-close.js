$(document).ready(function(){
	var getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    }

    var setCookie = function (cname, cvalue, exdays) {
        var todayDate = new Date();
        todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
        var expires = "expires=" + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    var couponClose = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $("#popupDivupDiv").hide();
    }
    
    $(document).ready(function(){
        var cookiedata = document.cookie;
        if(cookiedata.indexOf("close=Y")<0){
            $("#popupDiv").show();
        }else{
            $("#popupDiv").hide();
        }
        $(".btn-close").click(function(){
            couponClose();
        });
    });
출처: https://triplexlab.tistory.com/5 [트리플엑스랩 | TriplexLab:티스토리]
});