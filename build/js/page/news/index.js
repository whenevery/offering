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