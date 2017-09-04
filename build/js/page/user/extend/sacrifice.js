WY.userHandler.sacrifice = {
    init:function(){
        var $content;
        var _this = this;
        var createTr = function(i,data){
            var tr = $('<tr class="data-list">');
            tr.append('<td>'+(i+1) +'</td>');
            tr.append('<td>'+data.memorialName +'</td>');
            tr.append('<td>'+data.sacrificeName  +'</td>');
            tr.append('<td>'+data.useCloudBi  +'</td>');
            tr.append('<td>'+useCommon.parseDate(data.rowAddTime)   +'</td>');
            return tr;
        };
        $.modalLoadingView('user/memorial/sacrifice',function(content){
            $content = $(content);
            WY.userLoad($content);
            $.showDataPage({
                url:'/user/sacrifice/list',
                autoPage:1,
                createTr:createTr,
                done:function(data){
                }
            });
        },1);
    }
};