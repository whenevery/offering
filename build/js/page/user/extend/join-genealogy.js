WY.userHandler['join-genealogy'] = {
    init:function(){
        var $content;
        var autoData;
        var createTr = function(i,data){
            var $div = $('<div class="data-list width-350 pl-160 position-relative height-202 inline-block mb-10 mr-10">');
            var $item = WY.createOne('genealogy-item' , data , i);
            $item.addClass('position-absolute left-0 top-0 ml-10 color-333');
            $div.append($('<a href="/genealogy/detail?id='+data.genealogyId+'"></a>').append($item));
            $div.append('<div class="pl-10">' +
            '<div class="write-ellipsis height-20" title="'+(data.province + data.city + data.county)+'">区域：'+(data.province + data.city + data.county)+'</div>' +
            '<div class="height-20">入谱：'+(data.pTaiPersonNumber + '/'+data.personNumber )+'人</div>' +
            //'<div><div class="btn back-243 border-204 inline-block mt-5">人员列表</div></div>' +
            '</div>');
            return $div;
        };
        var searchObject;
        $.modalLoadingView('user/genealogy/join',function(content){
            $content = WY.userLoad(content);
            searchObject = $.showDataPage({
                url:'/user/genealogy/join/list',
                autoPage:1,
                limit:12,
                createTr:createTr,
                done:function(data){
                    autoData = data;
                }
            });
        },1);
    }
};