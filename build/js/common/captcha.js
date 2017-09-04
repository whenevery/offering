$(document).on('click' , '.img-code-btn' , function () {
   $(this).attr('src' , '/captcha?_='+Date.now());
   $($(this).attr('show-code-input')).val('');
});