WY.userContent = $('.show-user-content');
WY.userHandler = {};
WY.userLoad = function($content){
    WY.userContent.html('').append($content);
    return WY.userContent.children();
};
WY.bind('user-menu' , function(a){
    var handler = WY.userHandler[a];
    handler && handler.init && handler.init();
});
$(function(){
    $(document).on('click','[turn-hash]',function(){
        var hash = $(this).attr('turn-hash');
        WY.trigger('user-menu-change',hash);
        return false;
    });
});