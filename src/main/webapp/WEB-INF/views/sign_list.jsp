<%@page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta HTTP-EQUIV="pragma" CONTENT="no-cache"> 
	<meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate"> 
	<meta HTTP-EQUIV="expires" CONTENT="0"> 
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
	<c:set var="root" value="${pageContext.request.contextPath}"/>
	<title></title>
	<link rel="stylesheet" type="text/css" href="${root }/static/css/style-34bbf0ddf6.css" media="all">
	<link rel="stylesheet" type="text/css" href="${root }/static/css/pc-bb3de3956e.css" media="screen and  (min-width:800px)">
	<link rel="stylesheet" type="text/css" href="${root }/static/css/mobile-3c6540446f.css" media="screen and (max-width:800px)">
	<link rel="stylesheet" href="${root }/static/css/base.css">
	<!--[if lte IE 8]>
        <link  rel="stylesheet" type="text/css" href="css/ie8-42cfc30554.css">
    <![endif]-->
	<link rel="shortcut icon" href="favicon.ico" type="${root }/static/image/vnd.microsoft.icon">
	<link rel="icon" href="favicon.ico" type="${root }/static/image/vnd.microsoft.icon">
	<script type="text/javascript" src="${root }/static/js/variable-d541932543.js"></script>
	<script src="${root }/static/js/jquery.js"></script>
	<script src="${root }/static/js/r_tool.js"></script>
	<script src="${root }/static/js/ua-device.js"></script>
	<script type="text/javascript" src="${root }/static/js/jqmousewhell.js"></script>
	<script type="text/javascript" src="${root }/static/js/unsupport-8950950bc8.js"></script>
	<script src="${root }/static/js/base.js"></script>

	<script language="JavaScript">
		$(function(){
			var loginId = ${sessionScope.loginId};
			window.sessionStorage.setItem("loginId", loginId);
		});
		var is_IE = function (ver) {
			var b = document.createElement('b')
			b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
			return b.getElementsByTagName('i').length === 1
		}
		if (
			document.referrer != '' &&
			document.referrer != null &&
			document.referrer.indexOf('https://ones.ai') !== 0
		) {
			localStorage.setItem('referrer', Rtool.decodeURL(document.referrer));
		};
		var argMap = Rtool.getArgs();
		if (
			argMap.keyword != null &&
			argMap.keyword != ''
		) {
			localStorage.setItem('keyword', argMap.keyword);
		};
	</script>
	<script>
		var _hmt = _hmt || [];
		(function () {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?74b5f61e31435aedafb0ca993b7ffa9e";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();
	</script>
	<!-- start Mixpanel -->
	<script type="text/javascript">
		(function (e, a) {
			if (!a.__SV) {
				var b = window; try { var c, l, i, j = b.location, g = j.hash; c = function (a, b) { return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null }; g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search))) } catch (m) { } var k, h; window.mixpanel = a; a._i = []; a.init = function (b, c, f) {
					function e(b, a) {
						var c = a.split("."); 2 == c.length && (b = b[c[0]], a = c[1]); b[a] = function () {
							b.push([a].concat(Array.prototype.slice.call(arguments,
								0)))
						}
					} var d = a; "undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel"; d.people = d.people || []; d.toString = function (b) { var a = "mixpanel"; "mixpanel" !== f && (a += "." + f); b || (a += " (stub)"); return a }; d.people.toString = function () { return d.toString(1) + ".people (stub)" }; k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
					for (h = 0; h < k.length; h++)e(d, k[h]); a._i.push([b, c, f])
				}; a.__SV = 1.2; b = e.createElement("script"); b.type = "text/javascript"; b.async = !0; b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"; c = e.getElementsByTagName("script")[0]; c.parentNode.insertBefore(b, c)
			}
		})(document, window.mixpanel || []);
		mixpanel.init("5a1fc7bd8faaa6937f18a4fb6c0cb1db");
	</script>
	<!-- end Mixpanel -->

	<style>
		.backBtn {
			position: absolute;
			top: 0;
			bottom: 0;
			margin-top: auto;
			margin-bottom: auto;
			right: 5px;
			height: 40px;
			border-radius: 5px;
			color: white;
			font-size: 20px;
			padding: 5px;
			border: 1px solid #ddd;
		}

		.backBtn1 {
			position: absolute;
			top: 0;
			bottom: 0;
			margin-top: auto;
			margin-bottom: auto;
			margin-right:60px;
			right: 5px;
			height: 40px;
			border-radius: 5px;
			color: white;
			font-size: 20px;
			padding: 5px;
			border: 1px solid #ddd;
		}
		.commentBox {
			position: fixed;
			width: 400px;
			right: 0;
			top: 50%;
			background-color: white;
			padding: 20px;
			z-index: 100;
			transform: translateY(-50%);
		}

		.main-comment {
			height: 40px;
		}

		.main-comment input {
			height: 100%;
			border: 1px solid #ddd;
		}

		.main-comment button {
			height: 100%;
		}
	</style>
</head>


<body style="background-color: #f7f9fa;">
	<div class="top-nav-constance price-top-nav">
		<div class="top-nav normal-width">
			<a class="top-nav-logo" href=""></a>
			<div class="top-hamburger"></div>
			<div class="backBtn1"><a href="${root }/toUpload"  class="">Upload</a></div><br>
			<div class="backBtn"><a href="${root }/login/logout"  class="">logout</a></div>
		</div>
		<div class="price-top tilt-component">
			<div class="tilt-triangle tilt-triangle-bottom-left"></div>
		</div>
		<div class="price-characteristic normal-width">
			<div id="safe" class="">
				<div class="price-characteristic-title tc">Video List</div>
				<ul id="main-list">
					<!-- 
						JS each
					 -->
					<!-- <li class="price-not-margin-right">
						<div class="price-characteristic-img"><img src="images/demo.jpg" width="160" height="180" data-src2x="images/can_useX2-b9f7b5599b.png"></div>
						<div class="price-characteristic-info tc mt10"><b>高可用性保证</b>
							<div class="tj fix"><a class="l default-color" href="">点赞&nbsp;(<span class="default-color">0</span>人赞过)</a><a class="r default-color openGuestbook"
								 href="javascript:void(0)">留言</a></div>
						</div>
					</li> -->
				</ul>
			</div>
		</div>

		<div id="commentBox" class="commentBox normal-width dn btd">
			<div class="rel mt10">
				<h2>Comments</h2>
				<div class="main-comment">
					<input id="comment-text" type="text">
					<button id="sendComment">Post</button>
					<button id="closeComment">Hide</button>
				</div>
			</div>
			<ul id="comment-list" class="mt10">
				<li>haha</li>
				<li>nice</li>
			</ul>
		</div>
</body>
<script src="${root }/static/js/sign_list.js"></script>
<script>
	function logout(){
		window.sessionStorage.removeItem("loginId");
		window.location.href = '${root}/login/logout';
	}
</script>
</html>
