var express = require('express');
var router = express.Router();
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.sacrifice.mylist,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/user/sacrifice';