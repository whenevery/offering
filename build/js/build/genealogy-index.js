$(function(){
    var $genealogyListContent = $('.genealogy-list-content');
    var $genealogyNewContent = $('.genealogy-new-content');
    $genealogyNewContent.showScroll();
    $.get('/genealogy/list' ,{limit:12}, function(d){
        setList(d.data);
    });
    function setList(data){
        $.each(data.content , function(i , o){
           var $item = WY.createOne('genealogy' , o , i);
            $genealogyListContent.append($item);
        });
        $('.show-genealogy-count').show().find('.count').text(data.totalElements);
    }

    WY.ready('loginSuccess' , function(userInfo){
        $.modalLoadingView('genealogy/index-user' , function(content){
            var $content = $('.put-user-info').append(content).children();
            $content.__formData(userInfo , 'data');
        } , 1)
    });
});