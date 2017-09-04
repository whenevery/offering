module.exports = {
    SUCCESS:[0,'操作成功'],
    FAIL:[1,'操作失败'],
    ERROR_DATA_CODE:[2,'数据异常'],
    DB_ERROR_CODE:[3,'数据库操作异常'],
    DOMAIN_ERROR_CODE:[4,'程序内部异步异常'],

    IMG_CODE_FAIL:[100001,'图片验证码错误'],
    SMS_CODE_FAIL:[100002,'短信验证码错误'],
    REPAYMENT_CODE_FAIL:[100003,'支付密码校验错误'],

    PARAM_ERROR_CODE:[100101,'参数错误'],
    LOGIN_PASSWORD_ERROR:[100102,'登录密码校验失败'],

    FILE_UPLOAD_FAIL:[100202,'上传文件错误'],

    RES_CODE_NULL:[100203,'未返回code'],
    RES_CODE_ZERO:[100204,'status code 为0'],

    HTTP_CODE_401:[401,'登录超时'],
    HTTP_CODE_402:[402,'需要修改初始密码'],
    HTTP_CODE_403:[403,'页面失效'],
    HTTP_CODE_404:[404,'404'],
    HTTP_CODE_405:[405,'不支持的请求方式'],
    HTTP_CODE_406:[406,'权限不足'],
    HTTP_CODE_408:[408,'用户身份不能做此操作'],
    HTTP_CODE_204:[204,'204'],
};