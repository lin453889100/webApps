function signUpValidate(e) {
    return ! (checkSingUpEmail(e) || checkPassword(e) || checkMobilePhone(e) || checkVerificationCode(e) || checkCompanyName(e))
}
function checkSingUpEmail(e) {
    var n = $(".sign-up-email input").val().trim(),
    t = !1;
    return e && 0 === n.length && (t = !0, $(".sign-up-email .normal-input-error-area").html("Account is empty").parent().addClass("normal-input-error-area-show"), $(".sign-up-email input").focus()),
    0 !== n.length && Rtool.checkMail(n) && (t = !0, $(".sign-up-email .normal-input-error-area").html("Incorrect format").parent().addClass("normal-input-error-area-show")),
    0 !== n.length && (t || $(".sign-up-email").removeClass("normal-input-error-area-show")),
    t
}
function checkPassword(e) {
    var n = $(".sign-up-password input").val().trim(),
    t = !1;
    return e && 0 === n.length && (t = !0, $(".sign-up-password .normal-input-error-area").html("Password is required").parent().addClass("normal-input-error-area-show"), $(".sign-up-password input").focus()),
    0 !== n.length && (n.length < 8 && (t = !0, $(".sign-up-password .normal-input-error-area").html("Password has to be 6 digits").parent().addClass("normal-input-error-area-show")), t || $(".sign-up-password").removeClass("normal-input-error-area-show")),
    t
}
function checkMobilePhone(e) {
    var n = $(".phone-number input").val().trim(),
    t = !1;
    return e && 0 === n.length && (t = !0, $(".phone-number .normal-input-error-area").html("Phone number is empty").parent().addClass("normal-input-error-area-show"), $(".phone-number input").focus()),
    0 !== n.length && Rtool.checkmobilephonenum(n) && (t = !0, $(".phone-number .normal-input-error-area").html("Incorrect format").parent().addClass("normal-input-error-area-show")),
    0 !== n.length && (t || $(".phone-number").removeClass("normal-input-error-area-show")),
    t
}
function checkVerificationCode(e) {
    var n = $(".sign-up-verification-code input").val().trim(),
    t = !1;
    return e && (0 === n.length ? (t = !0, $(".sign-up-verification-code .normal-input-error-area").html("Verification is required").parent().addClass("normal-input-error-area-show"), $(".phone-number input").focus()) : $(".verification-code-success").hasClass("verification-code-success-show") || (t = !0, $(".sign-up-verification-code .normal-input-error-area").html("验证码无效").parent().addClass("normal-input-error-area-show"))),
    0 !== n.length && (t || $(".sign-up-verification-code").removeClass("normal-input-error-area-show")),
    t
}

