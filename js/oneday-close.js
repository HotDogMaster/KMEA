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
        var expires = "expires=" + todayDate.toUTCString(); 
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    var couponClose = function(sta){
        if(sta == 1){
            setCookie("close","Y",1);
        }
        $("#popupDiv").hide();
    }
    
    $(document).ready(function(){
        var cookiedata = document.cookie;
        if(cookiedata.indexOf("close=Y")<0){
            $("#popupDiv").show();
        }else{
            $("#popupDiv").hide();
        }
        $(".btn-close").click(function(){
            couponClose(1);
        });
    });