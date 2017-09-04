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