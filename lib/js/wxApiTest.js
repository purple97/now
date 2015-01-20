require.config({
    paths:{
        "wxapi":"http://res.wx.qq.com/open/js/jweixin-1.0.0",
        "jquery":"./plugins/jquery/1.8.3/jquery.min",
        "demo":"../js/demo"
    }
})

var zgKey = {
    appid : "wx7258a43685bbc734",
    secret : "2bb79058729bf42ab12396168cf3d4e8",
    noncestr : createNonceStr(),
    timestamp : Date.now(),
    signature : "",

}

function createNonceStr(n){
    var str = "",
        n = n ? n : 32,
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var l = chars.length;
    for(var i=0; i<n; i++){
        str += chars.substr(Math.random()*10, 1);
    }
    return str
}


require(['wxapi', 'jquery','demo'],
    function(wx, $, demo){
        if(!wx){
            console.log("error:weixn api null!");
            return
        }

        $.ajax({
            url: 'https://api.weixin.qq.com/cgi-bin/token',
            type: 'GET',
            dataType: 'json',
            data: {
                grant_type:"client_credential",
                appid:zgKey.appid,
                secret:zgKey.secret
            }
        })
            .done(function(data) {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });


        /*
         * 注意：
         * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
         * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
         * 3. 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
         *
         * 如有问题请通过以下渠道反馈：
         * 邮箱地址：weixin-open@qq.com
         * 邮件主题：【微信JS-SDK反馈】具体问题
         * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
         */
        wx.config({
            debug: true,// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。

            /*
             *	获取access_token
             * 	https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx7258a43685bbc734&secret=2bb79058729bf42ab12396168cf3d4e8
             *	返回数据类型：
             * 	Content-Length: 144
             * 	{
             *		"access_token":"PXL4RpiW5fylK9buAwQDpNJOnobIxCy0o2tDAKW_NpGGrN5A1QeLxl6Jp4tZzSAcmmm9xYxhs_uf_7yE2PBio0n3XaU3heemjJnWQvDRUvE",
             *		"expires_in":7200
             *	}
             */
            appId: zgKey.appid,// 必填，公众号的唯一标识 (订阅号:wx47d1c5f618ccc234)(服务号:wx7258a43685bbc734)
            timestamp: zgKey.timestamp,// 必填，生成签名的时间戳
            nonceStr: zgKey.noncestr,// 必填，生成签名的随机串
            signature: "2bb79058729bf42ab12396168cf3d4e8",// 必填，签名 （订阅号：999190ae927b2c2b5b8d426ebc01478b）
            //必填，需要使用的JS接口列表，所有JS接口列表见附录2
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        });

        demo();


    },
    function(err){
        console.log(err)
        alert(err)
    }
)