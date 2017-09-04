//验证图片验证码
module.exports = function (req , res , next){
    var imgCode = req.body.imgCode || req.query.imgCode;
    if(!imgCode || req.session.imgCode != imgCode){
        useLog.log(req.cookies);
        useLog.log('img code error');
        useLog.log(req.session.imgCode + '  ' +  imgCode);
        delete req.session.imgCode;
        return res.useSend({imgError:1,message:useCodeEnum.IMG_CODE_FAIL[1],reImgCode:1,code:useCodeEnum.IMG_CODE_FAIL[0]});
    }else{
        delete req.session.imgCode;
        next();
    }
};