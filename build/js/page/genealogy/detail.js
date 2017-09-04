$(function(){
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
        content:$showContent.children(),
        search:search,
        addBtn:$(),
    })
});