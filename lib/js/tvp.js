/*! TenVideoPlayer_V2 - v2.0.0 - 2014-12-31 14:14:32
 * Copyright (c) 2014
 * Powered by Tencent-Video Web Front End Team 
 */
!function (a, b) {
    a.html5lang = {errMsg: {"default": "\u62b1\u6b49,\u6682\u4e0d\u652f\u6301\u64ad\u653e", 0: "\u5f53\u524d\u89c6\u9891\u6587\u4ef6\u65e0\u6cd5\u64ad\u653e", 68: "CGI\u7cfb\u7edf\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", "-1": "cgi\u53c2\u6570\u9519\u8bef/cgi\u5411\u670d\u52a1\u5668\u53d1\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", "-2": "cgi\u4ece\u670d\u52a1\u5668\u63a5\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", "-3": "cgi\u4ece\u670d\u52a1\u5668\u89e3\u5305\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", "-4": "cgi\u8fde\u63a5\u670d\u52a1\u5668\u7f51\u7edc\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", "-6": "cgi\u8fde\u63a5\u670d\u52a1\u8d85\u65f6,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", "-7": "cgi\u8bbf\u95ee\u670d\u52a1\u672a\u77e5\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", 50: "CGI\u7cfb\u7edf\u9519\u8bef,\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", 52: "\u8bbf\u95ee\u89c6\u9891\u4ed8\u8d39\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", 64: "\u6821\u9a8c\u89c6\u9891\u4ed8\u8d39\u4fe1\u606f\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5", 51: "vid\u4e2a\u6570\u8d85\u51fa\u8303\u56f4", 61: "vid\u4e0d\u5408\u6cd5", 62: "\u89c6\u9891\u72b6\u6001\u4e0d\u5408\u6cd5", 63: "\u6e05\u6670\u5ea6\u683c\u5f0f\u4e0d\u5408\u6cd5", 65: "\u901f\u5ea6\u683c\u5f0f\u4e0d\u5408\u6cd5", 67: "\u89c6\u9891\u683c\u5f0f\u4e0d\u5b58\u5728", 69: "format\u5217\u8868\u4e3a\u7a7a", 71: "\u672a\u627e\u5230HLS CDN", 73: "\u751f\u6210\u6587\u4ef6\u540d\u5931\u8d25", 74: "\u5206\u7247\u53f7\u4e0d\u5408\u6cd5", 76: "\u83b7\u53d6m3u8\u6587\u4ef6\u540d\u5931\u8d25", 77: "\u751f\u6210HLS key\u5931\u8d25", 80: {0: "\u56e0\u7248\u6743\u9650\u5236,\u8bf7\u5230\u817e\u8baf\u89c6\u9891\u89c2\u770b", 1: "\u6839\u636e\u60a8\u5f53\u524d\u7684IP\u5730\u5740\uff0c\u8be5\u5730\u533a\u6682\u4e0d\u63d0\u4f9b\u64ad\u653e", 2: "\u56e0\u7248\u6743\u9650\u5236\uff0c\u6682\u4e0d\u652f\u6301\u64ad\u653e", callback: function (b, c, d) {
        if (0 == parseInt(c) && a.app && d && d.vid) {
            var e = a.html5skin.errorDownloader;
            a.app.check(d).done(function (a) {
                if (a.url) {
                    var c = b.find(".tvp_player_error_content"), d = b.find(".text").html();
                    d = d.substr(0, d.indexOf("(")), e ? (d = e.replace("${errorMsg}", d), d = d.replace("${url}", a.url)) : d = '<a href="' + a.url + '">' + d + "</a>", c.length && c.html(d)
                }
            })
        }
    }}, 81: "referer\u9650\u5236", 82: "qzone\u6743\u9650\u9650\u5236", 83: {main: "\u89c6\u9891\u4ed8\u8d39\u9650\u5236", "-2": "\u60a8\u53ef\u80fd\u672a\u767b\u5f55\u6216\u767b\u5f55\u8d85\u65f6", "-1": "\u89c6\u9891\u72b6\u6001\u975e\u6cd5"}, 84: "\u8bbf\u95eeIP\u662f\u9ed1\u540d\u5355", 85: {main: "CGI\u8bbf\u95eekey\u4e0d\u6b63\u786e", "-1": "key\u957f\u5ea6\u5931\u8d25", "-2": "magicnum\u6821\u9a8c\u5931\u8d25", "-3": "\u65f6\u95f4\u6821\u9a8c\u5931\u8d25", "-4": "platform\u6821\u9a8c\u5931\u8d25", "-5": "clientVer\u6821\u9a8c\u5931\u8d25", "-6": "encryptVer\u6821\u9a8c\u5931\u8d25"}, 86: "CGI\u8bbf\u95ee\u9891\u7387\u9650\u5236", 500: {main: "\u83b7\u53d6\u670d\u52a1\u5668\u6570\u636e\u5931\u8d25", 1: "getinfo failed", 2: "getkey failed"}}, getErrMsg: function (c, d) {
        if (isNaN(c))return"";
        if (c in a.html5lang.errMsg) {
            var e = a.html5lang.errMsg[c];
            if (b.isString(e))return e;
            if (b.isPlainObject(e)) {
                var f = [e.main, e.main ? "," : "", d in e ? e[d] : ""].join("");
                return f || a.html5lang.errMsg["default"]
            }
        }
        return a.html5lang.errMsg["default"]
    }, definition: {mp4: "\u9ad8\u6e05", msd: "\u6d41\u7545"}, srtLang: {50001: {srclang: "zh-cn", desc: "\u7b80\u4f53\u4e2d\u6587"}, 50002: {srclang: "zh-cn", desc: "\u7b80\u4f53\u4e2d\u6587"}, 50003: {srclang: "zh-tw", desc: "\u7e41\u4f53\u4e2d\u6587"}, 50004: {srclang: "en", desc: "\u82f1\u6587"}, 50005: {srclang: "zh-cn,en", desc: "\u7b80\u4f53\u4e2d\u6587&\u82f1\u6587"}, 50006: {srclang: "zh-tw,en", desc: "\u7e41\u4f53\u4e2d\u6587&\u82f1\u6587"}}, durationLimit: {msg: "5\u5206\u949f\u770b\u7684\u4e0d\u591f\u723d\uff1f\u817e\u8baf\u89c6\u9891\u6709\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u6765\u770b~", padMsg: "\u672c\u8282\u76ee\u53ea\u63d0\u4f9b5\u5206\u949f\u9884\u89c8\u3002\u817e\u8baf\u89c6\u9891\u5ba2\u6237\u7aef\u53ef\u4ee5\u89c2\u770b\u9ad8\u6e05\u5b8c\u6574\u7248\uff0c\u7b49\u4f60\u5594~", download: "\u4e0b\u8f7dAPP", padPlay: "\u7acb\u5373\u64ad\u653e", play: "\u7ee7\u7eed\u64ad\u653e", replay: "\u91cd\u65b0\u64ad\u653e", open: "\u53bb\u770b\u5b8c\u6574\u7248"}, liveDownloader: {downloadText: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad", openText: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u89c2\u770b\u89c6\u9891\u76f4\u64ad"}, getDefiName: function (b) {
        return b in a.html5lang.definition ? a.html5lang.definition[b] : ""
    }, getSrtName: function (b) {
        return b in a.html5lang.srtLang ? a.html5lang.srtLang[b].desc : ""
    }}
}(tvp, tvp.$), tvp.html5skin = {defaultError: function () {
    return['<div class="tvp_container">', '	<div class="tvp_player_error" id="$ERROR-TIPS-INNER$">', '       <div class="tvp_player_error_row">', '		<div class="tvp_player_error_content">', '			<p class="text">$ERROR-MSG$ $ERROR-DETAIL$</p>', "		</div>", "       </div>", "	</div>", "</div>"].join("")
}(), errorDownloader: function () {
    return['<div class="tvp_player_goto_app">', '	<a href="${url}" class="tvp_download_app_inner">', '       <i class="tpv_icon_download"></i>', '		<span class="tvp_icon_text">${errorMsg}</span>', "	</a>", "</div>"].join("")
}(), durationLimit: function () {
    return['<div style="display:none" class="tvp_limit_tips" data-role="durationLimit">', '   <div class="tvp_limit_tips_inner">', '		<div class="tvp_tips_content">', '			<p class="tvp_tips_text">${msg}</p>', "		</div>", '		<div class="tvp_btn_line">', '			<span data-role="durationLimit-play" class="tvp_btn tvp_btn_try">${play}</span>', '			<span  data-role="durationLimit-replay" class="tvp_btn tvp_btn_try">${replay}</span>', '			<a data-action="applink" ${iframe} href="${url}" data-url="" data-role="durationLimit-download" class="tvp_btn tvp_btn_download">${download}</a>', '			<a data-action="applink" href="" data-url="" data-role="durationLimit-open" class="tvp_btn tvp_btn_download">${open}</a>', "		</div>", "	</div>", "</div>"].join("")
}(), durationLimit_v2_case1: function () {
    return['<div class="tvp_layer_replay tvp_none" data-role="tvp-limit-replay">', '<div class="tvp_overlay_replay">', '<span class="tvp_button_replay"></span>', '<span class="tvp_text" data-role="tvp-limit-replay-text">${replayText}</span>', "</div>", "</div>", '<div class="tvp_overlay_play_try tvp_none" data-role="tvp-limit-play">', '<span class="tvp_button_play"></span>', '<span class="tvp_text" data-role="tvp-limit-play-text">${playText}</span>', "</div>", '<div class="tvp_app_banner tvp_none" data-role="tvp-limit-download">', '<a data-role="tvp-limit-download-btn" href="javascript:;" class="tvp_app_btn" data-status="down">', '<span class="tvp_progress">', '<span class="tvp_progress_current"></span>', "</span>", '<span data-role="tvp-limit-download-text" class="tvp_text" data-text="${download}"></span>', "</a>", "</div>", '<div class="tvp_app_badge" data-role="tvp-limit-timing">', '<a href="javascript:;" data-role="tvp-limit-timing-btn" class="tvp_app_btn tvp_none" data-status="down">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span class="tvp_text" data-text="\u8fd8\u5269" data-role="tvp-limit-timing-text"></span>', "</a>", "</div>"].join("")
}(), durationLimit_v2_case2: function () {
    return['<div class="tvp_external_layer tvp_none" data-role="tvp-limit-main">', '<div class="tvp_external_inner">', '<div class="tvp_overlay_play_try" data-role="tvp-limit-play">', '<span class="tvp_button_play"></span>', '<span class="tvp_text" data-role="tvp-limit-play-text">${playText}</span>', "</div>", '<div class="tvp_layer_replay tvp_none" data-role="tvp-limit-replay">', '<div class="tvp_overlay_replay">', '<span class="tvp_button_replay"></span>', '<span class="tvp_text" data-role="tvp-limit-replay-text">${replayText}</span>', "</div>", "</div>", '<div class="tvp_app_banner tvp_none" data-role="tvp-limit-download">', '<a href="javascript:;" class="tvp_app_btn" data-status="down" data-role="tvp-limit-download-btn">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span data-role="tvp-limit-download-text" class="tvp_text" data-text="${download}"></span>', "</a>", "</div>", "</div>", "</div>", '<div class="tvp_app_badge" data-role="tvp-limit-timing">', '<a data-role="tvp-limit-timing-btn" href="javascript:;" class="tvp_app_btn tvp_none" data-status="down">', '<span class="tvp_text" data-text="\u8fd8\u5269" data-role="tvp-limit-timing-text"></span>', "</a>", "</div>"].join("")
}(), durationLimit_v2_case3: function () {
    return['<div class="tvp_app_badge" data-role="tvp-limit-timing">', '<a data-role="tvp-limit-timing-btn" href="javascript:;" class="tvp_app_btn tvp_none" data-status="down">', '<span class="tvp_progress"><span class="tvp_progress_current"></span></span>', '<span data-role="tvp-limit-timing-text" class="tvp_text" data-text="${timingText}"></span>', "</a>", "</div>"].join("")
}(), liveDownloader: function () {
    return['<div  data-role="liveDownloader" style="z-index:10;display:none"  class="tvp_live_download_app">', '<a data-action="applink" href="${url}" data-url="${liveOpenUrl}" ${iframe} data-role="liveDownloader-btn" class="tvp_download_app_inner">', '<i class="tpv_icon_download"></i>', '<span data-role="liveDownloader-text" class="tvp_icon_text">${downloadText}</span>', "</a>", "</div>"].join("")
}(), follow: function () {
    return'<a class="tvp_follow" data-role="appfollow_followbtn" data-follow="follow">						<span class="tvp_icon_follow"></span>						<span class="tvp_icon_text" data-role="appfollow_followtext">\u5173\u6ce8</span>					</a>					<div class="tvp_follow_hint">						<div class="tvp_hint_title">\u5173\u6ce8\u6210\u529f\uff01</div>						<div class="tvp_hint_desc" data-role="bannerText">{FOLLOWTEXT}</div>					</div>'
}()}, function (a, b) {
    a.BaseHtml5 || (a.BaseHtml5 = function () {
        this.protectedFn = {}, this.h5EvtAdapter = {}, this.eventList = this.eventList.concat(["html5error"]), this.html5AttrList = {autoplay: "autoplay", "x-webkit-airplay": "isHtml5UseAirPlay", "webkit-playsinline": "isiPhoneShowPlaysinline"}, this.$videomod = null
    }, a.BaseHtml5.fn = a.BaseHtml5.prototype = new a.BasePlayer, b.extend(a.BaseHtml5.fn, {getPlayer: function () {
        return this.videoTag
    }, getPlayerType: function () {
        return"html5"
    }, createVideoHtml: function () {
        b.browser.WeChat || (this.config.isiPhoneShowPlaysinline = !1), this.playerid = this.config.playerid, this.playerid || (this.playerid = "tenvideo_video_player_" + a.BaseHtml5.maxId++);
        var c = ['<video id="', this.playerid, '" width="100%" height="100%" '].join(""), d = this;
        this.config.isHtml5UseUI && (b.os.iphone || b.os.ipod) && this.config.isIOSVideoOffset && !this.config.isiPhoneShowPlaysinline && (c += 'style="position:absolute;top:-200%;left:-200%"'), this.config.isHtml5UseUI && this.config.isHtml5ShowPosterOnStart && b.os.android && (c += b.browser.UC ? 'style="position:absolute;left:-200%;"' : 'style="position:absolute;top:-200%;"', setTimeout(function () {
            if (d.videoTag && 1 == d.$video.size()) {
                var a = !1;
                d.$video.one("playing", function () {
                    a || (a = !0, d.videoTag.style.cssText = "")
                }).one("tvp:h5ui:playbtn:click", function () {
                    a || (a = !0, d.videoTag.style.cssText = "")
                })
            }
        }, 100));
        for (var e in this.html5AttrList) {
            c += " ";
            var f = this.html5AttrList[e], g = "";
            if ("" == f)g = ""; else {
                if (!(f in this.config))continue;
                g = this.config[f]
            }
            g !== !1 && "disabled" != g && 0 !== g && ("autoplay" == e && this.config.isHtml5ShowLoadingAdOnStart || (c += e, "autoplay" != e || 1 != g ? "" != g && (c += ["=", g].join("")) : c += '="autoplay"'))
        }
        if (!this.isUseControl && b.os.iphone && !this.config.isiPhoneShowPlaysinline) {
            var h = this.config.html5ForbiddenUIFeature.join("-");
            h.indexOf("controlbar") > -1 && (this.isUseControl = !0)
        }
        this.isUseControl && (c += " controls ");
        var i = this.curVideo.getPoster();
        return b.isString(i) && i.length > 0 && -1 == b.inArray("posterlayer", this.config.html5VodUIFeature) && (c += " poster='" + i + "'"), i || !this.config.pic || this.config.isHtml5UseUI || (c += " poster='" + this.config.pic + "'"), c += "></video>"
    }, write: function (c) {
        var d = null;
        if ("object" == b.type(c) && 1 == c.nodeType ? (d = c, this.$mod = b(c), this.modId = this.$mod.attr("id") || "") : (d = a.$.getByID(c), this.modId = c, this.$mod = b("#" + c)), d) {
            var e = this.createVideoHtml(), f = "mod_" + this.playerid;
            d.innerHTML = '<div id="' + f + '">' + e + "</div>", this.videomod = b.getByID(f), this.$videomod = b(this.videomod), this.$videomod.width(b.formatSize(this.config.width)).height(b.formatSize(this.config.height)), this.videoTag = b.getByID(this.playerid), this.$video = b(this.videoTag), this.registerMonitor(), this.bindEventAdapt(), this.checkPlayerSize()
        }
    }, checkPlayerSize: function () {
        function a() {
            b.isFullScreen || setTimeout(function () {
                var a = b.config.width, d = b.config.height, e = parseInt(c.width(), 10), f = parseInt(c.height(), 10);
                d.toString().indexOf("%") > -1 || f > e && (f = parseInt(9 * e / 16, 10), e = a, b.resize(e, f))
            }, 100)
        }

        var b = this, c = this.$videomod ? this.$videomod : this.$elements;
        this.config.isCheckPlayerSize && c && (a(), window.addEventListener("onorientationchange"in window ? "orientationchange" : "resize", function () {
            a()
        }, !1))
    }, resize: function (a, c) {
        this.config.width = a, this.config.height = c;
        var d = this.$videomod ? this.$videomod : this.$elements;
        d && (d.width(b.formatSize(a)).height(b.formatSize(c)), d.trigger("tvp:resize"))
    }, showError: function (c, d, e) {
        var f = this;
        setTimeout(function () {
            var g = f.getCBEvent("showError");
            if (b.isFunction(g) && g != f.showError)g.call(f, c, d, e); else if (b.isFunction(f.config.showError))f.config.showError.call(f, c, d, e); else {
                var h = a.html5skin.defaultError, i = f.playerid + "_errtips_inner", j = "\u9519\u8bef\u7801:" + c, k = d || 0 == d ? "_" + d : "";
                a.html5lang.errMsg[c] && a.html5lang.errMsg[c].nocode && (k = ""), h = h.replace("$ERROR-TIPS-INNER$", i).replace("$ERROR-MSG$", e || a.html5lang.getErrMsg(c, d)).replace("$ERROR-DETAIL$", "(" + j + k + ")");
                var l = b(f.videomod), m = b(h).appendTo(l).show();
                l.html(""), m.appendTo(l);
                try {
                    a.html5lang.errMsg[c] && a.html5lang.errMsg[c].callback && a.html5lang.errMsg[c].callback(m, d, {vid: f.curVideo.getVid()})
                } catch (n) {
                }
            }
        }, 250), this.callCBEvent("onerror", c, d)
    }, isUseH5UIFeature: function (a) {
        return b.inArray(a, this.config.html5VodUIFeature) >= 0
    }, isForbiddenH5UIFeature: function (a) {
        return b.inArray(a, this.config.html5ForbiddenUIFeature) >= 0
    }, callProtectFn: function (a) {
        b.isFunction(this.protectedFn[a]) && this.protectedFn[a].call(this)
    }, registerMonitor: function () {
        b.isFunction(this.buildmonitor) && this.buildmonitor.call(this)
    }, bindEventAdapt: function () {
        var a = ["-empty", "-abort", "-loadstart", "-can-play", "-can-play-through", "-loaded-data", "-loaded-metadata", "-abort", "-error", "-pause", "-paused", "-waiting", "-stalled", "-suspend", "-play", "-volume-change", "-playing", "-seeked", "-seeking", "-duration-change", "-progress", "-rate-change", "-timeupdate", "-ended"], c = this;
        b.each(a, function (a, d) {
            var e = "on" + b.camelCase(d), f = c.h5EvtAdapter[e];
            b.isFunction(f) && c.$video.on(d.replace(/-/g, ""), function (a) {
                var d = c.h5EvtAdapter[e];
                b.isFunction(d) && d.call(c, this, a)
            })
        })
    }}), a.BaseHtml5.maxId = 0)
}(tvp, tvp.$), function (a, b) {
    function c() {
        return b.os.android && !i && !b.os.HTC && !b.os.VIVO && b.os.version >= "4.0" && !(b.browser.AndriodBrowser && b.browser.version < "30") && 0 != navigator.userAgent.indexOf("ZTE U930")
    }

    function d(c, d) {
        var e = c.currentTime, f = 0, g = !1, h = null;
        i = !0, c.play(), c.addEventListener("playing", function () {
            clearTimeout(h), h = setTimeout(n, 320)
        }, !1);
        var j = function (c, e) {
            var f = {cmd: 3547, val: c};
            d && d.config && (f.contentId = d.config.contentId, f.appId = d.config.appid || d.config.appId), e = e || {}, f = b.extend(f, e), a.report(f)
        }, k = !1, l = !1, m = 1e4, n = function () {
            a.debug("cb"), c.currentTime != e || g ? (g = !0, k && !l && (j(f, {int5: 1}), l = !0)) : (f++, c.play(), f % 10 == 0 && c.currentTime == e && (c.load(), c.play(), k || (j(f), k = !0), h = setTimeout(n, m)))
        }
    }

    function e(c, d) {
        this.videoTag = null, this.$video = null, this.config.width = a.$.filterXSS(c), this.config.height = a.$.filterXSS(d), this.protectedFn = {}, this.isUseControl = !0, b.extend(this.h5EvtAdapter, {onEnded: function () {
            if (!this.isPlayingLoadingAd()) {
                this.$video.trigger("tvp:player:ended"), this.callCBEvent("onended", g);
                var c = "", d = this.curVideo.getVidList().split("|"), e = b.inArray(g, d);
                if (e > -1 && e < d.length - 1 && (c = d[e + 1]), "" != c)return void this.play(c);
                this.callCBEvent("onallended"), this.$video.trigger("tvp:player:allended"), this.config.isHtml5ShowPosterOnEnd && this.setPoster(), this.config.isShowDurationLimit && this.DurationLimitInstance && this.DurationLimitInstance.show(1);
                var f = this.callCBEvent("ongetnext", g, this.curVideo);
                f && f instanceof a.VideoInfo && this.play(f)
            }
        }, onError: function (b, c) {
            if (a.report({cmd: 3525, appId: this.config.appid, contentId: this.config.contentId, vid: this.curVideo.lastQueryVid, str4: navigator.userAgent}), c.target.currentSrc.indexOf(".m3u8") > 0)return a.debug("play hls error,reload play mp4..."), void this.play(this.curVideo.lastQueryVid, this.config.autoplay, !1);
            var d = -1;
            c.target && c.target.error && (d = c.target.error.code), 4 == d && this.showError(0, d)
        }, onPlaying: function () {
            this.callCBEvent("onplaying", g, this.curVideo), this.isShowingDurationLimit() && this.pause()
        }, onTimeupdate: function () {
            this.callCBEvent("ontimeupdate", g, this.$video)
        }, onPause: function () {
            b.os.android && this.config.isHtml5UseUI && this.$video.addClass("tvp_video_with_skin"), this.callCBEvent("onpause", g, this.$video)
        }})
    }

    if (!a.Html5Tiny) {
        var f = !1, g = "", h = null, i = !1;
        e.fn = e.prototype = new a.BaseHtml5, b.extend(e.prototype, {registerPlugins: function () {
            var c = this, d = [];
            b.each(d, function (d, e) {
                try {
                    var f = "build" + e;
                    b.isFunction(c[f]) && c[f](c)
                } catch (g) {
                    a.debug("[registerPlugins]:" + g.message)
                }
            })
        }, write: function (e) {
            a.BaseHtml5.prototype.write.call(this, e), this.config.specialVideoFileDomain && a.h5Helper && b.isFunction(a.h5Helper.setSpecialVideoFileDomain) && a.h5Helper.setSpecialVideoFileDomain(this.config.specialVideoFileDomain), this.registerPlugins(), this.callProtectFn("onwrite"), this.play(this.curVideo, this.config.autoplay);
            var f = this;
            this.$video.one("timeupdate", function () {
                c() && d(f.videoTag, f)
            }), b.os.android && b.browser.WeChat && this.$video.one("click", function () {
                this.load()
            })
        }}), b.extend(e.prototype, {pause: function () {
            this.videoTag.pause()
        }, getCurVid: function () {
            return"" == g ? this.curVideo instanceof a.VideoInfo ? this.curVideo.getVid() : "" : g
        }, play: function (c, d, e) {
            function h(e) {
                e = !!e, i.$video.trigger("tvp:video:ajaxstart", c instanceof a.VideoInfo ? c.getVid() : c, e);
                var j, k, l = e ? i.curVideo.getHLS : i.curVideo.getMP4Url, m = b.Deferred();
                !e && i.curVideo.callGetMp4UrlDefer && i.curVideo.callGetMp4UrlDefer.done(function (a) {
                    a && b.isFunction(a.done) && (k = a, i.curVideo.callGetMp4UrlDefer = null)
                }), k || (k = l.call(i.curVideo, c)), a.Html5UI && b.isFunction(a.Html5UI.fn.buildloadingAd) && i.config.isHtml5UseUI && (i.config.isHtml5ShowLoadingAdOnStart || i.config.isHtml5ShowLoadingAdOnChange) ? i.$video.one("tvp:loadingad:ended", function () {
                    m.resolve()
                }) : m.resolve(), k.done(function (b) {
                    j = b, i.$video.trigger("tvp:video:ajaxsuc", b), i.config.isShowDurationLimit && a.html5DurationLimit.create(i)
                }), b.when(k, m).done(function (a) {
                    a = a || j, b.os.android && b.browser.wechat && (a += "&nocache=1&time=" + (new Date).getTime()), i.isGetingInfo = !1, i.videoTag.preload = navigator.platform.indexOf("Win") > -1 ? "none" : "auto", !b.browser.WeChat && "setAttribute"in i.videoTag ? i.videoTag.setAttribute("src", a) : i.videoTag.src = a, i.$video.trigger("tvp:video:src"), f || (f = !0, i.callCBEvent("oninited")), i.callCBEvent("onplay", i.curVideo.lastQueryVid, i.curVideo), d && (i.videoTag.load(), i.videoTag.play());
                    var c = i.curVideo.getTagStart() || i.curVideo.getHistoryStart() || 0;
                    c > 0 && i.seek(c)
                }).fail(function (b, c) {
                    return e ? (a.debug("get hls url fail,reload mp4..."), void h(!1)) : (f || (f = !0, i.callCBEvent("oninited")), i.$video.trigger("tvp:video:ajaxerror"), i.$video.trigger("tvp:video:error", b, c), i.showError(b, c), void(i.isGetingInfo = !1))
                }).always(function () {
                    g = i.curVideo.lastQueryVid
                })
            }

            var i = this, j = !1;
            if (b.isUndefined(d) && (d = !0), b.isUndefined(e) && (e = this.config.isHtml5UseHLS), b.isUndefined(c))return i.videoTag.pause(), i.videoTag.load(), void i.videoTag.play();
            if (c instanceof a.VideoInfo) {
                if (j = c.getVid() != g && "" != g, i.setCurVideo(c), j && (i.callCBEvent("onchange", i.curVideo.getFullVid()), this.$video.trigger("tvp:player:videochange"), b.os.iphone))try {
                    i.videoTag.pause(), i.videoTag.play()
                } catch (k) {
                }
                c.setPid(b.createGUID()), g = i.curVideo.getFullVid()
            }
            i.config.isHtml5ShowPosterOnChange && i.setPoster(), i.isGetingInfo = !0;
            try {
                i.videoTag.pause()
            } catch (k) {
            }
            var l = !1;
            "auto" === e ? a.common.isUseHLS() ? a.h5Helper.loadIsUseHLS({vid: g}).done(function (a) {
                l = 3 == a
            }).fail(function () {
                l = !1
            }).always(function () {
                h.call(i, l)
            }) : (l = !1, h.call(i, l)) : (l = e, h.call(i, l))
        }, seek: function (a) {
            if (!isNaN(a)) {
                a = Math.min(a, this.getDuration() - 5), a = Math.max(a, 0);
                var b = this, c = null;
                c && (clearTimeout(c), c = null);
                var d = this.videoTag.seekable;
                1 == d.length && a < d.end(0) ? this.seekTo(a) : c = setTimeout(function () {
                    b.seek(a)
                }, 100)
            }
        }, seekTo: function (a) {
            var b = this;
            try {
                this.videoTag.currentTime = a, this.videoTag.paused && this.videoTag.play()
            } catch (c) {
                this.$video.one("canplay", function () {
                    b.videoTag.currentTime = a, b.videoTag.paused && b.videoTag.play()
                })
            }
        }, getCurTime: function () {
            return this.videoTag.currentTime
        }, getPlaytime: function () {
            return this.getCurTime()
        }, setPlaytime: function (a) {
            this.seek(a)
        }, checkIsPlayingLoop: function (a) {
            a = a || 0;
            var b = this;
            this.playinglooptimer && clearTimeout(this.playinglooptimer), 0 === this.videoTag.currentTime && 30 >= a && (this.videoTag.load(), this.videoTag.play(), this.playinglooptimer = setTimeout(function () {
                b.checkIsPlayingLoop(++a)
            }, 1e3))
        }, setPoster: function () {
            var a = this.curVideo.getPoster();
            a || !this.config.pic || this.config.isHtml5UseUI || (a = this.config.pic), b.isString(a) && a.length > 0 ? this.videoTag.poster = a : this.hidePoster()
        }, hidePoster: function () {
            this.videoTag.removeAttribute("poster")
        }, getDuration: function () {
            var a = this.curVideo.getDuration();
            return!isNaN(a) && a > 0 ? a : this.videoTag.duration
        }, getFileSize: function () {
            var a = "function" == typeof this.curVideo.getFileSize ? this.curVideo.getFileSize() : 0;
            return!isNaN(a) && a > 0 ? a : 0
        }, checkPause: function () {
            var a = [], b = this;
            h = setInterval(function () {
                b.videoTag.paused || (a.push(b.videoTag.currentTime), a.length >= 2 && (0 == Math.abs(a[0] - a[1]) ? (h && clearInterval(h), a = [], b.videoTag.load(), b.videoTag.play()) : h && clearInterval(h), a = []))
            }, 500)
        }, isPlayingLoadingAd: function () {
            return 1 == this.$video.attr("data-playing-loadingad")
        }, isShowingDurationLimit: function () {
            return this.hasDurationLimit() && this.DurationLimitInstance.isShow
        }, hasDurationLimit: function () {
            return this.DurationLimitInstance = this.DurationLimitInstance || this.instance.DurationLimitInstance, this.config.isShowDurationLimit && this.DurationLimitInstance && this.DurationLimitInstance.enable
        }}), a.Html5Tiny = e
    }
}(tvp, tvp.$), function (a, b) {
    b.extend(a.BaseHtml5.fn, {enterFullScreen: function () {
        var a = this, b = this.$mod[0], c = 0;
        if (b.webkitRequestFullScreen)return void b.webkitRequestFullScreen();
        if (this.videoTag.webkitSupportsFullscreen)if (this.videoTag.readyState >= 1)this.videoTag.webkitEnterFullscreen(); else {
            if (++c >= 30)return;
            setTimeout(function () {
                a.enterFullScreen()
            }, 200)
        }
    }})
}(tvp, tvp.$), function (a, b) {
    b.extend(a.Html5Tiny.fn, {swtichDefinition: function (a) {
        if (this.curVideo.getFormat() != a) {
            this.pause();
            var b = this.getCurTime(), c = this, d = null;
            this.curVideo.setFormat(a), this.$video.one("canplay canplaythrough", function () {
                c.isDefinitionSwitching && (setTimeout(function () {
                    c.seek(b)
                }, 500), d = setInterval(function () {
                    c.videoTag.currentTime >= b && (clearInterval(d), d = null, c.isDefinitionSwitching = !1)
                }, 50))
            }), this.isDefinitionSwitching = !0, this.play(this.curVideo)
        }
    }})
}(tvp, tvp.$), function (a, b) {
    function c() {
    }

    var d = {1: {promotionId: 755, downloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=755&platform=aphone", texts: {download: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u770b\u7cbe\u5f69\u5b8c\u6574\u7248", downloading: "\u6b63\u5728\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u9a6c\u4e0a\u5c31\u80fd\u770b\u54df", pause: "\u5df2\u6682\u505c\uff0c\u70b9\u51fb\u6062\u590d\u4e0b\u8f7d", install: "\u4e0b\u8f7d\u5df2\u5b8c\u6210\uff0c\u70b9\u51fb\u5b89\u88c5", afterInstall: "\u5b89\u88c5\u5df2\u5b8c\u6210\uff0c\u8bf7\u6253\u5f00\u817e\u8baf\u89c6\u9891\u770b\u5b8c\u6574\u7248", afterInstall_1: "\u6253\u5f00\u817e\u8baf\u89c6\u9891\uff0c\u770b\u7cbe\u5f69\u5b8c\u6574\u7248", _downloading: "\u6b63\u5728\u4e0b\u8f7d", _pause: "\u70b9\u51fb\u6062\u590d", _install: "\u7acb\u5373\u5b89\u88c5", _afterInstall: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a", _afterInstall_1: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a", playText: "\u8bd5\u770b${limitTime}\u5206\u949f", replayText: "\u91cd\u65b0\u64ad\u653e", timingText: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a"}}, 2: {promotionId: 756, downloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=756&platform=aphone", texts: {download: "\u4e0b\u8f7d\u817e\u8baf\u89c6\u9891\uff0c\u770b\u7cbe\u5f69\u5b8c\u6574\u7248", playText: "\u8bd5\u770b${limitTime}\u5206\u949f", replayText: "\u91cd\u65b0\u64ad\u653e", timingText: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a"}}, 3: {promotionId: 754, downloadUrl: "http://mcgi.v.qq.com/commdatav2?cmd=4&confid=754&platform=aphone", texts: {download: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a", downloading: "\u6b63\u5728\u4e0b\u8f7d", pause: "\u70b9\u51fb\u6062\u590d", install: "\u7acb\u5373\u5b89\u88c5", afterInstall: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a", timingText: "\u817e\u8baf\u89c6\u9891\u770b\u66f4\u591a"}, per: 20, disable: []}, case_regx: [/MicroMessenger/i, /QQ\/(\d+\.(\d+)\.(\d+)\.(\d+))/i], name: "durationLimit_v2", downloader: !0, range: [1, 2]}, e = b.os.hasTouch ? "touchend" : "click", f = "tvp_none";
    b.extend(c.prototype, {build: function (b) {
        if (this.t = b, b && 1 != b.config.type && (!a.app || a.app.isSupportApp) && b.config.isHtml5UseUI) {
            var c = b.curVideo.data;
            this.vid = b.curVideo.getVid(), c && c.exem && c.preview && (b.curVideo.setDuration(c.preview.toString()), this.timeRemainVal = c.preview, this.enable = !0, b.trigger("tvp.durationlimit.enable")), this.info = {}, this.load_config()
        }
    }, load_config: function () {
        var a = this, c = "http://v.qq.com/iframe/limit_conf.js";
        try {
            b.getScript(c, function () {
                if (a.build_conf(), a.limitCase) {
                    if (3 === a.limitCase) {
                        var b = parseInt(100 * Math.random(), 10) + 1;
                        if (a.op.hasOwnProperty("per") && b > a.op.per)return;
                        if (a.hasAppBanner())return
                    }
                    a.init()
                }
            })
        } catch (d) {
        }
    }, build_conf: function () {
        this.limitCase = this.getCase();
        var c = window.g_limit_conf || {}, e = this.t.configs || {}, f = d[this.limitCase];
        c = c[this.limitCase], this.op = {}, b.extend(this.op, f, c, e), this.op.appName = a.app.config.defaultName, this.op.name = d.name, this.op.downloader = d.downloader, this.op.range = d.range
    }, init: function () {
        var c = this, e = a.html5skin[d.name + "_case" + this.limitCase], f = this.op.texts, g = this.t.curVideo.data, h = g.preview - 29;
        h = h > 0 ? h : 1, f.limitTime = Math.ceil(h / 60), f.playText = b.formatTpl(f.playText, f), e = b.formatTpl(e, f), this.op.texts = f, this.$mod = this.t.$UILayer || this.t.$videomod, this.$mod.addClass("tvp_container"), this.element = b(e).appendTo(this.$mod), this.setRole(), this.initStyle(), this._bindEvents(), this.videoListener(), (1 === this.limitCase || 2 === this.limitCase) && !c.hasPauseBanner() && setInterval(function () {
            c.info.has_click_download || c.timeRemain()
        }, 500)
    }, setRole: function () {
        this.$play = this.$mod.find("[data-role=tvp-limit-play]"), this.$replay = this.$mod.find("[data-role=tvp-limit-replay]"), this.$time = this.$mod.find("[data-role=tvp-limit-timing]"), this.$time_btn = this.$mod.find("[data-role=tvp-limit-timing-btn]"), this.$time_text = this.$mod.find("[data-role=tvp-limit-timing-text]"), this.$download = this.$mod.find("[data-role=tvp-limit-download]"), this.$download_btn = this.$mod.find("[data-role=tvp-limit-download-btn]"), this.$download_text = this.$mod.find("[data-role=tvp-limit-download-text]"), this.$case2_main = this.$mod.find("[data-role=tvp-limit-main]"), this.$btns = b([this.$download_btn.get(0), this.$time_btn.get(0)]), this.$boxs = b([this.$download.get(0), this.$time.get(0)])
    }, initStyle: function () {
        var c = this;
        c.show(!1), a.app.getAppMd5(c.op.promotionId, c.op.appName).done(function (d) {
            d && d.md5 && (c.op.md5 = d.md5, d.url ? c.op.downloadUrl = d.url : ""), b.os.ios && (c.op.downloadUrl = a.app.getDownloadUrl("", c.op.appName)), c.$btns.attr({href: c.op.downloadUrl, "data-downloadurl": c.op.downloadUrl, "data-downloadmd5": c.op.md5, "data-promotionId": c.op.promotionId}), c.checkBtn()
        })
    }, hasAppBanner: function () {
        var a = this;
        return b.createAppFollow || a.t && a.t.config && a.t.config.plugins && (a.t.config.plugins.AppBanner || a.t.config.plugins.AppFollow) ? !0 : !1
    }, isOpenCase3: function () {
        var c = this;
        if ("all" === this.op.disable)return!1;
        if (!b.isArray(c.op.disable))return!0;
        var d = function () {
            var b, c, d = a.app.pageType;
            try {
                c = top.location.host
            } catch (e) {
                c = null
            }
            return b = 1 === d ? "mp.weixin.qq.com" === c ? 1 : "view.inews.qq.com" === c ? 2 : 3 : 2 === d ? "view.inews.qq.com" === c ? 4 : 5 : 3 === d ? 6 : 7
        }, e = d();
        return 0 === e ? !1 : -1 === b.inArray(e, c.op.disable) ? !0 : !1
    }, hasPauseBanner: function () {
        return!this.isOpenCase3()
    }, videoListener: function () {
        var a = this;
        this.t.$video.on("pause", function () {
            if (!(a.t.control && a.t.control.isTouching || b.isFunction(a.t.isPlayingLoadingAd) && a.t.isPlayingLoadingAd())) {
                var c = this.currentTime > 0 && Math.ceil(this.currentTime) == Math.ceil(this.duration);
                a.hideControl(), a.show(c, 400), a.hasPauseBanner() || 3 === a.limitCase && a.info.has_click_download && !a.hasAppBanner() && (a.$time_btn.removeClass(f), a.timer = null)
            }
        }).on("play", function () {
            a.hide()
        }).on("playing", function () {
            (1 === a.limitCase || 2 === a.limitCase) && (!a.hasAppBanner() && a.info.has_click_download ? a.$time_btn.addClass(f) : !a.hasAppBanner() && a.$time_btn.removeClass(f), a.info && !a.info.has_click_download && a.$download.addClass(f))
        }).on("ended", function () {
            a.show(!0)
        }), !a.hasPauseBanner() && this.t.$video.on("timeupdate", function () {
            if (a.timeRemainVal = parseInt(this.duration - this.currentTime), !a.hasAppBanner()) {
                if (a.info.has_click_download)return a.$time_btn.removeClass(f), a.timer && clearTimeout(a.timer), void(a.timer = null);
                if (a.is_case3_dl_show(parseInt(this.currentTime, 10))) {
                    if (a.$time_btn.removeClass(f), a.timer)return;
                    a.timer = setTimeout(function () {
                        a.$time_btn.addClass(f), a.timer = null
                    }, 1e4)
                }
            }
        })
    }, show: function (a, b) {
        b = b || 0;
        var c = this;
        setTimeout(function () {
            (1 !== c.limitCase && 2 !== c.limitCase || !c.hasAppBanner()) && c.$download.removeClass(f)
        }, b), a && (this.$replay.removeClass(f), this.$play.addClass(f)), !a && (this.$replay.addClass(f), this.$play.removeClass(f)), 3 !== this.limitCase && this.$time_btn.addClass(f), 2 === this.limitCase && this.$case2_main.removeClass(f), 3 !== this.limitCase && this.t.trigger("tvp.durationlimit.show")
    }, hide: function () {
        var a = this;
        return 2 === this.limitCase ? void this.$case2_main.addClass(f) : (!this.info.has_click_download && this.$download.addClass(f), this.$replay.addClass(f), this.$play.addClass(f), 3 !== this.limitCase ? !a.hasPauseBanner() && !a.hasAppBanner() && this.$time_btn.removeClass(f) : !this.info.has_click_download && this.$time_btn.addClass(f), void(3 !== this.limitCase && this.t.trigger("tvp.durationlimit.hide")))
    }, is_case3_dl_show: function (a) {
        var b = this;
        return 3 !== b.limitCase ? !1 : 5 === a || 65 === a ? !0 : (a - 5) % 120 === 0 ? !0 : !1
    }, timeRemain: function () {
        if (this.timeRemainVal) {
            var a = parseInt(this.timeRemainVal / 60), b = this.timeRemainVal % 60, b = 10 > b ? "0" + b : b, a = 10 > a ? "0" + a : a, c = a + ":" + b;
            this.$time_text.attr("data-text", "\u8fd8\u5269 " + c)
        }
    }, getCase: function () {
        var a, c = navigator.userAgent.toLowerCase();
        a = window.g_limit_conf && window.g_limit_conf.case_regx ? window.g_limit_conf.case_regx : d.case_regx;
        var e = !1;
        return b(a).each(function (a, b) {
            return b.test(c) ? (e = !0, !0) : void 0
        }), this.enable ? e ? 1 : 2 : e ? 3 : null
    }, fixBtn: function () {
        var a = this;
        this.info.hasApp ? (a.$btns.attr({"data-status": "open", "data-url": a.info.openUrl, href: a.info.openUrl}), 1 === this.limitCase && this.$download_text.attr({"data-text": a.op.texts.afterInstall_1})) : a.$btns.attr({"data-url": a.info.openUrl, href: a.op.downloadUrl})
    }, checkBtn: function () {
        var c = this;
        a.app.check({vid: c.vid, downloadUrl: c.op.downloadUrl, md5: c.op.md5}).done(function (a) {
            c.info || (c.info = {}), /from=\d+_/.test(a.openUrl) || (a.openUrl += "&from=" + c.op.promotionId + "_"), c.info.openUrl = a.openUrl, a && (c.info.hasApp = a.hasApp, c.fixBtn(), 2 !== this.limitCase && c.bindDownloader(c.$boxs, c.$btns), c.info.hasApp ? (c.$btns.on(e, function () {
                c._reportStep(7, 3)
            }), c._reportStep(6, 3)) : (b.os.ios || 2 === c.limitCase) && (c._reportStep(1, 1), c.$btns.on(e, function () {
                c._reportStep(2, 1)
            })))
        })
    }, bindDownloader: function (b, c) {
        var d = this, e = {downloader: d.op.downloader, downloadUrl: d.op.downloadUrl, md5: d.op.md5, range: d.op.range};
        if (!this.hascheckDownloader) {
            this.hascheckDownloader = !0;
            var f = {t: d.t, downloadInstance: d, downloadBox: b, downloadBtn: c, range: d.op.range, appName: d.op.appName, downloadMd5: d.op.md5};
            a.app.checkCanDownloader(d.info.hasApp, e, f)
        }
    }, hideControl: function () {
        this.t.control && this.t.control.$UILayer && this.t.control.$UILayer.addClass("tvp_controls_hide")
    }, _bindEvents: function () {
        var c = this, d = this.t, f = d.$video[0], g = !1;
        d.config.isHtml5UseUI && (g = this.$mod.find(a.html5skin.elements.overlay.play));
        var h = function (a) {
            g && b.isFunction(g.trigger) ? g.trigger(e) : (a && f.load(), f.play())
        };
        this.$play.on(e, function () {
            h()
        }), this.$replay.on(e, function () {
            h(1)
        }), this.downloadState(), a.app.bindTryOpenAppBanner && a.app.bindTryOpenAppBanner({$btn: c.$btns, rewriteText: a.$.noop})
    }, downloadState: function () {
        var a, b, c, d = this;
        if (2 !== this.limitCase) {
            1 === this.limitCase ? (a = d.$btns, b = d.$download_text, c = d.$time_text) : (a = d.$time_btn, b = d.$time_text);
            var e = function () {
                d.timer && clearTimeout(d.timer), d.timer = null, d.timer = setTimeout(function () {
                    d.$btns.addClass(f)
                }, 1e4)
            }, g = function (f) {
                d.info.has_click_download = "downloading" === f ? !0 : !1;
                var g;
                g = "afterInstall" === f ? "open" : f, a && a.attr({"data-status": g, href: d.info.openUrl}), b && b.attr("data-text", d.op.texts[f]), c && c.attr("data-text", d.op.texts["_" + f]), 3 !== d.limitCase || "install" !== f && "pause" !== f ? d.timer && clearTimeout(d.timer) && (d.timer = null) : e()
            };
            a.on("tvp:appdownload:complete", function () {
                g("install")
            }).on("tvp:appdownload:downloading", function () {
                g("downloading")
            }).on("tvp:appdownload:pause", function () {
                g("pause")
            }).on("tvp:appdownload:afterInstall", function () {
                g("afterInstall")
            })
        }
    }, _reportStep: function (c, d) {
        var e = this, f = e.t, g = {cmd: 3537, int5: c, str4: d, str8: b.getUrlParam("mmuin"), val: c};
        g.int6 = e.op.promotionId, a.app.report(g, f)
    }}), a.html5DurationLimit = {}, a.html5DurationLimit.create = function (a) {
        return a.DurationLimitInstance = new c, a.DurationLimitInstance.build(a), a.DurationLimitInstance
    }
}(tvp, tvp.$), function (a, b) {
    function c() {
        this.start = a.$.now(), this.end = 0
    }

    function d(d, e) {
        this.vid = d || "", this.player = e, this.rid = e.curVideo.getRid() || b.createGUID(), this.pid = e.curVideo.getPid() || b.createGUID(), this.reportTimer = {};
        var f = b.isFunction(e.getPlayerType) ? e.getPlayerType().toUpperCase() : "", g = "http://rcgi.video.qq.com/report/play?", h = this.getplatform(), i = ["TenPlayer", f, "V2.0"].join(""), j = {version: i, vid: this.vid, rid: this.rid, pid: this.pid, url: window != top ? document.referrer : document.location.href, platform: h, ptag: b.cookie.get("ptag"), pfversion: b.os.version, appid: e.config.appid};
        this.getStepName = function (a) {
            return"report_" + a
        }, this.addStep = function (a) {
            this.reportTimer[this.getStepName(a)] = new c
        }, this.delStep = function (a) {
            delete this.reportTimer[this.getStepName(a)]
        }, this.report = function (c, d, f) {
            var h = [], i = {}, k = {}, l = g;
            if (c) {
                b.extend(k, j), "object" == typeof f && b.extend(k, f);
                try {
                    i.vt = e.curVideo.data.vl.vi[0].ul.ui[0].vt
                } catch (m) {
                    i.vt = 0
                }
                i.vurl = e.curVideo.url, i.bt = parseInt(e.getDuration(), 10), b.extend(k, i), k.step = c, k.ctime = b.getISOTimeFormat(), k.val = d;
                for (var n in k) {
                    var o = k[n];
                    isNaN(o) && (o = encodeURIComponent("" + o)), h.push(n + "=" + o)
                }
                l += h.join("&"), a.report(l)
            }
        }, this.reportStep = function (b, d) {
            if (!(this.reportTimer[this.getStepName(b)]instanceof c))return void a.debug("no timer " + b);
            var e = this.reportTimer[this.getStepName(b)].getTimelong();
            isNaN(e) || 0 >= e || e > 9e6 || (this.report(b, e, d), this.delStep(b))
        }
    }

    c.prototype = {getTimelong: function () {
        if (this.end = a.$.now(), this.end <= 0 || this.start <= 0)return 0;
        var b = this.end - this.start;
        return 0 >= b ? 0 : b
    }, getSeconds: function () {
        return parseInt(this.getTimelong() / 1e3, 10)
    }}, d.fn = d.prototype = {getBusinessId: function () {
        if (b.browser.WeChat)return 6;
        if (b.browser.MQQClient)return 17;
        var a = "";
        if (document.location.href.indexOf("http://v.qq.com/iframe/") >= 0 && window != top) {
            var c = document.referrer;
            if ("" != c) {
                var d = document.createElement("a");
                d.href = c, a = d.hostname, d = null, delete d
            }
        }
        "" == a && (a = document.location.hostname || document.location.host);
        var e = [
            {r: /(\w+\.)?weixin\.qq\.com$/i, v: 6},
            {r: /^(v|film)\.qq\.com$/i, v: 1},
            {r: /^news\.qq\.com$/i, v: 2},
            {r: /(\w+\.)?qzone\.qq\.com$/i, v: 3},
            {r: /(\w+\.)?t\.qq\.com$/i, v: 5},
            {r: /^3g\.v\.qq\.com$/i, v: 8},
            {r: /^m\.v\.qq\.com$/i, v: 10}
        ];
        a = a.toLowerCase();
        for (var f = 0, g = e.length; g > f; f++) {
            var h = e[f];
            if (h.r.test(a))return h.v
        }
        return 7
    }, getDeviceId: function () {
        var a = b.os, c = navigator.userAgent;
        return a.ipad ? 1 : a.windows ? /Touch/i.test(c) ? 8 : /Phone/i.test(c) ? 7 : 2 : a.android ? a.tablet ? 5 : 3 : a.iphone ? 4 : a.Mac ? 9 : 10
    }, getplatform: function () {
        var a = this.getBusinessId(), b = this.getDeviceId();
        return 1e4 * a + 100 * b + 1
    }}, a.H5Monitor = d
}(tvp, tvp.$), function (a, b) {
    b.extend(a.Html5Tiny.fn, {buildmonitor: function () {
        var c = this, d = null, e = 0, f = !1;
        this.$video.on("tvp:video:ajaxstart", function (b, e, g) {
            f = g, d = null, d = new a.H5Monitor(e, c), d.addStep(f ? 1009 : 1011)
        }).on("tvp:video:ajaxsuc", function () {
            d.report(3, 1), d.reportStep(f ? 1009 : 1011, {val1: 1, val2: 0})
        }).on("tvp:video:src", function () {
            e = 0, d.report(4, 1, {val2: 1}), d.addStep(6), d.addStep(30), c.$video.one("canplay", function () {
                d.reportStep(30, {val1: 0, val2: 2})
            }).one("error", function () {
                d.reportStep(30, {val1: 1, val2: 2}), d.report(5, 0, {val1: 3})
            }).one("playing", function () {
                d.reportStep(6, {val1: 1}), d.addStep(5), h({itype: 1}), c.$video.one("tvp:player:ended", function () {
                    d.reportStep(5, {val1: 1}), h({itype: 2})
                }).one("tvp:player:videochange", function () {
                    d.reportStep(5, {val1: 2}), h({itype: 3})
                })
            })
        }).on("waiting", function () {
            1 != ++e && (c.isDefinitionSwitching || c.isTouching || (d.addStep(31), c.$video.one("timeupdate", g)))
        }).one("tvp:h5ui:playbtn:click", function () {
            h({itype: 4})
        });
        var g = function () {
            var a = d.reportTimer[d.getStepName(31)], b = 0;
            return a ? (b = a.getTimelong(), d.report(31, Math.min(1e4, b), {val1: b > 1e4 ? 1 : 0, val2: 2, "ptime ": c.videoTag.currentTime}), void c.$video.off("timeupdate", g)) : void c.$video.off("timeupdate", g)
        }, h = function (d) {
            d = d || {};
            var e = {cmd: 3533, appId: c.config.appid || 0, contentId: c.config.contentId || "", vid: c.curVideo.getFullVid(), init5: c.hasDurationLimit() ? 1 : 0};
            e = b.extend(e, d), a.report(e)
        }
    }})
}(tvp, tvp.$);
/*  |xGv00|b87ca2fd246aa097525022426faa9fcc */