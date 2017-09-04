var express = require('express');
var router = express.Router();
router.post('/upload',function(req, res, next) {
    req.pipe(require('request')('http://xxx.xx.xx')).pipe(res);
});
router.get('/', function(req, res, next) {
    res.useRender('news/index');
});
exports.router = router;
exports.__path = '/test';