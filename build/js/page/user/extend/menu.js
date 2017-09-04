$(function(){
    var $userMenu = $('.user-menu');
    $userMenu.on('click' , '.list .item' , function(){
        if($(this).hasClass('active'))return false;
        $userMenu.find('.item').removeClass('active');
        $(this).addClass('active');
        var sub = $(this).attr('sub');
        location.hash = sub;
        WY.trigger('user-menu' , sub);
        return false;
    });
    $userMenu.on('click' , '.menu' , function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
    WY.bind('user-menu-change',function(hash){
        var sub = hash || 'memorial';
        $userMenu.find('.active').removeClass('active');
        var $active = $userMenu.find('.list [sub='+sub+']');
        if(!$active[0])$active = $userMenu.find('.list .item').first();
        $active.click().closest('.menu').addClass('active');
    });
    WY.trigger('user-menu-change',location.hash.slice(1));

});