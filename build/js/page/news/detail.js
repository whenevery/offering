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