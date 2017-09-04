var express = require('express');
var router = express.Router();

router.post('/send',useValidate.imgCodeValid,function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.sms.send,
        apiToken:true,
        notBody:true,
        method:'POST',
        data:{
            sendType:req.body.sendType,
            phone:req.body.phone
        },
        done:function(a){
            res.useSend(a);
        }
    })
});
exports.router = router;
exports.__path = '/sms';