$(function(){
    var thisSwiper = new Swiper('.swiper-container',{
        onlyExternal:true,
    });
    WY.bind('active-item',function($item){
        thisSwiper.slideTo($item.index());
    });
    var $swiperSlide = $('.swiper-slide');
    var memorialHeight,genealogyHeight,height;
    function setHeight(){
        if(memorialHeight >=0 && genealogyHeight >= 0)
        height = Math.max(memorialHeight,genealogyHeight);
        $('.swiper-container').height(height);
        $swiperSlide.height(height);
    }
    $.get('/user/friend/memorial',{
        taUserId:hrefData.taUserId,
        limit:20,
    },function(a){
        var $content = $swiperSlide.eq(0);
        memorialHeight = 190 * Math.ceil(a.data.content.length / 4);
        setHeight();
        $.each(a.data.content , function(i , o){
            var $item = WY.createOne('memorial',o , i);
            $content.append($item.addClass('mr-10'));
        });
    });
    $.get('/user/friend/genealogy',{
        taUserId:hrefData.taUserId,
        limit:20,
    },function(a){
        var $content = $swiperSlide.eq(1);
        genealogyHeight = 260 * Math.ceil(a.data.content.length / 4);
        setHeight();
        $.each(a.data.content , function(i , o){
            var $item = WY.createOne('genealogy',o , i);
            $content.append($item.addClass('mr-10'));
        });
    });
});