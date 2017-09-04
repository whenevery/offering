var apiUrl = useConfig.get('apiUrl') ;
module.exports = {
    login:{
        reg:apiUrl + '/homage/api/user/register',
        login:apiUrl + '/homage/api/user/login',
        reset:apiUrl + '/homage/api/user/setUpPwd',
    },
    sms:{
        send:apiUrl + '/homage/api/smscode/send',
    },
    memorial:{
        modelList:apiUrl + '/homage/api/memorial/modelList',
        add:apiUrl + '/homage/api/memorial/create',
        edit:apiUrl + '/homage/api/memorial/editBasic',
        del:apiUrl + '/homage/api/memorial/delete',
        info:apiUrl + '/homage/api/memorial/basicInfo',
        list:apiUrl + '/homage/api/memorial/list',
        mylist:apiUrl + '/homage/api/memorial/mylist',
        accessList:apiUrl + '/homage/api/memorialAccess/list',
        albumList:apiUrl + '/homage/api/memorial/myMemorialAlbumlist',
        number:apiUrl + '/homage/api/memorial/memorialNumber',

        editPerson:apiUrl + '/homage/api/memorial/editPersonInfo',

    },
    file:{
        upload:apiUrl + '/homage/file/fileUpload',
        uploads:apiUrl + '/homage/file/fileUploads',
    },
    venue:{
        detail:apiUrl+'/homage/api/memorial/accessMemorial',
        accessPassword:apiUrl+'/homage/api/memorial/checkAccess',
        checkPassword:apiUrl+'/homage/api/memorial/accessMemorialcheckPassWorld',
    },
    message:{
        add:apiUrl+'/homage/api/leav/add',
        list:apiUrl+'/homage/api/leav/memorialLeavlist',
        mylist:apiUrl+'/homage/api/leav/myLeavlist',
        del:apiUrl+'/homage/api/leav/delete',
    },
    sacrifice:{
        category:apiUrl+'/homage/api/sacrifice/sortList',
        list:apiUrl+'/homage/api/sacrifice/memorialSaclist',
        showList:apiUrl+'/homage/api/sacrifice/deskWorshipList',
        mylist:apiUrl+'/homage/api/sacrifice/mySaclist',
        product:apiUrl+'/homage/api/sacrifice/list',
        add:apiUrl+'/homage/api/sacrifice/doSG',
    },
    user:{
        edit:apiUrl+'/homage/api/user/editUser',
        search:apiUrl+'/homage/api/user/serchUser',
        detail:apiUrl+'/homage/api/user/userInfoByMe',
        consumeRanking:apiUrl+'/homage/api/ranking/consumeRankinglist',
        remark:apiUrl+'/homage/api/friend/updataRemarks',
    },
    news:{
        list:apiUrl+'/homage/api/industryDynamic/list',
        detail:apiUrl+'/homage/api/industryDynamic/info',
    },
    opinion:{
        add:apiUrl+'/homage/api/feedback/add',
    },
    friend:{
        add:apiUrl+'/homage/api/friend/add',
        pass:apiUrl+'/homage/api/friend/passAddFriend',
        list:apiUrl+'/homage/api/friend/friendList',
        sendMsg:apiUrl+'/homage/api/message/senMsgToFriends',
        sendAll:apiUrl+'/homage/api/message/senGroupMsg',

        userInfo:apiUrl + '/homage/api/user/seeFriendInfo',
        memorial:apiUrl + '/homage/api/memorial/friendlist',
        genealogy:apiUrl + '/homage/api/genealogy/friendlist',
    },
    msg:{
        list:apiUrl+'/homage/api/message/list',
        del:apiUrl+'/homage/api/message/doDetele',
    },
    genealogy:{
        add:apiUrl+'/homage/api/genealogy/add',
        del:apiUrl+'/homage/api/genealogy/delete',
        edit:apiUrl+'/homage/api/genealogy/edit',
        list:apiUrl+'/homage/api/genealogy/list',
        mylist:apiUrl+'/homage/api/genealogy/mylist',
        detail:apiUrl+'/homage/api/genealogy/info',
        joinList:apiUrl+'/homage/api/genealogy/myJoinlist',
    },
    genealogyPerson:{
        add:apiUrl+'/homage/api/genealogy_person/add',
        del:apiUrl+'/homage/api/genealogy_person/delete',
        edit:apiUrl+'/homage/api/genealogy_person/edit',
        list:apiUrl+'/homage/api/genealogy_person/personList',
        user:apiUrl+'/homage/api/genealogy_person/pagePersonList',
    },
    album:{
        add:apiUrl+'/homage/api/album/createAlbum',
        del:apiUrl+'/homage/api/album/deleteAlbum',
        edit:apiUrl+'/homage/api/album/editAlbum',
        list:apiUrl+'/homage/api/album/myAlbumList',
        fileList:apiUrl+'/homage/api/album/albumFileList',
        fileDel:apiUrl+'/homage/api/album/deleteFileToAlbum',
        fileAdd:apiUrl+'/homage/api/album/uploadFileToAlbum',
    },
    recharge:{
        add:apiUrl+'/homage/api/appPay/creatOrder',
        config:apiUrl+'/homage/api/userMember/confiList',
        list:apiUrl+'/homage/api/user/userCloudRecordList',
    },
};