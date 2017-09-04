;(function(){
    WY.ready('loginSuccess',function(){
        localStorage.loginTime = Date.now();
        $('.login-success-show').show().css({
            visibility:'visible'
        });
    });
    $(function(){
        if(sessionJson.userInfo){
            if(!localStorage.loginTime || Date.now() - localStorage.loginTime > 20 * 60 * 1000){
                WY.trigger('login-flush',{
                    done:function(userInfo){
                        if(userInfo){
                            WY.ready('loginSuccess' , resetUserInfo(userInfo));
                        }
                    }
                });
            }
            else WY.ready('loginSuccess' , resetUserInfo(sessionJson.userInfo));
        }
    });
    function resetUserInfo(userInfo){
        sessionJson.userInfo = userInfo;
        userInfo.nickname = userInfo.nickname || userInfo.userName;
        userInfo.headImg = WY.getHeadImg(userInfo.headImg);
        userInfo.memberName = ({
            UniversalMember:'普通会员',
            SilverMember:'白银会员',
            GoldMember:'黄金会员',
            DiamondMember:'钻石会员'
        })[userInfo.memberKey];
        return userInfo;
    }
    WY.bind('login' , function(data , call){
        $.modalLoadingView('window/login/login' , function(){

        },{
            done:call
        })
    });
    $(document).on('click' , '.need-login-handler' , function(){
        var href = $(this).attr('href');
        var target = $(this).attr('target');
        WY.trigger('login' ,{}, function(){
            location.href = href;
        });
        return false;
    });
    WY.bind('modal-handler-login' , function($content , options){
        $content.find('.submit-btn').click(function(){
            var data = $content.__serializeJSON();
            var valid = useValidate.login.validator(data , 'login');
            if(!valid.valid){
                useCommon.toast(valid.message);
                return false;
            }
            data.password = useCommon.SHA256(data.password);
            $.post('/login',data,function(a){
                if(a.code == 0){
                    WY.ready('loginSuccess' ,resetUserInfo(a.data));
                    if(options.done && options.done() === false)return false;
                    $.modalLoadingHide();
                }else{
                    useCommon.toast(a.message);
                }
            });
        });
    });
    WY.bind('modal-handler-login-reg' , function($content,options){
        $.sms({
            content:$content
        });
        $content.find('.submit-btn').click(function(){
            var data = $content.__serializeJSON();
            var valid = useValidate.login.validator(data , 'reg');
            if(!valid.valid){
                useCommon.toast(valid.message);
                return false;
            }
            data.password = useCommon.SHA256(data.password);
            $.post('/login/reg',data,function(a){
                if(a.code == 0){
                    WY.ready('loginSuccess' , resetUserInfo(a.data));
                    if(options.done && options.done() === false)return false;
                    $.modalLoadingHide();
                }else{
                    useCommon.toast(a.message);
                }
            });
        });
    });
    WY.bind('modal-handler-login-reset' , function($content , options){
        $.sms({
            content:$content
        });
        $content.find('.submit-btn').click(function(){
            var data = $content.__serializeJSON();
            var valid = useValidate.login.validator(data , 'reg');
            if(!valid.valid){
                useCommon.toast(valid.message);
                return false;
            }
            data.password = useCommon.SHA256(data.password);
            $.post('/login/reset',data,function(a){
                if(a.code == 0){
                    if(options.done && options.done() === false)return false;
                    useCommon.toast('重置密码成功，立即登录');
                    $.modalLoadingView('window/login/login');
                }else{
                    useCommon.toast(a.message);
                }
            });
        });
    });
    WY.bind('login-flush',function(options){
        $.get('/user/info/detail',function(a){
            if(a.code == 0){
                WY.ready('loginSuccess' , resetUserInfo(a.data));
                options && options.done && options.done(sessionJson.userInfo);
            }else{
                options && options.done && options.done();
            }
        })
    });
    WY.bind('flush-user-info',function(call){
        $.get('/user/info/detail',function(a){
            if(a.code == 0){
                WY.ready('loginSuccess',resetUserInfo(a.data));
            }
            call && call();
        })
    });
})();