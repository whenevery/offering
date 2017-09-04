WY.userHandler['venue-album'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , data){
            var $item = WY.createOne('album' , data , i);
            return $item;
        }
        $.modalLoadingView('user/album/venue',function(content){
            $content = _this.content = WY.userLoad(content);
            var searchObject = $.showDataPage({
                url:'/memorial/album/list',
                limit:100,
                autoPage:1,
                createTr:createTr,
                done:function(data){
                }
            });
            $content.on('click' , '.show-info-img' , function(){
                var code = $(this).attr('code');
                $.modalLoadingView('user/album/info-list' , function(content){
                    var $info = $(content);
                    $info.appendTo($content);
                    WY.albumFile({
                        content:$info,
                        addBtn:$info.find('.add-new-file-btn'),
                        dataId:code,
                        type:'memorial'
                    });
                },1)
            });
        },1);
    }
};