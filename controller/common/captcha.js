var express = require('express');
var router = express.Router();
//图片验证码
router.get('/', function(req, res, next) {
	var imgCode = useCommon.stringRandom(5);
	req.session.imgCode = imgCode;
	useCaptcha.create(res , {
		text:imgCode
	});
});
exports.router = router;
exports.__path = '/captcha';