WY.userHandler.memorial = {
  init:function(){
      var titleList = ['单人','双人','名人'];
      var $content;
      var $listContent;
      var mainContent;
      if(mainContent){
          setContent();
      }else $.modalLoadingView('user/memorial/memorial',function(content){
          mainContent = content;
          setContent();
      },1);
      function setContent(){
          $content = $(mainContent);
          setData();
      }
      function setData(){
          $.get('/memorial/mylist' , function(a){
              var content = a.data &&　a.data.content;
              var list = [];
              list[0] = content.filter(function(a){
                  return a.memorialType == 'personal' && a.peopleNumber == 1;
              });
              list[1] = content.filter(function(a){
                  return a.memorialType == 'personal' && a.peopleNumber == 2;
              });
              list[2] = content.filter(function(a){
                  return a.memorialType == 'celebrity';
              });
              WY.userLoad($content);
              bind();
              $listContent = $content.find('.user-memorial-content').html('');
              if(!content || content.length == 0){
                  $listContent.html('<div class="color-999 text-center pt-50">暂无</div>')
              }else{
                  setList(list);
              }
          });
      }
      var editCode;
      function updatePerson(list){
          $.post('/memorial/edit/person',{
              bodyArr:JSON.stringify(list)
          },function(a){
              useCommon.toast(a.message);
              if(a.code == 0){
                  $.modalLoadingHide();
                  setData();
              }
          });

      }
      function bind(){
          $content.on('click','.del-memorial-btn',function(){
              editCode = $(this).attr('code');
              WY.confirm({
                  content:'确定删除？',
                  done:function(){
                      $.post('/memorial/del',{
                          memorialId:editCode
                      },function(a){
                          useCommon.toast(a.message);
                          if(a.code == 0){
                              setData();
                          }
                      })
                  }
              })
          });
          $content.on('click','.show-album-btn',function(){
              var code = $(this).attr('code');
              if(albumContent){
                  setAlbumContent(code)
              }else{
                  $.modalLoadingView('user/album/info-list' , function(content){
                      albumContent = content;
                      setAlbumContent(code);
                  },1);
              }
          });
          $content.on('click','.edit-memorial-btn',function(){
              var code = $(this).attr('code');
              $.modalLoadingView('/memorial/info?id='+code,function($content){
                  WY.toggleActive($content.find('.wy-toggle-active'));
                  setTimeout(function(){
                      var thisSwiper = new Swiper($content.find('.swiper-container'),{
                          onlyExternal:true,
                      });
                      WY.bind('active-item',function($item){
                          thisSwiper.slideTo($item.index());
                      });
                  },500);
                  var autoData = $content.find('.data-form').__serializeJSON();
                    $content.find('[name=joinType]').change(function(){
                        $('.join-type-list')[$(this).val() == 'password'?'show':'hide']();
                    });
                  $content.find('.submit-btn').click(function(){
                      var memorialData = $content.find('.data-form').__serializeJSON();
                      if(!memorialData.memorialName){
                          useCommon.toast('请输入纪念馆名称');
                          return false;
                      }
                      if(autoData.joinType != 'password'
                          && memorialData.joinType=='password'
                          && !memorialData.password){
                          useCommon.toast('请输入访问密码');
                          return false;
                      }
                      var personList = $content.find('.person-form').map(function(){
                         return $(this).__serializeJSON({name:'data'});
                      }).toArray();
                      var sendData = {
                          memorialId:code
                      };
                      if(memorialData.memorialName == autoData.memorialName
                        &&memorialData.joinType == autoData.joinType
                        &&(memorialData.joinType!='password' || !memorialData.password)
                      ){
                          updatePerson(personList);
                          return false;
                      }
                      sendData.memorialName = memorialData.memorialName;
                      if(memorialData.password )sendData.password = memorialData.password;
                      if(memorialData.joinType != autoData.joinType){
                          sendData.joinType = memorialData.joinType;
                      }
                      $.post('/memorial/edit',sendData,function(a){
                          if(a.code == 0){
                              updatePerson(personList);
                          }else{
                              useCommon.toast(a.message);
                          }
                      })
                  });
              });
          });
      }
      var albumContent;
      function setAlbumContent(code){
          var $info = $(albumContent);
          $info.appendTo($content);
          WY.albumFile({
              content:$info,
              addBtn:$info.find('.add-new-file-btn'),
              dataId:code,
              type:'memorial'
          });
      }
      function setList(list){
          $.each(list , function(i , o){
              var $row = $('<div class="pb-20">');
              $row.append('<div class="border-l-yellow pl-15 fz-20 height-20 lh-20 font-weight mb-10 mt-20">'+titleList[i]+'馆</div>');
              var $list = $('<div class="background-transparent min-h-180 flex-auto flex-wrap-auto pt-20">');
              $row.append($list);
              $listContent.append($row);
              putList(o,$list);
          });
      }
      function putList(list , $list){
          $.each(list , function(i , o){
              var $item = $('<div class="width-255 height-202 pt-20  mb-20 border-eee">');
              if(((i+1)%3))$item.addClass('mr-20');
              $item.append('<div class="fz-16 height-20 lh-20 pl-20 mb-10">'+o.memorialName+'</div>');
              $item.append('<div class="clearfix height-100 pl-10 pr-10 mb-20">' +
                  '<a href="/venue?id='+o.memorialId+'" target="_blank"><img src="'+useCommon.concatImgUrl(o.headImg)+'" class="height-100-100 width-75 pull-left" alt=""></a>' +
                  '<div class="pull-right width-140 flex-column color-666 height-100-100">' +
                  '<div class="width-100-100 fz-12">馆号：'+o.memorialId+'</div>' +
                  '<div class="width-100-100 fz-12">祭拜数：'+o.worshipCount+'</div>' +
                  '<div class="width-100-100 fz-12">馆主：'+o.nickname+'</div>' +
                  '<div class="width-100-100 fz-12">建馆时间：'+useCommon.parseDate(o.rowAddTime,'Y-m-d')+'</div>' +
                  '</div>' +
                  '</div>');
              $item.append('<div class="border-t-eee clearfix">' +
                  '<div class="pull-right">' +
                  '<div class="div-btn height-30 inline-block"><span code="'+o.memorialId+'" class="inline-block text-middle lh-30 show-album-btn">管理相册</span></div>' +
                  '<div class="div-btn height-30 inline-block"><span code="'+o.memorialId+'" class="inline-block text-middle edit-memorial-btn lh-30">编辑</span></div>' +
                  '<div class="div-btn height-30 inline-block"><span code="'+o.memorialId+'" class="inline-block text-middle del-memorial-btn lh-30">删除</span></div>' +
                  '</div>' +
                  '</div>');
              $list.append($item);
          });
      }
  }
};