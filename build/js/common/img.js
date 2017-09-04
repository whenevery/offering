;(function(){
    var demoImg = '/images/photo/demo.jpg';
    WY.getHeadImg = function(url){
        if(!url || demoImg == url)return demoImg;
        return useCommon.concatImgUrl(url);
    };
    WY.getNewsImg = function(src){
        var demo = '';
        var ignore = ['http://cdn.tsingming.com/img/wm.jpg'];
        if(ignore.indexOf(src) != -1)return demo;
        return useCommon.concatImgUrl(src);
    };
    WY.bind('img-load',function(url){
       var img = new Image();
        img.src = useCommon.concatImgUrl(url);
    });
})();