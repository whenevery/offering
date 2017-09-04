module.exports = function(err , req , res , next){
    useLog.log('error');
    useLog.log(req.url);
    useLog.log(err.stack || err);
    try{
        if(req.xhr || req.body.__isAjax){
            res.useSend({ message: err.message || err ,stack : err.stack });
        }else{
            res.useSend(err);
        }
    }catch(e){

    }
};

