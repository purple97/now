<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta content="telephone=no" name="format-detection"/>
    <meta content="yes" name="apple-mobile-web-app-capable"/>
    <meta content="yes" name="apple-touch-fullscreen"/>
    <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
    <meta content="zhh" name="apple-mobile-web-app-title">
    <meta name="copyright" content="Copyright &copy; 版权所有"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <title>微信api测试</title>
    <script type="text/javascript" src="../lib/js/plugins/flexible.min.js"></script>
    <link rel="stylesheet" type="text/css" href="http://demo.open.weixin.qq.com/jssdk/css/style.css">
    <!-- <link rel="stylesheet" type="text/css" href="../dist/css/index.css"> -->
</head>
<body>
<div id="content">
    <h1>微信新 api测试 1.2.3</h1>
    <div class="debug"></div>
    <br/><br/><br/>
    <a href="http://itunes.apple.com/cn/app/id904939330">http://itunes.apple.com/cn/app/id904939330</a>
    <br/><br/><br/>
    <div class="grid-fat">
        <div class="wxapi_container">
            <div class="wxapi_index_container">
              <ul class="label_box lbox_close wxapi_index_list">
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-basic">基础接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-share">分享接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-image">图像接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-voice">音频接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-smart">智能接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-device">设备信息接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-location">地理位置接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-webview">界面操作接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-scan">微信扫一扫接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-shopping">微信小店接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-card">微信卡券接口</a></li>
                <li class="label_item wxapi_index_item"><a class="label_inner" href="#menu-pay">微信支付接口</a></li>
              </ul>
            </div>
            <div class="lbox_close wxapi_form">
              <h3 id="menu-basic">基础接口</h3>
              <span class="desc">判断当前客户端是否支持指定JS接口</span>
              <button class="btn btn_primary" id="checkJsApi">checkJsApi</button>

              <h3 id="menu-share">分享接口</h3>
              <span class="desc">获取“分享到朋友圈”按钮点击状态及自定义分享内容接口</span>
              <button class="btn btn_primary" id="onMenuShareTimeline">onMenuShareTimeline</button>
              <span class="desc">获取“分享给朋友”按钮点击状态及自定义分享内容接口</span>
              <button class="btn btn_primary" id="onMenuShareAppMessage">onMenuShareAppMessage</button>
              <span class="desc">获取“分享到QQ”按钮点击状态及自定义分享内容接口</span>
              <button class="btn btn_primary" id="onMenuShareQQ">onMenuShareQQ</button>
              <span class="desc">获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口</span>
              <button class="btn btn_primary" id="onMenuShareWeibo">onMenuShareWeibo</button>

              <h3 id="menu-image">图像接口</h3>
              <span class="desc">拍照或从手机相册中选图接口</span>
              <button class="btn btn_primary" id="chooseImage">chooseImage</button>
              <span class="desc">预览图片接口</span>
              <button class="btn btn_primary" id="previewImage">previewImage</button>
              <span class="desc">上传图片接口</span>
              <button class="btn btn_primary" id="uploadImage">uploadImage</button>
              <span class="desc">下载图片接口</span>
              <button class="btn btn_primary" id="downloadImage">downloadImage</button>

              <h3 id="menu-voice">音频接口</h3>
              <span class="desc">开始录音接口</span>
              <button class="btn btn_primary" id="startRecord">startRecord</button>
              <span class="desc">停止录音接口</span>
              <button class="btn btn_primary" id="stopRecord">stopRecord</button>
              <span class="desc">播放语音接口</span>
              <button class="btn btn_primary" id="playVoice">playVoice</button>
              <span class="desc">暂停播放接口</span>
              <button class="btn btn_primary" id="pauseVoice">pauseVoice</button>
              <span class="desc">停止播放接口</span>
              <button class="btn btn_primary" id="stopVoice">stopVoice</button>
              <span class="desc">上传语音接口</span>
              <button class="btn btn_primary" id="uploadVoice">uploadVoice</button>
              <span class="desc">下载语音接口</span>
              <button class="btn btn_primary" id="downloadVoice">downloadVoice</button>

              <h3 id="menu-smart">智能接口</h3>
              <span class="desc">识别音频并返回识别结果接口</span>
              <button class="btn btn_primary" id="translateVoice">translateVoice</button>

              <h3 id="menu-device">设备信息接口</h3>
              <span class="desc">获取网络状态接口</span>
              <button class="btn btn_primary" id="getNetworkType">getNetworkType</button>

              <h3 id="menu-location">地理位置接口</h3>
              <span class="desc">使用微信内置地图查看位置接口</span>
              <button class="btn btn_primary" id="openLocation">openLocation</button>
              <span class="desc">获取地理位置接口</span>
              <button class="btn btn_primary" id="getLocation">getLocation</button>

              <h3 id="menu-webview">界面操作接口</h3>
              <span class="desc">隐藏右上角菜单接口</span>
              <button class="btn btn_primary" id="hideOptionMenu">hideOptionMenu</button>
              <span class="desc">显示右上角菜单接口</span>
              <button class="btn btn_primary" id="showOptionMenu">showOptionMenu</button>
              <span class="desc">关闭当前网页窗口接口</span>
              <button class="btn btn_primary" id="closeWindow">closeWindow</button>
              <span class="desc">批量隐藏功能按钮接口</span>
              <button class="btn btn_primary" id="hideMenuItems">hideMenuItems</button>
              <span class="desc">批量显示功能按钮接口</span>
              <button class="btn btn_primary" id="showMenuItems">showMenuItems</button>
              <span class="desc">隐藏所有非基础按钮接口</span>
              <button class="btn btn_primary" id="hideAllNonBaseMenuItem">hideAllNonBaseMenuItem</button>
              <span class="desc">显示所有功能按钮接口</span>
              <button class="btn btn_primary" id="showAllNonBaseMenuItem">showAllNonBaseMenuItem</button>

              <h3 id="menu-scan">微信扫一扫</h3>
              <span class="desc">调起微信扫一扫接口</span>
              <button class="btn btn_primary" id="scanQRCode0">scanQRCode(微信处理结果)</button>
              <button class="btn btn_primary" id="scanQRCode1">scanQRCode(直接返回结果)</button>

              <h3 id="menu-shopping">微信小店接口</h3>
              <span class="desc">跳转微信商品页接口</span>
              <button class="btn btn_primary" id="openProductSpecificView">openProductSpecificView</button>

              <h3 id="menu-card">微信卡券接口</h3>
              <span class="desc">批量添加卡券接口</span>
              <button class="btn btn_primary" id="addCard">addCard</button>
              <span class="desc">调起适用于门店的卡券列表并获取用户选择列表</span>
              <button class="btn btn_primary" id="chooseCard">chooseCard</button>
              <span class="desc">查看微信卡包中的卡券接口</span>
              <button class="btn btn_primary" id="openCard">openCard</button>

              <h3 id="menu-pay">微信支付接口</h3>
              <span class="desc">发起一个微信支付请求</span>
              <button class="btn btn_primary" id="chooseWXPay">chooseWXPay</button>
            </div>
          </div>
    </div>
</div>
<?php
require_once "../wxphp/jssdk.php";
$name = 'matao';
// echo sha1($name);
$jssdk = new JSSDK("wx7258a43685bbc734", "2bb79058729bf42ab12396168cf3d4e8");
$signPackage = $jssdk->GetSignPackage();
?>
<!-- <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script> -->
<script data-main="../lib/js/wxApiTest.js?_v=1.2.3" src="../lib/js/plugins/require.js"></script>
<script type="text/javascript">
var zgKey = {
  secret: '2bb79058729bf42ab12396168cf3d4e8',
  appId: '<?php echo $signPackage["appId"];?>',
  timestamp: '<?php echo $signPackage["timestamp"];?>',
  nonceStr: '<?php echo $signPackage["nonceStr"];?>',
  signature: '<?php echo $signPackage["signature"];?>'
}


</script>
</body>
</html>