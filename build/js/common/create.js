WY.createOne = function(type , data , i){
    var o = data;
    switch (type){
        case 'news':
            var $list = $('<div type="'+data.type+'" code="'+data.industryDynamicId+'" class="pt-20 pb-20 pl-200 pr-20 position-relative data-list">');
            $list.append('<img onerror="this.src=\'\'" ' +
            'class="show-detail-btn cursor-pointer height-100 width-180 back-204 position-absolute mt-20 ml-20 top-0 left-0" ' +
            'src="'+WY.getNewsImg(data.picUrl)+'">');
            $list.append('<div class="pl-15">' +
            '<div class="fz-18 lh-30 height-30 write-ellipsis show-detail-btn cursor-pointer ">'+data.title+'</div>' +
            '<div class="height-40 color-666 lh-20 write-ellipsis-2">'+data.contenJx+'</div>' +
            '<div class="height-30 lh-30 text-right">'+useCommon.parseDate(data.rowAddTime,'Y-m-d')+'</div>' +
            '</div>');
            return $list;
        case 'other-news':
            var $list = $('<div type="'+data.type+'" code="'+data.industryDynamicId+'"  class="data-list pt-10 pb-10 pl-130 border-b-204 height-111 back-238 position-relative">');
            $list.append('<img onerror="this.src=\'\'" ' +
            'class="show-detail-btn cursor-pointer height-90 width-130 back-204 position-absolute mt-10 top-0 left-0" ' +
            'src="'+WY.getNewsImg(data.picUrl)+'">');
            $list.append('<div class="pl-10">' +
            '<div class="fz-18 lh-30 height-30 write-ellipsis show-detail-btn cursor-pointer" title="'+data.title+'">'+data.title+'</div>' +
            '<div class=" height-40 color-204 lh-20 write-ellipsis-2 mt-10">'+data.contenJx+'</div>' +
            '</div>');
            return $list;
        case 'three-news':
            var $list = $('<div type="'+data.type+'" code="'+data.industryDynamicId+'"  class="data-list pt-10 pb-10 pl-10 border-b-204 height-90 back-238 position-relative">');
            $list.append('<div class="pl-10">' +
            '<div class="fz-18 lh-30 height-30 write-ellipsis show-detail-btn cursor-pointer" title="'+data.title+'">'+data.title+'</div>' +
            '<div class=" height-20 color-204 lh-20 write-ellipsis mt-10">'+data.contenJx+'</div>' +
            '</div>');
            return $list;
        case 'memorial':
            var hrefStr = data.joinType == 'password' && !WY.isMe(data.userId)?
                ('url="/venue?id='+data.memorialId+'" code="'+data.memorialId+'" class="need-put-password cursor-pointer"'):
                ('href="/venue?id='+data.memorialId+'" target="_blank"');
            var $item = $('<div class="data-list width-240 height-180 pt-10 pb-10 pl-5 pr-5 back-white mb-10 inline-block">');
            if(((i+1)%3))$item.addClass('mr-10');
            $item.append('<div class="fz-16 height-40 lh-40">'+data.memorialName+'</div>');
            $item.append('<div class="clearfix height-100">' +
            '<a '+hrefStr+'>' +
            '<img src="'+useCommon.concatImgUrl(data.headImg)+'" ' +
            'class="height-100-100 width-75 pull-left" alt="">' +
            '</a>' +
            '<div class="pull-right width-145 flex-column color-666 height-100-100">' +
            '<div class="width-100-100 fz-12">馆号：'+data.memorialId+'</div>' +
            '<div class="width-100-100 fz-12">祭拜数：'+data.worshipCount+'</div>' +
            '<div class="width-100-100 fz-12">馆主：'+data.nickname+'</div>' +
            '<div class="width-100-100 fz-12">建馆时间：'+useCommon.parseDate(data.rowAddTime,'Y-m-d')+'</div>' +
            '</div>' +
            '</div>');
            return $item;
        case 'friend':
            var $list = $('<div class="data-list mt-10 pl-50 pt-10 pb-10 back-white position-relative">');
            if((i+1)%4)$list.addClass('mr-10');
            $list.append('<img src="'+WY.getHeadImg(data.headImg)+'" class="left-0 top-0 mt-30 ml-10 position-absolute width-40 height-40 border-red-100">');
            $list.append('<div class="width-115 flex-column pl-10">' +
            '<div class="width-100-100 text-left">ID:'+(data.userId )+'</div>' +
            '<div class="width-100-100 text-left write-ellipsis">昵称:<span title="'+(data.nickname || data.userName)+'">'+(data.nickname || data.userName)+'</span></div>' +
            '<div class="width-100-100 text-left">性别:'+(data.gender  || '无')+'</div>' +
            '</div>');
            return $list;
        case 'my-friend':
            var $list = $('<div class="data-list width-260 mt-10 border-eee back-white position-relative">');
            if((i+1)%3)$list.addClass('mr-10');
            $list.append('<div class="pt-10 pl-10 pr-10 border-b-eee color-666 fz-12">' +
                '<div class="friend-header">' +
                    '<img src="'+WY.getHeadImg(data.headImg)+'" class="ico-35">' +
                    '<div class="width-60-100 text-left">' +
                        '<div class="color-blue-2 fz-18 lh-20 height-20 write-ellipsis">'+(data.nickname || data.userName)+'</div>' +
                        '<div class="lh-15 height-15">用户ID:'+data.userId+'</div>' +
                    '</div>' +
                    '<div class="text-right">称呼:<a code="'+data.friendRecordId+'" class="color-blue-1 add-remark-btn cursor-pointer">'+(data.remarks?data.remarks:'添加')+'</a></div>' +
                '</div>'+
                '<div class="width-100-100 text-left lh-20 height-20">生日:'+(data.birthDay?(useCommon.parseDate(data.birthDay,'Y-m-d')):'' )+'</div>' +
                '<div class="width-100-100 text-left lh-20 height-20">家乡:'+(data.jxProvince || '')+(data.jxCity || '')+(data.jxCounty || '')+'</div>' +
                '<div class="width-100-100 text-left lh-20 height-20">现居地:'+(data.xjProvince || '')+(data.xjCity || '')+(data.xjCounty || '')+'</div>' +
                '</div>');
            $list.append('<div class="friend-footer pl-10 pr-10 pt-5 pb-5">' +
            '</div>');
            return $list;
        case 'genealogy-item':
            return $('<div class="width-150 height-202">' +
            '<img src="/images/genealogy/head-img.png" class="width-100-100 height-100-100" alt=""/>' +
            '<div class="position-absolute width-40 pl-15 pr-15 top-0 right-0 break-all " style="line-height: 15px;margin-top: 24px;margin-right: 11px;">'+data.genealogyName+'</div>' +
            '</div>');
        case 'genealogy':
            var $list = $('<div class="data-list inline-block width-240 pt-20 mb-10">');
            if((i+1)%3)$list.addClass('mr-10');
            var $item = WY.createOne('genealogy-item' , data , i);
            $list.append($('<a target="_blank" href="/genealogy/detail?id='+data.genealogyId+'">').append($item.addClass('margin-auto position-relative color-333')));
            $list.append('<div class="width-150 margin-auto"><span class="fz-20 inline-block text-bottom">['+data.surname+']</span><span class="inline-block text-bottom"">'+data.genealogyName+'</span></div>');
            return $list;
        case 'album':
            var $list = $('<div class="data-list inline-block width-250 height-230 position-relative mb-20 z-index-1">');
            if((i+1)%3)$list.addClass('mr-30');
            $list.append('<div class="back-white border-204 width-240 height-220 position-absolute right-0 bottom-0"></div>');
            $list.append('<div class="back-white border-204 width-240 height-220 position-absolute right-0 top-0 mt-5 mr-5 z-index-1"></div>');
            $list.append('<div class="back-white border-204 width-240 height-220 position-absolute left-0 top-0 z-index-100 pt-10 pl-10 pr-10">' +
            '<img class="width-100-100 height-140 border-none show-info-img cursor-pointer" code="'+(data.albumId || data.memorialId) +'" src="'+(useCommon.concatImgUrl(data.headFile && data.headFile.fileFormat=='img'&& data.headFile.filePath || ''))+'" alt=""/>' +
            '<div class="pt-20 fz-16 pl-10">'+(data.albumName || data.memorialName)+'('+data.countPic +') '+
            (data.type == 'album'?'<div class="div-btn color-blue-2 edit-album-btn inline-block" val="'+data.albumName+'" code="'+data.albumId+'">修改</div><div class="div-btn color-999 del-album-btn inline-block" code="'+data.albumId+'">删除</div>':'')+
            '</div>' +
            '</div>');
            return $list;
    }
};