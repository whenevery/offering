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