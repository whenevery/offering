WY.albumFile = function(options){
    var $addBtn = options.addBtn;
    var autoLength;
    var dataId = options.dataId;
    var $content = options.content;
    $content.find('.close-this-div-btn').click(function(){
        $content.remove();
    });
    $content.on('click','.delete-file-btn',function(){
        $.post('/user/album/file/del',{
            jsonStr:JSON.stringify([$(this).attr('code')])
        },function(a){
            if(a.code == 0){
                searchObject.doSearch(1);
            }else{
                useCommon.toast(a.message);
            }
        });
    });
    var searchObject = $.showDataPage({
        url:'/album/file/list',
        limit:3,
        autoPage:1,
        notPage:1,
        data:{
            dataId:dataId,
            type:options.type
        },
        showTable:options.content.find('.show-data-table'),
        createTr:function(i , o){
            var $item = $('<div class="data-list position-relative inline-block text-top">');
            if(o.fileFormat == 'img'){
                var $img = $('<img class="width-250 height-180 mb-10" src="'+(useCommon.concatImgUrl(o.filePath))+'">');
                $item.append($img);

            }else{
                var $video = $('<video controls="controls" class="width-250 height-180" src="'+(useCommon.concatImgUrl(o.filePath))+'">')
                $item.append($video);
            }
            if((i+1)%3)$item.addClass('mr-10');
            $item.append('<div code="'+o.fileId+'" class="color-red fz-20 position-absolute top-0 right-0 pt-10 pr-10 pl-10 pb-10 lh-20 cursor-pointer delete-file-btn">×</div>')
            return $item;
        },
        done:function(data){
            autoLength = data.length;
            if($addBtn){
                $addBtn.show();
                if(autoLength){
                    if(data[0].fileFormat  == 'video'){
                        //$addBtn.hide();
                        return;
                    }
                    else{
                        //$addBtn.filter('[add-type=video]').hide();
                    }
                }
                //if(options.type == 'album'){
                //    $addBtn.last().hide();
                //}
            }

        }
    });
    $addBtn.click(function(){
        var type = $(this).attr('add-type');
        var $file = $('<input type="file"  '+(type == 'img'?'accept="image/jpg,image/jpeg,image/png,image/gif" multiple="multiple"':'accept="video/mp4"')+'>');
        $file.hide().appendTo('body');
        $file[0].click();
        $file.change(function(){
            if($(this).val()){
                WY.loading(1);
                var $progressWindow;
                $.uploadFile(this.files,{
                    url:'/file/uploads',
                    type:'album/'+options.type,
                    fileName:'fileNames',
                    timeout:60 * 60 * 1000,
                    xhr:function(){
                        var xhr = $.ajaxSettings.xhr();
                        if(type == 'video'){
                            WY.loading(0);
                            $progressWindow = WY.xhrProgress(xhr);
                        }
                        return xhr;
                    }
                },{
                    fileFormat:type,
                } , function(a){
                    $file.remove();
                    $progressWindow && $progressWindow.hide();
                    if(a.code === 'SUCCESS'){
                        WY.loading(1);
                        $.post('/user/album/file/add',{
                            jsonStr:JSON.stringify({
                                dataId:dataId,
                                type:options.type,
                                files:a.result
                            })
                        },function(b){
                            WY.loading(0);
                            useCommon.toast(b.message);
                            if(b.code == 0){
                                searchObject.doSearch(1);
                            }
                        });
                    }else{
                        WY.loading(0);
                        useCommon.toast(a.message || '上传失败');
                    }
                });

            }
        });

    });
};