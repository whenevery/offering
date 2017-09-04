$(function(){
    var titleList = ['单人','双人','名人'];
    var $memorialListContent = $('.memorial-list-content');
    var $memorialNewContent = $('.memorial-new-content');
    $memorialNewContent.showScroll();
    $.get('/memorial/list',{memorialType:'all'} , function(d){
        setList(d.data);
    });
    $.get('/memorial/list' ,{limit:10}, function(d){
        setNew(d.data.content);
    });
    function setNew(list){
        $.each(list , function(i , o){
            $memorialNewContent.append('<div class="border-b-eee">' +
                '<div class="pt-10 pb-10">' +
                '<img src="'+useCommon.concatImgUrl(o.headImg)+'" class="width-40 height-40 inline-block text-middle mr-10" alt="">' +
                '<span class="inline-block height-40 lh-40 fz-16 font-weight text-middle">'+o.memorialName+'</span>' +
                '</div>' +
                '<div class="lh-20 height-20 fz-12 color-999">'+(useCommon.parseDate(o.rowAddTime))+'</div>' +
                '<div class="lh-20 height-20 fz-12 color-999">' +
                '创建了'+(o.peopleNumber==1?'单人':'双人')+(WY.enum.getName('memorialType',o.memorialType))+'纪念馆'+
                '</div>' +
                '</div>')
        });
    }
    function setList(list){
        var numberList = list.pop();
        $.each(list , function(i , o){
            var $content = $('<div class="pb-20">');
            $content.append('<div class="border-l-yellow pl-15 fz-20 height-20 lh-20 font-weight mb-10 mt-20">'+titleList[i]+'馆</div>');
            $content.append('<div class="height-10 border-b-204 back-238"></div>');
            var $list = $('<div class="background-transparent min-h-180 flex-auto flex-wrap-auto pt-10">');
            $content.append($list);
            $memorialListContent.append($content);
            var numberObject = numberList[['danGuan','shuangGuan','mingrenGuan'][i]];
            $content.append('<div class="fz-12 height-20 lh-20 color-666">共有'+o.totalElements+'个'+titleList[i]+'纪念馆 ' +
            ' 总访问数 '+numberObject.seeNumber +
            ' 总祭拜数 '+numberObject.worshipNumber  +
            ' 总留言数 '+numberObject.leavNumber  +
            '</div>');
            putList(o.content,$list);
        });
    }
    function putList(list , $content){
        $.each(list , function(i , o){
            var $item = WY.createOne('memorial' , o , i);
            $content.append($item);
        });
    }

    WY.ready('loginSuccess' , function(userInfo){
       $.modalLoadingView('memorial/index-user' , function(content){
           var $content = $('.put-user-info').append(content).children();
           $content.__formData(userInfo , 'data');
       } , 1)
    });
});