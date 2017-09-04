$(function(){
    $.uploadFile = function(file ,options,data, call){
        var formData = new FormData();
        if(!file.length){
            file = [file];
        }else{
            file = [].slice.call(file);
        }
        var imgMaxSize=0,videoMaxSize=0;
        file.forEach(function(a){
            if(a.type.indexOf('image') >=0 ){
                if(a.size > imgMaxSize){
                    imgMaxSize = a.size;
                }
            }else{
                videoMaxSize = a.size;
            }
        });
        if(imgMaxSize > 3 * 1024 * 1024 || videoMaxSize > 30 * 1024 * 1024){
            useCommon.toast('文件过大小限制（图片3M 视频30M）');
            return false;
        }
        if(file.length === 1)data.fileSize = file.map(function(a){return a.size}).join();
        file.forEach(function(f){
            console.log(f);
            formData.append(options.fileName || 'fileName' , f);
            formData.append('fileSizes' , f.size || 0);
        });
        formData.append('path' , options.type || 'memorial');
        data.fileFormat = data.fileFormat || 'img';
        for(var i in data){
            formData.append(i , data[i]);
        }
        $.ajax({
            url : options.url || '/file/upload',
            type : "POST",
            data : formData,
            dataType:"json",
            cache:false,
            processData : false,
            contentType : false,
            errorText:'上传失败',
            xhr:options.xhr,
            timeout:options.timeout || 60 * 1000,
            success:function(o){
                WY.loading(0);
                if(call)call(o);
            },
            error:function(o){
                console.log(o);
                WY.loading(0)
                if(call)call(o);
            }
        });
    };
    $.fn.showFileUpload = function(options){
        options = options || {};
        return this.each(function(){
            var $this = $(this);
            var showName = (options.showName|| $this.attr('show-name') || 'showName');
            var fileName = (options.fileName|| $this.attr('file-name') || 'fileName');
            $this.append($('<div class="img-content">'+
                '<div class="del-ico"></div>'+
                '<img src="" alt="" class="img-thumbnail">'+
                '</div>'))
                .append($('<input type="file" accept="'+(options.fileFormat=='video'?'video/mp4':'image/jpg,image/jpeg,image/png,image/gif')+'" class="upload-file" name="'+fileName+'">'))
                .append($('<input type="hidden" class="show-file-name" name="'+showName+'">'))
                .append($('<div class="add-ico text-center">+</div>'));
            $this.find(':file').change(function(){
                if($(this).val()){
                    $.uploadFile(this.files[0] , {
                        fileName:fileName,
                        type:options.type,
                        url:options.url
                    } ,options.data || {}, function(a){
                        if(a.code == 'SUCCESS'){
                            showUrl((a.result.path || a.result));
                        }else{
                            useCommon.toast(a.message || '上传失败');
                        }
                    });
                }{
                    clear();
                }
            });
            function showUrl(src){
                $this.find('.img-content').addClass('show');
                $this.find('.show-file-name').val(src);
                $this.find('img').attr('src' , useCommon.concatImgUrl(src));
            }
            $this.find('.del-ico').click(function(){
                clear();
            });
            function clear(){
                $this.find('.show-file-name').val('');
                $this.find('img').attr('src' , '');
                $this.find('.img-content').removeClass('show');
            }
            var showImg = $(this).attr('showImg');
            if(showImg){
                showUrl(showImg);
            }
        });
    };
});
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

$(function(){
    var memorialId;
    var stepObject = [{
        init:function(content){
            this.content = content.__formData(this.data);
            this.bind();
        },
        bind:function(){
            var _this = this;
            this.content.find('.to-next-btn').click(function(){
                _this.next();
            });
            this.content.find('[name=joinType]').change(function(){
                _this.content.find('[name=password]')[$(this).prop('checked')?'removeClass':'addClass']('hide');
            });
        },
        next:function(){
            this.data = this.content.__serializeJSON();
            this.data.joinType = this.data.joinType == 1?'password':'direct';
            var valid = useValidate.memorial.validator(this.data , 'add-one');
            if(!valid.valid){
                useCommon.toast(valid.message);
                return false;
            }
            showStep(1);
        }
    },{
        init:function(content){
            this.content = content.__formData(this.data);
            this.bind();
            this.fileBind();
            this.addOneDetail();
        },
        bind:function(){
            var _this = this;
            this.content.find('.to-next-btn').click(function(){
                _this.next();
            });
            this.content.find('.to-prev-btn').click(function(){
                _this.prev();
            });
            this.content.find('[name=peopleNumber]').change(function(){
                _this.changeNumberType($(this).val());
            });
        },
        fileBind:function(){
            this.content.find('.upload-content').showFileUpload();
        },
        addOneDetail:function(){
            var _this = this;
            $.modalLoadingView('memorial/info-detail', function(content){
                _this.content.find('.detail-content').append(content);
            },1);
        },
        removeOneDetail:function(){
            this.content.find('.one-detail-info:gt(0)').remove();
        },
        changeNumberType:function(type){
            if(type == 1){
                this.content.find('.upload-content:gt(0)').remove();
                this.removeOneDetail();
            }else{
                // var $content = $('<div class="head-img upload-content margin-auto inline-block">');
                // this.content.find('.upload-content').after($content);
                // $content.showFileUpload();
                this.addOneDetail();
            }
        },
        next:function(){
            this.data = {
                info:this.content.find('.main-info').__serializeJSON(),
                list:this.content.find('.one-detail-info')
                    .map(function(){
                        var d = $(this).__serializeJSON();
                        d.personSex = d.personSex == 1?'女':'男';
                        return d;
                    })
                    .toArray()
            };
            var submitData = Object.assign({},stepObject[0].data , this.data.info);
            submitData.memorialPerson = this.data.list;
            $.post('/memorial/add' , {
                str:JSON.stringify(submitData)
            },function(a){
                if(a.code == 0){
                    memorialId = a.data.memorialId;
                    showStep(2);
                }
                else useCommon.toast(a.message);
            });
        },
        prev:function(){
            this.data = this.content.__serializeJSON();
            showStep(0);
        }
    },{
        init:function(content){
            WY.trigger('login-flush');
            this.content = content;
            this.timer();
        },
        timer:function(){
            var $timer = this.content.find('.timeout-number');
            if($timer.text() == 0){
                location.href = '/venue?id='+memorialId;
            }
            var _this = this;
            setTimeout(function(){
                $timer[0].innerHTML -- ;
                _this.timer();
            } , 1000);
        }
    }];
    function showModel(){
        var $modelContent = $('.memorial-tpl-content');
        $.each(modelList , function(i , o){
            $modelContent.append('<div class="item inline-block">'+
                '<img src="'+useCommon.concatImgUrl(o.thumImg)+'_resize_180x90_60" alt="">'+
                '<label class="text color-999 fz-16 width-100-100 cursor-pointer">'+
                '<input type="radio" name="memorialModelId" value="' + o.memorialModelId + '">' +
                o.modelName + (o.useCloudBi?'<span class="color-red">(需'+o.useCloudBi+'云币)</span>':'')+
                '</label>'+
                '</div>')
        });
    }
    var $infoContent = $('.info-content');
    function showStep(index){
        $.modalLoadingView('memorial/step-'+index,function(content){
            $infoContent.html('').append(content);
            if(index == 0)showModel();
            stepObject[index].init($infoContent.children());
            $('.step-menu div').removeClass('active');
            $('.step-menu div:lt('+(index+1)+')').addClass('active');
        },1)
    }
    var modelList;
    $.get('/memorial/model/list' , function(data){
        modelList = data.data;
        showStep(0);
    });
});