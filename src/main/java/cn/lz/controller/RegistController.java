package cn.lz.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

import cn.lz.service.LoginService;
import cn.lz.service.RegistService;
import cn.lz.utils.MD5Util;

@Controller
public class RegistController {

	@Autowired
	private RegistService registService;
	
	@Autowired
	private LoginService loginService;
	
	@RequestMapping("/signUp")
	public String signUp(){
		
		return "/sign_up";
	}
	
	@RequestMapping("/regist")
	@ResponseBody
	public JSONObject addUser(HttpServletRequest request){
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		JSONObject jsonObject = new JSONObject();
		if(StringUtils.isNotBlank(username)){
			List<Map<String,Object>> queryUser = loginService.queryUser(username);
			if(queryUser.size() > 0){
				jsonObject.put("msg", "User already existed！");
			} else {
				if(StringUtils.isNotBlank(password)){
					try {
						registService.addUser(username, MD5Util.MD5(password));
						jsonObject.put("msg", "1");
					} catch (Exception e) {
						jsonObject.put("msg", "Error！");
						e.printStackTrace();
					}
				} else {
					jsonObject.put("msg", "Password is required！");
				}
			}
		} else {
			jsonObject.put("msg", "Username is required！");
		}
		return jsonObject;
	}
	
}
