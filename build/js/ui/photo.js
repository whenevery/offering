;(function(){
    $.fn.showPhoto = function(options){
        var showType = options.type;
        return this.each(function(){
            var $this = $(this);
            var $body = $this.find('.photo-body');
            var $footer = $this.find('.photo-footer');
            var $bodyMain = $body.find('.main');
            var $bodyLeft = $body.find('.left');
            var $bodyRight = $body.find('.right');
            var $footerMain = $footer.find('.main');
            var $footerLeft = $footer.find('.left');
            var $footerRight = $footer.find('.right');
            var margin = options.margin || 0;
            var data = options.data;
            var isAutoMove = true;
            var autoShowIndex = 0;
            var $footerContent = $footerMain.find('div');
            $.each(data , function(i , o){
                o.src = useCommon.concatImgUrl(o.filePath);
                $footerContent.append($('<div class="item" style="background: url('+o.src+');background-size: 100% 100%;" index="'+i+'">').append($('<div>')));
            });
            var $footerItem = $footerMain.find('.item');
            var $firstFooter = $footerItem.first();
            var width = $firstFooter.outerWidth();
            var allWidth = data.length * width + (data.length - 1) * margin;
            $footerContent.css({
                width:allWidth
            });
            $bodyLeft.click(function(){
                if($(this).hasClass('able')){
                    autoShowIndex --;
                    showIndex();
                }
            });
            $bodyRight.click(function(){
                if($(this).hasClass('able')){
                    autoShowIndex ++;
                    showIndex();
                }
            });

            $footerMain.on('click' , '.item' , function(){
                if($(this).hasClass('active'))return false;
                isAutoMove = false;
                autoShowIndex = $(this).attr('index') - 0;
                showIndex();
            });
            var downDec,moveStep=10;
            $footerRight.bind('mousedown',function(){
                downDec = 1;
                footerAutoMove();
            });
            $footerRight.bind('mouseup',function(){
                stopFooterAutoMove();
            });
            $footerLeft.bind('mousedown',function(){
                downDec = -1;
                footerAutoMove();
            });
            $footerLeft.bind('mouseup',function(){
                stopFooterAutoMove();
            });
            var footerMoveTimer,moveTime=50;
            function footerAutoMove(){
                var marginLeft = - parseInt($footerContent.css('marginLeft'));
                var moveLeft,endTimer;
                if(downDec < 0){
                    if(marginLeft <= moveStep){
                        moveLeft = 0;
                        endTimer = true;
                    }
                    else moveLeft = marginLeft - moveStep;
                }else{
                    if(marginLeft +  footerWidth>= allWidth - moveStep){
                        moveLeft = allWidth - footerWidth;
                        endTimer = true;
                    }
                    else moveLeft = marginLeft + moveStep;
                }
                $footerContent.css({
                    marginLeft:-moveLeft
                });
                if(!endTimer){
                    footerMoveTimer = setTimeout(footerAutoMove , moveTime);
                }
            }
            function stopFooterAutoMove(){
                clearTimeout(footerMoveTimer);
            }
            var footerWidth,mainWidth;
            function resetFooter(index){
                $footerItem.removeClass('active');
                $footerItem.eq(index).addClass('active');
                if(isFirst)return false;
                var marginLeft = - parseInt($footerContent.css('marginLeft'));
                var leftWidth = index * (width +　margin);
                var rightWidth = (index + 1) * width + index * margin;
                if(marginLeft <= leftWidth && footerWidth + marginLeft >= rightWidth){
                    return false;
                }
                if(marginLeft > leftWidth){
                    $footerContent.stop(true).animate({
                        marginLeft: - leftWidth
                    } , 1000 , function(){
                        resetFooterAble();
                    });
                }
                else if(footerWidth + marginLeft < rightWidth){
                    $footerContent.stop(true).animate({
                        marginLeft: footerWidth - rightWidth
                    } , 1000 , function(){
                        resetFooterAble();
                    });
                }
            }
            function resetMainAble(index){
                if(index == 0 ){
                    $bodyLeft.removeClass('able');
                }else{
                    $bodyLeft.addClass('able');
                }
                if(index ==  data.length - 1){
                    $bodyRight.removeClass('able');
                }else{
                    $bodyRight.addClass('able');
                }
            }
            function resetFooterAble(index){
                var marginLeft = - parseInt($footerContent.css('marginLeft'));
                if(marginLeft == 0 ){
                    $footerLeft.removeClass('able');
                }else{
                    $footerLeft.addClass('able');
                }
                if(marginLeft + footerWidth == allWidth ){
                    $footerRight.removeClass('able');
                }else{
                    $footerRight.addClass('able');
                }
            }
            var handlers;
            function showImg($img , call){
                var handler = handlers.slice().sort(function(){return 0.5 - Math.random()}).pop();
                $img.css(handler.start).animate(handler.end , 1000 , function(){
                    call && call();
                });
            }
            var showSrc;
            function clearMain(){
                if(!showSrc)return false;
                $bodyMain.css({
                    background:'url('+showSrc+')',
                    backgroundSize:'100% 100%',
                });
                $bodyMain.children().remove();
            }
            function showMain(o ){
                clearMain();
                if(!showSrc && showType != 'video'){
                    showSrc = o.src;
                    clearMain();
                    return false;
                }
                var $img;
                if(showType == 'video'){
                    $bodyMain.html('');
                    $img = $('<video controls src="'+(showSrc = o.src)+'"></video>');
                }else{
                    $img = $('<img src="'+(showSrc = o.src)+'">');
                }
                $bodyMain.append($img);
                if(showType != 'video')showImg($img , clearMain);
            }
            function showIndex(){
                showMain(data[autoShowIndex]);
                options.showIndex.text(autoShowIndex+1);
                if(showType != 'video'){
                    resetFooter(autoShowIndex);
                }
                resetMainAble(autoShowIndex);
            }
            var isFirst = true;
            showIndex();
            isFirst = false;
            setTimeout(function(){
                handlers = $.photoHandler(mainWidth = $bodyMain.width() , $bodyMain.height());
                footerWidth = $footerMain.outerWidth();
            } , 300);

        });
    };
})();