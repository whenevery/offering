WY.userHandler['recharge'] = {
    init:function(){
        var $content,configList;
        var _this = this;
        var createTr = function(o , sts){
            return '<div class="item pt-20 pl-20 '+(sts?'':'mr-20')+'" code="'+o.configKey +'">'+
                '<div>'+
                '<div class="lv-ico lv-ico-'+getLv(o.configKey)+' inline-block"></div>'+
                '<div class="inline-block lh-30 height-30 fz-25">'+o.configName+'</div>'+
                '</div>'+
                (!sts?'<div class="lh-20 height-20 color-red">'+o.annualFee +'元/年</div>':'')+
                '</div>'
        };
        function getLv(key){
            return {
                SilverMember:1,
                GoldMember:2,
                DiamondMember:3
            }[key] || 0;
        }
        var $configDetail,$scoreList;
        function changeKey(key){
            if(key == 'score'){
                $('[name=money]').trigger('input');
                $configDetail.hide();
                $scoreList.show();
            }else{
                var data = configList.filter(function(a){
                    return a.configKey == key
                }).pop();
                $configDetail.__formData(data , 'data');
                $configDetail.show();
                $scoreList.hide();
                $('.prize-span').text(data.annualFee + '元');
            }
        }
        $.modalLoadingView('user/score/recharge',function(content){
            $.get('/user/recharge/config',function(a){
                $content = WY.userLoad(content);
                $configDetail = $('.config-detail');
                $scoreList = $('.score-list');
                configList = a.data.filter(function(a){
                    a.annualFee /= 100;
                    return a.configKey  != 'UniversalMember'
                });
                var $listContent = $('.recharge-config-list-content');
                $.each(configList,function(i , o){
                    $listContent.append(createTr(o));
                });
                $listContent.append(createTr({
                    configKey:'score',
                    configName:'云币充值',
                }, 1) );

                $content.find('.item').click(function(){
                    if($(this).hasClass('active'))return false;
                    $(this).addClass('active').siblings().removeClass('active');
                    changeKey($(this).attr('code'));
                }).first().click();

                $content.find('[name=money]').on('input',function(){
                    var money = $(this).val();
                    var score = money * 100;
                    $('.show-score-info').html(score?(score+'云币'):'');
                    $('.prize-span').text(score?(money + '元'):'');
                });
                $content.find('.recharge-btn').click(function(){
                    var key = $content.find('.item.active').attr('code');
                    var money = $content.find('[name=money]').val();
                    var sendData = {
                        number:1,
                        orderType:key == 'score'?'CZ_YB':'CZ_HY',
                        channel :'alipay.web',
                        orderSource  :'WEB',
                        returnUrl:location.origin + location.pathname + '#my-score',
                        showUrl:location.origin + location.pathname + '#my-score',
                    };
                    if(key == 'score'){
                        if(!/^\d+(\.\d{1,2})?$/.test(money)){
                            useCommon.toast('请输入有效的金额');
                            return false;
                        }
                        sendData.money = money;
                    }else{
                        var data = configList.filter(function(a){
                            return a.configKey == key
                        }).pop();
                        sendData.dataId = data.configKey;
                    }
                    $.ajax({
                        url:'/user/recharge/add',
                        data:sendData,
                        type:'post',
                        async:false,
                        success:function(a){
                            if(a.code == 0){
                                WY.confirm({content:'充值完成',done:function(){
                                    WY.trigger('login-flush');
                                }});
                                window.open('https://mapi.alipay.com/gateway.do?'+a.data.payOrderUrl);
                            }else{
                                useCommon.toast(a.message);
                            }


                        }
                    });
                });
            });
        },1);
    }
};