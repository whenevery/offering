var express = require('express');
var router = express.Router();
router.get('/search', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.user.search,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.friend.add,
        notBody:1,
        method:'POST',
        data:req.body,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.friend.list,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/pass', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.friend.pass,
        notBody:1,
        method:'POST',
        data:req.body,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/send/msg', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.friend.sendMsg,
        notBody:1,
        method:'POST',
        data:req.body,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/send/all', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.friend.sendAll,
        notBody:1,
        method:'POST',
        data:req.body,
        done:function(a){
            res.useSend(a);
        }
    })
});

router.get('/memorial', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.friend.memorial,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/genealogy', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.friend.genealogy,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/remark', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.user.remark,
        data:req.body,
        method:'POST',
        notBody:1,
        done:function(a){
            res.useSend(a);
        }
    })
});
exports.router = router;
exports.__path = '/user/friend';