useValidate.genealogy = {
    validator:function(data , type){
        var valid;
        if(type == 'person'){
            valid = useValidate.validator({
                personName:{
                    required:1,
                    requiredMessage:'请输入成员名称',
                },
                gender:{
                    required:1,
                    requiredMessage:'请选择成员性别',
                },
                personPhone:{
                    isPhone:1,
                    isPhoneMessage:'请输入有效的手机号码'
                }
            },data);
        }
        return valid;
    }
};