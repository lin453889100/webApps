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
            if(resp.msg === 'Posted!'){
                $('#comment-text').val('');
                $('#comment-list').append($('<li>Me: '+ newComment +'</li>'))
            }else{
                alert('Error!')
            }
        })
        .then(function (resp) { })
        .catch(function (resp) {
            alert('Error!')
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
				'	<div class="price-characteristic-img"><img onclick="showVideo(\''+element.dir+'\');" class="poi" src="'+path+'/static/images/demo.jpg" width="160" height="180" data-src2x="'+path+'/static/images/mul_controlX2-fee0b503e9.png"></div>'+
				'	<div class="price-characteristic-info tc mt10"><b>'+ element.filename +'('+ element.mark +')</b>'+
				'		<div class="tj fix"><a class="dianzan l default-color" href="">Like&nbsp;(<span class="default-color">'+ element.klick +'</span>Liked)</a><a class="r default-color openGuestbook" href="javascript:void(0)">Comment</a></div>'+
				'	</div>'+
				'</li>';
		});
		$('#main-list').html(htmlString);

	})
	.then(function (resp) { })
	.catch(function (resp) {
		alert('Error!')
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
            if(resp.msg === 'Already Liked！'){
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