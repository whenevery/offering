var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.useRender('index' )
});
exports.router = router;
exports.__path = '/';