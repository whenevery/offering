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
$(function(){
    $('.to-search-btn').click(function(){
        doSearch();
    });
    var $resultContent = $('.show-result-content');
    var $otherContent = $('.show-other-list-content');
    var $showNumber = $('.show-search-number');
    function showOther(){
        $.get('/news/list',{
            type:'FS',
            limit:10
        },function(a){
            $.each(a.data.content,function(i , o){
                $otherContent.append('<li class="pb-10 height-30"><a target="_blank" href="/news#{"detailId":'+o.industryDynamicId+'}" class="color-666 inline-block   write-ellipsis" title="'+o.title+'">'+o.title+'</a></li>')
            })
        });
    }
    showOther();
    var searchHandler = {
        news:{
           setData:function(data){
           },
            createOne:function(i , o){
                return WY.createOne('news' , o , i);
            }
        },
        genealogy:{
           setData:function(data){

           },
            createOne:function(i , o){
                return WY.createOne('genealogy' , o , i);
            }
        },
        memorial:{
            createOne:function(i , o){
                return WY.createOne('memorial' , o , i);
            },
            setData:function(data){
                if($resultContent.nextAll('.show-more-content')[0]){
                    $resultContent.nextAll('.show-more-content').show();
                    return false;
                }
                $resultContent.parent().append('<div class="show-more-content "><div class="border-l-yellow pl-15 fz-20 height-20 lh-20 font-weight mb-10 clearfix">'+
                '<span class="">热门纪念馆</span>'+
                '<a href="/memorial" class="color-999 pull-right fz-14 cursor-pointer ">更多></a>'+
                '</div>'+
                '<div class="height-10 border-b-204 back-238"></div>'+
                '<div class="show-hot-list-content flex-auto flex-wrap-auto pt-10">'+

                '</div></div>');
                var $hot = $resultContent.parent().find('.show-hot-list-content');
                $.get('/memorial/list',{
                    lab:'renqi',
                    limit:6
                },function(a){
                    $.each(a.data.content , function(i , o){
                        $hot.append(WY.createOne('memorial' , o  ,i));
                    });
                });
            }
        }
    };
    function doSearch(){
        $('.search-main').addClass('sm');
        var searchType = $('.search-type-list .active').attr('type');
        if(searchType != 'memorial')$resultContent.nextAll('.show-more-content').hide();
        $resultContent.nextAll('.table-page').remove();
        var searchOptions = {
            url:({
                news:'/news/list',
                memorial:'/memorial/list',
                genealogy:'/genealogy/list'
            })[searchType],
            autoPage:1,
            createTr:searchHandler[searchType].createOne,
            data:{},
            searchBefore:function(){
                $showNumber.text(0);
            },
            done:function(data , showData , resData){
                $showNumber.text(resData.totalElements);
                searchHandler[searchType].setData();
            }
        };
        var searchValue = $('.search-input').val();
        if(searchType == 'news'){
            searchOptions.data.title = searchValue;
            searchOptions.limit=3;
        }else if(searchType == 'memorial'){
            searchOptions.data.content = searchValue;
            searchOptions.limit=3;
        }else if(searchType == 'genealogy'){
            searchOptions.data.content = searchValue;
            searchOptions.limit=3;
        }
        $.showDataPage(searchOptions);
    }

});