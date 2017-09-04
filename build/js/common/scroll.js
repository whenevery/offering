$.fn.showScroll = function(options){
    options = options || {};
    var step = 50;
    function move($ele , sts){
        var _step = typeof sts == 'number'?sts:(sts?-step:step);
        var $move = $ele.children().first();
        var marginTop = parseInt($move.css('marginTop')) || 0;
        marginTop += _step;
        moveTo($ele , marginTop);
    }
    function moveTo($ele , marginTop){
        var maxHeight = 0;
        var $move = $ele.children().first();
        var autoTop = parseFloat($move.css('marginTop'));
        if(autoTop == marginTop){
            if(marginTop < 0)options.scrollBottom && options.scrollBottom($move);
            else options.scrollTop && options.scrollTop($move);
            return false;
        }
        $ele.children().each(function(){
            maxHeight += $(this).outerHeight();
        });
        var height = $ele.height();
        if(maxHeight <= height)return false;
        if(marginTop > 0){
            options.scrollTop && options.scrollTop($move);
            marginTop = 0;
        }else if(marginTop < height - maxHeight){
            options.scrollBottom && options.scrollBottom($move);
            marginTop = height - maxHeight;
        }
        $move.css({
            marginTop:marginTop
        });
    }
    return this.each(function(){
        $(this).bind('mousewheel' , function(e){
            move($(this) , e.originalEvent.wheelDelta < 0);
            return false;
        });
        $(this).bind('DOMMouseScroll' , function(e){
            move($(this) , e.originalEvent.wheelDelta > 0);
            return false;
        });
        if(options.notMove)return false;
        var isMouseDown = false,pageY,autoTop;
       $(this).bind('mousedown' , function(e){
           $(this).css({
               cursor:'move'
           });
           autoTop = parseFloat($(this).children().first().css('marginTop'));
           isMouseDown = true;
           pageY = e.pageY;
           return false;
       });
       $(this).bind('mouseleave mouseup' , function(e){
           isMouseDown = false;
           $(this).css({
               cursor:'auto'
           });
           return false;
       });
       $(this).bind('mousemove' , function(e){
            if(isMouseDown)moveTo($(this) ,autoTop + e.pageY-pageY);
            return false;
       });
       $(this).bind('scroll' , function(e){
            e.stopPropagation();
       });

    });
};
WY.bind('modal-handler-scroll' , function($ele){
    $ele.showScroll();
});