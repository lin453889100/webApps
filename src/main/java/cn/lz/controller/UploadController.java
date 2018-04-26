package cn.lz.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;

import cn.lz.service.UploadService;
import org.springframework.ui.Model;

@Controller
public class UploadController {

	@Autowired
	private UploadService uploadService;
	
	@RequestMapping("/toUpload")
	public String toUpload(){
		return "/sign_upload";
	}

	@RequestMapping(value = "/uploadOne", method = RequestMethod.POST)
	//@ResponseBody
	public String uploadOne(HttpServletRequest request,@RequestParam(value = "file", required = false) MultipartFile file,
			@RequestParam String loginId,@RequestParam String tag,Model model) {
		System.out.println(loginId);
		//TODO <form action="/uploadOne" method="post" enctype="multipart/form-data">
		// MultipartFile是对当前上传的文件的封装，当要同时上传多个文件时，可以给定多个MultipartFile参数(数组)
		JSONObject jsonObject = new JSONObject();
		if (!file.isEmpty()) {
			String type = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));// 取文件格式后缀名
			String real = file.getOriginalFilename().substring(0,file.getOriginalFilename().indexOf("."));//获取文件名称
			String filename = real + "-" + System.currentTimeMillis() + type;// 获取文件名称+当前时间戳作为文件名
			String path = request.getSession().getServletContext().getRealPath("/static/upload/");// 存放在项目下
                        String path1 = request.getContextPath() + "/static/upload/";
			
                        System.out.println(path);
			File destFile = new File(path);
			if (!destFile.exists()) {  
				destFile.mkdirs();  
                        } 
			path = path + filename;
			try {
				uploadService.addRecord(filename, path1 + filename,loginId,tag);
				// FileUtils.copyInputStreamToFile()这个方法里对IO进行了自动操作，不需要额外的再去关闭IO流
				FileUtils.copyInputStreamToFile(file.getInputStream(), new File(path));// 复制临时文件到指定目录下
				//jsonObject.put("msg", "Upload Sucessful！");
                                model.addAttribute("msg", "Upload Sucessful！");
			} catch (IOException e) {
				//jsonObject.put();
                                model.addAttribute("msg", "Upload failed！");
				e.printStackTrace();
			}
		} else {
                    model.addAttribute("msg", "Empty file！");
		    //jsonObject.put("msg", "Empty file！");
		}
		return "redirect:/login/toList";
	}

	@RequestMapping(value = "/uploadMore", method = RequestMethod.POST)
	public void uploadMore(@RequestParam(value = "file", required = false) MultipartFile[] files) {
		if (files.length > 0) {

		}
	}
}
