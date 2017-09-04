var express = require('express');
var router = express.Router();
router.post('/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogyPerson.add,
        data:req.body,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/edit', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogyPerson.edit,
        data:{
            genealogyPersonId:req.body.genealogyPersonId,
            personName :req.body.personName ,
            gender  :req.body.gender  ,
            personPhone  :req.body.personPhone  ,
        },
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/del', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogyPerson.del,
        data:req.body,
        method:'POST',
        notBody:1,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogyPerson.list,
        data:req.query,
        done:function(a){
            res.useSend(a);
        }
    });
});
exports.router = router;
exports.__path = '/genealogy/person';