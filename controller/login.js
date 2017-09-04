var express = require('express');
var router = express.Router();
router.post('/', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.login.login,
        method:'POST',
        data:req.body,
        done:function(a){
            if(a.code == 0){
                req.session.userInfo = a.data;
            }
            res.useSend(a);
        }
    })
});
router.post('/reg', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.login.reg,
        method:'POST',
        data:{
            userName:req.body.userName,
            sendCode:req.body.sendCode,
            password:req.body.password,
        },
        done:function(a){
            if(a.code == 0){
                req.session.userInfo = a.data;
            }
            res.useSend(a);
        }
    })
});
router.post('/reset', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.login.reset,
        method:'POST',
        notBody:1,
        data:{
            userName:req.body.userName,
            sendCode:req.body.sendCode,
            newPwd:req.body.password,
        },
        done:function(a){
            res.useSend(a);
        }
    })
});

router.get('/out', function(req, res, next) {
    req.session.userInfo = null;
    res.redirect('/');
});
exports.router = router;
exports.__path = '/login';