useValidate.genealogy = {
    validator:function(data , type){
        var valid;
        if(type == 'person'){
            valid = useValidate.validator({
                personName:{
                    required:1,
                    requiredMessage:'请输入成员名称',
                },
                gender:{
                    required:1,
                    requiredMessage:'请选择成员性别',
                },
                personPhone:{
                    isPhone:1,
                    isPhoneMessage:'请输入有效的手机号码'
                }
            },data);
        }
        return valid;
    }
};
WY.showMouseMove = function(options , handler){
    options = options || {};
    handler = handler || {};
    var $move = $(options.move);
    var $content = $(options.content);
    var width = $content.width();
    var height = $content.height();
    return $move.each(function(){
        var $move = $(this);
        var isMouseDown = false,pageY,pageX,autoTop,autoLeft;
        $move.on('mousedown' , function(e){
            $(this).css({
                cursor:'move'
            });
            isMouseDown = true;
            autoTop = parseFloat($move.css('marginTop'));
            autoLeft = parseFloat($move.css('marginLeft'));
            pageY = e.pageY;
            pageX = e.pageX;
            return false;
        });
        $move.on('mouseleave mouseup' , function(e){
            isMouseDown = false;
            $(this).css({
                cursor:'auto'
            });
            return false;
        });
        $move.on('mousemove' , function(e){
            if(isMouseDown){
                moveTo(autoTop + e.pageY-pageY , autoLeft + e.pageX-pageX);
            }
            return false;
        });
        function moveTo(marginTop , marginLeft){
            var maxWidth = $move.width();
            var maxHeight = $move.height();
            if(height >= maxHeight){
                if(marginTop < 0){
                    handler.moveTop && handler.moveTop($move);
                    marginTop = 0;
                }else if(marginTop > height - maxHeight){
                    handler.moveBottom && handler.moveBottom($move);
                    marginTop = height - maxHeight;
                }
            }else{
                if(marginTop > 0){
                    handler.moveTop && handler.moveTop($move);
                    marginTop = 0;
                }else if(marginTop < height - maxHeight){
                    handler.moveBottom && handler.moveBottom($move);
                    marginTop = height - maxHeight;
                }
            }
            if(width >= maxWidth){
                if(marginLeft < 0){
                    handler.moveLeft && handler.moveLeft($move);
                    marginLeft = 0;
                }else if(marginLeft > width - maxWidth){
                    handler.moveRight && handler.moveRight($move);
                    marginLeft = width - maxWidth;
                }
            }else{
                if(marginLeft > 0){
                    handler.moveLeft && handler.moveLeft($move);
                    marginLeft = 0;
                }else if(marginLeft < width - maxWidth){
                    handler.moveRight && handler.moveRight($move);
                    marginLeft = width - maxWidth;
                }
            }
            $move.css({
                marginTop:marginTop,
                marginLeft:marginLeft
            });
            handler.moveStep && handler.moveStep();
        }
    });



};
WY.bind('modal-handler-mouse-move' , function($ele , options){
    WY.showMouseMove({
        content:$ele,
        move:options.move || $ele.find('.move')
    },options);
});
WY.genealogy = function(options){
    options = $.extend({
        stepWidth:170,
        itemWidth:100,
        itemLeft:30,
        itemHeight:45,
        itemMargin:15,
        itemLeftMargin:5,
        concatLineColor:'#f00',
        concatLineTop:20,
        stepLineColor:'#eee',
        circleRadius:5,
        startTop:60,
        generationLeft:10
    },options);
    var editAble = options.editAble;
    var canvas = options.canvas;
    var canvasWidth,canvasHeight = 600;
    var ctx = canvas.getContext('2d');
    var $content = options.content;
    var itemClass = 'person-data-item';
    var editId,autoIndex = 0;
    function item(data ,i){
        this.personName = data.personName;
        this.children = [];
        this.prev = [];
        this.id = data.genealogyPersonId;
        this.parentId = data.pId;
        this.childCount = data.childCount;
        var that = this;
        if(!this.parentId){
            this.isShow = true;
            this.prevLength = 0;
            this.showChildren = true;
            this.level = 1;
            setTimeout(function(){
                that.showChild();
            });
        }
        if(i != null){
            if(i>autoIndex)autoIndex = i;
        }else{
            i = ++autoIndex;
        }
        this.index = i;
        this.data = data;
        this.ele = $('<div code="'+this.id+'"  class="position-absolute z-index-100 '+itemClass+'" style="width:'+options.itemWidth+'px;height:'+options.itemHeight+'">');
        this.createElement();
    }
    item.list = [];
    item.getById = function(id){
        var o;
        this.list.every(function(a){
            if(a.id == id){
                o = a;
                return false;
            }
            return true;
        });
        return o;
    };
    item.start = function(){
        resetItemObject();
        drawStart();
    };
    item.getByParentId = function(parentId){
        var o;
        this.list.every(function(a){
            if(a.id == parentId){
                o = a;
                return false;
            }
            return true;
        });
        return o;
    };
    item.remove = function(list){
      list.forEach(function(a){
          var index = item.list.indexOf(a);
          if(index > -1){
              item.list.splice(index , 1);
          }
      });
    };
    item.prototype = {
        getLevel:function(){
          if(this.level == null){
              this.level = this.getParent().getLevel() + 1;
              if(this.level < 3){
                  this.showChildren = true;
                  this.showChild();
              }
          }
          return this.level;
        },
        showChild:function(){
            if(this.childCount && !this.isSearchChild){
                this.searchChild(function(){
                    item.start();
                });
            }
        },
        searchChild:function(call){
            if(this.isSearchChild || !this.childCount){
                return call && call(this.children);
            }
            var that = this;
            options.search(this.id , function(data){
                that.isSearchChild = true;
                createElement(data);
                call && call(data);
            });
        },
        reset:function(){
            this.childrenLength = 0;
            if(this.parentId){
                this.isShow = true;
                this.prevLength = null;
            }
            var that = this;
            this.children = this.getChild();
            this.prev = item.list.filter(function(a){
                return a.parentId == that.parentId && a.index < that.index;
            });
        },
        getChild:function(){
            var that = this;
            return item.list.filter(function(b){
                return that.id == b.parentId;
            });
        },
        restart:function(){
            this.getLevel();
            var that = this;
            this.createElement();
            this.prevLength = this.getPrevLength();
            this.offsetTop = this.prevLength * (options.itemHeight + options.itemMargin) + options.startTop;
            this.offsetRight = (this.level-1) * options.stepWidth + options.itemLeft + options.itemWidth;
            this.offsetLeft = (this.level-1) * options.stepWidth + options.itemLeft - options.itemLeftMargin;
            this.stepRight = this.level * options.stepWidth;
            this.getParents().every(function(a){
                if(!a.showChildren){
                    that.isShow = false;
                    return false;
                }
                return true;
            });
        },
        getPrevLength:function(){
            if(this.prevLength != null)return this.prevLength;
            var len = 0,that = this;
            this.getParents().concat(this).forEach(function(a){
                a.prev.forEach(function(b){
                    var l = b.findChildLength();
                    console.log(that.personName,b.personName , 'findChildLength' , l );
                    len += l;
                });
            });
            return len;
        },
        getParent:function(){
            if(!this.parentId)return null;
            return item.getByParentId(this.parentId);
        },
        getParents:function(){
            var rt = [],parentObj = this.getParent();
            while(parentObj){
                rt.push(parentObj);
                parentObj = parentObj.getParent();
            }
            return rt;
        },
        findChildren:function(){
            var children = this.children;
            this.children.forEach(function(a){
                children = children.concat(a.findChildren());
            });
            return children;
        },
        findChildLength:function(){
            if(this.childrenLength)return this.childrenLength;
            if(!this.showChildren || !this.children.length)return 1;
            var len = 0;
            this.children.forEach(function(a){
                len += a.findChildLength();
            });
            this.childrenLength = len;
            return len;
        },
        createElement:function(){
            this.ele.html('');
            var data = this.data;
            this.ele.append('<div class="height-30 fz-16">'+data.personName + (data.gender=='男'?'':'<span class="color-red fz-12">(女)</span>')+'</div>');
            if(editAble){
                this.ele.append('<div class="fz-12" style="height: 15px;line-height: 15px;">' +
                '<span class=" cursor-pointer inline-block pr-5 edit-item-btn">编辑</span>' +
                (data.gender=='男'?'<span class="cursor-pointer inline-block pr-5 add-item-btn">新增</span>':'') +
                (this.parentId?'<span class="cursor-pointer inline-block del-item-btn">删除</span>':'') +
                '</div>');
            }
            if((this.childCount && !this.isSearchChild) || this.children.length){
                this.ele.append('<div class=" cursor-pointer position-absolute right-0 top-0 mt-10 border-red-100 back-238 height-20 width-20 text-center change-show-btn">'+(this.showChildren?'-':'+')+'</div>')
            }
        }
    };
    //切换展示后代
    $content.on('click' , '.change-show-btn',function(){
        var itemObj = item.getById($(this).closest('[code]').attr('code'));
        itemObj.showChildren = !itemObj.showChildren;
        itemObj.searchChild(function(){
            item.start();
        });
    });
    function windowHandler($content , call){
        $content.find('.submit-btn').click(function(){
            var data = $content.__serializeJSON();
            var valid = useValidate.genealogy.validator(data , 'person');
            if(!valid.valid){
                useCommon.toast(valid.message);
                return false;
            }
            if(!data.genealogyPersonId)delete data.genealogyPersonId;
            if(isParent && parentId){
                data.chouseId =  parentId;
                data.createType = 'up';
            }
            else data.chouseId = editId;
            options.edit(data , function(o){
                if(data.createType === 'up'){
                    location.reload();
                    return;
                }
                $.modalLoadingHide();
                call && call(data.genealogyPersonId?data:o);
            });
        });
    }
    //编辑
    $content.on('click' , '.edit-item-btn',function(){
        editId = $(this).closest('[code]').attr('code');
        var itemObj = item.getById(editId);
        $.modalLoadingView('genealogy/edit&title='+encodeURIComponent('编辑成员')+'&'+useCommon.serialize(itemObj.data),function($content){
            windowHandler($content , function(data){
                $.extend(itemObj.data , data);
                itemObj.createElement();
            });
        });
    });
    var dataList = options.dataList;
    var parentObj = dataList && dataList.filter(function(a){
        return !a.pid;
    }).pop();
    var parentId = parentObj && parentObj.genealogyPersonId;
    //新增
    function add(){
        $.modalLoadingView('genealogy/edit' , function($content){
            windowHandler($content , function(data){
                var parentObj = item.getByParentId(editId);
                if(parentObj){
                    parentObj.showChildren = true;
                    parentObj.searchChild(function(list){
                        putNew(list);
                    });
                }else{
                    putNew([]);
                }
                function putNew(list){
                    var itemObj = new item(data , list.length);
                    item.list.push(itemObj);
                    item.start();
                }
            });
        });
    }
    var isParent;
    options.addBtn.click(function(){
        editId = '';
        isParent = 1;
        add();
    });
    $content.on('click' , '.add-item-btn',function(){
        editId = $(this).closest('[code]').attr('code');
        isParent = 0;
        add();
    });
    //删除
    $content.on('click' , '.del-item-btn',function(){
        editId = $(this).closest('[code]').attr('code');
        WY.confirm({
            content:'确定删除此成员及后代？',
            done:function(){
                options.del(editId , function(){
                    var itemObj = item.getById(editId);
                    var child = itemObj.findChildren();
                    item.remove(child.concat(itemObj));
                    item.start();
                });
            }
        })
    });

    //转化数据结构
    function setWidth(width){
        if(canvasWidth != width){
            canvasWidth = width;
            $(canvas).attr({
                width:width
            });
            $content.width(width);
        }
    }
    function setHeight(height){
        if(canvasHeight != height){
            canvasHeight = height;
            $(canvas).attr({
                height:height
            });
            $content.height(height);
        }
    }
    function drawStep(str , i){
        // var $step = $('<div class="height-40 width-150 lh-40 fz-16 back-black-1 color-white text-center position-absolute z-index-1 top-0 mt-10">第'+str+'代</div>')
        // $step.css({
        //     left:i * options.stepWidth + options.generationLeft
        // });
        // $content.append($step);
        if(i){
            ctx.moveTo(i * options.stepWidth , 0);
            ctx.lineTo(i * options.stepWidth , canvasHeight);
            ctx.stroke();
        }
    }
    function createElement(data){
        data.forEach(function(a , i){
            item.list.push(new item(a , i));
        });
    }
    // 辈代数
    var allGeneration = 0,allHeightLength = 0;
    function resetItemObject(){
        allGeneration = 0;
        allHeightLength = 0;
        item.list.forEach(function(a){
            a.reset();
        });
        item.list.forEach(function(a){
            a.restart();
            if(a.level > allGeneration) allGeneration = a.level;
            if(a.prevLength > allHeightLength)allHeightLength=a.prevLength;
        });
        if(allGeneration < 7) allGeneration = 7;
    }
    function drawStart(){
        $content.find('.' + itemClass).hide();
        ctx.clearRect(0 , 0 , canvasWidth , canvasHeight);
        setWidth(options.stepWidth * allGeneration);
        setHeight(Math.max(600 , (allHeightLength+1)*options.itemHeight + allHeightLength * options.itemMargin + options.startTop + 20));
        ctx.strokeStyle = options.stepLineColor;
        for(var i=1;i<=allGeneration;i++){
            var str = useCommon.numberToCn(i);
            drawStep(str , i - 1);
        }
        ctx.beginPath();
        ctx.strokeStyle = options.concatLineColor;
        item.list.forEach(function(a){
            if(!a.isShow)return;
            a.ele.css({
                left:(a.level - 1) * options.stepWidth + options.itemLeft,
                top:a.offsetTop
            }).show();
            $content.append(a.ele);
            if(a.showChildren && a.children.length){
                ctx.moveTo(a.offsetRight , a.offsetTop + options.concatLineTop);
                ctx.lineTo(a.stepRight , a.offsetTop + options.concatLineTop);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(a.stepRight , a.offsetTop + options.concatLineTop);
                a.children.forEach(function(b){
                    ctx.lineTo(a.stepRight , b.offsetTop + options.concatLineTop);
                    ctx.lineTo(b.offsetLeft - options.circleRadius * 2 , b.offsetTop  + options.concatLineTop);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(b.offsetLeft - options.circleRadius ,b.offsetTop + options.concatLineTop, options.circleRadius , 0 , Math.PI * 2);
                    ctx.stroke();
                    ctx.moveTo(a.stepRight , b.offsetTop + options.concatLineTop);
                });

            }
        })
    }
    createElement(dataList);
    resetItemObject();
    drawStart();
};
$(function(){
    function edit(data , call , addParent){
        data.genealogyId = hrefData.id;
        $.post('/genealogy/person/'+(data.genealogyPersonId ?'edit':'add'), data , function(a){
            if(a.code == 0){
                call && call(a.data);
            }else{
                useCommon.toast(a.message);
            }
        })
    }
    function del(id , call){
        $.post('/genealogy/person/del', {
            genealogyPersonId:id
        } , function(a){
            if(a.code == 0){
                call && call(a.data);
            }else{
                useCommon.toast(a.message);
            }
        })
    }
    function search(pId , call){
        $.get('/genealogy/person/list', {
            pId:pId,
            genealogyId:hrefData.id
        } , function(a){
            if(a.code == 0){
                call && call(a.data);
            }else{
                useCommon.toast(a.message);
            }
        })
    }
    var $showContent = $('.show-canvas-content');
    WY.trigger('modal-handler-mouse-move',$showContent,{});
    WY.genealogy({
        canvas:$('.show-genealogy-canvas')[0],
        dataList:resJson.list,
        editAble:1,
        content:$showContent.children(),
        edit:edit,
        del:del,
        search:search,
        addBtn:$('.add-new-btn')
    })
});