;(function(){
    var $memorialContent =  $('.show-memorial-list-content');
    var memorialType = 'renqi';
    function searchMemorial(){
        $.get('/memorial/list',{
            limit:12,
            lab:memorialType
        },function(a){
            $memorialContent.html('');
            $.each(a.data.content,function(i , o){
                var $item = WY.createOne('memorial' , o , i);
                $memorialContent.append($item);
            });
        });
    }
    $('.active-list').on('click','div',function(){
        if($(this).hasClass('active'))return false;
        $(this).addClass('active').siblings().removeClass('active');
        memorialType = $(this).attr('data');
        searchMemorial();
    });
    searchMemorial();

    var $homeHeader = $('.home-header');
    $homeHeader.find('.ico-btn').click(function(){
        $homeHeader.toggleClass('left');
        $homeHeader.find('.message-content').hide();
        $homeHeader.find('.'+($homeHeader.hasClass('left')?'left':'right')).show();
    });
    var rankData = {};
    function searchRanking(){
        var rankingType = $('.ranking-type-content').find('.active').attr('type');
        if(rankData[rankingType]){
            return setRankingData(rankData[rankingType]);
        }
        $.get('/user/ranking/'+rankingType,{limit:6}, function(a){
            setRankingData(rankData[rankingType] = a.data);
        });
    }
    var $rankingContent = $('.ranking-list-content');
    function setRankingData(data){
        $.each(data , function(i , o){
            var address = o.xjProvince + ' ' + o.xjCity + ' ' + o.xjCounty;
            $rankingContent.append('<div class="pt-15 pb-10 pl-10 back-white clearfix border-b-204">' +
            '<div class="pull-left fz-20 '+(i==0?'first':i==1?'two':i==2?'three':'color-204')+'">0'+(i+1)+'</div>' +
            '<div class="width-300 pull-right pl-15 pr-15">' +
            '<div>' +
            '<img class="inline-block height-40 width-40" src="'+WY.getHeadImg(o.headImg)+'" alt=""/>' +
            '<div class="inline-block height-40 pt-7 fz-16 pl-15">'+(o.nickname || o.userName)+'</div>' +
            '</div>' +
            '<div class="mt-10 clearfix color-204">' +
            '<div class="pull-left max-w-200 write-ellipsis" title="'+address+'">'+address+'</div>' +
            '<div class="pull-right">亲友数:'+o.myFriendCount+'</div>' +
            '</div>' +
            '<div class="color-204">消费积分:'+o.myConsumeCount+'</div>' +
            '</div>' +
            '</div>')
        });
    }
    WY.trigger('active-item',function(){
        searchRanking();
    });
    searchRanking();

    var $genealogyListContent = $('.genealogy-list-content');
    $.get('/genealogy/list' ,{limit:3}, function(d){
        setList(d.data);
    });
    function setList(data){
        $.each(data.content , function(i , o){
            var $item = WY.createOne('genealogy' , o , i);
            $genealogyListContent.append($item);
        });
        $('.show-genealogy-count').show().find('.count').text(data.totalElements);
    }
    var $showFsContent = $('.show-fs-content');
    $.get('/news/list',{
        type:'FS',
        limit:9
    },function(a){
        $.each(a.data.content,function(i , o){
            $showFsContent.append('<li class="pb-10 height-30"><a target="_blank" href="/news#{detailId:'+o.industryDynamicId+'}" class="color-666 inline-block write-ellipsis width-100-100" title="'+o.title+'">'+o.title+'</a></li>')
        })
    });
    var $showNewsContent = $('.show-news-content');
    $.get('/news/list',{
        type:'NEWS',
        limit:6
    },function(a){
        $.each(a.data.content,function(i , o){
            var $item = WY.createOne('other-news' , o , i);
            $item.addClass('width-340')
            if((i+1)%3)$item.addClass('mr-20');
            $showNewsContent.append($item)
        })
    });
    var $showXSQYContent = $('.show-xsqy-content');
    $.get('/news/list',{
        type:'XSQY',
        limit:6
    },function(a){
        $.each(a.data.content,function(i , data){
            var $item = $('<div type="'+data.type+'" code="'+data.industryDynamicId+'"  class="data-list pt-10 pb-10 pl-10 border-b-204 height-90 back-238 position-relative">');
            $item.append('<div class="pl-10">' +
                '<a class="fz-18 lh-30 height-30 write-ellipsis cursor-pointer color-333" target="_blank    " href="/news#{detailId:'+data.industryDynamicId+'}" title="'+data.title+'">'+data.title+'</a>' +
                '<div class=" height-20 color-204 lh-20 write-ellipsis mt-10">'+data.contenJx+'</div>' +
                '</div>');
            $item.addClass('width-340');
            if((i+1)%3)$item.addClass('mr-20');
            $showXSQYContent.append($item)
        })
    });
    $showNewsContent.on('click' , '.show-detail-btn' , function(){
        var code = $(this).closest('[code]').attr('code');
        open('/news#' + encodeURIComponent(JSON.stringify({detailId:code})));
    })
})();