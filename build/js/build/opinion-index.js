$(function(){
    $('.opinion-submit-form').find('.submit-btn').click(function(){
        var data = $('.opinion-submit-form').__serializeJSON();
        if(!data.feedbackContent){
            useCommon.toast('请输入你要描述的问题');
            return false;
        }
        $.post('/opinion/add',data,function(a){
            useCommon.toast(a.message);
            if(a.code == 0){
                $('[name=feedbackContent]').val('');
            }else{

            }
        });
    });
});