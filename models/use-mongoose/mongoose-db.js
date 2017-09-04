function mongoose (db){
    this.db = db;
}
mongoose.prototype = {
    find:function(data,call,option,types){
        useLog.log('db find');
        if(types){
            this.db.find(data,option||{})
                .sort(types.sort || {})
                .skip(types.skip || 0)
                .limit(types.limit || 20)
                .exec(function(err,data){
                    if(err)useLog.error(err);
                    if(call){
                        call({
                            code:!!err,
                            data:data
                        });
                    }
                });

        }else{
            this.db.find(data,option||{},function(err,data){
                if(err)useLog.error(err);
                if(call){
                    call({
                        code:!!err,
                        data:data
                    } , err);
                }
            });
        }
    },
    save:function(data,call){
        var save = new this.db();
        data = data || {};
        for(var i in data){
            save[i] = data[i];
        }
        useLog.log('db save');
        save.save(function(err , o){
            if(err)useLog.error(err);
            if(call){
                call({
                    code:!!err,
                    data:o
                } , err);
            }
        });
    },
    findOne:function(data,call){
        useLog.log('db find one');
        this.db.findOne(data,function(err,data){
            if(err)useLog.error(err);
            if(call){
                call({
                    code:!!err,
                    data:data
                } , err);
            }
        });
    },
    del:function(data,call){
        useLog.log('db del');
        this.db.remove(data,function(err,data){
            if(err)useLog.error(err);
            if(call){
                call({
                    code:!!err,
                    data:data
                } , err);
            }
        });
    },
    update:function(where,data,call){
        useLog.log('db update');
        this.db.update(where,{$set:data},function(err , o){
            if(err)useLog.error(err);
            if(call){
                call({
                    code:!!err,
                    data:o
                } , err);
            }
        });
    },
    Update:function(where,data,call){
        this.db.update(where,data,function(err){
            if(call){
                call({
                    code:!!err,
                    data:data
                } , err);
            }
        });
    }
};
module.exports = mongoose;