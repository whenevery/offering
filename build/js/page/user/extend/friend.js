WY.userHandler['my-friend'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , data){
            var $item = WY.createOne('my-friend' , data , i);
            $item.find('.friend-header').addClass('flex-between');
            $item.find('.friend-footer').addClass('flex-between').append(
                '<a target="_blank" href="/user/detail?taUserId='+data.userId+'" class="color-blue-2 cursor-pointer break-none">个人资料</a>' +
                '<div code="'+data.userId+'" class="send-msg-btn color-blue-2 cursor-pointer  break-none">发私信</div>'
            )
            return $item;
        }
        $.modalLoadingView('user/friend/list',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/friend/list',
                limit:16,
                autoPage:1,
                createTr:createTr,
                done:function(data){
                }
            });
            $content.on('click' , '.send-msg-btn' , function(){
                var $this = $(this);
                var val = window.prompt('发送消息');
                if(val)$.post('/user/friend/send/msg' , {
                    userids:$(this).attr('code')-0,
                    msg:val,
                },function(a){
                    useCommon.toast(a.message);
                })
            });
            $content.on('click' , '.add-remark-btn' , function(){
                var $this = $(this);
                var val = window.prompt('设置称呼');
                if(val)$.post('/user/friend/remark' , {
                    friendRecordId:$(this).attr('code'),
                    remarks:val,
                },function(a){
                    useCommon.toast(a.message);
                    if(a.code == 0){
                        searchObject.doSearch(1);
                    }
                })
            });
            $content.find('.do-search-btn').click(function(){
                searchObject.doSearch(1);
            });
        },1);
    }
};