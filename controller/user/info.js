var express = require('express');
var router = express.Router();
router.post('/edit', function(req, res, next) {
    var body = req.body;
    useRequest.send(req , res , {
        url:useUrl.user.edit,
        data:{
            nickname:body.nickname,
            realName:body.realName,
            gender :body.gender ,
            birthDay  :body.birthDay  ,
            jxProvince   :body.jxProvince   ,
            jxCity   :body.jxCity   ,
            xjCounty    :body.xjCounty   ,
            jxCounty   :body.jxCounty   ,
            xjProvince   :body.xjProvince   ,
            xjCity   :body.xjCity   ,
            introduction    :body.introduction    ,
            headImg    :body.headImg    ,
        },
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/detail', function(req, res, next) {
    useRequest.send(req , res , {
       url:useUrl.user.detail,
        done:function(a){
           if(a.code == 0){
               a.data.tokenModel = a.data.tokenModel || req.session.userInfo.tokenModel;
               req.session.userInfo = a.data;
           }
           res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/user/info';