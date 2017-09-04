var crypto = require('crypto');
var uuid = require('uuid');
var config = {
    SECRET:'sessionsecret',
    session_key:'offering',
    maxAge:28 * 60 ,//cookie缓存时间
    expires:61 * 60 * 1000 ,//redis缓存时间
    path:"/",
    httpOnly:true
};
var sign = function (val, secret) {
    return val + '.' + crypto
            .createHmac('sha1', secret || config.SECRET)
            .update(val + '')
            .digest('base64')
            .replace(/[\/\+=]/g, '');
};
var serialize = function (name, val, opt) {
    var pairs = [name + '=' + encodeURIComponent(val)];
    opt = opt || {};
    if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge);
    if (opt.domain) pairs.push('Domain=' + opt.domain);
    if (opt.path) pairs.push('Path=' + opt.path);
    if (opt.httpOnly) pairs.push('HttpOnly');
    if (opt.secure) pairs.push('Secure');
    return pairs.join('; ');
};
var writeHead = function (req , res) {
    resetSession(req.session);
    var cookies = res.getHeader('Set-Cookie');
    cookies = cookies || [];
    var session = serialize(config.session_key, req.session.sessionId , config);
    cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session];
    res.setHeader('Set-Cookie', cookies);
    res.setHeader('expires', 0);
    res.setHeader('max-age', 0);
    res.setHeader('cache-control', 'no-store,no-cache');
    res.setHeader('pragma', 'no-cache');
};
var sessionData = {};
function resetSession(session){
    if(session.expires - Date.now() < 32 * 60 * 1000){
        session.expires = config.expires + Date.now();
    }
}
function Session(sessionId){
    var obj = {};
    obj.sessionId = sessionId;
    obj.__CSRF = uuid.v1();
    var expires = config.expires + Date.now();
    var timer;
    function setTime(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            delete sessionData[obj.sessionId];
            expires = null;
            obj = null;
        } , expires - Date.now());
    }
    Object.defineProperties(obj , {
        expires:{
            set:function(v){
                expires = v;
            },
            get:function(){
                return expires;
            },
            enumerable:false
        }
    });
    setTime();
    return obj;
}
exports = module.exports = function (options) {
    options = options || {};
    for(var i in options){
        if(options[i])config[i] = options[i];
    }
    return function (req, res, next) {
        var sessionId = req.headers.sessionid || useCommon.getCookieData(req.headers.cookie)[config.session_key];
        if(!sessionId){
            sessionId = sign(uuid.v1());
        }
        var data = sessionData[sessionId];
        if(data){
            req.session = data;
            writeHead(req , res);
            return next();
        }else{
            sessionData[sessionId] = req.session = Session(sessionId);
            writeHead(req , res);
            return next();
        }
    };
};
