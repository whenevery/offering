var express = require('express');
var router = express.Router();
router.get('/add', function(req, res, next) {
    res.useRender('memorial/add');
});
router.get('/list', function(req, res, next) {
    var memorialType = req.query.memorialType;
    if(memorialType == 'all'){
        var all = [];
        var list = [
            {
                memorialType:'personal',
                peopleNumber:1,
            },
            {
                memorialType:'personal',
                peopleNumber:2,
            },
            {
                memorialType:'celebrity',
            },
        ];
        list.forEach(function(a){
            a.limit = 6;
            all.push(new Promise(function(rev , rej){
                searchOne(a,rev);
            }));
        });
        all.push(new Promise(function(rev , rej){
            useRequest.send(req , res , {
                url:useUrl.memorial.number,
                done:function(o){
                    rev(o.data);
                }
            });
        }));
        Promise.all(all).then(function(values) {
            res.sendSuccess(values);
        });
    }else{
        searchOne({
            memorialType:memorialType,
            content:req.query.content,
            limit:req.query.limit,
            lab:req.query.lab,
        } , function(d){
            res.sendSuccess(d);
        })
    }
    function searchOne(data , call){
        useRequest.send(req , res , {
            url:useUrl.memorial.list,
            data:data,
            done:function(o){
                call && call(o.data);
            }
        });
    }
});
router.get('/mylist', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.memorial.mylist,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/album/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.memorial.albumList,
        data:{limit:100},
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/add', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.memorial.add,
        method:'POST',
        data:JSON.parse(req.body.str),
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/edit', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.memorial.edit,
        method:'POST',
        data:req.body,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.post('/edit/person', function(req, res, next) {
    var bodyArr = JSON.parse(req.body.bodyArr);
    var all = [];
    bodyArr.forEach(function(d){
        all.push(new Promise(function(rev , rej){
            useRequest.send(req , res , {
                url:useUrl.memorial.editPerson,
                method:'POST',
                data:d,
                done:function(a){
                    if(a.code==0)rev();
                    rej(a.message);
                }
            });
        }))
    });
    Promise.all(all).then(function(){
        res.sendSuccess({});
    }).catch(function(v){
        res.sendErrorMessage('FAIL',v);
    })
});
router.post('/del', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.memorial.del,
        method:'POST',
        data:req.body,
        notBody:1,
        done:function(a){
            res.useSend(a);
        }
    })
});
router.get('/info', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.venue.detail,
        data:{
            memorialId: req.query.id
        },
        done:function(a){
            res.useRender('user/memorial/memorial-edit',{
                memorialInfo:a.data
            });
        }
    })
});
exports.router = router;
exports.__path = '/memorial';