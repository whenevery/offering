$.fn.dataTablePage = function(options){
    options.page -= 0;
    options.page = options.page || 1;
    options.allPage -= 0;
    return this.each(function(){
        if(!options.allPage){
            return $(this).hide();
        }
        $(this).show();
        $(this).html('<ul class="pagination clearfix"></ul>');
        var $content = $(this).find('ul');
        $content.append('<span class="pull-left ml-10 height-30 lh-30 mr-25">共'+options.allNumber+'条数据,第'+options.page+'/'+options.allPage+'页</span>');
        var $fist = $('<li class="disabled">')
            .append('<a href="#" ><span >first</span></a>').attr('num',1);
        var $last = $('<li class="disabled">')
            .append('<a href="#" ><span >last</span></a>').attr('num',options.allPage);
        var $prev = $('<li class="disabled">')
            .append('<a href="#" ><span >prev</span></a>').attr('num',options.page - 1);
        var $next = $('<li class="disabled">')
            .append('<a href="#" ><span >next</span></a>').attr('num',options.page + 1);
        $content.append($fist)
            .append($prev);
        var min=1,max=options.allPage;
        if(options.allPage > 5){
            max = 5;
            if(options.page > 3){
                $content.append($('<li class="disabled"><a href="#">...</a></li>'));
                max = Math.min(options.allPage , options.page + 2);
            }
            if(options.allPage - 5 < options.page){
                max = options.allPage;
            }
            min = max - 4;
        }
        for(var i = min ; i <= max ; i ++ ){
            var $number = $('<li></li>').html('<a href="#">'+i+'</a>').attr('num' , i);
            $content.append($number);
            if(i == options.page){
                $number.addClass('active');
            }
        }
        if(max < options.allPage){
            $content.append($('<li class="disabled"><a href="#">...</a></li>'));
        }
        $content.append($next)
            .append($last);
        if(options.page > 1){
            $fist.removeClass('disabled');
            $prev.removeClass('disabled');
        }
        if(options.page < options.allPage){
            $next.removeClass('disabled');
            $last.removeClass('disabled');
        }
        $content.find('[num]').click(function(){
            if($(this).hasClass('active') || $(this).hasClass('disabled'))return false;
            if(options.done)options.done($(this).attr('num') - 0);
            return false;
        });
    })
};
$.showDataPage = function(options){
    var autoData,totalElements,totalPages,showData;
    var $table = options.showTable ||　$('.show-data-table');
    var $searchForm = options.searchForm ||$('.search-form');
    var autoPage = options.autoPage || 0;
    var usePageSize = options.limit || resJson.usePageSize || 20;
    options.getSearchData = options.getSearchData || function(){return $searchForm.__serializeJSON()};
    $searchForm.submit(function(){
        doSearch();
        return false;
    });
    function doSearch(page){
        if(options.localStorage){
            page = 1;
        }
        else{
            page = page == null?autoPage : page+(autoPage?0:-1);
        }
        var data = $.extend({},options.data ,options.getSearchData());
        data.page = page;
        data.pageSize = usePageSize;
        options.searchBefore && options.searchBefore();
        $table.find('.data-list').remove();
        $table.find('.show-null-message').remove();
        $.get(options.url , data , function(a){
            autoData = a.data.content || a.data;
            totalElements = a.data.totalElements;
            totalPages = a.data.totalPages;
            setPage(page , a.data);
        });
    }
    var $page;
    function setPage(page , resData){
        if(options.localStorage){
            page -= 1;
            page = page || 0;
            totalElements = autoData.length;
            totalPages = Math.ceil(autoData.length / usePageSize);
            showData = autoData.slice(page * usePageSize , (page + 1) * usePageSize);
        }else{
            if(totalPages == null)totalPages = Math.ceil(totalElements / usePageSize);
            showData = autoData;
        }
        $.each(showData , function(i , o){
            $table.append(options.createTr(i , o));
        });
        if(!options.notPage){
            if(totalElements){
                $table.find('.show-null-message').remove();
                if(!$page){
                    $table.after($page = $('<nav aria-label="Page navigation">').addClass('table-page mt-30'));
                }
                $page.show();
                $page.dataTablePage({
                    page:autoPage?page:page+1,
                    allNumber:totalElements,
                    allPage:totalPages,
                    done:options.localStorage?setPage:doSearch
                });
            }else{
                $table.append('<div class="show-null-message color-999 text-center pt-30">暂无记录</div>')
                if($page)$page.hide();
            }
        }
        if(options.done)options.done(autoData , showData , resData);
    }
    if(!options.notAuthSearch)doSearch();
    return {
        doSearch:doSearch
    };
};
window.newsObject = {};
window.newsObject.index = {
    init:function(){
        this.type = 'NEWS';
        this.otherType = 'FS';
        this.currentPage = 1;
        this.limit = 8;
        this.content = $('.news-list-content');
        this.otherContent = $('.news-other-list-content');
        this.threeContent = $('.news-three-list-content');
        this.main = $('.news-list-main');
        this.autoData = {};
        this.isSearch = false;
        var that = this;
        this.content.showScroll({
            scrollBottom:function(){
                if(!that.lastPage && !that.isSearch){
                    that.currentPage++;
                    that.doSearch();
                }
            }
        });
        this.bind();
    },
    show:function(){
        location.hash = JSON.stringify({
            type:this.type,
            otherType:this.otherType
        });
        $('.show-other-type-name').text(({NEWS:'新闻资讯',FS:'文化习俗'})[this.otherType]);
        $('.show-type-name').text(({NEWS:'新闻资讯',FS:'文化习俗'})[this.type]);
        if(!this.hasSearch){
            this.doSearch();
        }
        this.main.show();
    },
    start:function(data){
        if(data){
            this.type = data.type || this.type;
            this.otherType = data.otherType || this.otherType;
        }
        this.doSearch();
        this.show();
    },
    reset:function(){
        this.content.html('');
        this.lastPage = false;
        this.currentPage = 1;
        this.autoData = {};
        this.isSearch = false;
    },
    doSearch:function(){
        this.hasSearch = true;
        this.isSearch = true;
        var that = this;
        WY.loading(1);
        $.get('/news/list' , {
            type:this.type,
            currentPage:this.currentPage,
            limit:this.limit,
        },function(a){
            WY.loading(0);
            that.isSearch = false;
            that.lastPage = a.data.lastPage;
            that.firstPage = a.data.firstPage;
            that.autoData[that.type] = that.autoData[that.type] || [];
            that.autoData[that.type] = that.autoData[that.type].concat(a.data.content);
            that.setList(a.data.content);
        })
    },
    searchOther:function (){
        var that = this;
        $.get('/news/list' , {
            type:this.otherType,
            currentPage:that.currentPage,
            limit:3,
        },function(a){
            that.autoData[that.otherType] = a.data.content;
            that.setOtherList(a.data.content);
        })
    },
    searchThree:function (){
        var that = this;
        $.get('/news/list' , {
            type:'XSQY',
            currentPage:that.currentPage,
            limit:5
        },function(a){
            that.autoData.XSQY = a.data.content;
            that.setThreeList(a.data.content);
        })
    },
    setList:function(list){
        var that = this;
        $.each(list , function(i , o){
            that.content.append(WY.createOne('news',o));
        });
    },
    setOtherList:function (list){
        var that = this;
        that.otherContent.html('');
        $.each(list , function(i , o){
            that.otherContent.append(that.createOther(o , i));
        });
    },
    setThreeList:function (list){
        var that = this;
        that.threeContent.html('');
        $.each(list , function(i , o){
            that.threeContent.append(WY.createOne('three-news' , o , i));
        });
    },
    createOther:function(data , i){
       var $list =  WY.createOne('other-news' , data , i);
        return $list;
    },
    bind:function(){
        var that = this;
        $('body').on('click' , '.show-detail-btn' , function(){
            var code = $(this).closest('[code]').attr('code');
            var type = $(this).closest('[code]').attr('type');
            var data = that.autoData[type].filter(function(a){return a.industryDynamicId == code}).pop();
            that.main.hide();
            newsObject.detail.start(data);
        });
        $('.show-other-btn').click(function(){
            newsObject.detail.main.hide();
            var type = that.type;
            that.type = that.otherType;
            that.otherType = type;
            that.reset();
            that.show();
            that.doSearch();
            that.searchOther();
        });
    }
};
$(function(){
    for(var key in newsObject){
        newsObject[key].init && newsObject[key].init();
    }
    var hash = location.hash.slice(1);
    if(!hash){
        hash = JSON.stringify({type:'NEWS',otherType:'FS'});
        location.hash = hash;
    }
    var hashData = useCommon.parse(decodeURIComponent(hash));
    newsObject.index.searchOther();
    newsObject.index.searchThree();
    if(!hashData.detailId){
        newsObject.index.start(hashData);
    }else{
        newsObject.detail.searchDetail(hashData.detailId , function(data){

        });
    }

});
newsObject.detail = {
    init:function(){
        this.main = $('.new-detail-main');
        this.content = $('.show-detail-content');
        this.messageContent = $('.news-detail-message-content');
        var that = this;
        this.messageContent.showScroll({
            scrollBottom:function(){
                console.log('scrollBottom');
                that.currentPage ++ ;
                that.doSearch();
            }
        });
        this.lastPage = false;
        this.firstPage = false;
        this.isSearch = false;
        this.currentPage = 1;
        this.limit = 10;
        this.bind();
    },
    reset:function(){
        this.messageContent.html('');
        this.currentPage = 1;
    },
    searchDetail:function(detailId , call){
        var that = this;
        $.get('/news/detail' , {
            id:detailId,
        } , function(a){
            that.start(a.data);
            call && call(a.data);
        })
    },
    show:function(){
        $(window).scrollTop(0);
        location.hash = JSON.stringify({
            detailId:this.detailId
        });
        this.main.show();
    },
    start:function(data){
        if(this.detailId == data.industryDynamicId){
            this.show();
            return false;
        }
        $('.show-type-name').text(({NEWS:'新闻资讯',FS:'文化习俗'})[data.type]);
        this.detailId = data.industryDynamicId;
        this.reset();
        this.content.html(data.content);
        this.content.find('a').each(function(){
            $(this).after('<span>'+$(this).text()+'</span>');
            $(this).remove();
        });
        this.content.find('img').each(function(){
            if($(this).attr('src').indexOf('/wm.jpg') > 0){
                $(this).closest('p').remove();
            }
            else{
                this.onerror = function(){
                    $(this).remove();
                }
            }
        });
        this.main.find('.show-title-name').text(data.title);
        var time;
        var match = data.sourceTime.match(/\d{4}\-\d{2}\-\d{2}\s\d{2}\:\d{2}\:\d{2}/);
        if(match)time = match[0];
        time = useCommon.parseDate(new Date);
        this.main.find('.show-time-ele').text(time);
        if(data.dataUrl)this.main.find('.show-url-ele').attr('href',data.dataUrl).show();
        this.doSearch();
        this.show();
    },
    doSearch:function(){
        var that = this;
        $.get('/message/list' , {
            leaType:'dynamic',
            dataId:this.detailId,
            currentPage:this.currentPage,
            limit:this.limit,
        } , function(a){
            that.lastPage = a.data.lastPage;
            that.firstPage = a.data.firstPage;
            that.showData(a.data.content);
        })
    },
    showData:function(list){
        if(this.firstPage){
            if(list.length == 0){
                this.messageContent.html('<div class="color-999 text-center height-30 lh-30">暂无评论</div>');
                return;
            }
        }
        var that = this;
        $.each(list , function(i , o){
            var $list = $('<div class="pb-10 border-b-eee">');
            $list.append('<div class="color-blue-2 height-20 lh-20 pl-15">'+o.userName+':</div>');
            $list.append('<div class="color-666 lh-20 pl-20 break-all">'+o.content+'</div>');
            that.messageContent.append($list);
        });
    },
    bind:function(){
        var that = this;
        $('.show-list-btn').click(function(){
            that.main.hide();
            newsObject.index.show();
        });
        $('.to-add-message-btn').click(function(){
            var val = $('.message-textarea').val();
            if(val){
                $.post('/message/add',{
                    leaType:'dynamic',
                    dataId:that.detailId,
                    content:val,
                },function(a){
                    if(a.code == 0){
                        $('.message-textarea').val('');
                        that.reset();
                        that.doSearch();
                    }else{
                        useCommon.toast(a.message);
                    }

                });
            }
        });
    }
};