var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.useRender('search/index' )
});
exports.router = router;
exports.__path = '/search';