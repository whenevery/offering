var express = require('express');
var router = express.Router();
router.get('/category', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.sacrifice.category,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.get('/product', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.sacrifice.product,
        data:{
            pId:req.query.id,
        },
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.sacrifice.add,
        data:req.body,
        method:'POST',
        notBody:1,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.sacrifice.list,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.get('/show/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.sacrifice.showList,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/sacrifice';