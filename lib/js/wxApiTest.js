require.config({
    paths:{
        "wxapi":"http://res.wx.qq.com/open/js/jweixin-1.0.0",
        "jquery":"./plugins/jquery/1.8.3/jquery.min",
        "demo":"../js/demo"
    }
})

//获取链接地址中code=的值
function getLocationCode(){
    return window.location.href.match(/code=(\w*-{0,})&{0,}/)[1];
}

require(['wxapi', 'jquery','demo'],
    function(wx, $, demo){
        if(!wx){
            console.log("error:weixn api null!");
            return
        }
        // alert(window.location.href);
        var CODE = getLocationCode();
        document.querySelector(".debug").innerHTML = CODE;

        $.ajax({
            url: 'https://api.weixin.qq.com/sns/oauth2/access_token',
            type: 'GET',
            dataType: 'json',
            data: {
                appid: zgKey.appId,
                secret: zgKey.secret,
                code: CODE,
                grant_type: 'authorization_code'
            }
        })
            .done(function(data) {
                alert("success");
            })
            .fail(function(e) {
                alert(e.errmsg);
            })
            .always(function(e) {
                alert("complete");
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
            appId: zgKey.appId,
            timestamp: zgKey.timestamp,
            nonceStr: zgKey.nonceStr,
            signature: zgKey.signature,
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
    }
)