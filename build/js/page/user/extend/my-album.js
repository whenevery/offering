WY.userHandler['my-album'] = {
    init:function(){
        var $content;
        var _this = this;
        function createTr(i , data){
            data.type = 'album';
            var $item = WY.createOne('album' , data , i);
            return $item;
        }
        $.modalLoadingView('user/album/my',function(content){
            $content = _this.content = WY.userLoad(content);
            var $addBtn = $('.add-new-btn');
            var searchObject = $.showDataPage({
                url:'/user/album/list',
                limit:3,
                autoPage:1,
                createTr:createTr,
                done:function(data){
                    //$addBtn[data.length>=3?'hide':'show']();
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
                        type:'album'
                    });
                },1)
            });
            $content.on('click' , '.edit-album-btn' , function(){
                var code = $(this).attr('code');
                var showValue = $(this).attr('val');
                WY.prompt({
                    title:'修改相册名称',
                    content:showValue,
                    placeholder:'请输入相册名称',
                    done:function(val){
                        if(!val){
                            useCommon.toast('请输入相册名称');
                            return false;
                        }
                        $.post('/user/album/edit',{
                            albumId:code,
                            albumName:val
                        },function(a){
                            if(a.code == 0){
                                searchObject.doSearch(1);
                            }else useCommon.toast(a.message);
                        })
                    }
                })
            });
            $content.on('click' , '.del-album-btn' , function(){
                var code = $(this).attr('code');
                WY.confirm({
                    title:'提示',
                    placeholder:'确定删除此相册？（内部照片也会删除）',
                    done:function(){
                        $.post('/user/album/del',{
                            albumId:code
                        },function(a){
                            if(a.code == 0){
                                searchObject.doSearch(1);
                            }else useCommon.toast(a.message);
                        })
                    }
                })
            });
            $addBtn.click(function(){
                WY.prompt({
                    title:'新增相册',
                    placeholder:'请输入相册名称',
                    done:function(val){
                        if(!val){
                            useCommon.toast('请输入相册名称');
                            return false;
                        }
                        $.post('/user/album/add',{
                            albumName:val
                        },function(a){
                            if(a.code == 0){
                                searchObject.doSearch(1);
                            }else useCommon.toast(a.message);
                        })
                    }
                })
            });
        },1);
    }
};