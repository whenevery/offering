
//loading
;(function(){
    Object.defineProperties(useCommon , {
        loading:{
            set:function(sts){
                var loadingEle = $('.ms-loading-window');
                if(!loadingEle.showEasyWindow)return false;
                if(sts){
                    loadingEle.showEasyWindow(null , 1);
                }
                else{
                    loadingEle.showEasyWindow('hide');
                }
            }
        }
    });
    var ajax = $.ajax;
    $.ajax = function(options , a , b){
        var success = options.success;
        options.success = function(data , a , b){
            if(data && (data.baseCode === 'PleaseLogin' || data.code == 401)){
                WY.trigger('login');
                return false;
            }
            success && success(data , a , b);
        };
        ajax(options , a , b);
    };
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();
})();