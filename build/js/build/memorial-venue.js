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
$.photoHandler = function(width , height){
    return [
        {
            name:'左上由小变大',
            start:{
                width:0,
                height:0,
                left:0,
                top:0
            },
            end:{
                width:width,
                height:height,
            }
        },
        {
            name:'左下由小变大',
            start:{
                width:0,
                height:0,
                left:0,
                bottom:0
            },
            end:{
                width:width,
                height:height,
            }
        },
        {//
            name:'右上由小变大',
            start:{
                width:0,
                height:0,
                right:0,
                top:0
            },
            end:{
                width:width,
                height:height,
            }
        },
        {//
            name:'右下由小变大',
            start:{
                width:0,
                height:0,
                right:0,
                bottom:0
            },
            end:{
                width:width,
                height:height,
            }
        },
        {//
            name:'从左到右',
            start:{
                left:-width,
                top:0,
                width:width,
                height:height
            },
            end:{
                left:0,
            }
        },
        {//
            name:'从右到左',
            start:{
                right:-width,
                top:0,
                width:width,
                height:height
            },
            end:{
                right:0,
            }
        },
        {//
            name:'从上到下',
            start:{
                top:-width,
                left:0,
                width:width,
                height:height
            },
            end:{
                top:0,
            }
        },
        {//
            name:'从下到上',
            start:{
                bottom:-width,
                left:0,
                width:width,
                height:height
            },
            end:{
                bottom:0,
            }
        },
        {//
            name:'从中间铺开',
            start:{
                top:height / 2,
                left:width / 2,
                width:0,
                height:0
            },
            end:{
                left:0,
                top:0,
                width:width,
                height:height
            }
        },
    ]
};
;(function(){
    WY.bind('sacrifice-offset',function(options , call){
        var indoor = options.indoor;
        var personCount = options.personCount;
        // A 桌上 B 桌下 C 香 D 烛 E 火炮
        var offsetData = {
            A:indoor?{left:440,bottom:400}:{left:680,bottom:205},
            B:indoor?{left:1030,bottom:170}:{left:1010,bottom:90},
            C:indoor?{left:780,bottom:400}:{left:540,bottom:205},
            D:indoor?{left:1110,bottom:400}:{left:1150,bottom:205},
            E:indoor?{left:1110,bottom:450}:{left:1150,bottom:285},
        };
        var offsetCount = {};
        function getMoveOffset(offset , move){
            console.log('move ' + move);
            var count = move?0:(offsetCount[offset]||0);
            var rt = {
                left:0,
                bottom:offsetData[offset].bottom
            };
            //室内
            if(indoor){
                //单人
                if(personCount === 1){
                    switch (offset){
                        case 'A':
                            rt.width = 50;
                            rt.left = [790,960,720,1030,650,1100][count] || 790;
                            break;
                        case 'B':
                            rt.width = 60;
                            rt.left = [820,900,740,980,660,1060][count] || 820;
                            break;
                        case 'C':
                            rt.width = 30;
                            rt.left = 885;
                            break;
                        case 'D':
                            rt.width = 10;
                            rt.leftStart = [875,905];
                            var o=getStartOffset();
                            rt.bottomStart = [o.bottom,o.bottom];

                            rt.leftMove = [745,935];
                            rt.widthMove = ['+=100','+=100'];
                            rt.bottomMove = ['-=10','-=10'];

                            rt.leftEnd = [855,940];
                            break;
                        case 'E':
                            rt.left = [570,930];
                            break;
                    }
                }
                else{
                    switch (offset){
                        case 'A':
                            rt.width = 40;
                            rt.left = [750,1010,700,1060,650,1110][count] || 750;
                            break;
                        case 'B':
                            rt.width = 60;
                            rt.left = [820,900,740,980,660,1060][count] || 820;
                            break;
                        case 'C':
                            rt.width = 30;
                            rt.left = [833,940][count] || 833;
                            break;
                        case 'D':
                            rt.width = 10;
                            rt.leftStart = [875,905];
                            var o=getStartOffset();
                            rt.bottomStart = [o.bottom,o.bottom];
                            rt.leftMove = [745,935];
                            rt.widthMove = ['+=100','+=100'];
                            rt.bottomMove = ['-=10','-=10'];
                            rt.leftEnd = [[803,883],[910,990]][count]||[788,888];
                            break;
                        case 'E':
                            rt.left = [570,930];
                            break;
                    }
                }
            }else{
                if(personCount === 1){
                    switch (offset){
                        case 'A':
                            rt.width = 50;
                            rt.left = [770,990,700,1060,630,1130][count] || 770;
                            break;
                        case 'B':
                            rt.width = 60;
                            rt.left = [820,900,740,980,660,1060][count] || 820;
                            break;
                        case 'C':
                            rt.width = 30;
                            rt.left = 885;
                            break;
                        case 'D':
                            rt.width = 10;
                            rt.leftStart = [875,905];
                            var o=getStartOffset();
                            rt.bottomStart = [o.bottom,o.bottom];

                            rt.leftMove = [745,935];
                            rt.widthMove = ['+=100','+=100'];
                            rt.bottomMove = ['-=10','-=10'];

                            rt.leftEnd = [855,935];
                            break;
                        case 'E':
                            rt.left = [570,930];
                            break;
                    }
                }
                else{
                    switch (offset){
                        case 'A':
                            rt.width = 40;
                            rt.left = [770,990,710,1050,650,1110][count] || 750;
                            break;
                        case 'B':
                            rt.width = 60;
                            rt.left = [820,900,740,980,660,1060][count] || 820;
                            break;
                        case 'C':
                            rt.width = 30;
                            rt.left = [848,925][count] || 848;;
                            break;
                        case 'D':
                            rt.width = 10;
                            rt.leftStart = [875,905];
                            var o=getStartOffset();
                            rt.bottomStart = [o.bottom,o.bottom];
                            rt.leftMove = [745,935];
                            rt.widthMove = ['+=100','+=100'];
                            rt.bottomMove = ['-=10','-=10'];
                            rt.leftEnd = [[833,883],[910,960]][count]||[828,878];
                            break;
                        case 'E':
                            rt.left = [570,930];
                            break;
                    }
                }
            }
            offsetCount[offset] = count + 1;
            return rt;
        }
        function getStartOffset($img , w , h){
            w=w || 0;
            h= h || 0;
            if($img){
                w = $img.width();
                h = $img.height();
            }
            return {left:(options.width-w)/2,bottom:($(window).height()-h)/2};
        }
        var method = {
            getStartOffset:getStartOffset,
            getMoveOffset:getMoveOffset,
            clearOffsetCount:function(){
                offsetCount = {};
            }
        };
        call && call(method);
    })
})();
;(function(){
    WY.bind('sacrifice-move',function(options , call){
        var showData = {};
        var $backMain = $('.back-main');
        var imgSrc = ['/images/animate/1014.gif',
            '/images/animate/d.gif',
            '/images/animate/1.gif',
            '/images/animate/2.gif',
            '/images/animate/c.gif',
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
                    $img.attr('src',imgSrc[3]);
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
                    //$img.attr('src',imgSrc[1]).addClass('width-100-100 height-100-100');
                    return false;
                }
                else if(effects === 'B'){
                    isSpec = true;
                    $img.attr('src',imgSrc[2]);
                }
                else if(effects === 'C'){
                    //纸也是特殊处理
                    isSpec = true;
                    $img.attr('src',imgSrc[4]);
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
                    if(productData.sacrificeId === 1005){
                        moveOffset.width = 150;
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
;(function(){
    WY.bind('sacrifice-more',function(options){
        var $showDetailBtn = $('<div>')
            .addClass('position-fixed right-0 z-index-100 lh-20 color-white cursor-pointer');
        $showDetailBtn.text('祭奠窗').css({
            width :20,
            padding:5,
            bottom:100,
            background:'rgba(0,0,0,.4)'
        }).appendTo('body');
        var $showDetailList = $('<div class="position-fixed z-index-100 pt-10 pb-10 pl-10 pr-10 background-transparent">')
            .css({
                width:330,
                bottom:50,
                background:'rgba(0,0,0,.4)'
            }).hide();
        var $detailList = $('<div class="flex-auto flex-wrap-auto background-transparent">')
            .css({
                width:310,
                height:150
            });
        $showDetailList.append($detailList);
        $showDetailList.append('<div class="pt-10">' +
            '<div class="prev-btn div-btn inline-block color-white">上一页</div>' +
            '<div class="next-btn div-btn inline-block color-white">下一页</div>' +
            '<div class="div-btn pull-right color-white">收起</div>' +
            '</div>');
        $showDetailList.appendTo('body');
        $showDetailBtn.click(function(){
            $showDetailBtn.hide();
            reset();
            doSearch();
            $showDetailList.show().css({
                right:-330
            }).animate({
                right:0
            },500);
        });
        var currentPage = 1;
        var isSearch;
        function reset(){
            currentPage = 1;
        }
        $showDetailList.find('.div-btn').click(function(){
            if($(this).hasClass('pull-right')){
                $showDetailList.animate({
                    right:-330
                },500,function(){
                    $(this).hide();
                    $showDetailBtn.show();
                });
                return false;
            }
            if(isSearch || $(this).hasClass('disabled'))return false;
            if($(this).hasClass('prev-btn'))currentPage --;
            else currentPage++;
            doSearch();
        });
        function doSearch(){
            isSearch = true;
            $.get('/sacrifice/list',{
                limit:8,
                currentPage:currentPage,
                memorialId:options.memorialId,
                searchType:'valid'
            } , function(a){
                isSearch = false;
                $showDetailList.find('.div-btn').removeClass('disabled');
                if(a.data.firstPage){
                    $showDetailList.find('.prev-btn').addClass('disabled');
                }
                if(a.data.lastPage){
                    $showDetailList.find('.next-btn').addClass('disabled');
                }
                $detailList.html('');
                $.each(a.data.content , function(i , o){
                    var $img = $('<img class="ico-max" src="'+useCommon.concatImgUrl(o.sacrificeImg)+'">');
                    $img.attr('title' , o.sacrificeName
                        + '\n上供人:' + o.userName
                        + '\n上供时间:' + o.rowAddTime
                        + '\n有效时间:' + o.effectiveTime
                    );
                    if(i < 4)$img.addClass('mb-10');
                    if((i+1)%4)$img.addClass('mr-10');
                    $detailList.append($img)
                });
                if(a.data.content.length == 0){
                    $detailList.html('<div class="color-white">暂无记录</div>');
                }
            })
        }
    })
})();
WY.sacrificeShow = function(options){
    var personCount = options.personCount;
    var indoor = options.scenesType === 'indoor';
    var $content = $(options.content);
    var width = $content.width();
    WY.trigger('sacrifice-offset',{
        indoor:indoor,
        width:width,
        personCount:personCount
    },function(offsetMethod){
        WY.trigger('sacrifice-move',{
            offsetMethod:offsetMethod,
            content:$content
        },function(moveMethod){
            WY.bind('sacrifice-change',function(productData){
                moveMethod.createImg(productData , 1 );
            });
            moveMethod.putShow = function(){
                putShow();
            };
            function putShow(){
                $.get('/sacrifice/show/list',{
                    memorialId:options.memorialId
                },function(a){
                    $content.find('.'+moveMethod.imgClass).remove();
                    offsetMethod.clearOffsetCount();
                    moveMethod.createImgList(a.data.filter(function(b){
                        return b.locTag === 'A';
                    }).slice(0,6));
                    var bImgs = [],bWidth=-10;
                    moveMethod.createImgList(a.data.filter(function(b){
                        return b.locTag === 'B';
                    }).slice(0,6),function(img){
                        bWidth+=10;
                        var w = img.width();
                        if(w){
                            bWidth += img.width();
                        }else{
                            img[0].onload=function(){
                                bWidth += img.width();
                            }
                        }
                        bImgs.push(img);
                    });
                    if(bImgs.length){
                        var startLeft = (width - bWidth)/2;
                        bImgs.forEach(function(a){
                            a.css({
                                left:startLeft
                            });
                            startLeft+=a.width();
                            startLeft+=10;
                        });
                    }
                    moveMethod.createImgList(a.data.filter(function(b){
                        return b.locTag === 'C';
                    }).slice(0,personCount));
                    moveMethod.createImgList(a.data.filter(function(b){
                        return b.locTag === 'D';
                    }).slice(0,personCount));
                });
            }
            putShow();
            WY.trigger('sacrifice-more',options);
        });
    });
};

$(function(){
    var Fireworks = function(options){
        var $content = $(options.content || window);
        var audio = options.audio;
        var contentWidth = $content.width();
        var contentHeight = $content.height();
        var self = this;
        var rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);}
        var hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};
        window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

        self.init = function(){
            self.canvas = document.createElement('canvas');
            $(self.canvas).addClass(options.className);
            self.canvas.width = self.cw = contentWidth;
            self.canvas.height = self.ch = contentHeight;
            self.particles = [];
            self.partCount = 150;
            self.fireworks = [];
            self.mx = self.cw/2;
            self.my = self.ch/2;
            self.currentHue = 30;
            self.partSpeed = 5;
            self.partSpeedVariance = 10;
            self.partWind = 50;
            self.partFriction = 5;
            self.partGravity = 1;
            self.hueMin = 0;
            self.hueMax = 360;
            self.fworkSpeed = 4;
            self.fworkAccel = 10;
            self.hueVariance = 30;
            self.flickerDensity = 25;
            self.showShockwave = true;
            self.showTarget = false;
            self.clearAlpha = 25;

            $content.append(self.canvas);
            self.ctx = self.canvas.getContext('2d');
            self.ctx.lineCap = 'round';
            self.ctx.lineJoin = 'round';
            self.lineWidth = 1;
            self.bindEvents();
            self.canvasLoop();

            self.canvas.onselectstart = function() {
                return false;
            };
        };

        self.createParticles = function(x,y, hue){
            var countdown = self.partCount;
            while(countdown--){
                var newParticle = {
                    x: x,
                    y: y,
                    coordLast: [
                        {x: x, y: y},
                        {x: x, y: y},
                        {x: x, y: y}
                    ],
                    angle: rand(0, 360),
                    speed: rand(((self.partSpeed - self.partSpeedVariance) <= 0) ? 1 : self.partSpeed - self.partSpeedVariance, (self.partSpeed + self.partSpeedVariance)),
                    friction: 1 - self.partFriction/100,
                    gravity: self.partGravity/2,
                    hue: rand(hue-self.hueVariance, hue+self.hueVariance),
                    brightness: rand(50, 80),
                    alpha: rand(40,100)/100,
                    decay: rand(10, 50)/1000,
                    wind: (rand(0, self.partWind) - (self.partWind/2))/25,
                    lineWidth: self.lineWidth
                };
                self.particles.push(newParticle);
            }
        };


        self.updateParticles = function(){
            var i = self.particles.length;
            while(i--){
                var p = self.particles[i];
                var radians = p.angle * Math.PI / 180;
                var vx = Math.cos(radians) * p.speed;
                var vy = Math.sin(radians) * p.speed;
                p.speed *= p.friction;

                p.coordLast[2].x = p.coordLast[1].x;
                p.coordLast[2].y = p.coordLast[1].y;
                p.coordLast[1].x = p.coordLast[0].x;
                p.coordLast[1].y = p.coordLast[0].y;
                p.coordLast[0].x = p.x;
                p.coordLast[0].y = p.y;

                p.x += vx;
                p.y += vy;
                p.y += p.gravity;

                p.angle += p.wind;
                p.alpha -= p.decay;

                if(!hitTest(0,0,self.cw,self.ch,p.x-p.radius, p.y-p.radius, p.radius*2, p.radius*2) || p.alpha < .05){
                    self.particles.splice(i, 1);
                }
            };
        };

        self.drawParticles = function(){
            var i = self.particles.length;
            while(i--){
                var p = self.particles[i];

                var coordRand = (rand(1,3)-1);
                self.ctx.beginPath();
                self.ctx.moveTo(Math.round(p.coordLast[coordRand].x), Math.round(p.coordLast[coordRand].y));
                self.ctx.lineTo(Math.round(p.x), Math.round(p.y));
                self.ctx.closePath();
                self.ctx.strokeStyle = 'hsla('+p.hue+', 100%, '+p.brightness+'%, '+p.alpha+')';
                self.ctx.stroke();

                if(self.flickerDensity > 0){
                    var inverseDensity = 50 - self.flickerDensity;
                    if(rand(0, inverseDensity) === inverseDensity){
                        self.ctx.beginPath();
                        self.ctx.arc(Math.round(p.x), Math.round(p.y), rand(p.lineWidth,p.lineWidth+3)/2, 0, Math.PI*2, false)
                        self.ctx.closePath();
                        var randAlpha = rand(50,100)/100;
                        self.ctx.fillStyle = 'hsla('+p.hue+', 100%, '+p.brightness+'%, '+randAlpha+')';
                        self.ctx.fill();
                    }
                }
            };
        };


        self.createFireworks = function(startX, startY, targetX, targetY){
            var newFirework = {
                x: startX,
                y: startY,
                startX: startX,
                startY: startY,
                hitX: false,
                hitY: false,
                coordLast: [
                    {x: startX, y: startY},
                    {x: startX, y: startY},
                    {x: startX, y: startY}
                ],
                targetX: targetX,
                targetY: targetY,
                speed: self.fworkSpeed,
                angle: Math.atan2(targetY - startY, targetX - startX),
                shockwaveAngle: Math.atan2(targetY - startY, targetX - startX)+(90*(Math.PI/180)),
                acceleration: self.fworkAccel/100,
                hue: self.currentHue,
                brightness: rand(50, 80),
                alpha: rand(50,100)/100,
                lineWidth: self.lineWidth
            };
            self.fireworks.push(newFirework);

        };


        self.updateFireworks = function(){
            var i = self.fireworks.length;

            while(i--){
                var f = self.fireworks[i];
                self.ctx.lineWidth = f.lineWidth;

                vx = Math.cos(f.angle) * f.speed,
                    vy = Math.sin(f.angle) * f.speed;
                f.speed *= 1 + f.acceleration;
                f.coordLast[2].x = f.coordLast[1].x;
                f.coordLast[2].y = f.coordLast[1].y;
                f.coordLast[1].x = f.coordLast[0].x;
                f.coordLast[1].y = f.coordLast[0].y;
                f.coordLast[0].x = f.x;
                f.coordLast[0].y = f.y;

                if(f.startX >= f.targetX){
                    if(f.x + vx <= f.targetX){
                        f.x = f.targetX;
                        f.hitX = true;
                    } else {
                        f.x += vx;
                    }
                } else {
                    if(f.x + vx >= f.targetX){
                        f.x = f.targetX;
                        f.hitX = true;
                    } else {
                        f.x += vx;
                    }
                }

                if(f.startY >= f.targetY){
                    if(f.y + vy <= f.targetY){
                        f.y = f.targetY;
                        f.hitY = true;
                    } else {
                        f.y += vy;
                    }
                } else {
                    if(f.y + vy >= f.targetY){
                        f.y = f.targetY;
                        f.hitY = true;
                    } else {
                        f.y += vy;
                    }
                }

                if(f.hitX && f.hitY){
                    self.createParticles(f.targetX, f.targetY, f.hue);
                    self.fireworks.splice(i, 1);

                }
            };
        };

        self.drawFireworks = function(){
            var i = self.fireworks.length;
            self.ctx.globalCompositeOperation = 'lighter';
            while(i--){
                var f = self.fireworks[i];
                self.ctx.lineWidth = f.lineWidth;

                var coordRand = (rand(1,3)-1);
                self.ctx.beginPath();
                self.ctx.moveTo(Math.round(f.coordLast[coordRand].x), Math.round(f.coordLast[coordRand].y));
                self.ctx.lineTo(Math.round(f.x), Math.round(f.y));
                self.ctx.closePath();
                self.ctx.strokeStyle = 'hsla('+f.hue+', 100%, '+f.brightness+'%, '+f.alpha+')';
                self.ctx.stroke();

                if(self.showTarget){
                    self.ctx.save();
                    self.ctx.beginPath();
                    self.ctx.arc(Math.round(f.targetX), Math.round(f.targetY), rand(1,8), 0, Math.PI*2, false)
                    self.ctx.closePath();
                    self.ctx.lineWidth = 1;
                    self.ctx.stroke();
                    self.ctx.restore();
                }

                if(self.showShockwave){
                    self.ctx.save();
                    self.ctx.translate(Math.round(f.x), Math.round(f.y));
                    self.ctx.rotate(f.shockwaveAngle);
                    self.ctx.beginPath();
                    self.ctx.arc(0, 0, 1*(f.speed/5), 0, Math.PI, true);
                    self.ctx.strokeStyle = 'hsla('+f.hue+', 100%, '+f.brightness+'%, '+rand(25, 60)/100+')';
                    self.ctx.lineWidth = f.lineWidth;
                    self.ctx.stroke();
                    self.ctx.restore();
                }
            };
        };

        self.bindEvents = function(){
            $(window).on('resize', function(){
                clearTimeout(self.timeout);
                self.timeout = setTimeout(function() {
                    self.canvas.width = self.cw = $content.width();
                    self.canvas.height = self.ch = $content.height();
                    self.ctx.lineCap = 'round';
                    self.ctx.lineJoin = 'round';
                }, 100);
            });
        }

        self.clear = function(){
            self.particles = [];
            self.fireworks = [];
            self.ctx.clearRect(0, 0, self.cw, self.ch);
        };


        self.canvasLoop = function(){
            requestAnimFrame(self.canvasLoop, self.canvas);
            self.ctx.globalCompositeOperation = 'destination-out';
            self.ctx.fillStyle = 'rgba(0,0,0,'+self.clearAlpha/100+')';
            self.ctx.fillRect(0,0,self.cw,self.ch);
            self.updateFireworks();
            self.updateParticles();
            self.drawFireworks();
            self.drawParticles();

        };
        self.hide = function(){
            this.clear();
            $(this.canvas).hide();
            return self;
        }
        self.show = function(){
            $(this.canvas).show();
            return self;
        }
        self.createOne = function(){
            self.mx = contentWidth * Math.random() - self.canvas.offsetLeft;
            self.my = contentHeight * Math.random() - self.canvas.offsetTop;
            self.currentHue = rand(self.hueMin, self.hueMax);
            self.createFireworks(self.cw/2, self.ch, self.mx, self.my);
        };
        self.start = function(){
            audio.play();
          this.show();
          this.time = Date.now() + 5 * 1000;
          this.timer();
        };
        self.timer = function(){
            var that = this;
            if(this.time > Date.now()){
                that.createOne();
                setTimeout(function(){
                    that.timer();
                },100);
            }else{
                setTimeout(function(){
                    audio.pause();
                    audio.load();
                    that.hide();
                },2000);
            }
        }
        self.init();

    };
    var oneFireWork;
    WY.bind('fire-work',function(options){
        oneFireWork = oneFireWork || new Fireworks(options);
        oneFireWork.start();
    });
});


WY.bind('note-show',function(options){
   var $content = $(options.content);
   var allTime = Date.now() + (options.allTime || 5000);
   var count = options.count || 2;
   var width = $content.width(),showWidth=1000;
   var height = $content.height();
   var minX = (width - showWidth)/2;
   var maxX = minX + showWidth;
   var notes = [];
   function down(){
       if(notes.length){
           notes.forEach(function(a , i){
               a.top = a.top + a.speed;
               if(a.top > height){
                   notes.splice(i,1);
                   a.img.remove();
               }
               else a.img.css({
                   top:a.top
               });
           });
           requestAnimFrame(down)
       }
   }
   var createTime;
   function create(){
       if(Date.now() < allTime){
           if(createTime)createTime--;
           else{
               createTime = 5;
               for(var i=0;i<count;i++)createOne();
           }
           requestAnimFrame(create)
       }else{
           options.done && options.done();
       }
   }
   function createOne(){
       var r = Math.random()*showWidth;
       var x = minX + Math.ceil(r);
       var speed = 10 || Math.random() * 100;
       var $img = $('<img src="/images/animate/note.jpg" class="width-60 position-absolute z-index-10 transform-rotate-90">');
       $content.append($img.css({
           left:x
       }));
       notes.push({
           top:-20,
           img:$img,
           speed:speed
       });
   }
    create();
    down();
});
WY.bind('smoke',function(canvas, options){
        var defaults = {
            count: 30,
            velocity: 2,
            fps: 30,
            url: 'smoke.png'
        };

        options = options || {};

        // 参数合并
        var params = {};

        for (var key in defaults) {
            params[key] = options[key] || defaults[key];
        }

        // 创建存储粒子的数组
        var particles = [];

        // 渲染的粒子数目
        var particleCount = params.count;

        // 每个方向的最大速度
        var maxVelocity = params.velocity;

        // 每秒多少帧
        var targetFPS = params.fps;

        // canvas元素
        var eleCanvas = canvas;

        if (!eleCanvas) {
            return this;
        }

        // 画布的尺寸
        var canvasWidth = eleCanvas.clientWidth;
        var canvasHeight = eleCanvas.clientHeight;

        eleCanvas.width = canvasWidth;
        eleCanvas.height = canvasHeight;

        // 创建图片对象
        var imageObj = new Image();

        // 一旦图像被下载，然后在所有的颗粒上设置图像
        imageObj.onload = function() {
            particles.forEach(function(particle) {
                particle.setImage(imageObj);
            });
        };

        // 烟雾图片地址
        imageObj.src = params.url;

        // 粒子实例方法
        function Particle(context) {

            // 设置初始位置
            this.x = 0;
            this.y = 0;

            // 纵横速度
            this.xVelocity = 0;
            this.yVelocity = 0;

            // 圆角大小
            this.radius = 2;

            // 存储上下文，绘制的时候需要
            this.context = context;

            // 绘制粒子的具体方法
            this.draw = function() {
                // 如果图片，则绘制
                if(this.image){
                    this.context.globalAlpha = this.alpha;
                    // 烟雾缭绕就看这里了
                    // 这是宽度，是动态的
                    var fillWidth = canvasWidth/2, fillHeight = fillWidth - fillWidth * (this.x/canvasWidth * this.y/canvasHeight);

                    this.context.drawImage(this.image, 0, 0, this.imageWidth, this.imageHeight, this.x, this.y, fillWidth, fillHeight);
                }
            };

            // 刷新粒子
            this.update = function() {
                // 改变粒子的
                this.x += this.xVelocity;
                this.y += this.yVelocity;

                // 如果到了右边缘
                if (this.x >= canvasWidth) {
                    this.xVelocity = -this.xVelocity;
                    this.x = canvasWidth;
                }
                // 检测是否到了左边缘
                else if (this.x <= 0) {
                    this.xVelocity = -this.xVelocity;
                    this.x = 0;
                }

                // 底边缘
                if (this.y >= canvasHeight) {
                    this.yVelocity = -this.yVelocity;
                    this.y = canvasHeight;
                }

                // 是否上边缘
                else if (this.y <= 0) {
                    this.yVelocity = -this.yVelocity;
                    this.y = 0;
                }

                // 越靠近边缘，透明度越低
                // 纵向透明度变化要比横向的明显
                this.alpha = (1 - Math.abs(canvasWidth*0.5 - this.x) / canvasWidth) * (0.7 - Math.abs(canvasHeight*0.5 - this.y) / canvasHeight);
            };

            // 设置粒子位置方法
            this.setPosition = function(x, y) {
                this.x = x;
                this.y = y;
            };

            // 设置速度方法
            this.setVelocity = function(x, y) {
                this.xVelocity = x;
                this.yVelocity = y;
            };

            this.setImage = function(image){
                this.imageWidth = image.width;
                this.imageHeight = image.height;
                this.image = image;
            }
        }

        // 生成一个min,max大小之间的随机数
        function generateRandom(min, max){
            return Math.random() * (max - min) + min;
        }

        // canvas上下文
        var context;

        // 初始化常见
        function init() {
            var canvas = eleCanvas;
            if (canvas.getContext) {

                // 绘图都需要这条语句
                context = canvas.getContext('2d');

                // 创建粒子，并设置他们的位置什么的，当然都是随机的
                for(var i=0; i < particleCount; ++i){
                    var particle = new Particle(context);

                    // 随机位置
                    particle.setPosition(generateRandom(0, canvasWidth), generateRandom(0, canvasHeight));

                    // 设置随机速度
                    particle.setVelocity(generateRandom(-maxVelocity, maxVelocity), generateRandom(-maxVelocity, maxVelocity));
                    particles.push(particle);
                }
            }
        }

        // 初始化
        init();

        // 绘制方法
        function draw() {
            // 清除绘制
            //context.fillStyle = "rgba(0, 0, 0, 0)";
            context.clearRect(0, 0, canvasWidth, canvasHeight);

            // 绘制所有粒子
            particles.forEach(function(particle) {
                particle.draw();
            });
        }

        // 刷新
        function update() {
            particles.forEach(function(particle) {
                particle.update();
            });
        }

        // 开始绘制
        if (context) {
            setInterval(function() {
                // 绘制前先更新位置什么的
                update();

                // 绘制
                draw();
            }, 1000 / targetFPS);
        }
});
$(function(){
    var memorialModel = {
        back:useCommon.concatImgUrl(resJson.memorialModel.backImg),
        front:useCommon.concatImgUrl(resJson.memorialModel.frontImg),
        middle:useCommon.concatImgUrl(resJson.memorialModel.middleImg),
    };
    var $backMain = $('.back-main');
    var scenesType = resJson.memorialModel.scenesType;
    if(scenesType === 'indoor'){
        $('.venue-main').addClass('venue-in');
    }
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var backWidth,backHeight;
    //资料
    WY.bind('modal-handler-venue-user-info',function($content){
        var $listContent = $content.find('.list-content');
        resJson.persons.forEach(function(a){
           $listContent.append('<fieldset>'+
               '<div class="text-left line"><span class="color-yellow-1">姓名：</span><span class="fz-16">'+a.personName+'</span></div>'+
                '<div class="text-left line"><span class="color-yellow-1">性别：</span><span class="fz-16">'+a.personSex+'</span></div>'+
                '<div class="text-left line"><span class="color-yellow-1">出生日期：</span><span class="fz-16">'+a.bornIn+'</span></div>'+
                '<div class="text-left line"><span class="color-yellow-1">逝世日期：</span><span class="fz-16">'+a.diedIn+'</span></div>'+
                '<div class="text-left line"><span class="color-yellow-1">个人简介：</span></div>'+
            '<div class="color-white-5 textarea-content text-left" modal-handler="scroll">'+
                '<div>'+
                    a.introduction.replace(/\n/g,'<br>')+
                '</div>'+
                '</div>'+
                '</fieldset>')
        });
        WY.trigger('modal-handler',$listContent);
    });
    //背景
    (function(){
        var memorialModelId = resJson.memorialModel.memorialModelId;
        $backMain.bind('dbclick  mousedown mousemove dropstart drop' , function(){
           return false;
        });
        var loadCount = 0;
        var img;
        ['back','front','middle'].forEach(function(a){
            img = new Image;
            img.src = memorialModel[a];
            img.onload = function(){
                loadCount++;
                if(loadCount===3){
                    imgLoadEnd();
                }
            }
        });
        function imgLoadEnd (){
            var cssData = {
                width:backWidth = img.width,
                height:backHeight = img.height,
                top:(windowHeight - backHeight) ,
                left:(windowWidth - backWidth) / 2,
            };
            if(scenesType === 'indoor'){
                cssData.top += 50;
            }
            $backMain.css(cssData);

            for(var key in memorialModel){
                $backMain
                    .append($('<div class="venue-back position-absolute position-auto '+key+'" style="background: url('+memorialModel[key]+')"></div>'));
            }

            if(scenesType === 'outdoor'){
                if(memorialModelId === 1){
                    $backMain.append($('<img src="/images/venue/bird.gif" class="position-absolute z-index-10">').css({
                        left:1000,
                        top:170
                    }));
                    setTimeout(function(){
                        $backMain.append($('<img src="/images/venue/bird.gif" class="position-absolute z-index-10">').css({
                            left:1100,
                            top:145
                        }))
                    },120);
                    setTimeout(function(){
                        $backMain.append($('<img src="/images/venue/bird.gif" class="position-absolute z-index-10">').css({
                            left:1200,
                            top:120
                        }))
                    },230);
                    $backMain.append($('<img src="/images/venue/1000.jpg" class="position-absolute z-index-10">').css({
                        left:1500,
                        top:170
                    }))
                }
                else if(memorialModelId === 3 || memorialModelId === 4){
                    $backMain.append($('<img src="/images/venue/1011.jpg" class="position-absolute z-index-10">').css({
                        left:100,
                        top:420
                    }));
                    $backMain.append($('<img src="/images/venue/1011.jpg" class="position-absolute z-index-10">').css({
                        left:1200,
                        top:420
                    }));
                }

            }else{
                var canvas = document.createElement('canvas');
                $(canvas).addClass('width-100-100 height-100-100 position-absolute left-0 top-0')
                    .css({
                        zIndex:4
                    })
                $backMain.append(canvas);
                WY.trigger('smoke',canvas,{url:'/images/animate/smoke.png'});
            }
            $backMain.append('<div class="photo text-center">'+
                '<div class="img-back margin-auto inline-block">' +
            '<img src="'+useCommon.concatImgUrl(resJson.headImg)+'" alt="">'+
                '</div>'+
                '<div class="content color-white '+(resJson.memorialModel.scenesType)+'">'+
                    resJson.persons.map(function(a){return '<div class="inline-block text break-all text-back">'+a.personName+'之墓</div>'}).join('')
                +
                '</div>'+
                '</div>');
            $backMain.append('<div class="label-content">'+
                '<img src="/images/memorial/label-1.png" modal-options="{backNone:1}" modal-load="venue/user-info" alt="">'+
                '<img src="/images/memorial/label-2.png" class="show-photo-btn">'+
                '<img src="/images/memorial/label-4.png" class="show-video-btn">'+
                '<img src="/images/memorial/label-3.png" modal-options="{backNone:1}" modal-load="/venue/visit/record?memorialId='+hrefData.id+'" alt="">'+
                '</div>');
            //影集
            $backMain.find('.show-photo-btn').click(function(){
                $.get('/album/file/list',{
                    limit:100,
                    dataId:hrefData.id,
                    type:'memorial'
                } , function(a){
                   var data = a.data;
                    data = data && data.filter(function(a){
                        return a.fileFormat == 'img'
                    });
                   if(data && data.length){
                       $.modalLoadingView('venue/photo' , function(content){
                           setTimeout(function(){
                               content.find('.all-photo-number').text(data.length);
                               content.find('.show-photo-content').showPhoto({
                                   data:data,
                                   showIndex:content.find('.show-photo-number'),
                                   margin:15
                               });
                           } , 100)
                       } , {backNone:1});
                   }else{
                       $.modalLoadingView('venue/photo-null&typeName=相册&userId='+resJson.userId , function(){} , {backNone:1});
                   }
                });
            });
            $backMain.find('.show-video-btn').click(function(){
                $.get('/album/file/list',{
                    limit:100,
                    dataId:hrefData.id,
                    type:'memorial'
                } , function(a){
                   var data = a.data;
                    data = data && data.filter(function(a){
                        return a.fileFormat == 'video'
                    });
                   if(data && data.length){
                       $.modalLoadingView('venue/photo' , function(content){
                           content.find('.photo-footer').remove();
                           setTimeout(function(){
                               content.find('.all-photo-number').text(data.length);
                               content.find('.show-photo-content').showPhoto({
                                   data:data,
                                   type:'video',
                                   showIndex:content.find('.show-photo-number'),
                                   margin:15
                               });
                           } , 100)
                       } , {backNone:1});
                   }else{
                       $.modalLoadingView('venue/photo-null&typeName=视频&userId='+resJson.userId , function(){} , {backNone:1});
                   }
                });
            });
            showMessage();
            WY.sacrificeShow({
                personCount:resJson.persons.length,
                scenesType:scenesType,
                memorialId:hrefData.id,
                content:$backMain
            });

            var backAudioSrc = ({
                1:'/images/audio/back-1.mp3',
                2:'/images/audio/back-2.mp3',
                3:'/images/audio/back-3.mp3',
                4:'/images/audio/back-4.mp3',
                5:'/images/audio/back-5.mp3',
            })[memorialModelId];
            $backMain.append('<audio loop="loop" autoplay="autoplay" src="'+backAudioSrc+'" class="opacity-0">');
        };
        var isDown,autoLeft,autoTop,autoX,autoY;
        $backMain.bind('mousedown' , function(e){
            isDown = true;
            autoLeft = parseInt($(this).css('left'));
            autoTop = parseInt($(this).css('top'));
            autoX = e.pageX;
            autoY = e.pageY;
        });
        $backMain.bind('mouseup mouseout' , function(){
            isDown = false;
        });
        $backMain.bind('mousemove' , function(e){
            if(isDown){
                var moveLeft = autoLeft + e.pageX - autoX;
                if(moveLeft > 0 ){
                    moveLeft = 0;
                }else if(moveLeft < windowWidth - backWidth){
                    moveLeft = windowWidth - backWidth;
                }
                var moveTop = autoTop + e.pageY - autoY;
                if(moveTop > 0 ){
                    moveTop = 0;
                }else if(moveTop < windowHeight - backHeight){
                    moveTop = windowHeight - backHeight;
                }
                var offsetData = {};
                if(backWidth > window.innerWidth){
                    offsetData.left = moveLeft;
                }
                if(backHeight > window.innerHeight){
                    offsetData.top = moveTop;
                }
                $(this).css(offsetData);
            }
        });
    })();


    //留言板
    var $messageMain = $('.venue-massage-content .main');
    var messageType = 'list';
    $('.venue-massage-content .title-item').click(function(){
        if(!$(this).hasClass('able'))return false;
        $(this).removeClass('able').siblings().addClass('able');
        messageType = $(this).attr('type');
        showMessage();
    });
    WY.bind('sacrifice-change',function(){
        if(messageType === 'list')showMessage();
    });
    function showMessage(){
        $messageMain.html('');
        var searchMessage;
        //祭拜记录
        if(messageType === 'list'){
            var $div = $('<div class="height-100-100">').appendTo($messageMain);
            $div.showScroll();
            searchMessage = function(){
                $div.html('');
                $.get('/sacrifice/list',{
                    limit:10,
                    memorialId:hrefData.id,
                },function(a){
                    var data = a.data.content;
                    $.each(data , function( i , o){
                        $div.append('<div class="clearfix">'+
                            '<div class="left pull-left">'+
                            '<div class="title">'+o.userName+'</div>'+
                            '<div>'+useCommon.parseDate(o.rowAddTime , 'm-d H:i')+'</div>'+
                            '</div>'+
                            '<div class="right pull-right">上贡了'+
                            o.sacrificeName +
                            '</div>'+
                            '</div>')
                    });
                    if(!data || !data.length)$div.html('暂无记录');
                });
            };
            searchMessage();
        }else{
            //留言
            $messageMain.append('<textarea placeholder="在这里发表留言" class="color-white placeholder-white width-100-100 mb-10"></textarea>');
            $messageMain.append('<div class="clearfix"><div class="div-btn back-yellow-1 color-white inline-block pull-right">提交</div></div>')
            $messageMain.find('.div-btn').click(function(){
                var val = $messageMain.find('textarea').val();
                if(val){
                    $.post('/message/add' ,{
                        leaType:'memorial',
                        dataId:hrefData.id,
                        content:val,
                    }, function(a){
                        if(a.code == 0){
                            $messageMain.find('textarea').val('');
                            searchMessage();
                        }
                        else useCommon.toast(a.message);
                    });
                }
            });
            var $div = $('<div class="height-160 overflow-hidden mt-20">').appendTo($messageMain);
            $div.showScroll();
            searchMessage = function(){
                $div.html('');
                $.get('/message/list',{
                    limit:10,
                    dataId:hrefData.id,
                    leaType:'memorial',
                },function(a){
                    data = a.data.content;
                    $.each(data , function( i , o){
                        $div.append('<div>' +
                            '<div class="clearfix">' +
                            '<div class="pull-left title">'+o.userName +'</div>' +
                            '<div class="pull-right color-white-5">'+useCommon.parseDate(o.rowAddTime , 'm-d H:i')+'</div>' +
                            '</div>'+
                            '<div class="text-content">'+o.content+'</div>'+
                            '</div>')
                    });
                    if(!data || !data.length)$div.html('暂无记录');
                });
            };
            searchMessage();
        }
    }

});
$(function(){
    //商品类型
    function category(options){
        this.content = $(options.content);
        this.pageSize = 10;
        this.bind();
    }
    category.prototype = {
       setData:function(data){
           var _this = this;
            $.each(data , function( i , o){
                _this.content.append(_this.createOne(o));
            });
            this.setOffset();
       },
        createOne:function(data){
           var $div = $('<div class="item">');
            $div.append('<div class="category-img-content cursor-pointer" code="'+data.sacrificeId+'"><img src="'+useCommon.concatImgUrl(data.sacrificeImg)+'" alt=""></div>');
            $div.append('<div class="text text-center" >'+data.sacrificeName+'</div>');
            return $div;
        },
        reset:function(){
            this.productPage = 0;
            this.productCount = 0;
            this.productData = [];
            this.lastList = null;
            this.isSearch = false;
            this.productXhr && this.productXhr.abort();
        },
        bind:function(){
            var _this = this;
            this.content.click(function(){
                return false;
            });
            this.content.on('click' , '.category-img-content' , function(){
                $(this).addClass('active');
                _this.reset();
                var code = $(this).attr('code');
                $.modalLoadingView('venue/product-list' , function($window){
                    if(!_this.window){
                        $window.on('hide.bs.modal' , function(){
                            _this.content.find('.active').removeClass('active');
                        });
                    }
                    _this.window = $window;
                    _this.productTotal = Math.ceil(Math.random() * 30);
                    _this.productContent = $window.find('.product-content');
                    $window.on('click' ,'.to-buy-btn', function(){
                        _this.buy();
                    });
                    _this.productContent.on('click' , '.category-img-content',function(){
                        _this.productContent.find('.active').removeClass('active');
                        $(this).addClass('active').next().addClass('active');
                    });
                    _this.productContent.showScroll({
                        scrollBottom:function($move){
                            _this.searchProduct($move);
                        }
                    });
                    _this.searchProduct(null , $window , code);
                },{
                    backNone:1,
                    notModal:1,
                });
                return false;
            });
        },
        searchProduct:function($move , $window , code){
            if($move){
                if(this.showLength < this.allLength)$move.css('marginTop','-=10');
                this.showProduct();
                return;
            }else{
                this.productContent.html('');
            }
            var _this = this;
            $.get('/sacrifice/product',{
                id:code
            },function(a){
                var data = a.data;
                _this.window.find('.show-count-span').text(data.length);
                _this.productData = data;
                _this.productPage = 0;
                _this.showLength = 0;
                _this.allLength = data.length;
                _this.showProduct();
                $window && $window.modal();
            });
        },
        showProduct:function(){
            var data = this.productData.slice(this.productPage *  this.pageSize,(this.productPage+1)*this.pageSize );
            this.showLength += this.pageSize;
            this.productPage++;
            var _this = this;
            $.each(data , function(i , o){
                _this.addOneProduct(o);
            });
        },
        addOneProduct:function(data){
            if(!this.lastList || this.lastList.children().length == 5){
                this.lastList = $('<div class="list pb-10">');
                this.productContent.append(this.lastList);
            }
            var $content = $('<div class="item">'+
                '<div class="category-img-content cursor-pointer pb-10" code="'+data.sacrificeId+'">'+
                '<img src="'+useCommon.concatImgUrl(data.sacrificeImg)+'">'+
                '</div>'+
                '<div>'+data.sacrificeName+'</div>'+
                '<div class="fz-12">时效'+data.sacrificeAging+'分钟</div>'+
                '<div class="sm-text">消耗'+data.useCloudBi+'云币</div>'+
                '</div>');
            this.lastList.append($content);

        },
        setOffset:function(){
            var width = this.content.width();
            var parentWidth = this.content.parent().width();
            this.content.css({
                left:(parentWidth - width) / 2
            })
        },
        buy:function(){
            var code = this.productContent.find('.category-img-content.active').attr('code');
            var productData = this.productData.filter(function(a){return a.sacrificeId == code}).pop();
            if(WY.validate.checkYunBi(productData.useCloudBi) === false)return false;
            WY.trigger('img-load',productData.sacrificeBigImg);
            WY.confirm({
                content:'购买' + productData.sacrificeName + ',消耗' + productData.useCloudBi + '云币,持续' + productData.sacrificeAging+'分钟',
                done:function(){
                    $.post('/sacrifice/add' , {
                        sacrificeId:productData.sacrificeId,
                        memorialId:hrefData.id,
                    },function(a){
                        if(a.code == 0){
                            $.modalLoadingHide();
                            WY.trigger('login-flush');
                            WY.trigger('sacrifice-change' , productData);
                        }else{
                            useCommon.toast(a.message);
                        }
                    });
                }
            });
        }
    };
    var categoryObj = new category({content:'.category-content'});
    $.get('/sacrifice/category',function(a){
        categoryObj.setData(a.data);
    });
});