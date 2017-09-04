useValidate.genealogy = {
    validator:function(data , type){
        var valid;
        if(type == 'add'){
            valid = useValidate.validator({
                genealogyName:{
                    required:1,
                    requiredMessage:'请输入族谱名称',
                },
                surname:{
                    required:1,
                    requiredMessage:'请输入族谱姓氏',
                },
                province:{
                    required:1,
                    requiredMessage:'请选择族谱所在省',
                },
                city:{
                    required:1,
                    requiredMessage:'请选择族谱所在市',
                },
                county:{
                    required:1,
                    requiredMessage:'请选择族谱所在区',
                },
            },data);
        }
        else if(type == 'person'){
            valid = useValidate.validator({
                personName:{
                    required:1,
                    requiredMessage:'请输入成员名称',
                },
                gender:{
                    required:1,
                    requiredMessage:'请选择成员性别',
                }
            },data);
        }
        return valid;
    }
};