function checkVerificationCodeAndRemoteCheck(e, n, event) {
    var t = $("#password").val().trim(); 
    (0 !== t.length || n) && (6 !== t.length ? $(".sign-up-verification-code .normal-input-error-area").html("Incorrect format").parent().addClass("normal-input-error-area-show") : 
    (function(){
        switch(location.pathname) {
            case '/sign_login.html':
                fnlogin({
                    username: $('#username').val(),
                    password: $('#password').val()
                })
                .then(function(resp){
                    switch (resp.msg) { 
                        case "Username is required！":
                            alert(resp.msg)
                            break;
                        case "Incorrect password！":
                            alert(resp.msg) 
                            break;
                            
                        default:
                            alert('Loading...')
                            console.log(
                                event.target,
                                event.target.innerHTML
                            );
                            if(event.target.innerHTML == 'Loading system modules'){
                                location.href = './sign_ipload.html';
                            }else{
                                location.href = './sign_list.html';
                            }
                            break;
                    }
                })
                .then(function(){})
                .catch(function(resp){
                    alert('Error!')
                })
                break;
            case '/sign_up.html':
                fnregist({
                    username: $('#username').val(),
                    password: $('#password').val()
                })
                .then(function(resp){
                    alert('Loading...')
                    location.href = './sign_list.html';
                })
                .then(function(){})
                .catch(function(resp){
                    alert('Error!')
                })
                break;
        
            default:
                break;
        }
    })())
}
function afterInviteSuccess() {
    "desktop" == ua.device.type ? location.href = "https://ones.ai/project/#/home": location.href = "sign_up_success.html"
}
function inviteAndQueryToProject(e) {
    if (isProduction ? (mixpanel.track("enter button click"), _hmt.push(["_trackEvent", "enter button click", "Button click"])) : console.log("enter button click"), checkInviteEmail(!0)) {
        var n = [];
        $(".invite-list").children(".invite-member-email").each(function() {
            var e = $(this).children("input").val().trim();
            0 !== e.length && n.push(e)
        }),
        n.length > 0 && shouldInvite ? (shouldInvite = !1, $.ajax({
            url: "api/project/team/" + window.teamUUID + "/invitations/add_batch",
            dataType: "json",
            type: "post",
            headers: {
                "ones-auth-token": window.userToken,
                "ones-user-id": window.userUUID
            },
            data: JSON.stringify({
                emails: n
            }),
            contentType: "application/json; charset=utf-8",
            success: function(n) {
                e && e(),
                isProduction ? (mixpanel.track("invite people"), _hmt.push(["_trackEvent", "invite people", "Effective number"])) : console.log("invite people"),
                afterInviteSuccess(),
                shouldInvite = !0,
                registable = !0
            },
            error: function(e) {
                shouldInvite = !0,
                toastError("。")
            }
        })) : 0 === n.length && afterInviteSuccess()
    }
}
function checkEmailCanUse(e, n) {
    $.ajax({
        url: "api/project/auth/check_email",
        dataType: "json",
        type: "post",
        data: JSON.stringify({
            email: e
        }),
        contentType: "application/json; charset=utf-8",
        success: function(e) {
            n && n()
        },
        error: function(e, n, t) {
            "621" == e.status ? $(".sign-up-email .normal-input-error-area").html("Email already registered").parent().addClass("normal-input-error-area-show") : toastError("服务器申请人数过多,请稍后再试。")
        }
    })
}
function signUp(e) {
    if (!$(".sign-up-step-3 .normal-button").hasClass("normal-button-disable")) {
        $(".sign-up-step-3 .normal-button").addClass("normal-button-disable");
        var n = $(".sign-up-email input").val().trim(),
        t = n.substr(0, n.indexOf("@")).substr(0, 16);
        $.ajax({
            url: "api/project/auth/create_team",
            dataType: "json",
            type: "post",
            data: JSON.stringify({
                name: t,
                team_name: $(".sign-up-company input").val().trim(),
                team_scale: $(".sign-up-team-scale-li-select").html(),
                industry: $("#industry").val(),
                email: n,
                phone: "+86" + $(".phone-number input").val().trim(),
                password: $(".sign-up-password input").val().trim(),
                phone_code: $(".sign-up-verification-code input").val().trim(),
                referrer: localStorage.getItem("referrer") || "",
                keyword: localStorage.getItem("keyword") || ""
            }),
            contentType: "application/json; charset=utf-8",
            success: function(n) {
                window.teamUUID = n.teams[0].uuid,
                window.userToken = n.user.token,
                window.userUUID = n.user.uuid,
                e && e(),
                isProduction ? (mixpanel.track("create team success"), _hmt.push(["_trackEvent", "create team success", "Effective number"])) : console.log("create team success")
            },
            error: function(e, n, t) {
                "621" == e.status ? toastError("Existing email address") : "600" == e.status ? toastError("Incorrect email address") : "622" == e.status ? toastError("") : toastError(""),
                $(".sign-up-step-3 .normal-button").removeClass("normal-button-disable")
            }
        })
    }
}
function getSignWindowWidth() {
    return document.documentElement.clientWidth < 800 ? document.documentElement.clientWidth: $(".sign-up-step-in_progress").outerWidth()
}
function goToStep(e) {
    nowStep = e;
    var n = getSignWindowWidth();
    $(".sign-up-step-main").addClass("sign-up-step-main-" + e),
    $(".sign-up-step-main .sign-up-step-" + e).addClass("sign-up-step-in_progress"),
    window.setTimeout(function() {
        $(".sign-up-step-main").css("left", -1 * n * (e - 1))
    },
    0),
    $(".sign-up-title .sign-up-step-in_progress").removeClass("sign-up-step-in_progress"),
    $(".sign-up-title .sign-up-step-" + e).addClass("sign-up-step-in_progress")
}
function countdownVerificationCode() {
    countDownTime--,
    $(".send-verification-code").addClass("sended-verification-code").html(countDownTime + " "),
    0 == countDownTime ? (countDownTime = 60, $(".send-verification-code").removeClass("sended-verification-code").html(" "), canSendVerificationCode = !0) : window.setTimeout(countdownVerificationCode, 1e3)
}
var argMap = Rtool.getArgs();
$(".sign-up-email input").val(argMap.signUpEmail),
$(".sign-up-email input").blur(function() {
    checkSingUpEmail(!1)
}),
$(".sign-up-password input").blur(function() {
    checkPassword(!1)
}).keyup(function(e) {
    13 === e.keyCode && $(".sign-up-step-2 .normal-button").click()
}).keydown(function(e) {}),
$(".phone-number input").blur(function() {
    checkMobilePhone(!1)
}),
$(".phone-number input").blur(function() {
    checkMobilePhone(!1)
}),
$(".sign-up-company input").blur(function() {
    checkCompanyName(!1)
}),
$(".team-subjection").click(function(e) {
    var n = $(this);
    $(".apply-select").children(".select-option").each(function(e, t) {
        n != $(this) && $(this).stop().slideUp("fast")
    }),
    $(this).children(".select-option").stop().slideToggle("fast"),
    e.stopPropagation()
}),
$(document).click(function(e) {
    $(".team-subjection").children(".select-option").slideUp("fast")
}),
$(".sign-up-team-scale").children(".sign-up-team-scale-li").click(function() {
    $(".sign-up-team-scale-li").removeClass("sign-up-team-scale-li-select"),
    $(this).addClass("sign-up-team-scale-li-select")
});
var registable = !0;
$(".sign-up-verification-code input").keyup(function(e) {
    $(".verification-code-success").removeClass("verification-code-success-show"),
    13 === e.keyCode && $(".sign-up-step-1 .normal-button").click()
}).keydown(function(e) {});
var shouldInvite = !0,
nowStep = 1;
$(window).resize(function() {
    var e = getSignWindowWidth();
    $(".sign-up-step-main").css("left", -1 * e * (nowStep - 1))
});
var canSendVerificationCode = !0,
countDownTime = 60;
$(".send-verification-code").click(function() {
    canSendVerificationCode && !checkMobilePhone(!0) && (isProduction ? (mixpanel.track("verify button click"), _hmt.push(["_trackEvent", "verify button click", "Button click"])) : console.log("verify button click"), $.ajax({
        url: "api/project/auth/verify_phone",
        dataType: "json",
        type: "post",
        data: JSON.stringify({
            phone: "+86" + $(".phone-number input").val().trim()
        }),
        contentType: "application/json; charset=utf-8",
        success: function(e) {
            isProduction ? (mixpanel.track("SMS verify"), _hmt.push(["_trackEvent", "SMS verify", "Effective number"])) : console.log("SMS verify"),
            canSendVerificationCode = !1,
            countdownVerificationCode()
        },
        error: function(e, n, t) {
            $(".verification-code-success").removeClass("verification-code-success-show");
            var i = "";
            i = 804 === e.status ? "。"
            toastError(i)
        }
    }))
}),
$(".sign-up-step-1 .normal-button").click(function( event) {
    checkMobilePhone(!0) || checkVerificationCodeAndRemoteCheck(function() {
        checkVerificationCode(!0) || goToStep(2)
    },
    !0 , event)
}),
$(".sign-up-step-2 .normal-button").click(function() {
    checkSingUpEmail(!0) || checkPassword(!0) || checkEmailCanUse($(".sign-up-email input").val().trim(),
    function() {
        isProduction ? (mixpanel.track("Personal information"), _hmt.push(["_trackEvent", "Personal information", "Effective number"])) : console.log("Personal information"),
        goToStep(3)
    })
}),
$(".sign-up-step-3 .normal-button").click(function() {
    checkCompanyName(!0) || signUp(function() {
        $(".sign-up-title-logo").addClass("sign-up-title-logo-hide"),
        goToStep(4)
    })
}),
$(".sign-up-step-4 .normal-button").click(function() {
    inviteAndQueryToProject()
});