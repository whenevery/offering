//admin 1234yqs_admin
module.exports = {
    "port":3085,
    apiImgUrl:'http://img.yunji128.com/',
    apiUrl:'http://120.77.156.29:8060',
    appid:'00001node',
    appsecrect:'VfsJnh63IefgCs9ltdBEETLcW3o3jsTt',
    "log4js":{
        "customBaseDir" :"/logs/",
        "customDefaultAtt" :{
            "type": "dateFile",
            "absolute": true,
            "alwaysIncludePattern": true
        },
        "appenders": [
            {"type": "console", "category": "console"},
            {"pattern": "debug/yyyyMMdd.log", "category": "logDebug"},
            {"pattern": "info/yyyyMMdd.log", "category": "logInfo"},
            {"pattern": "warn/yyyyMMdd.log", "category": "logWarn"},
            {"pattern": "err/yyyyMMdd.log", "category": "logErr"}
        ],
        "replaceConsole": true,
        "allConsole":true,
        "levels":{ "logDebug": "DEBUG", "logInfo": "DEBUG", "logWarn": "DEBUG", "logErr": "DEBUG"}
    },
    dbOptions:{
        host:'120.77.156.29',
        port:'27017',
        dbname:'offering'
    }
};

