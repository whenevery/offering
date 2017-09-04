$(function(){
    var $userInfo  = $('.user-login-info');
    function setUserInfo(){
        var userInfo = sessionJson.userInfo;
        $userInfo.children().hide();
        $userInfo.find('img').attr('src' , (userInfo.headImg));
        $userInfo.find('.show-user-name').text(userInfo.nickname);
        $userInfo.children().last().show();
    }
    $userInfo.children().last().on('mouseenter' , function(){
        WY.popover({
            //template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            content:'<div>' +
            '<div class="hover-back-gray pl-20 pr-20"><a class="color-blue-2 inline-block height-30 lh-30" href="/user#detail" target="_blank">个人资料</a></div>' +
            '<div class="hover-back-gray pl-20 pr-20"><a class="color-blue-2  inline-block height-30 lh-30" href="/user" target="_blank">个人中心</a></div>' +
            '<div class="hover-back-gray pl-20 pr-20"><a class="color-blue-2  inline-block height-30 lh-30" href="/login/out">退出</a></div>' +
            '</div>',
            className:'back-333',
            container:this,
            placement:'bottom',
            done:function($pop){
                $pop.find('a').click(function(e){
                    e.stopPropagation();
                })
            }
        });
    });
    $userInfo.children().last().on('click',function(){
        return false;
    });
    WY.ready('loginSuccess',setUserInfo);
    $('body').on('click','.popover',function(e){
        return false;
    });
    $userInfo.children().last().click(function(){
        return false;
    })
    $('body').on('click',function(e){
        $('.popover').hide();
    });
    $('.head-search-btn').click(function(){
        location.href = '/search?key='+$(this).prev().val();
    });
});