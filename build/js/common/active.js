WY.toggleActive = function($ele){
    $ele.children().click(function(){
        if($(this).hasClass('active'))return false;
        WY.trigger('active-item',$(this));
        $(this).addClass('active').siblings().removeClass('active');
    });
};
$(function(){
    $('.wy-toggle-active').each(function(){
        WY.toggleActive($(this));
    });
});