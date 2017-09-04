(function($) {
    var citySelectData = useCommon.citySelectData;
    var getDisplayValue = $.getCitySelectAutoValue = function (code){
        if(!code)return '';
        if(Array.isArray(code)){
            return code.map(function(a){
                return getDisplayValue(a);
            });
        }
        var name;
        citySelectData.every(function(a){
            if(a.code == code){
                name = a.name;
                return false;
            }
            return true;
        });
        return name;
    };
    var getAutoCode = $.getCitySelectAutoCode = function(name , parentCode){
      var code = name;
        citySelectData.every(function(a){
            if(a.name == name ) {
                if(parentCode && a.parentCode != parentCode)return true;
                code = a.code;
                return false;
            }
            return true;
        });
        return code;
    };
    var row = citySelectData;
    var caches = {};

    var getDataByParent = function(pCode , type) {
        if (caches.hasOwnProperty(pCode)) {
            return caches[pCode];
        } else {
            var data = [];
            if(!type){
                data.push({code:'',name:'请选择省'});
            }else if(type == 1){
                data.push({code:'',name:'请选择市'});
            }else{
                data.push({code:'',name:'请选择区'});
            }
            if(!pCode)return data;
            row.filter(function(a){
                return a.parentCode == pCode;
            }).forEach(function(o){
                data.push({code:o.code,name:o.name});
            });
            caches[pCode] = data;
            return data;
        }
    };

    var setSelectData = function (ele , data , code){
        ele.html('');
        $.each(data , function(i , o){
            ele.append('<option value="' + o.code + '">' + o.name + '</option>');
        });
        if(data.length > 1){
            if(code)ele.val(code);
            ele.closest('.list-item').removeClass('opacity-0');
        }
        ele.change();
    };
    $.fn.citySelect = function(type , params) {
        params = $.extend({} , params);
        if(!type || type == 'create')return this.each(function() {
            if(!this) return;
            var provinceSelect = $(this).find('.province-select');
            var citySelect = $(this).find('.city-select');
            var disSelect = $(this).find('.district-select');
            var province = getAutoCode(params.province || provinceSelect.attr('auto-select'));
            var city = getAutoCode(params.city || citySelect.attr('auto-select') , province);
            var district = getAutoCode(params.district || disSelect.attr('auto-select'), city);
            provinceSelect.change(function(){
                citySelect.closest('.list-item').addClass('opacity-0');
                disSelect.closest('.list-item').addClass('opacity-0');
                setSelectData(citySelect , getDataByParent(this.value , 1) , city);
                city = null;
            });
            citySelect.change(function(){
                disSelect.closest('.list-item').addClass('opacity-0');
                setSelectData(disSelect , getDataByParent(this.value , 2) , district);
                district = null;
            });
            setSelectData(provinceSelect ,  getDataByParent('000000') , province );
            province = null


        });
        if(type == 'setValue')return this.each(function() {
            if(!this) return;
            $(this).find('.province-select').val(params.province || '').change();
            $(this).find('.city-select').val(params.city || '').change();
            $(this).find('.district-select').val(params.district || '').change();
        });
        return this;
    };

    $('.city-select-list').citySelect('create' , {});
    WY.bind('modal-handler-city-select' , function(content){
        console.log('modal-handler-city-select');
        content.citySelect('create',{});
    })
})(jQuery);