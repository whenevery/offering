WY.userHandler['score-list'] = {
    init:function(){
        var $content;
        var _this = this;
        var createTr = function(i,data){
            var $div = $('<tr class="data-list">');
            $div.append('<td>'+(i+1)+'</td>');
            $div.append('<td>'+data.cloudBi+'</td>');
            $div.append('<td>'+data.rowAddTime+'</td>');
            $div.append('<td>'+data.dic+'</td>');
            return $div;
        };
        $.modalLoadingView('user/score/score-list',function(content){
            $content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/user/recharge/list',
                autoPage:1,
                limit:10,
                getSearchData:function(){
                    return {
                        jiaJianType:'jia'
                    }
                },
                createTr:createTr,
                done:function(data){
                }
            });
        },1);
    }
};