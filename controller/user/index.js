var express = require('express');
var router = express.Router();
router.get('/',useValidate.hasLogin, function(req, res, next) {
    res.useRender('user/index');
});
router.get('/detail',useValidate.hasLogin, function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.friend.userInfo,
        data:req.query,
        done:function(a){
            if(a.code == 0){
                res.useRender('user/detail',{
                    friendInfo:a.data
                });
            }else{
                res.useRedirect('/');
            }
        }
    })
});
router.get('/ranking/consume', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.user.consumeRanking,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
exports.router = router;
exports.__path = '/user';