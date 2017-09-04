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