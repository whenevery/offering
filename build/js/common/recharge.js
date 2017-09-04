WY.bind('recharge' , function(){
    WY.confirm({
        content:'立即充值',
        done:function(){
            open('/user#recharge');
        }
    });
});