;(function(){
    var className = 'null-message-notice';
    $.fn.showNullMessage = function(message){
        return this.each(function(){
            var $message = $(this).find('.' + className);
            if(!$message[0]){
                $message = $('<div>').addClass(className);
                $(this).append($message);
            }
            $message.html(message || '暂无记录');
        });
    };
    $.fn.hideNullMessage = function(){
        return this.each(function(){
            $(this).find('.' + className).remove();
        })
    };
    var $backWindow;
    $.showWhiteBackWindow = function(){
        $backWindow = $backWindow || $('.back-hide-window');
        $backWindow.show();
    };
    $.hideWhiteBackWindow = function(){
        if($backWindow)$backWindow.hide();
    };


    function loading(options){
        this.init(options);
    }
    loading.prototype = {
        init:function(options){
            this.options = options || {};
            this.moveTypes = ['leftEle' , 'rightLeft'];
            this.ele = (this.createElement());
            this.moveCount = 0;
            this.start();
        },
        start:function(){
            this.doMove(1);
        },
        doMove:function(start){
            var _this = this;
            this[this.moveTypes[this.moveCount]].move(function(){
                _this.doMove();
            } , start);
            this.moveCount = 1 - this.moveCount;
        },
        createElement:function(){
            var $div = $('<div>').addClass('ball-animate-loading');
            var left = this.leftEle = this.makeBall({
                startLeft:40,
                endLeft:0,
                showLeft:0
            });
            var $center = $('<div class="ball">');
            var right = this.rightLeft = this.makeBall({
                startLeft:60,
                endLeft:100
            });
            $div.append(left.ele).append($center).append(right.ele);
            return $div;
        },
        makeBall:function(data){
            return new ball(data);
        }
    };
    function ball(options){
        this.init(options);
    }
    ball.prototype = {
        init:function(options){
            this.options = options;
            this.startLeft = options.startLeft;
            this.endLeft = options.endLeft;
            this.showLeft = options.showLeft == null?options.startLeft:options.showLeft;
            this.ele = this.createBall();
            this.ele.css({
                left:this.showLeft
            })
        },
        createBall:function(){
            return $('<div class="ball position-absolute">');
        },
        move:function(call , start){
            var _this = this;
            if(start){
                _this.moveEnd(call);
            }
            else this.moveStart(function(){
                _this.moveEnd(call);
            })
        },
        moveStart:function(call){
            var _this = this;
            this.ele.animate({
                left:this.endLeft
            } , this.options.delay || 500 ,'linear', function(){
                if(call)call();
            });
        },
        moveEnd:function(call){
            var _this = this;
            this.ele.animate({
                left:this.startLeft
            } , this.options.delay || 500 ,'linear', function(){
                if(call)call();
            });
        }
    };
    $.fn.showLoadingMessage = function(){
        return this.addClass('text-center').each(function(){
            if(this.loadMessage){
                this.loadMessage.ele.remove();
            }
            this.loadMessage = new loading();
            $(this).append(this.loadMessage.ele);
        });
    };
    $.fn.hideLoadingMessage = function(){
        return this.each(function(){
            if(this.loadMessage)this.loadMessage.ele.remove();
            delete this.loadMessage;
        });
    };
})();