var express = require('express');
var router = express.Router();
router.get('/input', function(req, res, next) {
    Promise.all([
        new Promise(function(rev , rej){
            useRequest.send(req , res , {
                url:useUrl.genealogy.detail,
                data:{
                    genealogyId:req.query.id,
                },
                done:function(a){
                    if(a.code == 0){
                        rev(a.data);
                    }else{
                        rej();
                    }
                }

            })
        }),
        new Promise(function(rev , rej){
            useRequest.send(req , res , {
                url:useUrl.genealogyPerson.list,
                data:{
                    genealogyId:req.query.id,
                },
                done:function(a){
                    if(a.code == 0){
                        rev(a.data);
                    }else{
                        rej();
                    }
                }

            })
        })
    ]).then(function(values){
        res.useRender('genealogy/input',{
            resJson:{
                detail:values[0],
                list:values[1]
            }
        } )
    }).catch(function(){
        res.useRedirect('/');
    })

});

router.get('/list', function(req, res, next) {
    useRequest.send(req , res , {
        url:useUrl.genealogy.list,
        data:req.query,
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
            res.useRender('genealogy/detail-info' , {
                modalInfo:a.data
            })
        }
    });
});
exports.router = router;
exports.__path = '/genealogy';