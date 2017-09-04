var express = require('express');
var router = express.Router();
router.post('/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.message.add,
        data:req.body,
        notBody:1,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.message.list,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/mylist', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.message.mylist,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
exports.router = router;
exports.__path = '/message';