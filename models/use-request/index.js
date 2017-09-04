var request =require('request');
var md5 = require('md5');
module.exports = {
    send:function(req, res , options ){
        options = Object.assign({
            apiToken:1,
        },options);
        var sendData = useCommon.extend({} , options.data);
        var method = options.method || 'GET';
        var headers = options.headers || {};
        if(method == 'GET'){
            if(sendData.page){
                sendData.currentPage = sendData.page;
            }
            if(sendData.pageSize){
                sendData.limit = sendData.pageSize;
            }
        }
        var __ = {
            url:options.url,
            method:method.toUpperCase(),
            headers:headers
        };
        headers.userId = req && req.session && req.session.userInfo && req.session.userInfo.userId || 0;
        headers.tokenInfo = req && req.session && req.session.userInfo && req.session.userInfo.tokenModel && (req.session.userInfo.tokenModel.userId + '_' +req.session.userInfo.tokenModel.token) || '';
        var timestamp,token;
        if(options.apiToken){
            delete sendData.__;
            delete sendData.__CSRF;
            delete sendData.token;
            timestamp = Date.now();
            token = md5(useConfig.get('appid')+ timestamp + useConfig.get('appsecrect'));
            headers.timestamp = timestamp;
            headers.sign = token;
            __.url +=(__.url.indexOf('?')==-1?'?':'&') + useCommon.serialize({partnerId:useConfig.get('appid')});
        }
        if(method.toUpperCase() == 'POST' && !options.notBody){
                __.body = sendData.jsonStr?sendData.jsonStr:useCommon.stringify(sendData);
                __.headers["content-type"] =  "application/json";
        }else{
            var urlStr = useCommon.serialize(sendData);
            if(urlStr)__.url +=(__.url.indexOf('?')==-1?'?':'&') + urlStr;
        }
        useLog.log('request start : ');
        useLog.log(__);
        request(__ , function(err , response , body){
            try{
                body = JSON.parse(body);
            }catch(e){
            }
            if(typeof body == 'object' && options.apiToken){
                body.baseCode = body.code;
                if(body.code == 'SUCCESS'){
                    body.code = 0;
                    body.data = body.result;
                    delete body.result;
                }
                else body.code = 7;
            }
            useLog.log('request end url: ' + __.url);
            useLog.log(body);
            if(typeof body == 'string')body = null;
            options.done(body || {code:1,msg:'系统异常',data:options.apiToken?{content:[]}:[]});
        });
    },
    request : request
};