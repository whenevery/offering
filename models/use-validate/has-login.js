module.exports = function(req , res , next){
    if(req.session.userInfo)return next();
    var redirectUrl = '/';
    if(req.xhr){
        res.sendErrorMessage('HTTP_CODE_401',{redirectUrl:redirectUrl});
    }else{
        res.useRedirect(redirectUrl);
    }
};