WY.userHandler['send-msg'] = {
    init:function(){
        var $content;
        var _this = this;
        $.modalLoadingView('user/friend/send',function(content){
            $content = WY.userLoad(content);
            $.get('/user/friend/list' , {
                limit:1000
            } , function(a){
               putData(a.data.content);
            });
            $content.find('.submit-btn').click(function(){
               var val = $('.msg-textarea').val();
                if(!val){
                    useCommon.toast('请输入要发送的内容');
                    return false;
                }
                var checkAll;
                if($('[check-one=one]:checked').length && $('[check-one=all]').is('checked')){
                    checkAll = true;
                }
                else{
                    var list = $('[check-one=one]:checked').map(function(a){
                        return $(this).attr('code');
                    }).toArray().join();
                    if(!list){
                        useCommon.toast('请选择发送消息的对象');
                        return false;
                    }
                }
                $.post('/user/friend/send/'+(checkAll?'all':'msg'),{
                    msg:val,
                    userids:list,
                } , function(a){
                    useCommon.toast(a.message , 500);
                    if(a.code == 0){
                        $('.msg-textarea').val('');
                    }
                })
            });
        },1);
        function putData(list){
            var $listContent = $content.find('.show-friend-list');
            $.each(list , function(i , o){
                $listContent.append('<div><label class="break-all"><input code="'+o.userId+'" type="checkbox" check-one="one"/>'+(o.nickname || o.userName)+'</label></div>');
            });
        }
    }
};