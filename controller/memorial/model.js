var express = require('express');
var router = express.Router();
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.memorial.modelList,
        done:function(data){
            res.send(data);
        }
    })
});
exports.router = router;
exports.__path = '/memorial/model';