;(function(){
    WY.bind('sacrifice-move',function(options , call){
        var showData = {};
        var $backMain = $('.back-main');
        var imgSrc = ['/images/animate/1014.gif',
            '/images/animate/1.gif',
            '/images/animate/2.gif',
        ];
        var audioObject = {
            D:{
                src:'/images/audio/d.mp3',
            },
            E:{
                src:'/images/audio/e.mp3',
            }
        };
        imgSrc.forEach(function(a){
            var img = new Image;
            img.src = a;
        });
        $.each(audioObject,function(i , o){
            var $audio = $('<audio audio-key="'+i+'" src="'+o.src+'" loop="loop"></audio>');
            $backMain.append($audio);
            o.audio = $backMain.find('[audio-key="'+i+'"]').get(0);
        });

        var $content = options.content;
        var offsetMethod = options.offsetMethod;
        var width = $content.width();
        var height = $content.height();
        function createOneImg(productData , move , offset){
            var $img = $('<img>').addClass(imgClass);
            $img.css({
                position:'absolute',
                zIndex:move?11:10
            });
            $content.append($img);
            if(move && productData){
                //effects A 香 B 烛 C 纸 D 烟花 E 火炮
                var isSpec,offset;
                var effects = productData.effects;
                var audio = audioObject[effects] && audioObject[effects].audio;
                console.log('effects ' + effects);
                if(effects === 'A'){
                    isSpec = true;
                    $img.attr('src',imgSrc[2]);
                }
                else if(effects === 'E'){
                    isSpec = true;
                    $img.attr('src',imgSrc[0]);
                }
                else if(effects === 'D'){
                    //烟花特殊 无图片处理
                    $img.remove();
                    WY.trigger('fire-work',{
                        content:$backMain,
                        className:'position-absolute left-0 right-0 z-index-10',
                        audio:audio
                    });
                    return false;
                }
                else if(effects === 'B'){
                    isSpec = true;
                    $img.attr('src',imgSrc[1]);
                }
                else if(effects === 'C'){
                    //纸也是特殊处理
                    isSpec = true;
                    WY.trigger('note-show',{
                        content:$backMain
                    });
                    return false;
                }
                if(effects === 'G'){
                    //从左到右
                    $img.attr('src',useCommon.concatImgUrl(productData.sacrificeBigImg));
                    offset = offsetMethod.getMoveOffset(productData.locTag , move);
                    $img.css({
                        left:0,
                        bottom:offset.bottom,
                        zIndex:11
                    }).animate({left:700},3000,function(){
                        $(this).remove();
                        method.putShow();
                    });
                    return false;
                }
                if(effects === 'H'){
                    //从右到左
                    $img.attr('src',useCommon.concatImgUrl(productData.sacrificeBigImg));
                    offset = offsetMethod.getMoveOffset(productData.locTag , move);
                    $img.css({
                        left:$backMain.width(),
                        bottom:offset.bottom,
                        zIndex:11
                    }).animate({left:800},3000,function(){
                        $(this).remove();
                        method.putShow();
                    });
                    return false;
                }
                if(effects === 'I'){
                    //将图片放大显示的处理
                    isSpec = 1;
                    $img.attr('src',useCommon.concatImgUrl(productData.sacrificeBigImg));
                }
                if(isSpec){
                    $img[0].onload = function(){
                        offset = offset || offsetMethod.getStartOffset($img);
                        $img.css(offset);
                        audio &&  audio.play();
                        setTimeout(function(){
                            if(['E','D','C'].indexOf(effects)===-1){
                                method.putShow();
                            }
                            setTimeout(function(){
                                $img.remove();
                            },300);
                            audio && audio.pause();
                            audio && audio.load();
                        } , 5000);
                    };
                    return false
                }
            }
            return {
                img:$img
            };
        }
        function moveTo($img , options , call){
            var end = options.end;
            var start = options.start || {
                width:'+=300',
                left:'-=150',
                bottom:'-=100'
            };
            $img.animate(start,2000,function(){
                $img.animate(end,2000,function(){
                    call && call($img);
                });
            });
        }
        function moveImg($img,options,productData){
            var startOffset = options.startOffset;
            $img.attr('src',useCommon.concatImgUrl(productData.sacrificeBigImg));
            var hasShow = !!showData[productData.locTag];
            if(options.move){
                if(!startOffset){
                    $img[0].onload = function(){
                        startOffset = offsetMethod.getStartOffset($img);
                        next();
                    }
                }else{
                    next();
                }
            }else{
                $img.css(options.moveOffset);
                $img.attr('title' , productData.sacrificeName
                    + '\n上供人:' + productData.userName
                    + '\n上供时间:' + productData.rowAddTime
                    + '\n有效时间:' + productData.effectiveTime);
            }
            function next(){
                $img.css(startOffset);
                moveTo($img , {
                    start:options.startMove,
                    end:options.moveOffset,
                } , function($img){
                    if(hasShow){
                        $img.remove();
                    }else{
                        $img.css({
                            zIndex:10
                        });
                    }
                    method.putShow();
                });
            }


        }
        function createImg(productData,move){
            var locTag = productData.locTag;
            var effects = productData.effects;
            //蜡烛
            if(locTag === 'D'){
                var offsets = offsetMethod.getMoveOffset(locTag , move);
                offsets.leftEnd.forEach(function(a , i){
                    var imgData = createOneImg(productData  , move);
                    var $img = imgData.img;
                    if($img)moveImg($img , {
                        move:move,
                        startMove:{
                            left:offsets.leftMove[i],
                            bottom:offsets.bottomMove[i],
                            width:offsets.widthMove[i]
                        },
                        moveOffset:{
                            left:a,
                            bottom:offsets.bottom,
                            width:offsets.width
                        },
                        startOffset:{
                            left:offsets.leftStart[i],
                            bottom:offsets.bottomStart[i],
                            width:offsets.width
                        },
                    } , productData);

                });
            }
            //火炮
            else if(effects === 'E'){
                var offsets = offsetMethod.getMoveOffset('E' , move);
                offsets.left.forEach(function(a , i){
                    createOneImg(productData  , move,{
                        left:a,
                        bottom:offsets.bottom
                    });
                });
            }
            else {
                var imgData = createOneImg(productData  , move);
                var $img = imgData.img;
                if($img){
                    var moveOffset = offsetMethod.getMoveOffset(locTag , move);
                    var width = productData.width;
                    if(width && width > 0){
                        moveOffset.width = width;
                    }
                    var height = productData.height;
                    if(height && height > 0){
                        moveOffset.height = height;
                    }
                    moveImg($img , {
                        move:move,
                        moveOffset:moveOffset,
                    } , productData);
                }
            }
            showData[locTag] = true;
            return $img;
        }
        var imgClass = 'show-sacrifice-img';
        function createImgList(data,step){
            $.each(data,function(i , o){
                var $img = createImg(o);
                step && step($img);
            });
        }
        var method = {
            createImgList:createImgList,
            createImg:createImg,
            moveImg:moveImg,
            moveTo:moveTo,
            imgClass:imgClass,
            createOneImg:createOneImg
        };
        call(method)
    })
})();