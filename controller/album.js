var express = require('express');
var router = express.Router();
router.get('/file/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.album.fileList,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/album';