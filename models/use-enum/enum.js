module.exports = {
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
        userType:{
            member:'会员',
            merchant:'商户',
        }
    }
};