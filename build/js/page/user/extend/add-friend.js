WY.userHandler['add-friend'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , data){
            var $item = WY.createOne('friend' , data , i);
            $item.find('.flex-column').append(
                '<div code="'+data.userId+'" class="width-100-100 text-left '+((data.onFried || WY.isMe(data.userId))?'color-999':'add-friend-btn color-blue-2 cursor-pointer')+'">'+(WY.isMe(data.userId)?'我自己':data.onFried ?'已经是亲友':'加亲友')+'</div>'
            )
            return $item;
        }
        $.modalLoadingView('user/friend/add',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/friend/search',
                limit:16,
                notAuthSearch:1,
                autoPage:1,
                createTr:createTr,
                done:function(data){
                }
            });
            $content.on('click' , '.add-friend-btn' , function(){
                var $this = $(this);
                var val = window.prompt('亲友说明','我是' + (sessionJson.userInfo.nickname || sessionJson.userInfo.userName));
                $.post('/user/friend/add' , {
                    taUserId:$(this).attr('code'),
                    verifyContent:val,
                },function(a){
                    if(a.code == 0){
                        $this
                            .removeClass('add-friend-btn')
                            .removeClass('color-blue-2')
                            .removeClass('cursor-pointer')
                            .addClass('color-999').text('已发送请求');
                    }else{
                        useCommon.toast(a.message);
                    }
                })
            });
        },1);
    }
}