var express = require('express');
var router = express.Router();
router.get('/config', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.recharge.config,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.recharge.list,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.recharge.add,
        data:req.body,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/user/recharge';