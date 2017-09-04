$(function(){
    //商品类型
    function category(options){
        this.content = $(options.content);
        this.pageSize = 10;
        this.bind();
    }
    category.prototype = {
       setData:function(data){
           var _this = this;
            $.each(data , function( i , o){
                _this.content.append(_this.createOne(o));
            });
            this.setOffset();
       },
        createOne:function(data){
           var $div = $('<div class="item">');
            $div.append('<div class="category-img-content cursor-pointer" code="'+data.sacrificeId+'"><img src="'+useCommon.concatImgUrl(data.sacrificeImg)+'" alt=""></div>');
            $div.append('<div class="text text-center" >'+data.sacrificeName+'</div>');
            return $div;
        },
        reset:function(){
            this.productPage = 0;
            this.productCount = 0;
            this.productData = [];
            this.lastList = null;
            this.isSearch = false;
            this.productXhr && this.productXhr.abort();
        },
        bind:function(){
            var _this = this;
            this.content.click(function(){
                return false;
            });
            this.content.on('click' , '.category-img-content' , function(){
                $(this).addClass('active');
                _this.reset();
                var code = $(this).attr('code');
                $.modalLoadingView('venue/product-list' , function($window){
                    if(!_this.window){
                        $window.on('hide.bs.modal' , function(){
                            _this.content.find('.active').removeClass('active');
                        });
                    }
                    _this.window = $window;
                    _this.productTotal = Math.ceil(Math.random() * 30);
                    _this.productContent = $window.find('.product-content');
                    $window.on('click' ,'.to-buy-btn', function(){
                        _this.buy();
                    });
                    _this.productContent.on('click' , '.category-img-content',function(){
                        _this.productContent.find('.active').removeClass('active');
                        $(this).addClass('active').next().addClass('active');
                    });
                    _this.productContent.showScroll({
                        scrollBottom:function($move){
                            _this.searchProduct($move);
                        }
                    });
                    _this.searchProduct(null , $window , code);
                },{
                    backNone:1,
                    notModal:1,
                });
                return false;
            });
        },
        searchProduct:function($move , $window , code){
            if($move){
                if(this.showLength < this.allLength)$move.css('marginTop','-=10');
                this.showProduct();
                return;
            }else{
                this.productContent.html('');
            }
            var _this = this;
            $.get('/sacrifice/product',{
                id:code
            },function(a){
                var data = a.data;
                _this.window.find('.show-count-span').text(data.length);
                _this.productData = data;
                _this.productPage = 0;
                _this.showLength = 0;
                _this.allLength = data.length;
                _this.showProduct();
                $window && $window.modal();
            });
        },
        showProduct:function(){
            var data = this.productData.slice(this.productPage *  this.pageSize,(this.productPage+1)*this.pageSize );
            this.showLength += this.pageSize;
            this.productPage++;
            var _this = this;
            $.each(data , function(i , o){
                _this.addOneProduct(o);
            });
        },
        addOneProduct:function(data){
            if(!this.lastList || this.lastList.children().length == 5){
                this.lastList = $('<div class="list pb-10">');
                this.productContent.append(this.lastList);
            }
            var $content = $('<div class="item">'+
                '<div class="category-img-content cursor-pointer pb-10" code="'+data.sacrificeId+'">'+
                '<img src="'+useCommon.concatImgUrl(data.sacrificeImg)+'">'+
                '</div>'+
                '<div>'+data.sacrificeName+'</div>'+
                '<div class="fz-12">时效'+data.sacrificeAging+'分钟</div>'+
                '<div class="sm-text">消耗'+data.useCloudBi+'云币</div>'+
                '</div>');
            this.lastList.append($content);

        },
        setOffset:function(){
            var width = this.content.width();
            var parentWidth = this.content.parent().width();
            this.content.css({
                left:(parentWidth - width) / 2
            })
        },
        buy:function(){
            var code = this.productContent.find('.category-img-content.active').attr('code');
            var productData = this.productData.filter(function(a){return a.sacrificeId == code}).pop();
            if(WY.validate.checkYunBi(productData.useCloudBi) === false)return false;
            WY.trigger('img-load',productData.sacrificeBigImg);
            WY.confirm({
                content:'购买' + productData.sacrificeName + ',消耗' + productData.useCloudBi + '云币,持续' + productData.sacrificeAging+'分钟',
                done:function(){
                    $.post('/sacrifice/add' , {
                        sacrificeId:productData.sacrificeId,
                        memorialId:hrefData.id,
                    },function(a){
                        if(a.code == 0){
                            $.modalLoadingHide();
                            WY.trigger('login-flush');
                            WY.trigger('sacrifice-change' , productData);
                        }else{
                            useCommon.toast(a.message);
                        }
                    });
                }
            });
        }
    };
    var categoryObj = new category({content:'.category-content'});
    $.get('/sacrifice/category',function(a){
        categoryObj.setData(a.data);
    });
});