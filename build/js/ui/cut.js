WY.showCutImg = function(options , handler){
    options = options || {};
    handler = handler || {};
    var $cut = $(options.cut);
    var $auto = $(options.auto);
    function reset(){
        var marginLeft = parseFloat($cut.css('marginLeft'));
        var marginTop = parseFloat($cut.css('marginTop'));
        var autoMarginLeft = parseFloat($auto.css('marginLeft'));
        var autoMarginTop = parseFloat($auto.css('marginTop'));
        $cut.find('img').css({
            marginLeft:autoMarginLeft - marginLeft,
            marginTop:autoMarginTop - marginTop,
        });
    }
    handler.cutReset = reset;
};
WY.bind('modal-handler-cut-img' , function($ele , options){
    WY.showCutImg({
        content:$ele,
        cut:options.cut || $ele.find('.cut'),
        auto:options.cut || $ele.find('.auto-cut'),
    } , options);
});