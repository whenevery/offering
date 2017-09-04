WY.userHandler['confirm-msg'] = {
    init:function(){
        var $content;
        var _this = this;
        function createConfirm(sts){
            console.log(sts);
            return ('<div class="inline-block color-666 mr10 height-20 lh-20">已'+({
                PASS:'通过',
                REFUSE:'拒绝'
            })[sts]+'</div>');
        }
        function createTr(i , o){
            var $list = $('<div class="data-list pl-10 pt-10 pb-10 border-b-eee">');
            $list.append('<div>来自：<span class="color-blue-2 height-30 lh-30">'+(o.nickname || o.userIdFrom)+'</span></div>');
            $list.append('<div class="pl-20 break-all lh-20">内容：<span class="color-333">'+o.msgContent+'</span></div>');
            $list.append('<div class="mt-10">' +
            (o.msgState == 'SEND'
                ?('<div class="div-btn color-blue-1 inline-block mr-10 confirm-btn" code="'+o.msgId+'" sts="PASS">通过</div>' +
                '<div class="div-btn color-666 inline-block mr-10 confirm-btn" code="'+o.msgId+'"  sts="REFUSE">拒绝</div>' )
                :createConfirm(o.msgState))+
            '<div class="div-btn color-666 mr-10 del-btn inline-block" code="'+o.msgId+'" >删除</div>' +
            '</div>')
            return $list;
        }
        $.modalLoadingView('user/msg/confirm',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/msg/list',
                limit:10,
                autoPage:1,
                createTr:createTr,
                getSearchData:function(){
                    return {
                        searchType:'verify_message'
                    }
                },
                done:function(data){
                }
            });
            $content.on('click' , '.del-btn' , function(){
                var msgId  = $(this).attr('code');
                var $closest = $(this).closest('.data-list');
                $.post('/user/msg/del',{
                    msgId:msgId,
                },function(a){
                    if(a.code == 0){
                        $closest.remove();
                    }else{
                        useCommon.toast(a.message);
                    }
                })
            });
            $content.on('click' , '.confirm-btn' , function(){
                var msgId  = $(this).attr('code');
                var msgState  = $(this).attr('sts');
                var verifyContent;
                if(msgState == 'REFUSE'){
                    verifyContent = prompt('拒绝原因','');
                }
                var $closest = $(this).closest('.data-list');
                $.post('/user/friend/pass',{
                    msgId:msgId,
                    msgState:msgState,
                    verifyContent:verifyContent
                },function(a){
                    if(a.code == 0){
                        $closest.find('.confirm-btn').remove();
                        $closest.find('.del-btn').before(createConfirm(msgState));
                    }else{
                        useCommon.toast(a.message);
                    }
                })
            });
        },1);
    }
}