WY.sacrificeShow = function(options){
    var personCount = options.personCount;
    var indoor = options.scenesType === 'indoor';
    var $content = $(options.content);
    var width = $content.width();
    WY.trigger('sacrifice-offset',{
        indoor:indoor,
        width:width,
        personCount:personCount
    },function(offsetMethod){
        WY.trigger('sacrifice-move',{
            offsetMethod:offsetMethod,
            content:$content
        },function(moveMethod){
            WY.bind('sacrifice-change',function(productData){
                moveMethod.createImg(productData , 1 );
            });
            moveMethod.putShow = function(){
                putShow();
            };
            function putShow(){
                $.get('/sacrifice/show/list',{
                    memorialId:options.memorialId
                },function(a){
                    $content.find('.'+moveMethod.imgClass).remove();
                    offsetMethod.clearOffsetCount();
                    moveMethod.createImgList(a.data.filter(function(b){
                        return b.locTag === 'A';
                    }).slice(0,6));
                    var bImgs = [],bWidth=-10;
                    moveMethod.createImgList(a.data.filter(function(b){
                        return b.locTag === 'B';
                    }).slice(0,6),function(img){
                        bWidth+=10;
                        var w = img.width();
                        if(w){
                            bWidth += img.width();
                        }else{
                            img[0].onload=function(){
                                bWidth += img.width();
                            }
                        }
                        bImgs.push(img);
                    });
                    if(bImgs.length){
                        var startLeft = (width - bWidth)/2;
                        bImgs.forEach(function(a){
                            a.css({
                                left:startLeft
                            });
                            startLeft+=a.width();
                            startLeft+=10;
                        });
                    }
                    moveMethod.createImgList(a.data.filter(function(b){
                        return b.locTag === 'C';
                    }).slice(0,personCount));
                    moveMethod.createImgList(a.data.filter(function(b){
                        return b.locTag === 'D';
                    }).slice(0,personCount));
                });
            }
            putShow();
            WY.trigger('sacrifice-more',options);
        });
    });
};