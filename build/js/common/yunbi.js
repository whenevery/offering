WY.ready('loginSuccess' , function(userInfo){
    localStorage.cloudBi = userInfo.cloudBi;
    WY.ready('yunbi',userInfo.cloudBi);
});
WY.bind('yunbi-change' , function(yunbi){
    var cloudBi = localStorage.cloudBi - 0 + yunbi;
    localStorage.cloudBi = cloudBi;
    WY.ready('yunbi',cloudBi);
});
$(function(){
    var cloudBi = sessionJson.userInfo && (localStorage.cloudBi || sessionJson.userInfo.cloudBi) || 0;
    localStorage.cloudBi = cloudBi;
    WY.ready('yunbi' , cloudBi);
});