$.fn.bithdayUi = function(options){
  return this.each(function(){
      var $year = $(this).find('.year');
      var $month = $(this).find('.month');
      var $day = $(this).find('.day');
      var date = new Date;
      var nowYear = date.getFullYear();
      var minYear = nowYear - 150;
      $year.html('<option value="">请选择年</option>')
      for(var i=minYear;i<=nowYear;i++){
          $year.append('<option value="'+i+'">'+i+'年</option>');
      }
      $year.on('change' , function(){
          changeMonth();
          changeDay();
      });
      $month.on('change' , function(){
          changeDay();
      });
      function changeMonth(){
          var year = $year.val();
          var maxMonth = 12;
          var autoLength = $month.children().length - 1;
          var authValue = $month.val();
          if(date.getFullYear() == year){
             maxMonth = date.getMonth() + 1;
          }
          if(maxMonth != autoLength){
              $month.html('<option value="">请选择月</option>');
              for(var i=1;i<=maxMonth;i++){
                  $month.append('<option value="'+i+'">'+i+'月</option>');
              }
              if(authValue)$month.__setValue(authValue);
          }
      }
      function changeDay(){
          var year = $year.val();
          var month = $month.val() - 0;
          var maxDay;
          var autoValue = $day.val();
          var autoLength = $day.children().length - 1;
          if(useCommon.parseDate(date,'m') == month){
              maxDay = date.getDate();
          }
          else if(month == 2){
              if(!(year%400) || (year%100 && !(year%4))){
                  maxDay = 29;
              }else{
                  maxDay = 28;
              }
          }
          else{
              switch(month){
                  case 4:
                  case 6:
                  case 9:
                  case 11:
                      maxDay = 30;
                      break;
                  default:
                      maxDay = 31;
              }
          }
          if(maxDay != autoLength){
              $day.html('<option value="">请选择日</option>');
              for(var i=1;i<=maxDay;i++){
                  $day.append('<option value="'+i+'">'+i+'日</option>');
              }
              if(autoValue)$day.__setValue(autoValue);
          }
      }
      var autoYear = $year.attr('year') - 0;
      var autoMonth = $month.attr('month') - 0;
      var autoDay = $day.attr('day') - 0
      $year.__setValue(autoYear);
      changeMonth();
      $month.__setValue(autoMonth);
      changeDay();
      $day.__setValue(autoDay);
  });
};
console.log('bind modal-handler-birth-day');
WY.bind('modal-handler-birth-day',function(content){
    console.log('modal-handler-birth-day');
   content.bithdayUi();
});