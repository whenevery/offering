WY.userHandler.message = {
    init:function(){
        var $content;
        var _this = this;
        var createTr = function(i,data){
            var $div = $('<div class="pb-10 border-b-eee data-list">');
            $div .append('<div class="color-666 lh-20 pt-10 pb-10">留言:'+data.content+'</div>');
            $div.append('<div class="clearfix lh-20 height-20 ">'
                +'<span class="lh-20 height-20">'+(data.leaType=='memorial'?'纪念馆':'文章')+'</span>'
                +'<a target="_blank" class="color-blue-1 text-underline lh-20 height-20 mr-25" href="'+(data.leaType=='memorial'?('/venue?id='+data.dataId):'/news#'+encodeURIComponent(JSON.stringify({detailId:data.dataId}))) +'">'+(data.memorialName||data.title) +'</a>'
                    +'<span class="color-999 lh-20 height-20">'+useCommon.parseDate(data.rowAddTime)+'</span>'
                    +'<span class="color-999 div-btn inline-block pull-right del-btn" code="'+data.leaMessageId +'">删除</span>'
                +'</div>');
            return $div;
        };
        $.modalLoadingView('user/memorial/message',function(content){
            $content = WY.userLoad(content);
            $content.on('click' ,'.del-btn', function(){
                var code  = $(this).attr('code');
                WY.confirm({
                    content:'确定删除此留言？',
                    done:function(){
                        $.post('/user/message/del' ,{leaMessageId:code}, function(a){
                            if(a.code == 0)searchObject.doSearch(1);
                            else useCommon.toast(a.message);
                        });
                    }
                })
            });
            var searchObject = $.showDataPage({
                url:'/user/message/list',
                autoPage:1,
                limit:10,
                getSearchData:function(){
                    return {
                    }
                },
                createTr:createTr,
                done:function(data){
                }
            });
        },1);
    }
};