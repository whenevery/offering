useValidate.login = {
    validator:function(data , type){
        if(type == 'login'){
            var valid = useValidate.validator({
                userName:{
                    required:1,
                    isPhone:1,
                    requiredMessage:'请输入登录账号',
                    isPhoneMessage:'请输入有效手机号'
                },
                password:{
                    required:1,
                    lengthRange:[6,18],
                    requiredMessage:'请输入登录密码',
                    lengthRangeMessage:'登录密码为6-18位'
                }
            },data);
        }else if(type == 'reg'){
            var valid = useValidate.validator({
                userName:{
                    required:1,
                    isPhone:1,
                    requiredMessage:'请输入手机号',
                    isPhoneMessage:'请输入有效手机号'
                },
                sendCode:{
                    required:true,
                    length:6,
                    requiredMessage:'请输入短信验证码',
                    lengthMessage:'请输入6位的短信验证码',
                },
                password:{
                    required:1,
                    lengthRange:[6,18],
                    requiredMessage:'请输入密码',
                    lengthRangeMessage:'密码长度6-18',
                }
            },data);
        }else if(type == 'sms'){
            var valid = useValidate.validator({
                imgCode:{
                    required:true,
                    length:5,
                    requiredMessage:'请输入图片验证码',
                    lengthMessage:'请输入5位的图片验证码',
                },
                userName:{
                    required:1,
                    isPhone:1,
                    requiredMessage:'请输入手机号',
                    isPhoneMessage:'请输入有效手机号'
                }
            },data);
        }
        return valid;
    }
};