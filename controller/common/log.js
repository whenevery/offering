//common/log
var express = require('express');
var router = express.Router();
var md5 = require('md5');

router.get('/log',function(req, res, next) {
    useLog.log('window error');
    useLog.log(req.query);
    res.status(204).end();
});
exports.router = router;
exports.__path = '/common';