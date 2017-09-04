WY.validate = {
  checkYunBi:function(money , call){
      if(!sessionJson.userInfo){
         WY.trigger('login' , null , call);
         return false;
      }
      if(sessionJson.userInfo.cloudBi < money){
         WY.trigger('recharge');
         return false;
      }
  }
};