var express = require('express');
var router = express.Router();

router.post('/upload',function(req, res, next) {
    req.pipe(useRequest.request(useUrl.file.upload)).pipe(res);
});
router.post('/uploads',function(req, res, next) {
    req.pipe(useRequest.request(useUrl.file.uploads)).pipe(res);
});
exports.router = router;
exports.__path = '/file';