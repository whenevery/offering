WY.userHandler['my-genealogy'] = {
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
            '<div><a target="_blank" href="/genealogy/input?id='+data.genealogyId+'" class="btn color-333 back-243 border-204 inline-block mt-5">世系录入</a></div>' +
            //'<div><div class="btn back-243 border-204 inline-block mt-5 person-list-btn" index="'+i+'">人员列表</div></div>' +
            '<div><div class="btn back-243 border-204 inline-block mt-5 edit-genealogy-btn" index="'+i+'">编辑族谱</div></div>' +
            '<div><div class="btn back-243 border-204 inline-block mt-5 del-genealogy-btn" index="'+i+'">删除族谱</div></div>' +
            '</div>');
            return $div;
        };
        var searchObject;
        WY.bind('modal-handler-genealogy-handler' , function($ele){
           $ele.find('.submit-btn').click(function(){
               var $body = $ele.prev();
               var data = $body.__serializeJSON();
               var valid = useValidate.genealogy.validator(data , 'add');
               if(!valid.valid){
                   useCommon.toast(valid.message);
                   return false;
               }
               data.province = $.getCitySelectAutoValue(data.province);
               data.city = $.getCitySelectAutoValue(data.city);
               data.county = $.getCitySelectAutoValue(data.county);
               $.post('/user/genealogy/edit',data,function(a){
                   useCommon.toast(a.message);
                   if(a.code == 0){
                        $.modalLoadingHide();
                       searchObject.doSearch(1);
                    }
               });
           });
        });
        $.modalLoadingView('user/genealogy/index',function(content){
            $content = WY.userLoad(content);
            searchObject = $.showDataPage({
                url:'/user/genealogy/list',
                autoPage:1,
                limit:12,
                createTr:createTr,
                done:function(data){
                    autoData = data;
                }
            });
            $content.on('click','.edit-genealogy-btn',function(){
                var index = $(this).attr('index');
                $.modalLoadingView('/user/genealogy/detail/page?genealogyId='+autoData[index].genealogyId);
            });
            $content.on('click','.person-list-btn',function(){
                var index = $(this).attr('index');
                $.modalLoadingView('/user/genealogy/person/page?genealogyId='+autoData[index].genealogyId);
            });
            $content.on('click','.del-genealogy-btn',function(){
                var index = $(this).attr('index');
                WY.confirm({
                    content:"确认删除此族谱？",
                    done:function(){
                        $.post('/user/genealogy/del',{
                            genealogyId:autoData[index].genealogyId
                        }, function(a){
                                useCommon.toast(a.message);
                            if(a.code == 0){
                             searchObject.doSearch(1);
                            }}
                        );
                    }
                })
            });
        },1);
    }
};