;(function(){
    if($.sms)return false;
    var timeout = function ($ele){
        var autoText = $ele.text();
        var time = 60;
        $ele.removeClass('active');
        var timer = setInterval(function(){
            if(time == 0){
                $ele.addClass('active').text(autoText);
                clearInterval(timer);
                return;
            }
            $ele.text(time-- + '秒后再发送');
        } , 1000);
    };
    $.sms = function(options){
        var $sms = options.content;
        var imgCodeHide;
        var $smsSendBtn = $sms.find('.sms-send-btn');
        var $imgCodeBtn = $sms.find('.img-code-btn');
        var $showImgCode = $sms.find('.show-img-code');
        $smsSendBtn.click(function(){
            console.log('send click');
            var $this = $(this);
            if(!$this.hasClass('active'))return false;
            if(imgCodeHide){
                imgCodeHide = false;
                $imgCodeBtn.parent().show();
                $showImgCode[0].focus();
                return false;
            }
            if(options.sendBefore && options.sendBefore() === false )return false;
            var data = $sms.__serializeJSON();
            var valid = useValidate.login.validator(data , 'sms');
            if(!valid.valid){
                useCommon.toast(valid.message);
                return false;
            }
            $.extend(data , options.data);
            data.phone = data.userName;
            $.post(options.sendUrl || '/sms/send' ,data , function(a){
                $imgCodeBtn.trigger('click');
                if(a.code == 0){
                    imgCodeHide = true;
                    $imgCodeBtn.parent().hide();
                    options.sendAfter && options.sendAfter();
                    timeout($this);
                }else{
                    useCommon.toast(a.message);
                }
            });
        });
    }
})();