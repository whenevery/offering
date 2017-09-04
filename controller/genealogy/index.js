var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.useRender('genealogy/index' )
});
router.get('/detail', function(req, res, next) {
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
        res.useRender('genealogy/detail',{
            resJson:{
                detail:values[0],
                list:values[1]
            }
        } )
    }).catch(function(){
        res.useRedirect('/');
    })
});
exports.router = router;
exports.__path = '/genealogy';