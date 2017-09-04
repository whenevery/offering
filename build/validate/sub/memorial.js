useValidate.memorial = {
    validator:function(data , type){
        var one = {
            memorialType:{
                required:1,
                requiredMessage:'请选择纪念馆类型'
            },
            memorialName:{
                required:1,
                chinese:1,
                lengthRange:[2,5],
                requiredMessage:'请设置纪念馆名称',
                chineseMessage:'请输入中文的纪念馆名称',
                lengthRangeMessage:'请输入2-5位长度的纪念馆名称',
            },
            memorialModelId :{
                required:1,
                requiredMessage:'请选择纪念馆模板',
            },
        };
        function doOne(){
            var valid = useValidate.validator(one,data);
            if(valid.valid){
                if(data.joinType == 'password'){
                    if(!data.password){
                        valid.valid = false;
                        valid.message = '请设置访问密码';
                    }
                }
            }
            return valid;
        }
        if(type == 'add-one'){
            var valid = doOne();
        }
        return valid;
    }
};
