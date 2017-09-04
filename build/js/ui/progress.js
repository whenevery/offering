;(function(){
    var $progressWindow;
    WY.xhrProgress = function(xhr){
        $progressWindow = $progressWindow || $('.wy-progress-window');
        var $message = $progressWindow.find('.message');
        var startTime,total,loaded,lastLoad,lastTime;
        var totalSize,speed;
        xhr.upload.onloadstart  = function(event){
            console.log(event.type);
            startTime = lastTime = event.timeStamp;
            total = event.total;
            totalSize = reSize(total);
            loaded = event.loaded;
            lastLoad = event.loaded;
            $progressWindow.show();
            showMessage(1);
        };
        xhr.upload.onprogress = function(event){
            console.log(event.type);
            if(!total){
                total = event.total;
                totalSize = reSize(total);
            }
            speed = (event.loaded - lastLoad)*1000/(event.timeStamp - lastTime);
            lastTime = event.timeStamp;
            lastLoad = event.loaded;
            showMessage();
        };
        function reSize(size){
            if(size < 1024){
                return size + 'B';
            }
            if(size < 1024 * 1024){
                return (size / 1024).toFixed(2) + 'KB';
            }
            if(size < 1024 * 1024 * 1024){
                return (size / 1024 / 1024).toFixed(2) + 'MB';
            }
            return (size / 1024 / 1024 / 1024).toFixed(2) + 'GB';
        }
        function showMessage(sts){
            console.log(lastLoad , reSize(lastLoad) , lastTime , speed,(total - lastLoad) / speed);
            $message.text('上传进度' + reSize(lastLoad)+'/' + totalSize + '('+(sts?0:(lastLoad * 100/total).toFixed(2))+'%)'+
                    ' 上传速度:' + (sts?0:(reSize(speed)+'/s')) +
                    ' 花费时间:' + (sts?0:useCommon.sumTime(lastTime - startTime)) +
                    ' 剩余时间:' + ((sts || speed == 0 )?'--':(useCommon.sumTime((total - lastLoad)*1000/ speed)))
            );
        }
        return $progressWindow;
    };
})();