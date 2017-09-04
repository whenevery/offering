var express = require('express');
var router = express.Router();
router.post('/edit', function(req, res, next) {
    var body = req.body;
    if(!body.genealogyId)delete body.genealogyId;
    useRequest.send(req , res , {
        url:useUrl.genealogy[body.genealogyId?'edit':'add'],
        data:body,
        method:'POST',
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/del', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogy.del,
        data:req.body,
        method:'POST',
        notBody:1,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogy.mylist,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.get('/join/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogy.joinList,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.get('/detail/page', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogy.detail,
        data:req.query,
        done:function(a){
            a.data.title = '编辑族谱';
            res.useRender('user/genealogy/edit' , {
                modalInfo:a.data
            })
        }
    });
});
router.get('/person/page', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogyPerson.user,
        data:req.query,
        done:function(a){
            res.useRender('user/genealogy/person' , {
                modalInfo:a.data
            })
        }
    });
});
exports.router = router;
exports.__path = '/user/genealogy';