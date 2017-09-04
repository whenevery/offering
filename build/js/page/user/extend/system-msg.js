WY.userHandler['system-msg'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , o){
            var $list = $('<div class="data-list pl-10 pt-10 pb-10 border-b-eee">');
            $list.append('<div>来自：<span class="color-blue-2 height-30 lh-30">系统</span></div>');
            $list.append('<div class="pl-20 break-all lh-20">内容：<span class="color-333">'+o.msgContent+'</span></div>');
            $list.append('<div class="mt-10">' +
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
                        searchType:'official_message'
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
        },1);
    }
}