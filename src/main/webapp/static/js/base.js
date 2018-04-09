/**
 * js获取项目路径
 */
function getRootPath() {
    //获取当前网址，如： http://localhost:9527/zdss-web/login/login.do
    var curWwwPath = window.document.location.href;
    //console.log("当前网址：" + curWwwPath);

    //获取主机地址之后的目录，如：zdss-web/login/login.do
    var pathName = window.document.location.pathname;
    //console.log("当前路径：" + pathName);

    var pos = curWwwPath.indexOf(pathName);
    //console.log("路径位置：" + pos);

    //获取主机地址，如： http://localhost:9527
    var localhostPath = curWwwPath.substring(0, pos);
    //console.log("当前主机地址：" + localhostPath); 

    //获取带"/"的项目名，如：/zdss-web
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    console.log("当前项目名称：" + projectName);

    return projectName;
}

/**
 * 登陆接口
 * =========================================
 * @param {*Object} options 登陆用户名/登陆密码
 */
function fnlogin(options){
	var path = getRootPath();
    var options = Object.assign({
        username:'',
        password:''
    }, options)
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "post",
            //url: "http://118.25.100.119:8081/video/login",
            //url: path + "/login/in",
            data: options,
            success(response) {
                resolve(response)
            },
            error(response){
                reject(response)
            }
        });
    });
}


/**
 * 注册
 * ===============================
 * @param {Objec} options 账号与密码
 */
function fnregist(options){
    var options = Object.assign({
        username:'',
        password:''
    }, options)
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "get",
            //url: path + "/regist",
            data: options,
            success(response) {
                resolve(response)
            },
            error(response){
                reject(response)
            }
        });
    });
}



/**
 * 查询所有的视频列表
 * ==========================
 * @params {*option} options 
 */ 
function fnQueryAll(options){
	var path = getRootPath();
    var options = Object.assign({
        mark:'',
    }, options)
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "get",
            url: path + "/query/all",
            data: options,
            success(response) {
                resolve(response)
            },
            error(response){
                reject(response)
            }
        });
    });
}


/**
 * 上传视频接口 只能用post
 * ===========================
 * @param {*Object} options 
 */
function fnuploadOne(options){
    var options = Object.assign({
        username:'',
        password:''
    }, options)
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "post",
            //url: path + "/uploadOne",
            data: options,
            success(response) {
                resolve(response)
            },
            error(response){
                reject(response)
            }
        });
    });
}



/**
 * 点赞
 * ==============================
 * @param {*String} loginId 用户id
 * @param {*String} fileId 视频id
 * ==============================
 * @returns {"msg":"已经点赞！"}
 */
function fnClickZan(options){
	var path = getRootPath();
    var options = Object.assign({
        loginId:'',
        fileId:''
    }, options)
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "get",
            url: path + "/comment/zan",
            data: options,
            success(response) {
                resolve(response)
            },
            error(response){
                reject(response)
            }
        });
    });
}


/**
 * 添加留言
 * ===========================
 * @params loginId  用户id
 * @params fileId  视频id
 * @params message  留言内容
 */
function fnAddMessage(options){
	var path = getRootPath();
    var options = Object.assign({
        loginId :'',
        fileId  :'',
        message :''
    }, options)
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "get",
            url: path + "/comment/msg",
            data: options,
            success(response) {
                resolve(response)
            },
            error(response){
                reject(response)
            }
        });
    });
}