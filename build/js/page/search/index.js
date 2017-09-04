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