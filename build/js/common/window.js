(function(){
    var confirmWindow,confirmCb;
    WY.confirm = function(options){
        confirmCb = options.done;
        if(!confirmWindow){
            confirmWindow = $('.wy-confirm-window');
            confirmWindow.on('click' , '.submit-btn',function(){
                if(confirmCb && confirmCb() === false)return false;
                confirmWindow.hide();
            });
            confirmWindow.on('click' , '.close-btn',function(){
                confirmWindow.hide();
            });
        }
        confirmWindow.find('.title').text(options.title || '提示');
        confirmWindow.find('.text-content').text(options.content || '提示');
        confirmWindow.show();
    };
    var promptWindow,promptCb;
    WY.prompt = function(options){
        promptCb = options.done;
        if(!promptWindow){
            promptWindow = $('.wy-prompt-window');
            promptWindow.on('click' , '.submit-btn',function(){
                if(promptCb && promptCb(promptWindow.find('input').val()) === false)return false;
                promptWindow.hide();
            });
            promptWindow.on('click' , '.close-btn',function(){
                promptWindow.hide();
            });
        }
        promptWindow.find('.title').text(options.title || '提示');
        promptWindow.find('input').val(options.content || '').attr('placeholder',options.placeholder || '')[0].focus();
        promptWindow.show();
    };
    var $popover;
    WY.popover = function(options){
        $popover = $popover || $('.wy-popover');
        var container = $(options.container);
        var offset = container.offset();
        var top = offset.top + container.height();
        var left = offset.left;
        var $pop = container[0].popover = container[0].popover || $popover.clone();
        $pop.appendTo('body');
        $pop.css({
            top:top,
            left:left,
        });
        $pop.find('.popover-content').html(options.content);
        $pop.addClass(options.placement);
        $pop.addClass(options.className);
        $pop.show();
        $pop.click(function(){
            return false;
        });
        options.done && options.done($pop);
    };
    $(document).click(function(){
        $('.popover').hide();
    });
    var $loadingWindow;
    WY.loading = function(sts){
        $loadingWindow = $loadingWindow || $('.wy-loading-window');
        $loadingWindow[sts?'show':'hide']();
    }
})();
