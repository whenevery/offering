/*
* 用于验证参数有效性
* */
var fileReader = require('../file-reader');
module.exports = {
    init:function(type){
        this.baseDir = __ROOT__ + ('/' + publicDir + '/validate');
        fileReader.getAllFileList([this.baseDir + '/sub'] ,function(o){
            o.forEach(function(path){
                require('' + path);
            });
        });
    },
    imgCodeValid:require('./code-validate.js'),
    hasLogin:require('./has-login.js'),
};

