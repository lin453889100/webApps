<%@page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
  <script>
    localStorage.setItem('ct', 'a4bdfaf76afe99e233757ec1e75b8de4a301b4c19668aaa7ebf4e00ea10d5965');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
  <c:set var="root" value="${pageContext.request.contextPath}"/>
  <title>Sign up | ONES</title>
  <link rel="stylesheet" type="text/css" href="${root }/static/css/style-34bbf0ddf6.css" media="all">
  <link rel="stylesheet" type="text/css" href="${root }/static/css/pc-bb3de3956e.css" media="screen and (min-width:800px) only screen and (min-device-pixel-ratio: 2)">
  <link rel="stylesheet" href="${root }/static/css/base.css">
  <link rel="stylesheet" type="text/css" href="${root }/static/css/mobile-3c6540446f.css" media="screen and (max-width:800px)">
  <!--[if lte IE 8]>
        <link  rel="stylesheet" type="text/css" href="css/ie8-42cfc30554.css">
    <![endif]-->
  <script type="text/javascript" src="${root }/static/js/variable-d541932543.js"></script>
  <script src="${root }/static/js/jquery.js"></script>
  <script src="${root }/static/js/r_tool.js"></script>
  <script src="${root }/static/js/base.js"></script>
  
  <script src="${root }/static/js/ua-device.js"></script>
  <script type="text/javascript" src="${root }/static/js/jqmousewhell.js"></script>
  <script type="text/javascript" src="${root }/static/js/unsupport-8950950bc8.js"></script>
  <script language="JavaScript">
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
</head>

<body>
  <div class="top-nav-constance displayHide">
    <div class="top-nav normal-width"><a class="top-nav-logo" href="index.html"></a>
      <div class="top-hamburger"></div>
      <div class="top-nav-ul" data-focus-li="alwaysWhite"><a data-focus="index" href="index.html">首页</a>
        <div data-focus="product" class="product-nav-li"><span id="products" type="button">产品<div class="products-arrow"></div></span>
          <div class="product-nav-dropdown">
            <a class="product-nav-first" href="project.html">
              <div class="product-nav-title">ONES Project</div>
              <div class="product-nav-content">敏捷开发最佳实践</div>
            </a>
            <a href="wiki.html">
              <div class="product-nav-title">ONES Wiki</div>
              <div class="product-nav-content">一起构建团队知识库</div>
            </a>
          </div>
        </div><a data-focus="price" href="price.html">定价</a> <a target="_blank" href="https://help.ones.ai/project/">帮助手册</a>
        <!--<a>解决方案</a>-->
        <!--<a>成功案例</a>-->
        <!--<a>支持</a>--><a class="top-login" href="javascript:void(0)"><span>login</span></a>
        <div class="top-registered"><span class="index-pc">register</span></div>
      </div>
      <!--<div class="top-button index-mobile">-->
      <!--注册-->
      <!--</div>--> 
    </div>
  </div><a href="sign_up.html" class="mobile-top-registered displayHide">Sign up</a>
  <script src="${root }/static/js/top_nav-5c6a0e2d86.js"></script>
  <script type="text/javascript">
      if (isProduction) {
        mixpanel.track("login pageview");
        _hmt.push(['_trackEvent', 'login pageview', 'pageview'])
      } else {
        console.log("login pageview")
      }
  </script>
  <div class="sign-up-bg"></div>
  <div class="sign-up sign-up-small-center">
    <div class="sign-up-hidden-middle"></div>
    <div class="sign-up-content">
      <div class="sign-up-title">
        <div class="sign-up-title-logo"></div>
        <div class="sign-up-step-1 sign-up-step-in_progress sign-up-step">Welcome!</div>
        <div class="sign-up-step-1 sign-up-step-in_progress sign-up-step" style=" left: 255px; color: #4c98f1;"><a href="${root }/login/toLogin">Already have an account?</a></div>
      </div>
      <div class="sign-up-main">
        <div class="sign-up-step-main">
          <div class="sign-up-step-1 sign-up-step-in_progress sign-up-step">
            <div class="normal-input-title">Account(Please use phone number)</div>
            <div class="normal-input-component phone-number"><input id="username"  type="text" maxlength="11" value="" placeholder="11 digits phone number">
              <div class="normal-input-error-area"></div>
            </div>
            <div class="send-verification-code dn" style="display:none">Send verification code</div>
            <div class="normal-input-title">Password</div>
            <div class="normal-input-component sign-up-verification-code"><input id="password"  type="password" maxlength="6" placeholder="6 digit password">
              <div class="verification-code-success"><img src="${root }/static/picture/verification_success-c1ed2b0162.png" width="16" height="16" data-src2x="${root }/static/images/verification_successX2-23ae310f8f.png"></div>
              <div class="normal-input-error-area"></div>
            </div>
            <div class="normal-button" onclick="regist();">Sign up</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="${root }/static/js/sign_up-66e16ca794.js"></script>
  <script src="${root }/static/js/sign_up_invite-b73737cf8c.js"></script>
  <div class="ones-toast ones-toast-error">
    <div class="ones-toast-content">
      <div class="ones-toast-error-img"></div>
      <div class="ones-toast-msg">Account already existed!</div>
    </div>
  </div>
<script>
function regist(){
	var username = $("#username").val();
	var password = $("#password").val();
	if(username == null || username == ''){
		alert("Username is empty");
	} else if(password == null || password == ''){
		alert("Password is empty");
	} else {
	    $.ajax({
	        type: "post",
	        url: "${root}/regist",
	        data: {"username":username,"password":password},
	        success:function(data) {
	            if(data.msg == '1'){
	            	alert("Sign up sucessful");
	            	window.location.href = '${root}/login/toLogin';
	            } else {
	            	alert(data.msg);
	            }
	        }
	    });
	}
}
</script>
</body>

</html>
