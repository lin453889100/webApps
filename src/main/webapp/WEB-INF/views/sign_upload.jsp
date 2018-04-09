<%@page language="java" import="java.util.*" pageEncoding="utf-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <c:set var="root" value="${pageContext.request.contextPath}"/>
    <title>Upload Video</title>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">

    <link rel="stylesheet" href="${root }/static/css/base.css">
    <script src="${root }/static/js/base.js"></script>
    <style>
        .avatar-uploader{
            width: 600px;
            margin: 100px auto 0 auto!important;
        }
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload ,
        .avatar-uploader .el-upload-dragger{
            width: 100%;
        }

        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }

        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }

        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
    </style>
    
<style>
        .el-select .el-input {
          width: 130px;
        }
        .input-with-select .el-input-group__prepend {
          background-color: #fff;
        }
      </style>
</head>

<body>
    <div id="app">
        <form action="${root }/uploadOne" method="POST" enctype="multipart/form-data">
            <h1 class="tc">Upload</h1>
            <el-upload
                class="avatar-uploader"
                drag
                action="https://jsonplaceholder.typicode.com/"
                ref="upload"
                accept='video/*'
                show-file-list
                name='file'
                :auto-upload="false"
                :limit='1'
                :file-list="fileList"
                :on-exceed="handleExceed"
                :on-preview="handlePictureCardPreview"
                :before-upload="beforeAvatarUpload"
                :on-preview="handlePreview"
                :on-change="handleChange"
                :on-remove="handleRemove">
                <i class="el-icon-upload"></i>
                
                <!-- class="upload-demo"
                list-type="picture-card"
                drag
                action="https://jsonplaceholder.typicode.com/"
                multiple> -->
                <div slot="tip" class="el-upload__tip">Only one <b>video</b> allowed，max 100MB</div>
                <input type="hidden" name="loginId" value="${sessionScope.loginId }">
            </el-upload>

            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>

            <el-row :gutter="20"  class="avatar-uploader" style="margin-top: 15px;">
                <el-col :span="16">
                    <el-input placeholder="Please Tag the video" name="tag" v-model="input4"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-button class="" @click='submitUpload' type="primary">Submit</el-button><input id="submitBtn" class="vh kanbudao" type="submit" value="Submit">
                    <el-button class="" onclick="history.back()" type="info">Back</el-button>
                </el-col>
            </el-row>
        </form>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        var oPage = new Vue({
            el: '#app',
            data() {
                return {
                    dialogImageUrl: '',
                    dialogVisible: false,
                    input4 : '',
                    limit: 1 ,
                    fileList : []
                };
            },
            methods: {
                handleAvatarSuccess(res, file) {
                    this.imageUrl = URL.createObjectURL(file.raw);
                },
                beforeAvatarUpload(file) {
                    const isLt2M = file.size / 1024 / 1024 < 100;
                    if (!isLt2M) {
                        this.$message.error('Please upload the video that is less than 100MB!');
                    }
                    return isLt2M;
                },
                handleRemove(file, fileList) {
                    console.log(file, fileList);
                },
                handlePictureCardPreview(file) {
                    this.dialogImageUrl = file.url;
                    this.dialogVisible = true;
                },
                // 超出数目则触发
                handleExceed(files, fileList){
                    this.$message.warning(`Upload one file each time，you've selected ${files.length} file，total ${files.length + fileList.length} file`);
                },
                // 上传到服务器
                submitUpload(){
                    // this.$refs.upload.submit();
                    document.getElementById('submitBtn').click();
                },
                // 已经上传的文件, 可以从服务器拿回数据
                handlePreview(file) {
                    console.log(file);
                },
                // 文件产生变化
                handleChange(file, fileList) {
                    this.fileList = fileList.slice(-3);
                }
            }
        })
    </script>
</body>

</html>