var express = require('express');
var router = express.Router();
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.msg.list,
        data:{
            searchType:req.query.searchType,
            currentPage:req.query.page,
            limit:req.query.pageSize
        },
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/del', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.msg.del,
        data:req.body,
        notBody:1,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/user/msg';