var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.useRender('news/index');
});
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.news.list,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/detail', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.news.detail,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    })
});
exports.router = router;
exports.__path = '/news';