var fs = require('fs');
/*
*
* */
module.exports = {
    start:function(app){
        try{
            var env = process.env.NODE_ENV || process.env.env;
            var configData = require(__ROOT__ + '/config/config');
            try{
                if(env){
                    var envData = require(__ROOT__ + '/config/config-' + env);
                    configData = useCommon.extendMore(configData,envData);
                }
            }catch(e){
                console.log(e);
            }
            console.log(configData);
            this.configData = configData;
        }catch(e){
            console.log(e);
        }
    },
    get:function (key){
        return this.configData[key] || null;
    },
    getData:function (key){
        return this.configData;
    }
};