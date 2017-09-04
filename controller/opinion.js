var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.useRender('opinion/index' )
});
router.post('/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.opinion.add,
        data:req.body,
        notBody:1,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    })
});
exports.router = router;
exports.__path = '/opinion';