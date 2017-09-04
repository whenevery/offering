var express = require('express');
var router = express.Router();
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.message.mylist,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/del', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.message.del,
        data:req.body,
        method:'POST',
        notBody:1,
        done:function(a){
            res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/user/message';