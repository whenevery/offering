WY.showMouseMove = function(options , handler){
    options = options || {};
    handler = handler || {};
    var $move = $(options.move);
    var $content = $(options.content);
    var width = $content.width();
    var height = $content.height();
    return $move.each(function(){
        var $move = $(this);
        var isMouseDown = false,pageY,pageX,autoTop,autoLeft;
        $move.on('mousedown' , function(e){
            $(this).css({
                cursor:'move'
            });
            isMouseDown = true;
            autoTop = parseFloat($move.css('marginTop'));
            autoLeft = parseFloat($move.css('marginLeft'));
            pageY = e.pageY;
            pageX = e.pageX;
            return false;
        });
        $move.on('mouseleave mouseup' , function(e){
            isMouseDown = false;
            $(this).css({
                cursor:'auto'
            });
            return false;
        });
        $move.on('mousemove' , function(e){
            if(isMouseDown){
                moveTo(autoTop + e.pageY-pageY , autoLeft + e.pageX-pageX);
            }
            return false;
        });
        function moveTo(marginTop , marginLeft){
            var maxWidth = $move.width();
            var maxHeight = $move.height();
            if(height >= maxHeight){
                if(marginTop < 0){
                    handler.moveTop && handler.moveTop($move);
                    marginTop = 0;
                }else if(marginTop > height - maxHeight){
                    handler.moveBottom && handler.moveBottom($move);
                    marginTop = height - maxHeight;
                }
            }else{
                if(marginTop > 0){
                    handler.moveTop && handler.moveTop($move);
                    marginTop = 0;
                }else if(marginTop < height - maxHeight){
                    handler.moveBottom && handler.moveBottom($move);
                    marginTop = height - maxHeight;
                }
            }
            if(width >= maxWidth){
                if(marginLeft < 0){
                    handler.moveLeft && handler.moveLeft($move);
                    marginLeft = 0;
                }else if(marginLeft > width - maxWidth){
                    handler.moveRight && handler.moveRight($move);
                    marginLeft = width - maxWidth;
                }
            }else{
                if(marginLeft > 0){
                    handler.moveLeft && handler.moveLeft($move);
                    marginLeft = 0;
                }else if(marginLeft < width - maxWidth){
                    handler.moveRight && handler.moveRight($move);
                    marginLeft = width - maxWidth;
                }
            }
            $move.css({
                marginTop:marginTop,
                marginLeft:marginLeft
            });
            handler.moveStep && handler.moveStep();
        }
    });



};
WY.bind('modal-handler-mouse-move' , function($ele , options){
    WY.showMouseMove({
        content:$ele,
        move:options.move || $ele.find('.move')
    },options);
});