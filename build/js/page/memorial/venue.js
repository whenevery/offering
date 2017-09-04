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