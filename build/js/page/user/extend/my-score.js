WY.userHandler['my-score'] = {
    init:function(){
        var $content
        $.modalLoadingView('user/score/info',function(content){
            $content = WY.userLoad(content);
            WY.trigger('login-flush' , {
                done:function(userInfo){
                    $content.__formData(userInfo , 'data');
                    $content.__formData(userInfo.memberConfig , 'detail');
                    if(userInfo.memberKey == 'UniversalMember'){
                        $('.show-auto-member').show();
                    }else{
                        $('.show-spec-member').show();
                    }
                }
            });
        },1);
    }
};