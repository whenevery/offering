WY.userHandler.detail = {
    init:function(){
        var $content;
        var _this = this;
        $.modalLoadingView('user/info/detail',function(content){
            $content = WY.userLoad(content);
            if(sessionJson.userInfo){
                $content.__formData(sessionJson.userInfo);
                $content.find('[modal-handler="city-select"]').find('select').each(function(){
                    $(this).attr('auto-select',sessionJson.userInfo[$(this).attr('name')]);
                });
                var birthDay;
                if(birthDay = sessionJson.userInfo.birthDay){
                    $content.find('.year').attr('year',birthDay.substr(0,4));
                    $content.find('.month').attr('month',birthDay.substr(5,2));
                    $content.find('.day').attr('day',birthDay.substr(8,2));
                }
            }

            WY.trigger('modal-handler' , $content);
            $content.find('.submit-btn').click(function(){
                var data = $content.__serializeJSON();
                if(data.year && data.month && data.day){
                    data.birthDay = data.year + '-' + useCommon.stringPadStart(data.month,2,0) +'-'+ useCommon.stringPadStart(data.day,2,0);
                }
                data.jxProvince = $.getCitySelectAutoValue(data.jxProvince);
                data.jxCity = $.getCitySelectAutoValue(data.jxCity);
                data.jxCounty = $.getCitySelectAutoValue(data.jxCounty);
                data.xjProvince = $.getCitySelectAutoValue(data.xjProvince);
                data.xjCity = $.getCitySelectAutoValue(data.xjCity);
                data.xjCounty = $.getCitySelectAutoValue(data.xjCounty);
                $.post('/user/info/edit',data,function(a){
                    useCommon.toast(a.message);
                    if(a.code == 0){
                        WY.trigger('flush-user-info' , function(){
                        });
                    }else{
                    }
                });
                return false;
            });

        },1);
    }
};