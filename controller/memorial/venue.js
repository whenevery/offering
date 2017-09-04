var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.venue.detail,
        data:{
            memorialId: req.query.id,
            abc: req.query.abc,
            password:req.session.memorialPassword && req.session.memorialPassword[req.query.id]
        },
        done:function(a){
            if(a.code != 0){
                res.useRedirect('/');
            }else
            res.useRender('venue/venue' , {
                resJson:a.data
            });
        }
    });
});
router.post('/password/access', function(req, res, next) {
    if(req.session.memorialPassword && req.session.memorialPassword[req.body.id]){
        return res.useSend({code:0,data:true});
    }
    useRequest.send(req , res , {
        url:useUrl.venue.accessPassword,
        data:{
            memorialId: req.body.id,
        },
        method:'POST',
        notBody:1,
        done:function(a){
            res.useSend(a);
        }
    });
});
router.post('/password/check', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.venue.checkPassword,
        data:{
            memorialId: req.body.id,
            password: req.body.password,
        },
        done:function(a){
            if(a.code == 0){
                if(!req.session.userInfo){
                    req.session.memorialPassword = req.session.memorialPassword || {};
                    req.session.memorialPassword[req.body.id] = req.body.password;
                }
            }
           res.useSend(a);
        }
    });
});
router.get('/visit/record', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.memorial.accessList,
        data:{
            memorialId:req.query.memorialId,
            limit:15
        },
        done:function(a){
            res.useRender('venue/visit-record' , {
                list:a.data.content,
                totalElements:a.data.totalElements
            });
        }
    })
});
router.get('/user/photo', function(req, res, next) {
    res.useSend({
        data:[
            {
            src:'/images/photo/1.jpg',
            },
            {
            src:'/images/photo/2.jpg',
            },
            {
            src:'/images/photo/3.jpg',
            },
            {
            src:'/images/photo/4.jpg',
            },
            {
            src:'/images/photo/5.jpg',
            },
            {
            src:'/images/photo/1.jpg',
            },
            {
            src:'/images/photo/2.jpg',
            },
            {
            src:'/images/photo/3.jpg',
            },
            {
            src:'/images/photo/4.jpg',
            },
            {
            src:'/images/photo/5.jpg',
            },
        ]
    });
});
exports.router = router;
exports.__path = '/venue';