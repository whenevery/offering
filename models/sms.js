function sms(){}
sms.send = function(req , res , data , call){
    data.openId = req.session.userInfo.openId;
    data.phone = req.body.phone;
    data.ip = req.headers['x-forwarded-for'] ||
        req.headers['x-real-ip'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    data.ip = data.ip.replace(/\:\:ffff\:/ , '');
    useRequest.send(null , null , {
        url:useUrl.sms.send,
        data:data,
        method:'post',
        bossToken:true,
        done:function(a){
            if(call)call(a);
        }
    })
};
sms.check = function(req , res , data , call){
    data.openId = req.session.userInfo.openId;
    data.phone = req.body.phone;
    data.code = req.body.code;
    useRequest.send(null , null , {
        url:useUrl.sms.check,
        data:data,
        method:'post',
        bossToken:true,
        done:function(a){
            if(call)call(a);
        }
    })
};
module.exports = sms;