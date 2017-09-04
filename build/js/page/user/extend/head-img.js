WY.userHandler['head-img'] = {
    init:function(){
        var $content;
        var _this = this;
        function upload(file){
            $.uploadFile(file , {
                type:'offering/head'
            },{

            },function(a){
                if(a.code == 'SUCCESS'){
                    WY.loading(1);
                    $.post('/user/info/edit',{
                        headImg:a.result.path,
                    },function(b){
                        WY.loading(0);
                        $.modalLoadingHide();
                        useCommon.toast(b.message);
                        if(b.code == 0){
                            WY.trigger('login-flush');
                        }
                    });
                }else{
                    useCommon.toast(a.message);
                }
            })
        }
        $.modalLoadingView('user/info/head',function(content){
            $content = _this.content = WY.userLoad(content);
            putHeadImg();
            var $file = $content.find(':file');
            $content.find('.choose-img-btn').click(function(){
                $file.val('');
                $file[0].click();
            });

            $file.change(function(){
                if($(this).val()){
                    var file = this.files[0];
                    if(file.size > 3 * 1024 * 1024){
                        useCommon.toast('所选文件不能超过3m');
                        return false;
                    }
                    var options = {
                        moveStep:function(){
                            console.log('moveStep');
                            options.cutReset && options.cutReset();
                        }
                    };
                    if(typeof Blob == 'undefined'){
                        upload(file);
                    }
                    else WY.getFileUrl(file , function(src){
                        var img = new Image();
                        img.src = src;
                        img.onload = function(){
                            $.modalLoadingView('common/cut-img&width='+img.width+'&height='+img.height,function(content){
                                var $content = $(content);
                                $content.find('.cut-img').attr('src',src);
                                $content.find('.reset-btn').click(function(){
                                    $.modalLoadingHide();
                                    $file.val('')[0].click();
                                });
                                $content.find('.submit-btn').click(function(){
                                    WY.loading(1);
                                    var resultImg = $content.find('.result-img');
                                    var canvas = document.createElement('canvas');
                                    $(canvas).attr({
                                        width:'200px',
                                        height:'200px'
                                    });
                                    var ctx = canvas.getContext('2d');
                                    ctx.drawImage(img ,
                                        -parseFloat(resultImg.css('marginLeft')),
                                        -parseFloat(resultImg.css('marginTop')),
                                        200,200,0,0,200,200
                                    );
                                    var blob = useCommon.convertBase64UrlToBlob(canvas.toDataURL(),'image/png');
                                    upload(blob);
                                });
                            },options);
                        };

                    });

                }
            })
        },1);
        function putHeadImg(userInfo){
            userInfo = userInfo || sessionJson.userInfo;
            $('.show-example-img').attr('src' , userInfo.headImg);
        }
        if(this.isInit)return false;
        this.isInit = true;
        WY.ready('loginSuccess' , function(userInfo){
            putHeadImg(userInfo);
        })
    }
}