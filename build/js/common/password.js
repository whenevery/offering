$(document).on('click','.need-put-password',function(){
    var url = $(this).attr('url');
    var memorialId = $(this).attr('code');
    var type = $(this).attr('type');
    function accessPassword(){
        $.post('/venue/password/access',{
            id:memorialId
        },function(a){
            if(a.code == 0){
                if(a.data == true){
                    location.href = url;
                }else{
                    putPassword();
                }
            }else{
                useCommon.toast(a.message);
            }
        });
    }
    function putPassword(){
        WY.prompt({
            title:'访问需要密码',
            placeholder:$(this).attr('password-placeholder') || '请输入访问密码',
            done:function(val){
                if(val)$.post('/venue/password/check',{
                    password:val,
                    id:memorialId
                },function(a){
                    if(a.code == 0){
                        location.href = url;
                    }else{
                        useCommon.toast(a.message);
                    }
                });
            }
        })
    }
    accessPassword();

    return false;
});