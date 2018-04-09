$(function(){
	/**
	 * js获取项目路径
	 */
	function getRootPath() {
	    //获取主机地址之后的目录，如：zdss-web/login/login.do
	    var pathName = window.document.location.pathname;
	    //获取带"/"的项目名，如：/zdss-web
	    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	    return projectName;
	}
	function getLoginId(){ 
	   　　var loginId = window.sessionStorage.getItem("loginId"); 
	   　　return loginId;
	} 
    var fileId = '';
    
    // 添加新的评论
    $(document).on('click', '#sendComment', function(event){
    	var $loginId = getLoginId();
        var newComment = $('#comment-text').val();
        let $this = $(this);
        fnAddMessage({
            loginId :$loginId,
            fileId  : fileId,
            message :newComment
        })
        .then((resp) => {
            if(resp.msg === '留言成功!'){
                $('#comment-text').val('');
                $('#comment-list').append($('<li>我: '+ newComment +'</li>'))
            }else{
                alert('操作失败, 请联系管理员!')
            }
        })
        .then(function (resp) { })
        .catch(function (resp) {
            alert('操作失败, 请联系管理员!')
        })
    })
    

    // 隐藏评论
    $(document).on('click', '#closeComment', function(event){
        $('#commentBox').hide()
    })

    
    // 输入列表
	fnQueryAll()
	.then(function (resp) {
		var resp = JSON.parse(resp);
		var htmlString = '';
		var path = getRootPath();
		resp.forEach(function(element, index) {
			htmlString +=
				'<li data-message='+ JSON.stringify(element.message) +' data-uploaduser='+ element.uploadUser +' data-fileId='+ element.fileId +' class="price-not-margin-right">'+
				'	<div class="price-characteristic-img"><img onclick="" class="poi" src="'+path+'/static/images/demo.jpg" width="160" height="180" data-src2x="'+path+'/static/images/mul_controlX2-fee0b503e9.png"></div>'+
				'	<div class="price-characteristic-info tc mt10"><b>'+ element.filename +'('+ element.mark +')</b>'+
				'		<div class="tj fix"><a class="dianzan l default-color" href="">点赞&nbsp;(<span class="default-color">'+ element.klick +'</span>人赞过)</a><a class="r default-color openGuestbook" href="javascript:void(0)">留言</a></div>'+
				'	</div>'+
				'</li>';
		});
		$('#main-list').html(htmlString);

	})
	.then(function (resp) { })
	.catch(function (resp) {
		alert('操作失败, 请联系管理员!')
	})


	// 点赞
	$(document).on('click', '.dianzan', function (event) {
		var $loginId = getLoginId();
        let $this = $(this);
        fileId = $this.parents('li').attr('data-fileId');
		fnClickZan({
			loginId: $loginId,
			fileId: fileId
		})
		.then(function (resp) {
            if(resp.msg === '已经点赞！'){
                var count = +$this.find('span').text();
                $this.find('span').text(++count)
            }else{
                alert(resp.msg)
            }
			// success
		}).then(function (resp) {
			// 不论 对错
		}).catch(function (resp) {
			//错误
        })
        return false;
    });
    

    // 打开评论
    $(document).on('click', '.openGuestbook', function(event){
        let commentBoxHtmls = JSON.parse($(this).parents('li').attr('data-message'));
        let commentBoxHtml = '';
        let $this = $(this);
        
        for (const index in commentBoxHtmls) {
            if (commentBoxHtmls.hasOwnProperty(index)) {
                var element = commentBoxHtmls[index];
                commentBoxHtml += '<li>'+ element.username +' :'+ element.message +'</li>';
            }
        }
        
        fileId = $this.parents('li').attr('data-fileId');
        $('#commentBox').show();
        $('#comment-list').html(commentBoxHtml);
    })
})