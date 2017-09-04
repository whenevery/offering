module.exports = {
    clearData:function(keys){
        for(var key in allData){
            if(!keys || keys.indexOf(key) > -1)delete allData[key];
        }
    },
    getUserInfo:function(req ,res, next){
        if(!req.session || !req.session.userInfo ||!req.session.userInfo.openId)return next();

    },
    init:function(){
    }
};


