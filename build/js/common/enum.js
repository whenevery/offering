WY.enum = {
    getName:function(code , val , realSts){
        var data = this.data[code];
        var rt = data && data[val];
        if(!realSts)rt = rt || val;
        return rt;
    },
    getData:function(code){
        return this.data[code] || {};
    },
    data:{
        memorialType:{
            personal:'个人',
            celebrity:'名人',
        }
    }
};