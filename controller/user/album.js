var express = require('express');
var router = express.Router();
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.album.list,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.album.add,
        data:req.body,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/edit', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.album.edit,
        data:req.body,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/del', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.album.del,
        data:req.body,
        notBody:1,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/file/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.album.fileAdd,
        data:req.body,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/file/del', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.album.fileDel,
        data:req.body,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/user/album';